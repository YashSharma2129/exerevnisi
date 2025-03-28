// import React, { useState } from "react";
// import Footer from "../footer";
// import Academicneeds from '../Notice/academicneeds';
// import { FaChevronDown } from "react-icons/fa";
// import Footer2 from "../footer/footer2";
// import { useNavigate } from "react-router-dom";


// const Blog2 = () => {
//     const [showSidebar, setShowSidebar] = useState(false);

//     const navigate = useNavigate();

//     const handleadmission = () => {
//         navigate('/signup');
//     }


//     return (
//         <div className="min-h-screen bg-gray-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Header */}
//                 <header className="flex flex-col md:flex-row justify-between items-center py-6">
//                     <h1 className="text-2xl font-bold text-gray-900">
//                         <span className="text-gray-500">STUDY</span>table
//                     </h1>
//                     <div className="sticky top-0 bg-gray-50 z-10">
//                         <button onClick={handleadmission} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4 md:mt-0 md:order-last max-sm:py-1 max-sm:px-3 ">
//                             Apply for admission
//                         </button>
//                     </div>

//                 </header>

//                 {/* Main Content */}
//                 <div className="flex flex-col md:flex-row gap-6">
//                     {/* Sidebar */}
//                     <aside className="w-full md:w-1/4 bg-gray-50 shadow-sm rounded-lg p-4 hidden md:block">
//                         <h2 className="text-lg font-semibold text-blue-600">Overview</h2>
//                         <ul className="mt-4 space-y-2 text-gray-600">
//                             <li className="font-semibold text-black cursor-pointer">Product Strategy</li>
//                             <li className="cursor-pointer">By Learning</li>
//                             <li className="cursor-pointer">By Assessing</li>
//                             <li className="cursor-pointer">By Managing</li>
//                         </ul>
//                     </aside>

//                     {/* Dropdown for Sidebar in Mobile and Tablet */}
//                     <div className="md:hidden flex justify-center mb-4 items-center">
//                         <button
//                             className="bg-transparent text-black px-4 py-2 w-full rounded-md border-b border-gray-300 flex items-center"
//                             onClick={() => setShowSidebar(!showSidebar)}
//                         >
//                             Product Strategy <FaChevronDown className="justify-end max-sm:ml-30 sm-md:ml-250" />
//                         </button>
//                     </div>
//                     {showSidebar && (
//                         <aside className="w-full bg-gray-50 shadow-sm rounded-lg p-4 md:hidden">
//                             <h2 className="text-lg font-semibold text-blue-600">Overview</h2>
//                             <ul className="mt-4 space-y-2 text-gray-600">
//                                 <li className="font-semibold text-black cursor-pointer">Product Strategy</li>
//                                 <li className="cursor-pointer">By Learning</li>
//                                 <li className="cursor-pointer">By Assessing</li>
//                                 <li className="cursor-pointer">By Managing</li>
//                             </ul>
//                         </aside>
//                     )}

//                     {/* Updates Section */}
//                     <div className="flex flex-col md:w-3/4 max-sm:px-4" >
//                         <section className="mt-10 max-sm:mt-5  mx-auto max-w-3xl">
//                             <h2 className="text-2xl font-bold text-center">Product Strategy</h2>
//                             <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
//                                 When we imagine the teaching process, I see two important activities. First, where students take a
//                                 particular lecture or class where a teacher explains a topic and important concepts. Second, part of the
//                                 learning happens when a student goes out of the class, reads by himself, and solves questions.
//                             </p>
//                             <p className="mt-4 font-semibold max-w-3xl mx-auto">
//                                 That second part
//                                 <span className="font-normal">
//                                     constitutes reading, doing questions, revising topics, mock tests, and practice sheets. Our focus is on
//                                     three core parts:
//                                 </span>
//                             </p>
//                             <ul className="list-disc pl-6 mt-2 max-w-3xl mx-auto">
//                                 <li>Learning</li>
//                                 <li>Assessing</li>
//                                 <li>Managing</li>
//                             </ul>
//                         </section>

