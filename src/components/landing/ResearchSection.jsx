
import React from "react";

export default function ResearchSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  ">
      <div className="border border-blue-700 rounded-lg p-10 max-w-5xl w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">How we came to this?</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          We observed and researched for three years in a variety of <br />students.
          Where the best needs more attention to do better <br />, and the struggling
          students need more attention to improve <br /> their abilities. All students
          need personal attention. Based on <br /> the notion of "Personal attention,"
          we have built our algorithm  <br />and AI tutor to cater to each child uniquely.
        </p>
        <a href="/blog" className="text-blue-600 font-medium hover:underline">
          Read the full story →
        </a>
      </div>
    </div>
  );
}