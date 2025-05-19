import { useState, useEffect } from "react";
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
import { ScrollToBottom } from "@/hooks/use-scrollto";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [active, setActive] = useState(location.pathname);
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const handleLogout = () => {
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
              className="text-2xl"
              onClick={() => setActive("/")}
            >
              <span className="text-sky-600">D</span>
              <span>ocOnTime</span>
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

            <Button
                className="hidden py-2 px-3 md:flex"
                onClick={() => navigate("/system/log-in")}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
