import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            passwordAgain: "",
        },
    });
    
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordAgain, setShowPasswordAgain] = useState(false);
    const [selectedRole, setSelectedRole] = useState("");


    // const submitForm = (data) => {
    //     const newData = {
    //         name: data.name,
    //         email: data.email,
    //         password: data.password,
    //     };
    // };
    
    return (
        <form onSubmit={handleSubmit()} className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-4xl font-bold">Welcome</h1>
                <p className="text-sm text-muted-foreground text-balance">
                    Enter your information to signup to your account
                </p>
            </div>

            {/* Username */}
            <div className="grid gap-1">
                <Label htmlFor="name">Username</Label>
                <Input
                    id="name"
                    type="text"
                    placeholder="Enter your username"
                    {...register("name", { required: "Username is required" })}
                />
                <p className="text-sm text-red-500">{errors.name?.message}</p>
            </div>

            {/* Email */}
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="text"
                    placeholder="Enter your email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email format",
                        },
                    })}
                />
                <p className="text-sm text-red-500">{errors.email?.message}</p>
            </div>

            {/* Password */}
            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                    <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        className="pr-10"
                        placeholder="Enter your password"
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
                        {showPassword ? <EyeOffIcon size={15} /> : <EyeIcon size={15} />}
                    </button>
                </div>
                <p className="text-sm text-red-500">{errors.password?.message}</p>
            </div>

            {/* Confirm Password */}
            <div className="grid gap-2">
                <Label htmlFor="passwordAgain">Confirm Password</Label>
                <div className="relative">
                    <Input
                        id="passwordAgain"
                        type={showPasswordAgain ? "text" : "password"}
                        className="pr-10"
                        placeholder="Confirm your password"
                        {...register("passwordAgain", {
                            required: "Please confirm your password",
                            validate: (value) =>
                                value === watch("password") || "Passwords do not match",
                        })}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPasswordAgain((prev) => !prev)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                        tabIndex={-1}
                    >
                        {showPasswordAgain ? <EyeOffIcon size={15} /> : <EyeIcon size={15} />}
                    </button>
                </div>
                <p className="text-sm text-red-500">{errors.passwordAgain?.message}</p>
            </div>
            {/* Role */}
            <div className="grid gap-2">
            <Label htmlFor="role">Select a Role</Label>
            <Select onValueChange={(value) => setSelectedRole(value)}>
                <SelectTrigger id="role" className="w-full">
                <SelectValue placeholder="Select a Role" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="doctor">Doctor</SelectItem>
                <SelectItem value="patient">Patient</SelectItem>
                </SelectContent>
            </Select>
            </div>

            {/* Department - โชว์เฉพาะเมื่อเลือก role เป็น doctor */}
            {selectedRole === "doctor" && (
            <div className="grid gap-2">
                <Label htmlFor="department">Select a Department</Label>
                <Select>
                <SelectTrigger id="department" className="w-full">
                    <SelectValue placeholder="Select a Department" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="internal-medicine">Internal Medicine</SelectItem>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="pulmonology">Pulmonology</SelectItem>
                    <SelectItem value="gastroenterology">Gastroenterology</SelectItem>
                    <SelectItem value="endocrinology">Endocrinology</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="general-surgery">General Surgery</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="neurosurgery">Neurosurgery</SelectItem>
                    <SelectItem value="plastic-surgery">Plastic Surgery</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="obstetrics-gynecology">Obstetrics & Gynecology</SelectItem>
                    <SelectItem value="psychiatry">Psychiatry</SelectItem>
                    <SelectItem value="dermatology">Dermatology</SelectItem>
                    <SelectItem value="ent-otolaryngology">ENT (Otolaryngology)</SelectItem>
                    <SelectItem value="ophthalmology">Ophthalmology</SelectItem>
                    <SelectItem value="dentistry">Dentistry</SelectItem>
                    <SelectItem value="emergency-medicine">Emergency Medicine</SelectItem>
                    <SelectItem value="rehabilitation-medicine">Rehabilitation Medicine</SelectItem>
                    <SelectItem value="radiology">Radiology</SelectItem>
                    <SelectItem value="pathology">Pathology</SelectItem>
                    <SelectItem value="urology">Urology</SelectItem>
                    <SelectItem value="nephrology">Nephrology</SelectItem>
                    <SelectItem value="allergy-immunology">Allergy & Immunology</SelectItem>
                    <SelectItem value="infectious-disease">Infectious Disease</SelectItem>
                    <SelectItem value="occupational-medicine">Occupational Medicine</SelectItem>
                    <SelectItem value="geriatrics">Geriatrics</SelectItem>
                </SelectContent>
                </Select>
            </div>
            )}

            {/* Submit Button */}
            <Button
                type="submit"
                className="w-full"
            >
                Sign Up
            </Button>

            {/* Redirect to Login */}
            <div className="text-center text-sm">
                Already have an account?{" "}
                <span
                    className="cursor-pointer text-purple-700 underline underline-offset-4"
                    onClick={() => navigate("/system/sign-in")}
                >
          Sign in
        </span>
            </div>
        </form>
    );
};

export default SignUpForm;