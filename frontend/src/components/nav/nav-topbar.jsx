import { useState, useEffect } from "react";
import styles from "@/style";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { CircleUser, LogOut, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/theme-provider";
import { ScrollToBottom } from "@/hooks/use-scrollto";
// import { logout, fetchUser } from "@/reducer/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [active, setActive] = useState(location.pathname);
  const isAuthenticated = true;
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav>
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between px-5  gap-35">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="lg:text-4xl text-2xl"
              onClick={() => setActive("/")}
            >
              <span className="text-cyan-500 font-bold">D</span>
              <span className="">ocOnTime</span>
            </Link>
          </motion.div>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full "
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to={`user/auth/dashboard`}>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                </Link>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              className={` py-2 px-3 dark:text-white`}
              onClick={() => navigate("/system/log-in")}
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
