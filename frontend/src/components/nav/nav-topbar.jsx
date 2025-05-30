import { Separator } from "@/components/ui/separator"
import { Link, useNavigate } from "react-router-dom";
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
import { CircleUser, LogOut } from "lucide-react";
import {useAuth} from "@/contexts/auth-context.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth, user, signOutUser, loading } = useAuth();
  const handleLogout = async () => {
    await signOutUser()
    navigate("/");
  };

  return (
      <nav
          className="fixed  w-full top-0 z-16 backdrop-blur-lg md:py-3 flex items-center justify-between px-16 py-3
         isolate bg-white/20 shadow-lg ring-1 ring-black/5"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
              to="/"
              className="text-xl"
              onClick={() => navigate("/")}
          >
            <span className="text-cyan-500 font-bold">D</span>
            <span>ocOnTime</span>
          </Link>
        </motion.div>
        {!loading && isAuth ? (
            <div className="flex items-center space-x-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                      variant="secondary"
                      className="rounded-full "
                  >
                    <CircleUser className="h-5 w-5" />
                    <Separator orientation="vertical" />
                    <span className="text-sm">{user?.[0]?.username}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
        ) : (
            <Button
                className="py-2 px-3 dark:text-white"
                onClick={() => navigate("/system/sign-in")}
            >
              Sign In
            </Button>
        )}
      </nav>
  );
};

export default Navbar;