//                         <section className="mt-10 mx-auto max-w-3xl">
//                             <h2 className="text-2xl font-bold text-center">By Learning</h2>
//                             <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
//                                 It means learning by reading and practicing questions. I am breaking it for two parts. 1. First time learning and growing: Linear move 2. Revision and Reassuring: In General, A student opens a Book or sheet by a coaching institute or a question bank book to start reading the concept and do practice from them. There are some good books. Similarly, there are good question bank and coaching material. Every student starts from the beginning and travels as he or she flips the pages.
//                             </p>
//                             <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
//                                 One problem is the sequence of theory and question. They are mostly separate. Few theoretical parts can only be understood unless prior theory has been understood completely and that comes only when you have practiced it enough. This is critical in learning as the student's mental state gets affected and it is such mental states compounded over the years that results in a better or worse student. These minor events create a huge difference in the overall performance of a student over the year. Now imagine someone is sitting right by the side of the student at his private study hour. That someone knows the book, syllabus, and its every detail. And he gives a page to the student for immediate study. He watches the student carefully while the learning process goes on. And when it ends he hands over another sheet. Then the student learns this one. Again, at the end of the session, that someone analyzes all the previous sessions and gives the student another sheet. And the process continues like that…Crafting the learning process. When and what to read. When and what question to solve. We do this.
//                             </p>
//                             <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
//                                 Another problem arises when he gets stuck. Either he needs to wait for another day or see the solution. Some smart students go back read the question and try it back. This process is very emotional. Many students see the solution and make up their mind whether it is easy or hard. Whether he will be able to do the question next time or not. Learning is hard. And anyone who says he learns easily is basically lying. It takes rigorous training in that particular subject for hours or months that makes a student or a person intuitive enough or smart enough to tackle the question easily or understand that concept. It is also that rigorous moment where the difference occurs. It is very emotional and affects a student psychologically for the subject and the study in general.
//                             </p>
//                             <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
//                                 Now imagine that someone, let's call him Mr. B and I will use this name throughout the document to describe our product as a human, who is already at the study table. When the student gets stuck. Mr. B hands over a small sheet. That sheet contains only a hint to go just one more step for the question. That sheet contains only that concept that needed to be applied to that particular question. That sheet contains only that concept that will help the student to understand the article he is reading. And once the student is done, he takes away the smaller sheet and walks him back to the question or article he was engaged with. Mr. B is different than a human teacher. He never gets frustrated. He never gets bored. He got all the time for that student only. The student feels slightly tough, as learning is tough, but he never gets frustrated as a whole. He never goes anywhere else or looks for any alternative. He gets all the help he needs by Mr. B. We do this.
//                             </p>
//                             <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
//                                 A major challenge is the sequence of theory and questions. Many students struggle to connect the two, impacting their performance over time. Imagine if someone—let's call him Mr. B—sits beside them, guiding them through study sessions step by step.
//                             </p>
//                         </section>
//                         <section className="mt-10 mx-auto max-w-3xl">
//                             <h2 className="text-2xl font-bold text-center">By Assessing</h2>
//                             <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
//                                 It means trying practice sheets exam and try to understand where they land. Primarily Assessment happens in two ways.
//                             </p>
//                             <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
//                                 a) when a teacher asks a question to the whole class and demands for the answer.
//                                 b) Test series. Many students create their own exam sessions and try to assess them. The problem with these assessments are
//                             </p>
//                             <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
//                                 1. They are in general.
//                                 2. They are on a fixed time.
//                                 3. It takes time to get the result.
//                                 4. When a student does get the result they see the performance as a function of the question asked and subject entertained in the exam.
//                                 5. They are also a fixed number of times.
//                             </p>
//                             <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
//                                 Now imagine if we can create an assessment after a fixed number of concepts. The assessment is unlimited and the student's number of hours will determine when he gets one. What topic of assessment that needs to be done. Remember Mr. B was at the table. He knows where the problem was faced earlier and hence how an assessment should be created to test whether that concept is learned and understood or not! Mr. B has no other thing to do except think about that student. So he hands over the test result immediately. We create specific assessments for that student. Assessment happens whenever a student has studied enough that can clutter his thoughts and he needs an assessment. We do all that.
//                             </p>
//                         </section>
//                         <section className="mt-10 mx-auto max-w-3xl">
//                             <h2 className="text-2xl font-bold text-center">By Managing</h2>
//                             <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
//                                 It means keeping track of what happens in learning and assessing along with exams, schools, and other factors which affect their life and are key aspects of their learning. There is a context of learning and students have some exam to crack. Students constantly need to check whether they are meeting the demands of the exam or not!
//                             </p>
//                             <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
//                                 This is mostly done by none. Only a few students do make charts and plan for themselves. Most of them just follow the school and college framework. This gets highly unmanaged. This is the reason why 60% of students quit their preparation by the time they reach the 12th standard for JEE or NEET. Another 20% also shift to boards six months before the exam. They start going on a zig-zag path and it is this mismanagement at this time which affects their outcome hugely. Now imagine if we keep tracking the exam requirement from the beginning. Keep prioritizing the study so that the minimum is always insured. Students, based on their number of hours and capacity, get their own particular plan. Imagine while we are teaching we expose them to the questions and study in a way that consecutively takes care of the exam. Since now they do not need to worry about the minimum they can remain calm and feel more confident. No one knows what could be the highest height but we can, for sure, constrain the minimum threshold height. And when there is this level of management they will do wonders. We do wonders.
//                             </p>
//                         </section>
//                     </div>
//                 </div>
//             </div>

