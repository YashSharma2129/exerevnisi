import React from 'react';

const RoundButton = ({ label }) => {
  return (
    <button className="w-20 h-10 text-blue-600  border-solid border-1
 bg-white border-blue-800  rounded-full flex items-center justify-center p-4">
      {label}
    </button>
  );
};

export default RoundButton;