// import React from "react";
// import Footer from "./footer";
// const NoticeBoard = () => {
//     return (
//         <div className="min-h-screen bg-gray-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Header */}
//                 <header className="flex justify-between items-center py-6">
//                     <h1 className="text-2xl font-bold text-gray-900">
//                         <span className="text-gray-500">STUDY</span>table
//                     </h1>
//                     <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
//                         Apply for admission
//                     </button>
//                 </header>

//                 {/* Main Content */}
//                 <div className="flex flex-col md:flex-row gap-6">
//                     {/* Sidebar */}
//                     <aside className="w-full md:w-1/4 bg-gray-50 shadow-sm rounded-lg p-4">
//                         <h2 className="text-lg font-semibold text-blue-600">Notice Board</h2>
//                         <ul className="mt-4 space-y-2 text-gray-600">
//                             <li className="font-semibold text-black">All Updates</li>
//                             <li>JEE/NEET</li>
//                             <li>CBSE</li>
//                             <li>ICSE</li>
//                         </ul>
//                     </aside>

//                     {/* Updates Section */}
//                     <section className="w-full md:w-3/4">
//                         <h2 className="text-2xl font-bold text-gray-900">All Updates</h2>

//                         <div className="mt-6 space-y-6">
//                             {/* Update Item */}
//                             <div className="bg-gray-50 p-4 shadow-sm rounded-lg">
//                                 <h3 className="text-lg font-semibold text-gray-900">
//                                     NEET 2025 Application Open
//                                 </h3>
//                                 <p className="text-gray-700 mt-2">
//                                     The National Testing Agency (NTA) has released the NEET 2025 application form on February 7, 2025. The examination is scheduled for May 4, 2025. Candidates can apply online through the official NTA website.
//                                 </p>
//                                 <p className="mt-2 text-blue-600">
//                                     Resources: <a href="#">Link1</a>, <a href="#">Link2</a>, <a href="#">Link3</a>
//                                 </p>
//                                 <p className="mt-2 text-gray-500">December 14, 2024</p>
//                                 <p className="mt-1 text-gray-500">NEET | Application | 2025 Exam</p>
//                             </div>

//                             {/* Exam Pattern Update 1 */}
//                             <div className="bg-gray-50 p-4 shadow-sm rounded-lg">
//                                 <h3 className="text-lg font-semibold text-gray-900">
//                                     NEET 2025 Exam Pattern Update
//                                 </h3>
//                                 <p className="text-gray-700 mt-2">
//                                     The NTA has announced that the NEET 2025 exam will revert to its pre-COVID-19 pattern, eliminating the optional section introduced during the pandemic. This change aims to standardize the examination format.
//                                 </p>
//                                 <p className="mt-2 text-blue-600">
//                                     Resources: <a href="#">Link1</a>, <a href="#">Link2</a>, <a href="#">Link3</a>
//                                 </p>
//                                 <p className="mt-2 text-gray-500">May 14, 2025</p>
//                                 <p className="mt-1 text-gray-500">NEET | Application | 2025 Exam</p>
//                             </div>

//                             {/* Exam Pattern Update 2 */}
//                             <div className="bg-gray-50 p-4 shadow-sm rounded-lg">
//                                 <h3 className="text-lg font-semibold text-gray-900">
//                                     NEET 2025 Exam Pattern Update
//                                 </h3>
//                                 <p className="text-gray-700 mt-2">
//                                     The NTA has announced that the NEET 2025 exam will revert to its pre-COVID-19 pattern, eliminating the optional section introduced during the pandemic. This change aims to standardize the examination format.
//                                 </p>
//                                 <p className="mt-2 text-blue-600">
//                                     Resources: <a href="#">Link1</a>, <a href="#">Link2</a>, <a href="#">Link3</a>
//                                 </p>
//                                 <p className="mt-2 text-gray-500">May 14, 2025</p>
//                                 <p className="mt-1 text-gray-500">NEET | Application | 2025 Exam</p>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </div>

