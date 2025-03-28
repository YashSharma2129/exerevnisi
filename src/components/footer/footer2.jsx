//import React from 'react'
//import { Button } from "../ui/button";

// export default function footer2() {
//   return (
//      <footer className="w-full bg-black text-white py-2 mt-8">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
//           <div className="text-left">
//             <h2 className="text-4xl font-bold">
//               Study<span className="text-gray-400">table</span>
//             </h2>
//             <span className="text-gray-400 text-xs">
//               © Copyright 2025 Studytable
//             </span>
//           </div>


//           <div className="text-center mt-4 md:mt-0">
//             <Button
//               variant="outline"
//               className="border-blue-500 text-blue-500 bg-white px-5 py-1 text-sm"
//             >
//               ★ Notice Board
//             </Button>
//           </div>

//           {/* Right Side - Socials & Blogs */}
//           <div className="flex flex-col md:flex-row gap-8 -ml-20 md:ml-0 mt-4 md:mt-0">
//             <div>
//               <h3 className="text-lg font-medium mb-2">Socials</h3>
//               <ul className="list-none p-0">
//                 <li className="mb-2 flex items-center">
//                   <span className="mr-2">📷</span> Instagram
//                 </li>
//                 <li className="mb-2 flex items-center">
//                   <span className="mr-2">📱</span> WhatsApp
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-medium mb-2">Blogs</h3>
//               <ul className="list-none p-0">
//                 <li className="mb-2">How we plan learning sessions?</li>
//                 <li className="mb-2">How we plan assessment sessions?</li>
//                 <li className="mb-2">How we manage student life?</li>
//                 <li className="mb-2">The effective student</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </footer>
//   )
// }

// import React from "react";
// import { Button } from "./ui/button";


// import React from "react";

// const Footer2 = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
//           <div className="text-gray-400">
//             <h2 className="text-xl font-semibold text-white">
//               Study<span className="text-gray-400">table</span>
//             </h2>
//             <p>© Copyright 2024 Studytable</p>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Features</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-4">Blogs</h3>
//             <ul className="space-y-2">
//               <li className="text-gray-400">How we plan learning session?</li>
//               <li className="text-gray-400">How we plan assessment session?</li>
//               <li className="text-gray-400">How we manage student life?</li>
//               <li className="text-gray-400">The effective student</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-4">Socials</h3>
//             <ul className="space-y-2">
//               <li className="text-gray-400">📸 Instagram</li>
//               <li className="text-gray-400">💬 WhatsApp</li>
//             </ul>
//             <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">
//               📌 Notice Board
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer2;


// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
//           <div className="text-gray-400">
//             <h2 className="text-xl font-semibold text-white">
//               Study<span className="text-gray-400">table</span>
//             </h2>
//             <p>© Copyright 2024 Studytable</p>
//           </div>



//           <div>
//             <h3 className="font-semibold mb-4">Blogs</h3>
//             <ul className="space-y-2">
//               <li className="text-gray-400">How we plan learning session?</li>
//               <li className="text-gray-400">How we plan assessment session?</li>
//               <li className="text-gray-400">How we manage student life?</li>
//               <li className="text-gray-400">The effective student</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-4">Socials</h3>
//             <ul className="space-y-2">
//               <li className="text-gray-400">📸 Instagram</li>
//               <li className="text-gray-400">💬 WhatsApp</li>
//             </ul>
//             <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">
//               📌 Notice Board
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { useNavigate } from "react-router-dom";

const Footer2 = () => {
  const navigate = useNavigate();


  const handlenotice = () => {
    navigate('/noticeboard')
  }

  return (
    <footer className="bg-gray-900 text-white py-8 max-sm:py-10 sm-md:py-6 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-8 ">
          <div className="text-gray-400">
            <h2 className="text-2xl font-semibold text-white">
              Study<span className="text-gray-400">table</span>
            </h2>
            <p>© Copyright 2024 Studytable</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Blogs</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">How we plan learning session?</li>
              <li className="text-gray-400">How we plan assessment session?</li>
              <li className="text-gray-400">How we manage student life?</li>
              <li className="text-gray-400">The effective student</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Socials</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">📸 Instagram</li>
              <li className="text-gray-400">💬 WhatsApp</li>
            </ul>
            <button onClick={handlenotice} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">
              📌 Notice Board
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;