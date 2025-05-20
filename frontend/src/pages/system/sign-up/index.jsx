import { useState } from "react";
import { Eye, EyeOff, SquareArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import doc from "../../../assets/doc.png";

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
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-black">
          <span>
          <span className="text-blue-600">D</span>ocOnTime
          </span>
          </Link>
        </div>

        {/* Form content */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xl space-y-6">
            <div className="text-center mb-8 w-full">
              <h2 className="text-2xl lg:text-4xl font-bold text-black">Welcome!</h2>
              <p className="text-lg text-black mt-2">Create Your Account</p>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-base font-medium text-gray-700">Name</label>
              <input type="text" id="name" placeholder="Your Name" className="mt-1 block w-full rounded-md text-white bg-gray-300 focus:outline-none text-base px-4 py-3" />
            </div>

            {/* Surname */}
            <div>
              <label htmlFor="surname" className="block text-base font-medium text-gray-700">Surname</label>
              <input type="text" id="surname" placeholder="Your Surname" className="mt-1 block w-full rounded-md text-white bg-gray-300 focus:outline-none text-base px-4 py-3" />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-base font-medium text-gray-700">Email</label>
              <input type="email" id="email" placeholder="Your Email" className="mt-1 block w-full rounded-md text-white bg-gray-300 focus:outline-none text-base px-4 py-3" />
            </div>

            {/* Password */}
            <div className="relative">
              <label htmlFor="password" className="block text-base font-medium text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Your Password"
                className="mt-1 block w-full rounded-md text-white bg-gray-300 focus:outline-none text-base px-4 py-3 pr-10"
              />
              <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer mt-7" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff className="text-black" /> : <Eye className="text-black" />}
              </div>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label htmlFor="confirm-password" className="block text-base font-medium text-gray-700">Confirm Password</label>
              <input
                type={showConfirm ? "text" : "password"}
                id="confirm-password"
                placeholder="Confirm Your Password"
                className="mt-1 block w-full rounded-md text-white bg-gray-300 focus:outline-none text-base px-4 py-3 pr-10"
              />
              <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer mt-7" onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? <EyeOff className="text-black" /> : <Eye className="text-black" />}
              </div>
            </div>

            {/* Role and Department */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="role" className="block text-base font-medium text-gray-700">Select a Role</label>
                <select id="role" className="mt-1 block w-full rounded-md text-white bg-gray-300 border  focus:outline-none text-base px-4 py-3">
                  <option>Doctor</option>
                  <option>Patient</option>
                </select>
              </div>

              <div>
                <label htmlFor="department" className="block text-base font-medium text-gray-700">Select a Department</label>
                <select id="department" className="mt-1 block w-full rounded-md text-white bg-gray-300 border  focus:outline-none text-base px-4 py-3">
                  <option>Select a Department</option>
                      <option>Internal Medicine</option>
                      <option>Cardiology</option>
                      <option>Pulmonology</option>
                      <option>Gastroenterology</option>
                      <option>Endocrinology</option>
                      <option>Neurology</option>
                      <option>General Surgery</option>
                      <option>Orthopedics</option>
                      <option>Neurosurgery</option>
                      <option>Plastic Surgery</option>
                      <option>Pediatrics</option>
                      <option>Obstetrics & Gynecology</option>
                      <option>Psychiatry</option>
                      <option>Dermatology</option>
                      <option>ENT (Otolaryngology)</option>
                      <option>Ophthalmology</option>
                      <option>Dentistry</option>
                      <option>Emergency Medicine</option>
                      <option>Rehabilitation Medicine</option>
                      <option>Radiology</option>
                      <option>Pathology</option>
                      <option>Urology</option>
                      <option>Nephrology</option>
                      <option>Allergy & Immunology</option>
                      <option>Infectious Disease</option>
                      <option>Occupational Medicine</option>
                      <option>Geriatrics</option>

                  {/* เพิ่มแผนกอื่น ๆ ตามต้องการ */}
                </select>
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
        <SquareArrowLeft className="size-6 cursor-pointer" onClick={() => navigate("/")} />
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
