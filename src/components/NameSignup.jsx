// import { useState } from "react";
// import { FaInstagram, FaWhatsapp } from "react-icons/fa";
// import { Button } from "./ui/button";
// import { CustomButton } from "./ui/custombutton";
// import Footer from "./footer";
// import Footer2 from "./footer/footer2";



// export default function NameSignup() {
//   const totalSteps = 8;
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: '',
//     city: '',
//     email: '',
//     class: '',
//     subject: '',
//     marks10thClass: '',
//     marks10thMaths: '',
//     marks10thScience: '',
//     marks11thClass: '',
//     marks11thMaths: '',
//     marks11thScience: '',
//     competitiveExams: '',
//     phoneNumber: ''
//   });

//   const handleNext = () => {
//     if (step < totalSteps) {
//       setStep(step + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (step > 1) {
//       setStep(step - 1);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const progress = (step / totalSteps) * 100;

//   return (
//     <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-blue-50 to-white">
//       <h1 className="text-4xl   mt-12  max-sm:mb-20  max-sm:mt-38 "  >
//         STUDY<span className=" font-bold text-black">table</span>
//       </h1>

//       <div className="flex flex-col items-center w-full max-w-md mt-6">
//         {step === 1 && (
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="What is your Name? "
//             className="border-b border-gray-400 outline-none text-lg md:w-full py-2 mb-10  "
//           />
//         )}
//         {step === 2 && (
//           <input
//             type="text"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             placeholder="City"
//             className="border-b border-gray-400 outline-none text-lg md:w-full py-2 mb-10"
//           />
//         )}
//         {step === 3 && (
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email Address"
//             className="border-b border-gray-400 outline-none text-lg md:w-full py-2 mb-10"
//           />
//         )}
//         {step === 4 && (

//           <select
//             name="class"
//             value={formData.class}
//             onChange={handleChange}
//             className="border-b border-gray-400 outline-none text-lg md:w-full max-md:w-53    py-2 mb-10"
//           >
//             <option value="" disabled selected >
//               Class(Academic year 2025-26)
//             </option>
//             <option value="math">Class 1</option>
//             <option value="science">Class 2</option>
//             <option value="english">Class 3</option>
//           </select>
//         )}
//         {step === 5 && (
//           <select
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             className="border-b border-gray-400 outline-none text-lg md:w-full max-md:w-44 py-2 mb-10"
//           >
//             <option value="" disabled selected >
//               Subject
//             </option>
//             <option value="math">Math</option>
//             <option value="science">Science</option>
//             <option value="english">English</option>
//           </select>
//         )}
//         {step === 6 && (
//           <div className="w-full max-h-50 overflow-y-auto no-scrollbar">
//             <h2 className="text-lg font-medium mb-4 text-center max-lg:text-2xl lg:text-">10th Class Details</h2>
//             <div className="flex flex-col max-sm:items-center ">
//               <select
//                 name="marks10thClass"
//                 value={formData.marks10thClass}
//                 onChange={handleChange}
//                 className="border-b border-gray-400 outline-none text-lg w-full  max-sm:w-44 sm-md:w-10  sm:w-auto py-2 mb-4"
//               >
//                 <option value="" disabled selected>
//                   Marks in 10th <span className="sm-md:hidden">Class</span>
//                 </option>
//                 <option value="90">More than 90%</option>
//                 <option value="75">More than 75%</option>
//                 <option value="60">More than 60%</option>
//               </select>

//               <select
//                 name="marks10thMaths"
//                 value={formData.marks10thMaths}
//                 onChange={handleChange}
//                 className="border-b border-gray-400 outline-none text-lg w-full max-sm:w-40 sm:w-auto py-2 mb-4"
//               >
//                 <option value="" disabled selected>
//                   Marks in Maths
//                 </option>
//                 <option value="90">More than 90%</option>
//                 <option value="75">More than 75%</option>
//                 <option value="60">More than 60%</option>
//               </select>

//               <select
//                 name="marks10thScience"
//                 value={formData.marks10thScience}
//                 onChange={handleChange}
//                 className="border-b border-gray-400 outline-none text-lg w-full sm:w-auto  max-sm:w-40 py-2 mb-10"
//               >
//                 <option value="" disabled selected>
//                   Marks in Science
//                 </option>
//                 <option value="90">More than 90%</option>
//                 <option value="75">More than 75%</option>
//                 <option value="60">More than 60%</option>
//               </select>
//             </div>