//             {/* Footer */}
//             <Footer />
//         </div>
//     );
// };

// export default NoticeBoard;




// import React, { useState } from "react";
// import Footer from "./footer";

// const NoticeBoard = () => {
//   const [showSidebar, setShowSidebar] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <header className="flex justify-between items-center py-6">
//           <h1 className="text-2xl font-bold text-gray-900">
//             <span className="text-gray-500">STUDY</span>table
//           </h1>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hidden md:block">
//             Apply for admission
//           </button>
//         </header>

//         {/* Main Content */}
//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Sidebar */}
//           <aside className="w-full md:w-1/4 bg-gray-50 shadow-sm rounded-lg p-4 hidden md:block">
//             <h2 className="text-lg font-semibold text-blue-600">Notice Board</h2>
//             <ul className="mt-4 space-y-2 text-gray-600">
//               <li className="font-semibold text-black">All Updates</li>
//               <li>JEE/NEET</li>
//               <li>CBSE</li>
//               <li>ICSE</li>
//             </ul>
//           </aside>

//           {/* Dropdown for Sidebar in Mobile and Tablet */}
//           <div className="md:hidden flex justify-end mb-4">
//             <button
//               className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//               onClick={() => setShowSidebar(!showSidebar)}
//             >
//               Notice Board
//             </button>
//           </div>
//           {showSidebar && (
//             <aside className="w-full bg-gray-50 shadow-sm rounded-lg p-4 md:hidden">
//               <h2 className="text-lg font-semibold text-blue-600">Notice Board</h2>
//               <ul className="mt-4 space-y-2 text-gray-600">
//                 <li className="font-semibold text-black">All Updates</li>
//                 <li>JEE/NEET</li>
//                 <li>CBSE</li>
//                 <li>ICSE</li>
//               </ul>
//             </aside>
//           )}

//           {/* Updates Section */}
//           <section className="w-full md:w-3/4">
//             <h2 className="text-2xl font-bold text-gray-900">All Updates</h2>

//             <div className="mt-6 space-y-6 overflow-y-auto max-h-96">
//               {/* Update Item */}
//               <div className="bg-gray-50 p-4 shadow-sm rounded-lg relative">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   NEET 2025 Application Open
//                 </h3>
//                 <p className="text-gray-700 mt-2">
//                   The National Testing Agency (NTA) has released the NEET 2025 application form on February 7, 2025. The examination is scheduled for May 4, 2025. Candidates can apply online through the official NTA website.
//                 </p>
//                 <p className="mt-2 text-blue-600">
//                   Resources: <a href="#">Link1</a>, <a href="#">Link2</a>, <a href="#">Link3</a>
//                 </p>
//                 <p className="mt-2 text-gray-500">December 14, 2024</p>
//                 <p className="mt-1 text-gray-500 absolute bottom-2 right-2 cursor-pointer">
//                   <a href="#">NEET | Application | 2025 Exam</a>
//                 </p>
//               </div>

//               {/* Additional Update Items */}
//               {[...Array(5)].map((_, index) => (
//                 <div key={index} className="bg-gray-50 p-4 shadow-sm rounded-lg relative">
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     NEET 2025 Exam Pattern Update
//                   </h3>
//                   <p className="text-gray-700 mt-2">
//                     The NTA has announced that the NEET 2025 exam will revert to its pre-COVID-19 pattern, eliminating the optional section introduced during the pandemic. This change aims to standardize the examination format.
//                   </p>
//                   <p className="mt-2 text-blue-600">
//                     Resources: <a href="#">Link1</a>, <a href="#">Link2</a>, <a href="#">Link3</a>
//                   </p>
//                   <p className="mt-2 text-gray-500">May 14, 2025</p>
//                   <p className="mt-1 text-gray-500 absolute bottom-2 right-2 cursor-pointer">
//                     <a href="#">NEET | Application | 2025 Exam</a>
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default NoticeBoard;





