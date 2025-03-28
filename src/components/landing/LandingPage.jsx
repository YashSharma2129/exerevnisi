import React from 'react'
import OptimizedHeroSection from './OptimizedHeroSection'
import PracticeSection from './PracticeSection'
import UnlimitedPracticeSection from './UnlimitedPracticeSection'
import PersonalizedSection from './PersonalizedSection'
import AcademicManagement from './AcademicManagement'
import ResearchSection from './ResearchSection'
import FAQSection from './FAQSection'
import Footer from '../footer'
import Footer2 from '../footer/footer2'
import DigitalPotentialSection from './DigitalPotentialSection'

import { ConfettiButtonDemo } from '../animations/confettibutton'
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      <OptimizedHeroSection />

      <div className="py-12 md:pb-20  lg:pt-1 md:pt-0  bg-gradient-to-b from-white to-blue-50  ">
        <div className="container  mx-auto px-4 md:px-6">
          <PracticeSection />
          
          {/* <DigitalPotentialSection /> */}
          <UnlimitedPracticeSection />
          <PersonalizedSection />
          <AcademicManagement />
          <ResearchSection />
          <FAQSection />

          <div className="flex flex-col items-center justify-center h-56  lg:h-full">
            <h1 className="text-black   max-sm:text-3xl  sm:text-4xl lg:text-6xl font-semibold text-center c-18 lg:mb-40 max-sm:mb-14 ">
              Crafted for your all <br />  academic needs
            </h1>
            {/* <button className="px-8 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
              Get your Entry
            </button> */}

            <ConfettiButtonDemo className="bg-blue-600 text-white px-12 mt-4   py-8  max-sm:py-6 max-sm:px-15 max-sm:mt-10 rounded-lg text-xl font-medium hover:bg-blue-700 transition">
              Get your Entry
            </ConfettiButtonDemo>

          </div>



        </div>
      </div>
      {/* <Footer /> */}
      <Footer2 />

    </div>
  )
}
