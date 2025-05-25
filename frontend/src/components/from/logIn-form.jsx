import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useAuth } from "@/contexts/auth-context.jsx";

const LogInForm = () => {
    const { signInUser, error } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
    });
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    
    const submitForm = async (data) => {
        await signInUser(data);
    };
    
    return (
        <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-4xl font-bold">Welcome Back</h1>
                <p className="text-sm text-muted-foreground text-balance">
                    Enter your email below to login to your account
                </p>
            </div>

            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Input
                        id="username"
                        type="text"
                        placeholder="username"
                        {...register("username", {
                            required: "Username is required",
                            minLength: {
                                value: 3,
                                message: "Username must be at least 3 characters",
                            },
                        })}
                    />
                    {errors.username && (
                        <p className="text-sm text-red-500">{errors.username.message}</p>
                    )}
                </div>
                
                <div className="grid gap-2">
                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            className="pr-10"
                            placeholder="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters",
                                },
                            })}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                            tabIndex={-1}
                        >
                            {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="text-sm text-red-500">{errors.password.message}</p>
                    )}

                    <span
                        className="ml-auto text-sm underline underline-offset-4 text-purple-700 hover:underline cursor-pointer"
                        onClick={() => navigate("/user/unauth/forgetpassword")}
                    >
            Forgot your password?
          </span>
                </div>
                
                <Button
                    type="submit"
                    className="w-full hover:opacity-90 text-white cursor-pointer"
                >
                    Sign In
                </Button>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}
            
            <div className="text-center text-sm cursor-pointer">
                Don&apos;t have an account?{" "}
                <span
                    className="text-purple-700 underline underline-offset-4"
                    onClick={() => navigate("/system/sign-up")}
                >
          Sign up
        </span>
            </div>
        </form>
    );
};

export default LogInForm;