//             <h2 className="text-lg font-medium mb-4 text-center max-lg:text-2xl">11th Class Details</h2>
//             <div className="flex flex-col max-sm:items-center">
//               <select
//                 name="marks11thClass"
//                 value={formData.marks11thClass}
//                 onChange={handleChange}
//                 className="border-b border-gray-400 outline-none text-lg w-full max-md:w-40 sm:w-auto py-2 mb-4"
//               >
//                 <option value="" disabled selected>
//                   Marks in 11th Class
//                 </option>
//                 <option value="90">More than 90%</option>
//                 <option value="75">More than 75%</option>
//                 <option value="60">More than 60%</option>
//               </select>

//               <select
//                 name="marks11thMaths"
//                 value={formData.marks11thMaths}
//                 onChange={handleChange}
//                 className="border-b border-gray-400 outline-none text-lg w-full max-sm:w-40 sm:w-auto py-2 mb-4"
//               >
//                 <option value="" disabled selected>
//                   Marks in Maths
//                 </option>
//                 <option value="90">More than 90%</option>
//                 <option value="75">More than 75%</option>
//                 <option value="60">More than 60%</option>
//               </select>

//               <select
//                 name="marks11thScience"
//                 value={formData.marks11thScience}
//                 onChange={handleChange}
//                 className="border-b border-gray-400 outline-none text-lg w-full sm:w-auto  max-sm:w-40 py-2 mb-10"
//               >
//                 <option value="" disabled selected>
//                   Marks in Science
//                 </option>
//                 <option value="90">More than 90%</option>
//                 <option value="75">More than 75%</option>
//                 <option value="60">More than 60%</option>
//               </select>
//             </div>

//           </div>
//         )}
//         {step === 7 && (
//           <input
//             type="text"
//             name="competitiveExams"
//             value={formData.competitiveExams}
//             onChange={handleChange}
//             placeholder="Competitive Exams"
//             className="border-b border-gray-400 outline-none text-lg md:w-full py-2 mb-10"
//           />
//         )}
//         {step === 8 && (
//           <input
//             type="tel"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             placeholder="Phone Number"
//             className="border-b border-gray-400 outline-none text-lg md:w-full py-2 mb-10"
//           />
//         )}

//         <div className="w-2/3 sm:hidden mt-20 sm-lg:mb-4  max-sm:mt-10 ">
//           <div className="w-full bg-gray-300 h-2 rounded-full">
//             <div
//               className="bg-blue-500 h-2 rounded-full"
//               style={{ width: `${progress}%` }}
//             ></div>
//           </div>
//         </div>

//         <div className="flex  justify-between items-center max-sm:w-70  sm:w-2xl mt-16   max-sm:mb-35">

//           <CustomButton
//             variant="outline"
//             className=" sm:px-8  max-sm:p-1 max-sm:gap-4 max-sm:w-30 "
//             onClick={handlePrevious}
//             disabled={step === 1}
//           >
//             ← Previous
//           </CustomButton>

//           <div className="w-1/3 max-sm:hidden">
//             <div className="w-full bg-gray-300 h-2 rounded-full">
//               <div
//                 className="bg-blue-500 h-2 rounded-full"
//                 style={{ width: `${progress}%` }}
//               ></div>
//             </div>
//           </div>

//           <CustomButton
//             className="sm:px-8 max-sm:p-1 max-sm:w-25"
//             onClick={handleNext}
//             disabled={step === totalSteps}
//           >
//             Next →
//           </CustomButton>
//         </div>
//       </div>
//       {/* <Footer /> */}
//       <Footer2  />
//     </div>
//   );
// }


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaInstagram, FaWhatsapp } from "react-icons/fa";
// import { Button } from "./ui/button";
// import { CustomButton } from "./ui/custombutton";
// import Footer from "./footer";
// import Footer2 from "./footer/footer2";

// export default function NameSignup() {
//   const navigate = useNavigate(); // Add navigation hook
//   const totalSteps = 8;
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: '',
//     city: '',
//     email: '',
//     class: '',
//     subject: '',
//     marks10thClass: '',
//     marks10thMaths: '',
//     marks10thScience: '',
//     marks11thClass: '',
//     marks11thMaths: '',
//     marks11thScience: '',
//     competitiveExams: '',
//     phoneNumber: ''
//   });

//   const handleNext = () => {
//     if (step < totalSteps) {
//       setStep(step + 1);
//     } 

//     // Always navigate to landing page when on the last step
//     if (step === totalSteps) {
//       navigate('/');
//     }

//   };

//   const handlePrevious = () => {
//     if (step > 1) {
//       setStep(step - 1);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const progress = (step / totalSteps) * 100;

