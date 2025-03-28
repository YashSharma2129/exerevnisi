// import UnlimitedPractice from "../assets/svg/unlimited"

// export default function UnlimitedPracticeSection() {
//   return (
//     <div className="container mx-auto px-4 py-20">
//       <div className="flex items-center justify-between space-x-10">
//         {/* Left Side - Text Content */}
//         <div className="w-1/2">
//           <h2 className="text-4xl font-bold text-black">
//             Unlimited <span className="text-blue-600">Practice</span> session
//           </h2>
//           <p className="text-gray-500 text-lg mt-4">
//             For topics and subjects you go through in your school and coaching every day, we create instant
//             practice sessions specially made for your day's need.
//           </p>
//           <p className="text-gray-700 font-medium text-lg mt-4">
//             Our <strong className="font-semibold">innovative AI algorithm</strong> crafts batches of{" "}
//             <strong className="font-semibold">20 questions</strong>, each accompanied by instant feedback
//             and solutions – it's like having a <strong className="font-semibold">Home tutor 24x7</strong>.
//           </p>
//         </div>

//         {/* Right Side - SVG Component */}
//         <div className="w-1/2">
//           <UnlimitedPractice />
//         </div>
//       </div>
//     </div>
//   );
// }


// import UnlimitedPractice from "../assets/svg/unlimited";

// export default function UnlimitedPracticeSection() {
//   return (
//     <div className="container mx-auto px-4 py-20">
//       <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
//         {/* Left Side - Text Content */}
//         <div className="md:w-1/2 text-center md:text-left ml-20">
//           <h2 className="text-3xl md:text-4xl font-bold text-black">
//             Unlimited <span className="text-blue-600">Practice</span> session
//           </h2>
//           <p className="text-gray-500 text-base md:text-lg mt-4">
//             For topics and subjects you go through in your school <br />   and coaching every day, we create instant
//             practice sessions <br /> specially made for your day's need to ake you more better.
//           </p>
//           <p className="text-gray-700 font-medium text-base md:text-lg mt-4">
//             Our <strong className="font-semibold">innovative AI algorithm</strong> crafts batches of{" "}
//             <strong className="font-semibold">20 questions</strong>, <br /> each accompanied by instant feedback
//             and solutions – it's  <br /> like having a <strong className="font-semibold">Home tutor 24x7</strong>.
//           </p>
//         </div>

//         {/* Right Side - SVG Component */}
//         <div className="md:w-1/2 flex justify-center">
//           <UnlimitedPractice className="w-full max-w-md" />
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import UnlimitedPractice from '../../assets/svg/unlimited';

export default function UnlimitedPracticeSection() {
  return (
    <div className="flex flex-col space-y-8 md:space-y-16 py-10 px-4 md:px-20">
      {/* Unlimited Practice Section */}
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between space-y-4 md:space-y-8 lg:space-y-0 lg:space-x-10">
        {/* Heading */}
        <div className="w-full text-center lg:text-left lg:hidden lg:mr-40  lg:ml-44">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 lg:mb-0">
            Unlimited <span className="text-blue-600">Practice</span> session
          </h2>
        </div>

        <div className="w-full flex justify-center lg:justify-center lg:hidden  ">
          <UnlimitedPractice className="w-full max-w-xs md:max-w-md" />
        </div>

        {/* Text Content */}
        <div className="w-full text-center lg:text-left lg:mr-40">
          <div className="w-full text-center lg:text-left max-lg:hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 lg:mb-0">
              Unlimited <span className="text-blue-600">Practice</span> session
            </h2>
          </div>
          <p className="text-gray-500 text-base md:text-lg mt-4">
            For topics and subjects you go through in your school and coaching every day, we create instant
            practice sessions specially made for your day's need to make you better.
          </p>
          <p className="text-gray-700 font-medium text-base md:text-lg mt-4">
            Our <strong className="font-semibold">innovative AI algorithm</strong> crafts batches of{" "}
            <strong className="font-semibold">20 questions</strong>, each accompanied by instant feedback
            and solutions – it's like having a <strong className="font-semibold">Home tutor 24x7</strong>.
          </p>
        </div>
         {/* SVG Component */}
        <div className="w-full flex justify-center  lg:justify-center max-lg:hidden ">
          <UnlimitedPractice className="w-full max-w-xs md:max-w-md" />
        </div>
      </div>
    </div>
  );
}
