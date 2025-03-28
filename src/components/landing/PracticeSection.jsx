// import { Pencil, Trophy } from "lucide-react";

// export default function PracticeSection() {
//   return (
//     <div className="flex flex-col items-center justify-center text-center space-y-4 py-10">
//       <div className="flex items-center space-x-2">
//         <div className="bg-blue-100 p-2 rounded-full">
//           <Pencil className="text-blue-500" size={20} />
//         </div>
//         <span className="text-gray-500 text-lg font-medium">+</span>
//         <div className="bg-blue-100 p-2 rounded-full">
//           <Trophy className="text-blue-500" size={20} />
//         </div>
//       </div>

//       <h2 className="text-4xl w-3xl font-semibold text-black">
//         Practice Previous Year Paper <br /> & Win Prices
//       </h2>

//       <p className="text-gray-500 text-lg mt-2">
//         35 year JEE and NEET 15 year Boards paper
//       </p>

//       <button className="bg-blue-600 text-white px-10 mt-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
//         Practice for Free
//       </button>
//     </div>
//   );
// }


// import { Pencil, Trophy } from "lucide-react";

// export default function PracticeSection() {
//   return (
//     <div className="flex flex-col items-center justify-center text-center space-y-4 py-10 min-h-screen w-full">
//       <div className="flex items-center space-x-2">
//         <div className="bg-blue-100 p-2 rounded-full">
//           <Pencil className="text-blue-500" size={20} />
//         </div>
//         <span className="text-gray-500 text-lg font-medium">+</span>
//         <div className="bg-blue-100 p-2 rounded-full">
//           <Trophy className="text-blue-500" size={20} />
//         </div>
//       </div>

//       <h2 className="text-4xl w-3xl font-semibold text-black">
//         Practice Previous Year Paper <br /> & Win Prices
//       </h2>

//       <p className="text-gray-500 text-lg mt-2">
//         35 year JEE and NEET 15 year Boards paper
//       </p>

//       <button className="bg-blue-600 text-white px-10 mt-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
//         Practice for Free
//       </button>
//     </div>
//   );
// }

import { Pencil, Trophy } from "lucide-react";
import { ConfettiButtonDemo } from "../animations/confettibutton";
import { buttonVariants } from "../ui/button";
import DigitalPotentialSection from "./DigitalPotentialSection";
export default function PracticeSection() {
  return (
    <div className="flex flex-col items-center justify-center  text-center space-y-6 py-20 md:pt-6 lg:py-20    min-h-screen w-full">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 p-4 rounded-full">
          <Pencil className="text-blue-500" size={24} />
        </div>
        <span className="text-gray-500 text-xl font-medium">+</span>
        <div className="bg-blue-100 p-4 rounded-full">
          <Trophy className="text-blue-500" size={24} />
        </div>
      </div>

      <h2 className="text-5xl font-semibold text-black">
        Practice Previous Year Paper <br /> & Win Prizes
      </h2>

      <p className="text-gray-500 text-xl mt-4">
        35 year JEE and NEET 15 year Boards paper
      </p>

      {/* <buttonVariants className="bg-blue-600 text-white px-12 mt-8 py-4 rounded-lg text-xl font-medium hover:bg-blue-700 transition">
        Practice for Free
      </buttonVariants> */}


<ConfettiButtonDemo className="bg-blue-600 text-white px-12 mt-8 py-8 rounded-lg text-xl font-medium hover:bg-blue-700 transition lg:mb-8 ">
        Practice for Free
      </ConfettiButtonDemo>

      <div className=" max-sm:hidden">
      <DigitalPotentialSection />

      </div>

    </div>
  );
}