//   return (
//     <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-blue-50 to-white">
//       <h1 className="text-4xl   mt-12  max-sm:mb-20  max-sm:mt-38 "  >
//         STUDY<span className=" font-bold text-black">table</span>
//       </h1>

//       <div className="flex flex-col items-center w-full max-w-md mt-6">
//         {step === 1 && (
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="What is your Name? "
//             className="border-b border-gray-400 outline-none text-lg md:w-full py-2 mb-10  "
//           />
//         )}
//         {step === 2 && (
//           <input
//             type="text"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             placeholder="City"
//             className="border-b border-gray-400 outline-none text-lg md:w-full py-2 mb-10"
//           />
//         )}
//         {step === 3 && (
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email Address"
//             className="border-b border-gray-400 outline-none text-lg md:w-full py-2 mb-10"
//           />
//         )}
//         {step === 4 && (
//           <select
//             name="class"
//             value={formData.class}
//             onChange={handleChange}
//             className="border-b border-gray-400 outline-none text-lg md:w-full max-md:w-53    py-2 mb-10"
//           >
//             <option value="" disabled selected >
//               Class(Academic year 2025-26)
//             </option>
//             <option value="math">Class 1</option>
//             <option value="science">Class 2</option>
//             <option value="english">Class 3</option>
//           </select>
//         )}
//         {step === 5 && (
//           <select
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             className="border-b border-gray-400 outline-none text-lg md:w-full max-md:w-44 py-2 mb-10"
//           >
//             <option value="" disabled selected >
//               Subject
//             </option>
//             <option value="math">Math</option>
//             <option value="science">Science</option>
//             <option value="english">English</option>
//           </select>
//         )}
//         {step === 6 && (
//           <div className="w-full max-h-50 overflow-y-auto no-scrollbar">
//             <h2 className="text-lg font-medium mb-4 text-center max-lg:text-2xl lg:text-">10th Class Details</h2>
//             <div className="flex flex-col max-sm:items-center ">
//               <select
//                 name="marks10thClass"
//                 value={formData.marks10thClass}
//                 onChange={handleChange}
//                 className="border-b border-gray-400 outline-none text-lg w-full  max-sm:w-44 sm-md:w-10  sm:w-auto py-2 mb-4"
//               >
//                 <option value="" disabled selected>
//                   Marks in 10th <span className="sm-md:hidden">Class</span>
//                 </option>
//                 <option value="90">More than 90%</option>
//                 <option value="75">More than 75%</option>
//                 <option value="60">More than 60%</option>
//               </select>

//               <select
//                 name="marks10thMaths"
//                 value={formData.marks10thMaths}
//                 onChange={handleChange}
//                 className="border-b border-gray-400 outline-none text-lg w-full max-sm:w-40 sm:w-auto py-2 mb-4"
//               >
//                 <option value="" disabled selected>
//                   Marks in Maths
//                 </option>
//                 <option value="90">More than 90%</option>
//                 <option value="75">More than 75%</option>
//                 <option value="60">More than 60%</option>
//               </select>

//               <select
//                 name="marks10thScience"
//                 value={formData.marks10thScience}
//                 onChange={handleChange}
//                 className="border-b border-gray-400 outline-none text-lg w-full sm:w-auto  max-sm:w-40 py-2 mb-10"
//               >
//                 <option value="" disabled selected>
//                   Marks in Science
//                 </option>
//                 <option value="90">More than 90%</option>
//                 <option value="75">More than 75%</option>
//                 <option value="60">More than 60%</option>
//               </select>
//             </div>

//             <h2 className="text-lg font-medium mb-4 text-center max-lg:text-2xl">11th Class Details</h2>
//             <div className="flex flex-col max-sm:items-center">
//               <select
//                 name="marks11thClass"
//                 value={formData.marks11thClass}
//                 onChange={handleChange}
//                 className="border-b border-gray-400 outline-none text-lg w-full max-md:w-40 sm:w-auto py-2 mb-4"
//               >
//                 <option value="" disabled selected>
//                   Marks in 11th Class
//                 </option>
//                 <option value="90">More than 90%</option>
//                 <option value="75">More than 75%</option>
//                 <option value="60">More than 60%</option>
//               </select>

//               <select
//                 name="marks11thMaths"
//                 value={formData.marks11thMaths}
//                 onChange={handleChange}
//                 className="border-b border-gray-400 outline-none text-lg w-full max-sm:w-40 sm:w-auto py-2 mb-4"
//               >
//                 <option value="" disabled selected>
//                   Marks in Maths
//                 </option>
//                 <option value="90">More than 90%</option>
//                 <option value="75">More than 75%</option>
//                 <option value="60">More than 60%</option>
//               </select>

