import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {useAuth} from "@/contexts/auth-context.jsx";

const SignUpForm = () => {
    const [isDoctor, setDoctor] = useState(false);
    const [role, setRole] = useState("");
    const [department, setDepartment] = useState("");
    const { signUpUser } = useAuth()
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            password: "",
            passwordAgain: "",
        },
    });
    
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordAgain, setShowPasswordAgain] = useState(false);

    const submitForm = async (data) => {
        const newData = {
            username: data.name,
            surname: data.surname,
            email: data.email,
            password: data.password,
            department: department,
            role: role,
        };
        await signUpUser(newData)
    };
    
    return (
        <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-5">
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-4xl font-bold">Welcome</h1>
                <p className="text-sm text-muted-foreground text-balance">
                    Enter your information to signup to your account
                </p>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Username"
                        {...register("name", { required: "Username is required" })}
                    />
                    <p className="text-sm text-red-500 mt-2">{errors.name?.message}</p>
                </div>

                <div>
                    <Input
                        id="surname"
                        type="text"
                        placeholder="Surname"
                        {...register("surname", { required: "Surname is required" })}
                    />
                    <p className="text-sm text-red-500 mt-2">{errors.surname?.message}</p>
                </div>
            </div>

            {/* Email */}
            <div className="grid gap-2">
                <Input
                    id="email"
                    type="text"
                    placeholder="m@example.com"
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
                <div className="relative">
                    <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="pr-10"
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
                <div className="relative">
                    <Input
                        id="passwordAgain"
                        type={showPasswordAgain ? "text" : "password"}
                        placeholder="Password confirm"
                        className="pr-10"
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

            <Select value={role} onValueChange={(value) => {
                setRole(value)
                setDoctor(value === "DOCTOR")
            }}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Role</SelectLabel>
                        <SelectItem value="DOCTOR">Doctor</SelectItem>
                        <SelectItem value="PATIENT">Patient</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            {isDoctor && (
                <Select value={department} onValueChange={setDepartment}>
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
            )}

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