// import React, { useState } from "react";
// import Footer from "../footer";
// import Academicneeds from './academicneeds'
// const NoticeBoard = () => {
//   const [showSidebar, setShowSidebar] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <header className="flex flex-col md:flex-row justify-between items-center py-6">
//           <h1 className="text-2xl font-bold text-gray-900">
//             <span className="text-gray-500">STUDY</span>table
//           </h1>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4 md:mt-0 md:order-last">
//             Apply for admission
//           </button>
//         </header>

//         {/* Main Content */}
//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Sidebar */}
//           <aside className="w-full md:w-1/4 bg-gray-50 shadow-sm rounded-lg p-4 hidden md:block">
//             <h2 className="text-lg font-semibold text-blue-600">Notice Board</h2>
//             <ul className="mt-4 space-y-2 text-gray-600">
//               <li className="font-semibold text-black cursor-pointer">All Updates</li>
//               <li className="cursor-pointer">JEE/NEET</li>
//               <li className="cursor-pointer">CBSE</li>
//               <li className="cursor-pointer">ICSE</li>
//             </ul>
//           </aside>

//           {/* Dropdown for Sidebar in Mobile and Tablet */}
//           <div className="md:hidden flex justify-end mb-4">
//             <button
//               className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//               onClick={() => setShowSidebar(!showSidebar)}
//             >
//               Notice Board
//             </button>
//           </div>
//           {showSidebar && (
//             <aside className="w-full bg-gray-50 shadow-sm rounded-lg p-4 md:hidden">
//               <h2 className="text-lg font-semibold text-blue-600">Notice Board</h2>
//               <ul className="mt-4 space-y-2 text-gray-600">
//                 <li className="font-semibold text-black cursor-pointer">All Updates</li>
//                 <li className="cursor-pointer">JEE/NEET</li>
//                 <li className="cursor-pointer">CBSE</li>
//                 <li className="cursor-pointer">ICSE</li>
//               </ul>
//             </aside>
//           )}

//           {/* Updates Section */}
//           <section className="w-full md:w-3/4">
//             <h2 className="text-2xl font-bold text-gray-900">All Updates</h2>

//             <div className="mt-6 space-y-6">
//               {/* Update Item */}
//               <div className="bg-gray-50 p-4 shadow-sm rounded-lg relative">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   NEET 2025 Application Open
//                 </h3>
//                 <p className="text-gray-700 mt-2">
//                   The National Testing Agency (NTA) has released the NEET 2025 application form on February 7, 2025. The examination is scheduled for May 4, 2025. Candidates can apply online through the official NTA website.
//                 </p>
//                 <p className="mt-2 text-blue-600">
//                   Resources: <a href="#">Link1</a>, <a href="#">Link2</a>, <a href="#">Link3</a>
//                 </p>
//                 <p className="mt-2 text-gray-500">December 14, 2024</p>
//                 <p className="mt-1 text-gray-500 absolute bottom-2 right-2 cursor-pointer">
//                   <a href="#">NEET | Application | 2025 Exam</a>
//                 </p>
//               </div>

//               {/* Exam Pattern Update 1 */}
//               <div className="bg-gray-50 p-4 shadow-sm rounded-lg relative">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   NEET 2025 Exam Pattern Update
//                 </h3>
//                 <p className="text-gray-700 mt-2">
//                   The NTA has announced that the NEET 2025 exam will revert to its pre-COVID-19 pattern, eliminating the optional section introduced during the pandemic. This change aims to standardize the examination format.
//                 </p>
//                 <p className="mt-2 text-blue-600">
//                   Resources: <a href="#">Link1</a>, <a href="#">Link2</a>, <a href="#">Link3</a>
//                 </p>
//                 <p className="mt-2 text-gray-500">May 14, 2025</p>
//                 <p className="mt-1 text-gray-500 absolute bottom-2 right-2 cursor-pointer">
//                   <a href="#">NEET | Application | 2025 Exam</a>
//                 </p>
//               </div>

