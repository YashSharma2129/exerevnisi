import React from 'react'
import PersonalAssessment from '../svg/personalisedAssesment'
import { AnimatedBeamMultipleOutputDemo } from '../animations/AnimatedBeamMultipleOutputDemo'

export default function PersonalizedSection() {
  return (
    <div className="flex flex-col space-y-8 md:space-y-16 py-10 px-4 md:px-20">
      {/* Personalized Assessment Section */}
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between space-y-4 md:space-y-8 lg:space-y-0 lg:space-x-10">
        {/* Heading */}
        <div className="w-full text-center lg:text-left lg:hidden ">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 lg:mb-0 
">
            Personalized <span className="text-blue-600">Assessment</span>
          </h2>
        </div>

        {/* SVG Component */}
        <div className=" max-sm:w-80 w-full  flex  max-sm:justify-start lg:justify-center  lg:mr-20">
          {/* <PersonalAssessment className="w-full max-w-xs md:max-w-md" /> */}
          <AnimatedBeamMultipleOutputDemo className="" />
        </div>

        {/* Text Content */}
        <div className="w-full text-center  lg:ml-20 lg:text-left">

          <div className="w-full text-center   lg:text-left max-lg:hidden  ">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 lg:mb-0 
">
              Personalized <span className="text-blue-600">Assessment</span>
            </h2>
          </div>

          <p className="text-gray-500 text-base md:text-lg mt-4">
            We measure your learning differently. Not just comparing you among your classmates and peers
            rather, how much you have learnt and how much your skills in each subject have grown. We create tests based on your learning session and exam
            requirement to understand and modify study plans for you.
          </p>
          <p className="text-gray-700 font-medium text-base md:text-lg mt-4">
            The tests are uniquely created for each student to improve and advance their respective knowledge.
          </p>
        </div>
      </div>
    </div>
  )
}