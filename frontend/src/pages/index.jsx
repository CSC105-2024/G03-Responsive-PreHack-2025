import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import doc from '../assets/doc.png';

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen text-base lg:text-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-300 to-blue-400 py-9 px-8 text-white w-full flex items-center ">
        <h1 className="text-3xl font-semibold">
          <span className="text-blue-500 font-bold">D</span>oc
          <span className="font-bold">On</span>Time
        </h1>
      </div>

      {/* Form & Image */}
      <div className="flex flex-col lg:flex-row justify-center items-start mt-10 px-6 lg:px-20 gap-12">
        {/* Left side - Form */}
        <div className="w-full lg:w-1/2 max-w-xl space-y-6">
          <div className="text-center mb-8 w-full">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-500">Welcome!</h2>
            <p className="text-lg lg:text-xl text-blue-500 mt-2">Create Your Account</p>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-base font-medium text-gray-700">Name</label>
            <input type="text" id="name" placeholder="Your Name" className="mt-1 block w-full rounded-md shadow-sm text-white bg-blue-400 focus:outline-none text-base px-4 py-3" />
          </div>

          {/* Surname */}
          <div>
            <label htmlFor="surname" className="block text-base font-medium text-gray-700">Surname</label>
            <input type="text" id="surname" placeholder="Your Surname" className="mt-1 block w-full rounded-md shadow-sm text-white bg-blue-400 focus:outline-none text-base px-4 py-3" />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700">Email</label>
            <input type="email" id="email" placeholder="Your Email" className="mt-1 block w-full rounded-md shadow-sm text-white bg-blue-400 focus:outline-none text-base px-4 py-3" />
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="block text-base font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Your Password"
              className="mt-1 block w-full rounded-md shadow-sm text-white bg-blue-400 focus:outline-none text-base px-4 py-3 pr-10"
            />
            <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer mt-7" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff className="text-white" /> : <Eye className="text-white" />}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label htmlFor="confirm-password" className="block text-base font-medium text-gray-700">Confirm Password</label>
            <input
              type={showConfirm ? 'text' : 'password'}
              id="confirm-password"
              placeholder="Confirm Your Password"
              className="mt-1 block w-full rounded-md shadow-sm text-white bg-blue-400 focus:outline-none text-base px-4 py-3 pr-10"
            />
            <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer mt-7" onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <EyeOff className="text-white" /> : <Eye className="text-white" />}
            </div>
          </div>

          {/* Selects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="role" className="block text-base font-medium text-gray-700">Select a Role</label>
              <div className="mt-1 relative">
                <select
                  id="role"
                  className="appearance-none block w-full rounded-md shadow-sm text-white bg-blue-400 border border-blue-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base px-4 py-3 pr-8"
                >
                  <option>Doctor</option>
                  <option>Patient</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none px-2">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="department" className="block text-base font-medium text-gray-700">Select a Department</label>
              <div className="mt-1 relative">
                <select
                  id="department"
                  className="appearance-none block w-full rounded-md shadow-sm text-white bg-blue-400 border border-blue-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base px-4 py-3 pr-8"
                >
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
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none px-2">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Sign Up Button */}
          <div className="mt-10 w-full flex justify-center">
            <button
              type="submit"
              className="w-auto py-3 px-16 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>

          {/* Already have an account? */}
          <p className="mt-0 mb-10 text-center text-sm text-blue-400">
            Already have an account?{' '}
            <a href="#" className="font-medium text-blue-500 hover:underline">
              Sign in here
            </a>
          </p>
        </div>

        {/* Right side - Image */}
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center mt-16">
          <img
            src={doc}
            alt="Doctor"
            className="w-auto h-[calc(100vh-100px)] max-h-[90vh] object-contain"
          />
        </div>
      </div>

      <style>{`
        input::placeholder { color: white; opacity: 1; }
      `}</style>
    </div>
  );
};

export default Index;