//               {/* Exam Pattern Update 2 */}
//               <div className="bg-gray-50 p-4 shadow-sm rounded-lg relative">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   NEET 2025 Exam Pattern Update
//                 </h3>
//                 <p className="text-gray-700 mt-2">
//                   The NTA has announced that the NEET 2025 exam will revert to its pre-COVID-19 pattern, eliminating the optional section introduced during the pandemic. This change aims to standardize the examination format.
//                 </p>
//                 <p className="mt-2 text-blue-600">
//                   Resources: <a href="#">Link1</a>, <a href="#">Link2</a>, <a href="#">Link3</a>
//                 </p>
//                 <p className="mt-2 text-gray-500">May 14, 2025</p>
//                 <p className="mt-1 text-gray-500 absolute bottom-2 right-2 cursor-pointer">
//                   <a href="#">NEET | Application | 2025 Exam</a>
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//             <Academicneeds/>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default NoticeBoard;






// import React, { useState } from "react";
// import Footer from "../footer";
// import Academicneeds from './academicneeds';
// import { FaChevronDown } from "react-icons/fa";

// const NoticeBoard = () => {
//   const [showSidebar, setShowSidebar] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <header className="flex flex-col md:flex-row justify-between items-center py-6">
//           <h1 className="text-2xl font-bold text-gray-900">
//             <span className="text-gray-500">STUDY</span>table
//           </h1>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4 md:mt-0 md:order-last">
//             Apply for admission
//           </button>
//           <h2 className="text-xl text-left items-left  font-semibold text-blue-600 mt-4 md:hidden">
//             Notice Board
//           </h2>
//         </header>

//         {/* Main Content */}
//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Sidebar */}
//           <aside className="w-full md:w-1/4 bg-gray-50 shadow-sm rounded-lg p-4 hidden md:block">
//             <h2 className="text-lg font-semibold text-blue-600">Notice Board</h2>
//             <ul className="mt-4 space-y-2 text-gray-600">
//               <li className="font-semibold text-black cursor-pointer">All Updates</li>
//               <li className="cursor-pointer">JEE/NEET</li>
//               <li className="cursor-pointer">CBSE</li>
//               <li className="cursor-pointer">ICSE</li>
//             </ul>
//           </aside>

//           {/* Dropdown for Sidebar in Mobile and Tablet */}
//           <div className="md:hidden flex justify-center  mb-4 ites-center">
//             <button
//               className="bg-transparent text-black px-4 py-2 w-full rounded-md border border-gray-400 flex items-center"
//               onClick={() => setShowSidebar(!showSidebar)}
//             >
//               All Updates <FaChevronDown className="justify-end  max-sm:ml-35 sm-md:ml-150" />
//             </button>
//           </div>
//           {showSidebar && (
//             <aside className="w-full bg-gray-50 shadow-sm rounded-lg p-4 md:hidden">
//               <h2 className="text-lg font-semibold text-blue-600">Notice Board</h2>
//               <ul className="mt-4 space-y-2 text-gray-600">
//                 <li className="font-semibold text-black cursor-pointer">All Updates</li>
//                 <li className="cursor-pointer">JEE/NEET</li>
//                 <li className="cursor-pointer">CBSE</li>
//                 <li className="cursor-pointer">ICSE</li>
//               </ul>
//             </aside>
//           )}

//           {/* Updates Section */}
//           <section className="w-full md:w-3/4">
//             <h2 className="text-2xl font-bold text-gray-900">All Updates</h2>

//             <div className="mt-6 space-y-6">
//               {/* Update Item */}
//               <div className="bg-gray-50 p-4 shadow-sm rounded-lg relative">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   NEET 2025 Application Open
//                 </h3>
//                 <p className="text-gray-700 mt-2">
//                   The National Testing Agency (NTA) has released the NEET 2025 application form on February 7, 2025. The examination is scheduled for May 4, 2025. Candidates can apply online through the official NTA website.
//                 </p>
//                 <p className="mt-2 text-blue-600">
//                   Resources: <a href="#">Link1</a>, <a href="#">Link2</a>, <a href="#">Link3</a>
//                 </p>
//                 <p className="mt-2 mb-4 text-gray-500">December 14, 2024</p>
//                 <p className="mt-4 text-gray-500 absolute bottom-2 right-2 cursor-pointer">
//                   <a href="#">NEET | Application | 2025 Exam</a>
//                 </p>
//               </div>

