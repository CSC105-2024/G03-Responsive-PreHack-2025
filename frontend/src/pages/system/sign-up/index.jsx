import { useState } from "react";
import { Eye, EyeOff, SquareArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import doc from "../../../assets/doc.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
const RegisterPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left side: Form */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* Branding */}
        <div className="flex justify-center gap-2 md:justify-start">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-black"
          >
            <span>
              <span className="text-blue-600">D</span>ocOnTime
            </span>
          </Link>
        </div>

        {/* Form content */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xl space-y-6">
            <div className="text-center mb-8 w-full">
              <h2 className="text-2xl lg:text-4xl font-bold text-black">
                Welcome!
              </h2>
              <p className="text-lg text-black mt-2">Create Your Account</p>
            </div>

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-base font-medium text-gray-700"
              >
                Name
              </label>

              <Input
                type="text"
                id="name"
                placeholder="Your Name"
                className="mt-1 block w-full rounded-md text-white bg-gray-300 focus:outline-none text-base px-4 py-3"
              />
            </div>

            {/* Surname */}
            <div>
              <label
                htmlFor="surname"
                className="block text-base font-medium text-gray-700"
              >
                Surname
              </label>
              <Input
                type="text"
                id="surname"
                placeholder="Your Surname"
                className="mt-1 block w-full rounded-md text-white bg-gray-300 focus:outline-none text-base px-4 py-3"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                placeholder="Your Email"
                className="mt-1 block w-full rounded-md text-white bg-gray-300 focus:outline-none text-base px-4 py-3"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-base font-medium text-gray-700"
              >
                Password
              </label>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Your Password"
                className="mt-1 block w-full rounded-md text-white bg-gray-300 focus:outline-none text-base px-4 py-3 pr-10"
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer mt-7"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="text-black" />
                ) : (
                  <Eye className="text-black" />
                )}
              </div>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label
                htmlFor="confirm-password"
                className="block text-base font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <Input
                type={showConfirm ? "text" : "password"}
                id="confirm-password"
                placeholder="Confirm Your Password"
                className="mt-1 block w-full rounded-md text-white bg-gray-300 focus:outline-none text-base px-4 py-3 pr-10"
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer mt-7"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? (
                  <EyeOff className="text-black" />
                ) : (
                  <Eye className="text-black" />
                )}
              </div>
            </div>

            {/* Role and Department */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="role"
                  className="block text-base font-medium text-gray-700"
                >
                  Select a Role
                </label>
                <Select>
                  <SelectTrigger className="bg-gray-300 text-white border-0 focus:ring-1 focus:ring-blue-500 text-base px-3 py-3 h-auto w-full">
                    <SelectValue placeholder="Select a Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="doctor">Doctor</SelectItem>
                    <SelectItem value="patient">Patient</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor="department"
                  className="block text-base font-medium text-gray-700"
                >
                  Select a Department
                </label>
                <Select>
                  <SelectTrigger className="bg-gray-300 text-white border-0 focus:ring-1 focus:ring-blue-500 text-base px-3 py-3 h-auto w-full ">
                    <SelectValue placeholder="Select a Department" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    <SelectItem value="internal-medicine">
                      Internal Medicine
                    </SelectItem>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="pulmonology">Pulmonology</SelectItem>
                    <SelectItem value="gastroenterology">
                      Gastroenterology
                    </SelectItem>
                    <SelectItem value="endocrinology">Endocrinology</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="general-surgery">
                      General Surgery
                    </SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="neurosurgery">Neurosurgery</SelectItem>
                    <SelectItem value="plastic-surgery">
                      Plastic Surgery
                    </SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="obstetrics-gynecology">
                      Obstetrics & Gynecology
                    </SelectItem>
                    <SelectItem value="psychiatry">Psychiatry</SelectItem>
                    <SelectItem value="dermatology">Dermatology</SelectItem>
                    <SelectItem value="ent">ENT (Otolaryngology)</SelectItem>
                    <SelectItem value="ophthalmology">Ophthalmology</SelectItem>
                    <SelectItem value="dentistry">Dentistry</SelectItem>
                    <SelectItem value="emergency-medicine">
                      Emergency Medicine
                    </SelectItem>
                    <SelectItem value="rehabilitation-medicine">
                      Rehabilitation Medicine
                    </SelectItem>
                    <SelectItem value="radiology">Radiology</SelectItem>
                    <SelectItem value="pathology">Pathology</SelectItem>
                    <SelectItem value="urology">Urology</SelectItem>
                    <SelectItem value="nephrology">Nephrology</SelectItem>
                    <SelectItem value="allergy-immunology">
                      Allergy & Immunology
                    </SelectItem>
                    <SelectItem value="infectious-disease">
                      Infectious Disease
                    </SelectItem>
                    <SelectItem value="occupational-medicine">
                      Occupational Medicine
                    </SelectItem>
                    <SelectItem value="geriatrics">Geriatrics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Sign Up Button */}
            <div className="mt-10 w-full flex justify-center">
              <button
                type="submit"
                className="w-auto py-3 px-16 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none"
              >
                Sign Up
              </button>
            </div>

            {/* Sign In link */}
            <p className="mt-0 mb-6 text-center text-sm text-black">
              Already have an account?{" "}
              <a href="#" className="font-medium text-blue-500 hover:underline">
                Sign in here
              </a>
            </p>
          </div>
        </div>

        {/* Back Button */}
        <SquareArrowLeft
          className="size-6 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Right side: Background Image */}
      <div className="relative bg-muted lg:block hidden">
        <img
          src={doc}
          alt="Doctor background"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Placeholder text color */}
      <style>{`input::placeholder { color: white; opacity: 1; }`}</style>
    </div>
  );
};

export default RegisterPage;
