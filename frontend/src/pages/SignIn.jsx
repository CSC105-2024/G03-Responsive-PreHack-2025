//import React, { useState } from 'react';

const SignIn = () => {
    
    return (
        <div className="bg-gray-100 min-h-screen text-base lg:text-lg">
            <div className="bg-gradient-to-r from-blue-300 to-blue-400 py-9 px-8 text-white w-full flex items-center ">
                <h1 className="text-3xl font-semibold">
                    <span className="text-blue-500 font-bold">D</span>oc
                    <span className="font-bold">On</span>Time
                </h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-start mt-10 px-6 lg:px-20 gap-12">
                <div className="w-full lg:w-1/2 max-w-xl space-y-6">
                    <div className="text-center mb-8 w-full">
                    <h2 className="text-4xl lg:text-5xl font-bold text-blue-500">Welcome Back!</h2>
                    <p className="text-lg lg:text-xl text-blue-500 mt-2">Sign in to your account</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SignIn;