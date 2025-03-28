import React from "react";
import { useNavigate } from "react-router-dom";

const OptimizedHeroSection = () => {
  const navigate = useNavigate();

  const handleApplyForAdmission = () => {
    navigate('/signup');
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-100 text-center px-4">
      <h2 className="text-3xl max-sm:mb-4  max-sm:mt-4  mb-10 font-semibold text-gray-800">STUDY<span className="font-bold">table</span></h2>

      <div className="mt-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium flex items-center gap-2">
        <span>⚡</span> AI-Home Tutor
      </div>

      <h1 className="mt-4 text-4xl md:text-5xl font-bold text-black">
        <span className="text-blue-600">Optimize</span> Your <br/> Performance For <br />
        <span className="text-blue-600">JEE, NEET,</span> and <span className="text-blue-600">Boards</span>
      </h1>

      <p className="mt-4 text-gray-600 max-w-2xl">
        Your personal AI-Tutor for all academic needs. Whether it's a school exam, boards, or competitive exams, we plan, manage, and help you clear your doubts instantly. 
        For students of class 10th, 11th, and 12th (CBSE) preparing for all medical or engineering entrance exams.
      </p>

      <div className="mt-6 flex gap-6 max-sm:flex-col">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700"
          onClick={handleApplyForAdmission}
        >
          Apply for admission
        </button>
        <button
          className="text-blue-600 font-medium hover:underline max-sm:mb-4"
          onClick={handleSignIn}
        >
          Sign In →
        </button>
      </div>
    </div>
  );
};

export default OptimizedHeroSection;