//               {/* Exam Pattern Update 1 */}
//               <div className="bg-gray-50 p-4 shadow-sm rounded-lg relative">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   NEET 2025 Exam Pattern Update
//                 </h3>
//                 <p className="text-gray-700 mt-2">
//                   The NTA has announced that the NEET 2025 exam will revert to its pre-COVID-19 pattern, eliminating the optional section introduced during the pandemic. This change aims to standardize the examination format.
//                 </p>
//                 <p className="mt-2 text-blue-600">
//                   Resources: <a href="#">Link1</a>, <a href="#">Link2</a>, <a href="#">Link3</a>
//                 </p>
//                 <p className="mt-2  mb-4 text-gray-500">May 14, 2025</p>
//                 <p className="mt-4 text-gray-500 absolute bottom-2 right-2 cursor-pointer">
//                   <a href="#">NEET | Application | 2025 Exam</a>
//                 </p>
//               </div>

//               {/* Exam Pattern Update 2 */}
//               <div className="bg-gray-50 p-4 shadow-sm rounded-lg relative">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   NEET 2025 Exam Pattern Update
//                 </h3>
//                 <p className="text-gray-700 mt-2">
//                   The NTA has announced that the NEET 2025 exam will revert to its pre-COVID-19 pattern, eliminating the optional section introduced during the pandemic. This change aims to standardize the examination format.
//                 </p>
//                 <p className="mt-2 text-blue-600">
//                   Resources: <a href="#">Link1</a>, <a href="#">Link2</a>, <a href="#">Link3</a>
//                 </p>
//                 <p className="mt-2 mb-4 text-gray-500">May 14, 2025</p>
//                 <p className="mt-4 text-gray-500 absolute bottom-2 right-2 cursor-pointer ">
//                   <a href="#">NEET | Application | 2025 Exam</a>
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>

//       {/* Academic Needs Section */}
//       <Academicneeds />

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default NoticeBoard;





import React, { useState } from "react";
import Footer from "../footer";
import Academicneeds from './academicneeds';
import { FaChevronDown } from "react-icons/fa";
import Footer2 from "../footer/footer2";
import { useNavigate } from "react-router-dom";