//               <select
//                 name="marks11thScience"
//                 value={formData.marks11thScience}
//                 onChange={handleChange}
//                 className="border-b border-gray-400 outline-none text-lg w-full sm:w-auto  max-sm:w-40 py-2 mb-10"
//               >
//                 <option value="" disabled selected>
//                   Marks in Science
//                 </option>
//                 <option value="90">More than 90%</option>
//                 <option value="75">More than 75%</option>
//                 <option value="60">More than 60%</option>
//               </select>
//             </div>
//           </div>
//         )}
//         {step === 7 && (
//           <input
//             type="text"
//             name="competitiveExams"
//             value={formData.competitiveExams}
//             onChange={handleChange}
//             placeholder="Competitive Exams"
//             className="border-b border-gray-400 outline-none text-lg md:w-full py-2 mb-10"
//           />
//         )}
//         {step === 8 && (
//           <input
//             type="tel"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             placeholder="Phone Number"
//             className="border-b border-gray-400 outline-none text-lg md:w-full py-2 mb-10"
//           />
//         )}

//         <div className="w-2/3 sm:hidden mt-20 sm-lg:mb-4  max-sm:mt-10 ">
//           <div className="w-full bg-gray-300 h-2 rounded-full">
//             <div
//               className="bg-blue-500 h-2 rounded-full"
//               style={{ width: `${progress}%` }}
//             ></div>
//           </div>
//         </div>

//         <div className="flex  justify-between items-center max-sm:w-70  sm:w-2xl mt-16   max-sm:mb-35">
//           <CustomButton
//             variant="outline"
//             className=" sm:px-8  max-sm:p-1 max-sm:gap-4 max-sm:w-30 "
//             onClick={handlePrevious}
//             disabled={step === 1}
//           >
//             ← Previous
//           </CustomButton>

//           <div className="w-1/3 max-sm:hidden">
//             <div className="w-full bg-gray-300 h-2 rounded-full">
//               <div
//                 className="bg-blue-500 h-2 rounded-full"
//                 style={{ width: `${progress}%` }}
//               ></div>
//             </div>
//           </div>

//           <CustomButton
//             className="sm:px-8 max-sm:p-1 max-sm:w-25"
//             onClick={handleNext}
//             disabled={step === totalSteps}
//           >
//             {step === totalSteps ? 'Finish' : 'Next →'}
//           </CustomButton>
//         </div>
//       </div>
//       <Footer2  />
//     </div>
//   );
// }



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";
import { CustomButton } from "./ui/custombutton";
import Footer from "./footer";
import Footer2 from "./footer/footer2";

