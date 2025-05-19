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
  const { setTheme } = useTheme();

  const [active, setActive] = useState(location.pathname);
  const isAuthenticated = false;
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleLinkClick = (item) => {
    if (item.id === "footer") {
      setActive("/footer");
      ScrollToBottom();
    } else {
      setActive(location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div className="container mx-auto md:text-sm">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="text-4xl font-bold"
              onClick={() => setActive("/")}
            >
              <span className="text-blue-600">D</span>
              <span className="text-white">ocOnTime</span>
            </Link>
          </motion.div>

          <div className="flex space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="hidden rounded-full md:flex"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="hidden md:block">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to={`user/auth/dashboard/`}>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                </Link>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
