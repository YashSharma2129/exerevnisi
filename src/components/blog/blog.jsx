import React from "react";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {

    const navigate = useNavigate();

    const handleadmission=()=>{
        navigate('/signup');
       }
    

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-900 flex flex-col items-center">
            <header className="w-full p-5 text-xl flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center gap-8">
                    <span className="text-2xl font-bold">
                        STUDY<span className="font-black">table</span>
                    </span>
                </div>
                <button onClick={handleadmission} className="bg-blue-600 text-white px-19 py-2 text-sm rounded-md hover:bg-blue-700">
                    Apply for admission
                </button>



            </header>

            <div className="w-full max-w-7xl flex px-4">
                <nav className="w-1/5 p-5 border-r border-gray-300">
                    <ul>
                        <li className="text-blue-600 font-bold text-sm">Overview</li>
                        <li className="text-gray-600 font-semibold mt-2 text-sm">Product Strategy</li>
                        <li className="text-gray-400 mt-1 text-sm">By Learning</li>
                        <li className="text-gray-400 mt-1 text-sm">By Assessing</li>
                        <li className="text-gray-400 mt-1 text-sm">By Managing</li>
                    </ul>
                </nav>

                <main className="w-3/5 p-10 mx-auto">
                    <section>
                        <h2 className="text-2xl font-bold text-center">Product strategy</h2>
                        <p className="mt-4 text-gray-700 max-w-xl">
                            When we imagine the teaching process, I see two important activities. First, where students take a
                            particular lecture or class where a teacher explains a topic and important concepts. Second, part of the
                            learning happens when a student goes out of the class, reads by himself, and solves questions.
                        </p>
                        <p className="mt-4 font-semibold max-w-xl">
                            That second part
                            <span className="font-normal">
                                constitutes reading, doing questions, revising topics, mock tests, and practice sheets. Our focus is on
                                three core parts:
                            </span>
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Learning</li>
                            <li>Assessing</li>
                            <li>Managing</li>
                        </ul>
                    </section>
                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-center">By Learning</h2>
                        <p className="mt-4 text-gray-700 max-w-xl">
                            it means learning by reading and practicing questions. I am breaking it for two  parts. 1. First time learning and growing : Linear move 2. Revision and Reassuring :   In General, A student opens a Book or sheet by a coaching institute or a question bank book to  start reading the concept and do practice from them. There are some good books. Similarly  there are good question bank and coaching material. Every student starts from the beginning  and travels as he or she flips the pages.

                            One problem is the sequence of theory and question. They are mostly separate. Few  theoretical part can only be understood unless prior theory has been understood completely and  that comes only when you have practice it enough. This is critical in learning as the students  mental state gets affected and it is such mental states compounded over the years that results  in a better or worse student. These minor events creates a huge difference in overall  performance of a student over the year. Now imagine someone is sitting right by the side of  student at his private study hour. That someone knows the book, syllabus and its every details  of it. And he give a page to  the student for the immediate study. He watches the student  carefully while the learning process goes on. And when it ends he hands over another sheet.  Then the student learns this one. Again, at the end of the sesion that someone analyzes all the  previous sessions and gives the student another sheet. And the process continues like  that…Crafting the learning process. When and what to read. When and what question to solve.  We do this.

                            Another problem arises when he gets stuck. Either he needs to wait for another day or  see  the solution. Some smart student goes back reads the question and tries it back. This process is  very emotional. Many student see the solution and makes up his mind whether it is easy or  hard. Whether he will be able to do the question next time or not. Learning is hard. And anyone  who says he learns easy is basically a lie. It takes rigorous training in that particular subject for  hours or month that makes a student or a person intuitive enough or smart enough to tackle the  question easily or understand that concept. It is also that rigourous moment where the  difference occurs. It is very emotional and affects a student psychologically for the subject and  the study in general.

                            Now imagine that someone, lets call him Mr. B and I will use this name through the document to  describe our product as a human, who is already at the study table. When the student gets  stuck. Mr. B hands over a small sheet. That sheet contains only a hint to go just one more step  for the question. That sheet contains only that concept that needed to be applied to that  particular question. That sheet contains only that concept that will help the student to  understand the article he is reading. And once the student is done, he takes away the smaller  sheet and walks him back to the question or article he was engaged with. Mr. B is different than  a human teacher. He never gets frustrated. He never gets bored. He got all the time for that  student only. The student feels slight tough, as learning is tough, but he never gets frustrated as  a whole. He never goes anywhere else or looks for any alternative. He gets all the help he need  by Mr. B. We do this.
                        </p>
                        <p className="mt-4">
                            A major challenge is the sequence of theory and questions. Many students struggle to connect the two,
                            impacting their performance over time. Imagine if someone—let's call him Mr. B—sits beside them, guiding
                            them through study sessions step by step.
                        </p>
                    </section>
                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-center">By Assessing</h2>
                        <p className="mt-4 text-gray-700">
                            it means trying practice sheets exam and try to understand where they land.  Primarily Assessment happens in two ways.

                            a) when a teacher asks a question to the whole  class and demands for the answer.
                            b)Test series. Many students creates their own exam  sessions and tries to assess them.   The problem with these assessments are

                            1. They are in general.
                            2. They are on a fixed time.
                            3.  It takes time to get the result.
                            4. When a student do get the result they see the performance as a  function of question asked and subject entertained in the exam.
                            5. They are also a fixed number  of times.
                        </p>
                        <p className="mt-4">
                            Now imagine if we can create an assessment after fixed number of concept. The assessment  is unlimited and the students number of hours will determine when he gets one. What topic of  assessment that needs to be done. Remember Mr. B was at the table. He knows where the  problem was faced earlier and hence how a assessment should be created to test whether that  concept is learned and understood or not! Mr. B has no other thing to do except thinking about  that student. So he hands over the test result immediately. We create specific assessment for  that student. Assessment happens whenever a student has studied enough that can clutter his  thought and he needs an assessment. We do all that.
                        </p>
                    </section>
                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-center">By Managing</h2>
                        <p className="mt-4 text-gray-700">
                            it means keeping track of what happens in learning and assessing along with  exams, schools and other factors which affects their life and are key aspects of their learning.   There is a context of learning and students have some exam to crack. Students constantly need  to check whether they are meeting the demands of the exam or not!


                        </p>
                        <p className="mt-4">
                            This is mostly done by none. Only few students do make charts and plan for themselves. Most  of them just follow school and college framework. This gets highly unmanaged. This is the  reason why 60% student quit their preparation by the time they reach 12th standard for JEE or  NEET. Another 20% also shift to boards six months before the exam. They start going on zig  zag path and it is this mis management at this time which effects their outcome hugely. Now  imagine if we keep tracking the exam requirement from the beginning. Keep proritizing the study  show that minimum is always insured. Students , based on their number of hour and capacity,  gets their own particular plan. Imagine while we teaching we expose them with the questions  and study in a way that consecutively takes care of exam. Since now they do not need to worry  for theminimum they can remain calm and feel more confident. No one knows what could be the  highest height but we can, for sure, constrained the minimum threshold height. And when there  is this level of management they will do wonders. We do wonders.                        </p>
                    </section>
                </main>
                <div className="w-1/5"></div>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Crafted for all your academic needs.
                </h2>
                <button className="w-auto bg-[#2563EB] text-white px-6 py-3 text-base rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
                    Get Your Entry
                </button>
            </div>

            <footer className="bg-gray-900 text-white text-center p-5 mt-10 w-full">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default BlogPage;