//             {/* Academic Needs Section */}
//             <div className="lg:mt-40 max-lg:mt-10  ">
//                 <Academicneeds />
//             </div>

//             <Footer2 />

//         </div>
//     );
// };

// export default Blog2;






import React, { useState, useRef } from "react";
import Footer from "../footer";
import Academicneeds from '../Notice/academicneeds';
import { FaChevronDown } from "react-icons/fa";
import Footer2 from "../footer/footer2";
import { useNavigate } from "react-router-dom";

const Blog2 = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const navigate = useNavigate();

    // Create refs specifically for headings
    const productStrategyHeadingRef = useRef(null);
    const learningHeadingRef = useRef(null);
    const assessingHeadingRef = useRef(null);
    const managingHeadingRef = useRef(null);

    const handleadmission = () => {
        navigate('/signup');
    }

    // Improved scroll to heading function
    const scrollToHeading = (headingRef) => {
        if (headingRef.current) {
            // Adjust scroll position to account for header/navbar height
            const yOffset = -220; // Adjust this value based on your header/navbar height
            const element = headingRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({ top: y, behavior: 'smooth' });
            setShowSidebar(false); // Close sidebar on mobile after selection
        }
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
                        <button onClick={handleadmission} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4 md:mt-0 md:order-last max-sm:py-1 max-sm:px-3 ">
                            Apply for admission
                        </button>
                    </div>
                </header>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar */}
                    <aside className="w-full md:w-1/4 bg-gray-50 shadow-sm rounded-lg p-4 hidden md:block">
                        <h2 className="text-lg font-semibold text-blue-600">Overview</h2>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li 
                                className="font-semibold text-black cursor-pointer"
                                onClick={() => scrollToHeading(productStrategyHeadingRef)}
                            >
                                Product Strategy
                            </li>
                            <li 
                                className="cursor-pointer"
                                onClick={() => scrollToHeading(learningHeadingRef)}
                            >
                                By Learning
                            </li>
                            <li 
                                className="cursor-pointer"
                                onClick={() => scrollToHeading(assessingHeadingRef)}
                            >
                                By Assessing
                            </li>
                            <li 
                                className="cursor-pointer"
                                onClick={() => scrollToHeading(managingHeadingRef)}
                            >
                                By Managing
                            </li>
                        </ul>
                    </aside>

                    {/* Dropdown for Sidebar in Mobile and Tablet */}
                    <div className="md:hidden flex justify-center mb-4 items-center">
                        <button
                            className="bg-transparent text-black px-4 py-2 w-full rounded-md border-b border-gray-300 flex items-center"
                            onClick={() => setShowSidebar(!showSidebar)}
                        >
                            Product Strategy <FaChevronDown className="justify-end max-sm:ml-30 sm-md:ml-250" />
                        </button>
                    </div>
                    {showSidebar && (
                        <aside className="w-full bg-gray-50 shadow-sm rounded-lg p-4 md:hidden">
                            <h2 className="text-lg font-semibold text-blue-600">Overview</h2>
                            <ul className="mt-4 space-y-2 text-gray-600">
                                <li 
                                    className="font-semibold text-black cursor-pointer"
                                    onClick={() => scrollToHeading(productStrategyHeadingRef)}
                                >
                                    Product Strategy
                                </li>
                                <li 
                                    className="cursor-pointer"
                                    onClick={() => scrollToHeading(learningHeadingRef)}
                                >
                                    By Learning
                                </li>
                                <li 
                                    className="cursor-pointer"
                                    onClick={() => scrollToHeading(assessingHeadingRef)}
                                >
                                    By Assessing
                                </li>
                                <li 
                                    className="cursor-pointer"
                                    onClick={() => scrollToHeading(managingHeadingRef)}
                                >
                                    By Managing
                                </li>
                            </ul>
                        </aside>
                    )}

                    {/* Updates Section */}
                    <div className="flex flex-col md:w-3/4 max-sm:px-4" >
                        <section className="mt-10 max-sm:mt-5  mx-auto max-w-3xl">
                            <h2 ref={productStrategyHeadingRef} className="text-2xl font-bold text-center">Product Strategy</h2>
                            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                                When we imagine the teaching process, I see two important activities. First, where students take a
                                particular lecture or class where a teacher explains a topic and important concepts. Second, part of the
                                learning happens when a student goes out of the class, reads by himself, and solves questions.
                            </p>
                            <p className="mt-4 font-semibold max-w-3xl mx-auto">
                                That second part
                                <span className="font-normal">
                                    constitutes reading, doing questions, revising topics, mock tests, and practice sheets. Our focus is on
                                    three core parts:
                                </span>
                            </p>
                            <ul className="list-disc pl-6 mt-2 max-w-3xl mx-auto">
                                <li>Learning</li>
                                <li>Assessing</li>
                                <li>Managing</li>
                            </ul>
                        </section>

                        <section className="mt-10 mx-auto max-w-3xl">
                            <h2 ref={learningHeadingRef} className="text-2xl font-bold text-center">By Learning</h2>
                            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                                It means learning by reading and practicing questions. I am breaking it for two parts. 1. First time learning and growing: Linear move 2. Revision and Reassuring: In General, A student opens a Book or sheet by a coaching institute or a question bank book to start reading the concept and do practice from them. There are some good books. Similarly, there are good question bank and coaching material. Every student starts from the beginning and travels as he or she flips the pages.
                            </p>
                            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                                One problem is the sequence of theory and question. They are mostly separate. Few theoretical parts can only be understood unless prior theory has been understood completely and that comes only when you have practiced it enough. This is critical in learning as the student's mental state gets affected and it is such mental states compounded over the years that results in a better or worse student. These minor events create a huge difference in the overall performance of a student over the year. Now imagine someone is sitting right by the side of the student at his private study hour. That someone knows the book, syllabus, and its every detail. And he gives a page to the student for immediate study. He watches the student carefully while the learning process goes on. And when it ends he hands over another sheet. Then the student learns this one. Again, at the end of the session, that someone analyzes all the previous sessions and gives the student another sheet. And the process continues like that…Crafting the learning process. When and what to read. When and what question to solve. We do this.
                            </p>
                            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                                Another problem arises when he gets stuck. Either he needs to wait for another day or see the solution. Some smart students go back read the question and try it back. This process is very emotional. Many students see the solution and make up their mind whether it is easy or hard. Whether he will be able to do the question next time or not. Learning is hard. And anyone who says he learns easily is basically lying. It takes rigorous training in that particular subject for hours or months that makes a student or a person intuitive enough or smart enough to tackle the question easily or understand that concept. It is also that rigorous moment where the difference occurs. It is very emotional and affects a student psychologically for the subject and the study in general.
                            </p>
                            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                                Now imagine that someone, let's call him Mr. B and I will use this name throughout the document to describe our product as a human, who is already at the study table. When the student gets stuck. Mr. B hands over a small sheet. That sheet contains only a hint to go just one more step for the question. That sheet contains only that concept that needed to be applied to that particular question. That sheet contains only that concept that will help the student to understand the article he is reading. And once the student is done, he takes away the smaller sheet and walks him back to the question or article he was engaged with. Mr. B is different than a human teacher. He never gets frustrated. He never gets bored. He got all the time for that student only. The student feels slightly tough, as learning is tough, but he never gets frustrated as a whole. He never goes anywhere else or looks for any alternative. He gets all the help he needs by Mr. B. We do this.
                            </p>
                            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                                A major challenge is the sequence of theory and questions. Many students struggle to connect the two, impacting their performance over time. Imagine if someone—let's call him Mr. B—sits beside them, guiding them through study sessions step by step.
                            </p>
                        </section>
                        <section className="mt-10 mx-auto max-w-3xl">
                            <h2 ref={assessingHeadingRef} className="text-2xl font-bold text-center">By Assessing</h2>
                            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                                It means trying practice sheets exam and try to understand where they land. Primarily Assessment happens in two ways.
                            </p>
                            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                                a) when a teacher asks a question to the whole class and demands for the answer.
                                b) Test series. Many students create their own exam sessions and try to assess them. The problem with these assessments are
                            </p>
                            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                                1. They are in general.
                                2. They are on a fixed time.
                                3. It takes time to get the result.
                                4. When a student does get the result they see the performance as a function of the question asked and subject entertained in the exam.
                                5. They are also a fixed number of times.
                            </p>
                            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                                Now imagine if we can create an assessment after a fixed number of concepts. The assessment is unlimited and the student's number of hours will determine when he gets one. What topic of assessment that needs to be done. Remember Mr. B was at the table. He knows where the problem was faced earlier and hence how an assessment should be created to test whether that concept is learned and understood or not! Mr. B has no other thing to do except think about that student. So he hands over the test result immediately. We create specific assessments for that student. Assessment happens whenever a student has studied enough that can clutter his thoughts and he needs an assessment. We do all that.
                            </p>
                        </section>
                        <section className="mt-10 mx-auto max-w-3xl">
                            <h2 ref={managingHeadingRef} className="text-2xl font-bold text-center">By Managing</h2>
                            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                                It means keeping track of what happens in learning and assessing along with exams, schools, and other factors which affect their life and are key aspects of their learning. There is a context of learning and students have some exam to crack. Students constantly need to check whether they are meeting the demands of the exam or not!
                            </p>
                            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                                This is mostly done by none. Only a few students do make charts and plan for themselves. Most of them just follow the school and college framework. This gets highly unmanaged. This is the reason why 60% of students quit their preparation by the time they reach the 12th standard for JEE or NEET. Another 20% also shift to boards six months before the exam. They start going on a zig-zag path and it is this mismanagement at this time which affects their outcome hugely. Now imagine if we keep tracking the exam requirement from the beginning. Keep prioritizing the study so that the minimum is always insured. Students, based on their number of hours and capacity, get their own particular plan. Imagine while we are teaching we expose them to the questions and study in a way that consecutively takes care of the exam. Since now they do not need to worry about the minimum they can remain calm and feel more confident. No one knows what could be the highest height but we can, for sure, constrain the minimum threshold height. And when there is this level of management they will do wonders. We do wonders.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            {/* Academic Needs Section */}
            <div className="lg:mt-40 max-lg:mt-10  ">
                <Academicneeds />
            </div>

            <Footer2 />
        </div>
    );
};

export default Blog2;
