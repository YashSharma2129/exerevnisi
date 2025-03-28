

// import React, { useState } from "react";

// const FAQSection = () => {
//   const [activeFaq, setActiveFaq] = useState(null);

//   const faqs = [
//     { question: 'How does STUDYTable AI tutor work?', answer: 'Our AI-powered system analyzes your performance across various tests and creates personalized study recommendations.' },
//     { question: 'Can STUDYTable help with both school and competitive exams?', answer: 'Yes, our platform caters to JEE, NEET, and board exam preparation with specialized content for each.' },
//     { question: 'How much time do I need to spend on STUDYTable daily?', answer: 'It depends on your learning pace and goals. Our AI tutor creates personalized schedules based on your needs.' },
//     { question: 'Do I need prior knowledge before starting with STUDYTable?', answer: 'No, the AI tutor adjusts to your current level and helps you progress from there.' }
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen  text-center px-4 max-sm:mt-10">
//       <div className="max-w-5xl w-full mx-auto mb-20">
//         <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//           Frequently Asked Questions
//         </h2>
    
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div key={index} className=" rounded-lg shadow-md overflow-hidden">
//               <button
//                 className="w-full px-6 py-4 text-left text-black font-medium flex justify-between items-center"
//                 onClick={() => setActiveFaq(activeFaq === index ? null : index)}
//               >
//                 {faq.question}
//                 <svg
//                   className={`w-5 h-5 transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//               <div className={`px-6 py-4 bg-white text-black transition-all duration-300 ${activeFaq === index ? 'block' : 'hidden'}`}>
//                 {faq.answer}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQSection;

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQSection = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      question: "How does STUDYTable AI tutor work?",
      answer:
        "Our AI-powered system analyzes your performance across various tests and creates personalized study recommendations.",
    },
    {
      question: "Can STUDYTable help with both school and competitive exams?",
      answer:
        "Yes, our platform caters to JEE, NEET, and board exam preparation with specialized content for each.",
    },
    {
      question: "How much time do I need to spend on STUDYTable daily?",
      answer:
        "It depends on your learning pace and goals. Our AI tutor creates personalized schedules based on your needs.",
    },
    {
      question: "Do I need prior knowledge before starting with STUDYTable?",
      answer:
        "No, the AI tutor adjusts to your current level and helps you progress from there.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 max-sm:mt-10">
      <div className="max-w-5xl w-full mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden">
              {/* Question Box */}
              <button
                className={`w-full px-6 py-5 text-left text-black font-semibold flex justify-between items-center hover:bg-blue-50 transition-colors duration-300 ${
                  activeFaq === index ? "bg-blue-100" : "bg-white"
                }`}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      activeFaq === index ? "bg-blue-600" : "bg-gray-400"
                    }`}
                  ></span>
                  {faq.question}
                </span>
                {activeFaq === index ? (
                  <FaChevronUp className="text-blue-600" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>

              {/* Answer Box */}
              {activeFaq === index && (
                <div className="px-6 py-4 mt-2 bg-blue-50 border-l-4 border-blue-600 rounded-lg shadow-md">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;