export default function NameSignup() {
  const navigate = useNavigate(); // Add navigation hook
  const totalSteps = 8;
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    class: '',
    subject: '',
    marks10thClass: '',
    marks10thMaths: '',
    marks10thScience: '',
    marks11thClass: '',
    marks11thMaths: '',
    marks11thScience: '',
    competitiveExams: '',
    phoneNumber: ''
  });

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }

    // Always navigate to landing page when on the last step
    if (step === totalSteps) {
      navigate('/');
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const progress = (step / totalSteps) * 100;

  return (
    <div className={`flex flex-col items-center  justify-between min-h-screen bg-gradient-to-b from-blue-50 to-white`}>
      <h1 className={`text-4xl   mt-12  max-sm:mb-10  max-sm:mt-38 
        ${step === 6 ? 'max-sm:mb-10' : 'max-sm:mb-20'} `}  > 
        STUDY<span className=" font-bold text-black">table</span>
      </h1>

      <div className="flex flex-col items-center    w-full max-w-md mt-6">
        {step === 1 && (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="What is your Name? "
            className="border-b border-gray-400 outline-none text-lg md:w-full py-2 mb-10  "
          />
        )}
        {step === 2 && (
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="border-b border-gray-400 outline-none text-lg md:w-full py-2 mb-10"
          />
        )}
        {step === 3 && (
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="border-b border-gray-400 outline-none text-lg md:w-full py-2 mb-10"
          />
        )}
        {step === 4 && (
          <select
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="border-b border-gray-400 outline-none text-lg md:w-full max-md:w-53    py-2 mb-10"
          >
            <option value="" disabled selected >
              Class(Academic year 2025-26)
            </option>
            <option value="math">Class 1</option>
            <option value="science">Class 2</option>
            <option value="english">Class 3</option>
          </select>
        )}
        {step === 5 && (
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border-b border-gray-400 outline-none text-lg md:w-full max-md:w-44 py-2 mb-10"
          >
            <option value="" disabled selected >
              Subject
            </option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="english">English</option>
          </select>
        )}
        {step === 6 && (
          <div className="w-full max-h-50 overflow-y-auto no-scrollbar">
            <h2 className="text-lg font-medium mb-4  text-center max-lg:text-2xl lg:text-">10th Class Details</h2>
            <div className="flex flex-col max-sm:items-center ">
              <select
                name="marks10thClass"
                value={formData.marks10thClass}
                onChange={handleChange}
                className="border-b border-gray-400 outline-none text-lg w-full  max-sm:w-44 sm-md:w-10  sm:w-auto py-2 mb-4"
              >
                <option value="" disabled selected>
                  Marks in 10th <span className="sm-md:hidden">Class</span>
                </option>
                <option value="90">More than 90%</option>
                <option value="75">More than 75%</option>
                <option value="60">More than 60%</option>
              </select>

              <select
                name="marks10thMaths"
                value={formData.marks10thMaths}
                onChange={handleChange}
                className="border-b border-gray-400 outline-none text-lg w-full max-sm:w-40 sm:w-auto py-2 mb-4"
              >
                <option value="" disabled selected>
                  Marks in Maths
                </option>
                <option value="90">More than 90%</option>
                <option value="75">More than 75%</option>
                <option value="60">More than 60%</option>
              </select>

              <select
                name="marks10thScience"
                value={formData.marks10thScience}
                onChange={handleChange}
                className="border-b border-gray-400 outline-none text-lg w-full sm:w-auto  max-sm:w-40 py-2 mb-10"
              >
                <option value="" disabled selected>
                  Marks in Science
                </option>
                <option value="90">More than 90%</option>
                <option value="75">More than 75%</option>
                <option value="60">More than 60%</option>
              </select>
            </div>

            <h2 className="text-lg font-medium mb-4 text-center max-lg:text-2xl">11th Class Details</h2>
            <div className="flex flex-col max-sm:items-center">
              <select
                name="marks11thClass"
                value={formData.marks11thClass}
                onChange={handleChange}
                className="border-b border-gray-400 outline-none text-lg w-full max-md:w-40 sm:w-auto py-2 mb-4"
              >
                <option value="" disabled selected>
                  Marks in 11th Class
                </option>
                <option value="90">More than 90%</option>
                <option value="75">More than 75%</option>
                <option value="60">More than 60%</option>
              </select>

              <select
                name="marks11thMaths"
                value={formData.marks11thMaths}
                onChange={handleChange}
                className="border-b border-gray-400 outline-none text-lg w-full max-sm:w-40 sm:w-auto py-2 mb-4"
              >
                <option value="" disabled selected>
                  Marks in Maths
                </option>
                <option value="90">More than 90%</option>
                <option value="75">More than 75%</option>
                <option value="60">More than 60%</option>
              </select>

              <select
                name="marks11thScience"
                value={formData.marks11thScience}
                onChange={handleChange}
                className="border-b border-gray-400 outline-none text-lg w-full sm:w-auto  max-sm:w-40 py-2 mb-10"
              >
                <option value="" disabled selected>
                  Marks in Science
                </option>
                <option value="90">More than 90%</option>
                <option value="75">More than 75%</option>
                <option value="60">More than 60%</option>
              </select>
            </div>
          </div>
        )}
        {step === 7 && (
          <input
            type="text"
            name="competitiveExams"
            value={formData.competitiveExams}
            onChange={handleChange}
            placeholder="Competitive Exams"
            className="border-b border-gray-400 outline-none text-lg md:w-full py-2 mb-10"
          />
        )}
        {step === 8 && (
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border-b border-gray-400 outline-none text-lg md:w-full py-2 mb-10"
          />
        )}

        <div className="w-2/3 sm:hidden mt-20 sm-lg:mb-4  max-sm:mt-10 ">
          <div className="w-full bg-gray-300 h-2 rounded-full">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className={`flex  justify-between items-center   max-sm:w-70 sm:w-2xl mt-16    ${step === 6 ? ' p-2  max-sm:mt-10 ' : ''}  max-sm:mb-35`}>
          <CustomButton
            variant="outline"
            className=" sm:px-8  max-sm:p-1 max-sm:py-2 max-sm:gap-4 max-sm:w-30 "
            onClick={handlePrevious}
            disabled={step === 1}
          >
            ← Previous
          </CustomButton>

          <div className="w-1/3 max-sm:hidden">
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <CustomButton
            className="sm:px-8 max-sm:p-1 max-sm:w-25 max-sm:py-2 "
            onClick={handleNext}
          >
            {step === totalSteps ? 'Finish' : 'Next →'}
          </CustomButton>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}