const NoticeBoard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

   const handleadmission=()=>{
    navigate('/signup');
   }


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center py-6">
          <h1 className="text-2xl font-bold text-gray-900">
            <span className="text-gray-500">STUDY</span>table
          </h1>
          <div className="sticky top-0 bg-gray-50 z-10">
            <button onClick={handleadmission} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4 md:mt-0 md:order-last max-sm:py-1 max-sm:px-3">
              Apply for admission
            </button>
          </div>
          <h2 className="text-xl text-left items-left font-semibold text-blue-600 mt-4 md:hidden">
            Notice Board
          </h2>
        </header>

        {/* 
<header className="flex flex-col md:flex-row justify-between items-center py-6">
  <h1 className="text-2xl font-bold text-gray-900">
    <span className="text-gray-500">STUDY</span>table
  </h1>

  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4 md:mt-0 md:order-last fixed top-6 right-4 z-10">
    Apply for admission
  </button>

  <h2 className="text-xl text-left items-left font-semibold text-blue-600 mt-4 md:hidden">
    Notice Board
  </h2>
</header>
 */}


        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 bg-gray-50 shadow-sm rounded-lg p-4 hidden md:block">
            <h2 className="text-lg font-semibold text-blue-600">Notice Board</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="font-semibold text-black cursor-pointer">All Updates</li>
              <li className="cursor-pointer">JEE/NEET</li>
              <li className="cursor-pointer">CBSE</li>
              <li className="cursor-pointer">ICSE</li>
            </ul>
          </aside>

          {/* Dropdown for Sidebar in Mobile and Tablet */}
          <div className="md:hidden flex justify-center mb-4 items-center">
            <button
              className="bg-transparent text-black px-4 py-2 w-full rounded-md border-b border-gray-300 flex items-center"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              All Updates <FaChevronDown className="justify-end max-sm:ml-35 sm-md:ml-150" />
            </button>
          </div>
          {showSidebar && (
            <aside className="w-full bg-gray-50 shadow-sm rounded-lg p-4 md:hidden">
              <h2 className="text-lg font-semibold text-blue-600">Notice Board</h2>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="font-semibold text-black cursor-pointer">All Updates</li>
                <li className="cursor-pointer">JEE/NEET</li>
                <li className="cursor-pointer">CBSE</li>
                <li className="cursor-pointer">ICSE</li>
              </ul>
            </aside>
          )}

          {/* Updates Section */}
          <section className="w-full md:w-3/4">
            <h2 className="text-2xl font-bold text-gray-900">All Updates</h2>

            <div className="mt-6 space-y-6">
              {/* Update Item */}
              <div className="bg-gray-50 p-4 shadow-sm rounded-lg relative">
                <h3 className="text-lg font-semibold text-gray-900">
                  NEET 2025 Application Open
                </h3>
                <p className="text-gray-700 mt-2">
                  The National Testing Agency (NTA) has released the NEET 2025 application form on February 7, 2025. The examination is scheduled for May 4, 2025. Candidates can apply online through the official NTA website.
                </p>
                <p className="mt-2 text-blue-600">
                  Resources: <a href="#">Link1</a>, <a href="#">Link2</a>, <a href="#">Link3</a>
                </p>
                <p className="mt-2 mb-4 text-gray-500">December 14, 2024</p>
                <p className="mt-4 text-gray-500 absolute bottom-2 right-2 cursor-pointer">
                  <a href="#">NEET | Application | 2025 Exam</a>
                </p>
              </div>

              {/* Exam Pattern Update 1 */}
              <div className="bg-gray-50 p-4 shadow-sm rounded-lg relative">
                <h3 className="text-lg font-semibold text-gray-900">
                  NEET 2025 Exam Pattern Update
                </h3>
                <p className="text-gray-700 mt-2">
                  The NTA has announced that the NEET 2025 exam will revert to its pre-COVID-19 pattern, eliminating the optional section introduced during the pandemic. This change aims to standardize the examination format.
                </p>
                <p className="mt-2 text-blue-600">
                  Resources: <a href="#">Link1</a>, <a href="#">Link2</a>, <a href="#">Link3</a>
                </p>
                <p className="mt-2 mb-4 text-gray-500">May 14, 2025</p>
                <p className="mt-4 text-gray-500 absolute bottom-2 right-2 cursor-pointer">
                  <a href="#">NEET | Application | 2025 Exam</a>
                </p>
              </div>

              {/* Exam Pattern Update 2 */}
              <div className="bg-gray-50 p-4 shadow-sm rounded-lg relative">
                <h3 className="text-lg font-semibold text-gray-900">
                  NEET 2025 Exam Pattern Update
                </h3>
                <p className="text-gray-700 mt-2">
                  The NTA has announced that the NEET 2025 exam will revert to its pre-COVID-19 pattern, eliminating the optional section introduced during the pandemic. This change aims to standardize the examination format.
                </p>
                <p className="mt-2 text-blue-600">
                  Resources: <a href="#">Link1</a>, <a href="#">Link2</a>, <a href="#">Link3</a>
                </p>
                <p className="mt-2 mb-4 text-gray-500">May 14, 2025</p>
                <p className="mt-4 text-gray-500 absolute bottom-2 right-2 cursor-pointer">
                  <a href="#">NEET | Application | 2025 Exam</a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Academic Needs Section */}
      <Academicneeds />

      {/* Footer */}
      {/* <Footer /> */}
      <Footer2 />

    </div>
  );
};

export default NoticeBoard;