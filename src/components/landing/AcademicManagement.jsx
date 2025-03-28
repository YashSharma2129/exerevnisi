// import React from "react";
// import ManagingStudent from "./svg/managingStudent";
// const AcademicManagement = () => {
//   return (
//     <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-16   ">
//       {/* Left Text Section */}
//       <div className="lg:w-1/2 ml-20">
//         <h2 className="text-3xl font-bold text-black leading-tight">
//           <span className="text-blue-600">Managing students</span> academic{" "}
//           <span className="font-black">life</span>
//         </h2>
//         <p className="mt-4 text-gray-600 text-lg leading-relaxed">
//           There is more to study than just practicing giving tests. To meet <br /> the
//           requirement of exams, we need to carefully do the revision, <br />
//           repeatedly align our study plan, and understand students' own  <br /> learning
//           curves. This all needs to be done along with school tests <br /> and other
//           scholarship exams. We manage it all for you so that you <br /> can focus on
//           learning and worry no more.
//         </p>
//       </div>

//       <div className="lg:w-1/2 flex  justify-center  mt-10 lg:mt-0">
//       <ManagingStudent/>
//       </div>
//     </div>
//   );
// };

// export default AcademicManagement;



import React from "react";
import { OrbitingCirclesDemo } from "../animations/orbiting";
import ManagingStudent from "../svg/managingStudent";
import { OrbitingCircles } from "../magicui/orbiting-circles";
export default function AcademicManagement() {
  return (
    <div className="flex flex-col space-y-8 md:space-y-16 py-10 px-4 md:px-20">
      {/* Unlimited Practice Section */}
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between space-y-4 md:space-y-8 lg:space-y-0 lg:space-x-10">
        {/* Heading */}
        <div className="w-full text-center lg:text-left lg:hidden lg:mr-40  lg:ml-44">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 lg:mb-0">
            Managing  <span className="text-blue-600">students</span> academic{" "}
          </h2>
        </div>



        {/* Text Content */}
        <div className="w-full text-center  lg:text-left lg:mr-40">
          <div className="w-full text-center lg:text-left max-lg:hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 lg:mb-0">
              Managing  <span className="text-blue-600">students</span> academic{" "}
            </h2>
          </div>

          <div className="w-full flex justify-center lg:justify-center lg:hidden ">
            <ManagingStudent className="w-full max-w-xs md:max-w-md" />
          </div>


          <p className="text-gray-500 text-base md:text-lg mt-4  ">
            {/* There is more to study than just practicing giving tests. To meet <br /> the
            requirement of exams, we need to carefully do the revision, <br />
            repeatedly align our study plan, and understand students' own  <br /> learning
            curves. This all needs to be done along with school tests <br /> and other
            scholarship exams. We manage it all for you so that you <br /> can focus on
            learning and worry no more. */}

There is more to study than just practicing giving tests. To meet  the
            requirement of exams, we need to carefully do the revision, 
            repeatedly align our study plan, and understand students' own   learning
            curves. This all needs to be done along with school tests and other
            learning and worry no more
          </p>

        </div>
        {/* SVG Component */}
        <div className="w-full   flex justify-start lg:justify-center max-lg:hidden ">
          <ManagingStudent className="w-full max-w-xs md:max-w-md" />
          {/* <OrbitingCirclesDemo pathColor="stroke-red-300 dark:stroke-red-500"  // Customize color
            radius={100} /> */}
        </div>
      </div>
    </div>
  );
}
