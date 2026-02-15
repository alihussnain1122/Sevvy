import React from "react";

const CreativeJourneySection = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto">
        
        {/*Card */}
        <div className="relative overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-contain bg-no-repeat w-full h-full bg-center"
            style={{
              backgroundImage: "url(/HowItWorks/Inside/Rectangle.webp)",
            }}
          ></div>

          {/* Content - Padding reduced for smaller height */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center py-12 md:py-16 lg:py-20 px-6 md:px-12">
            
            {/* Heading - Size slightly adjusted */}
            <h2 className="mt-2 text-2xl md:text-4xl lg:text-4xl  text-white mb-3 md:mb-4 leading-tight">
              Your Creative Journey{" "}
              <span className="bg-gradient-to-r from-orange-500 via-orange-500 to-orange-200 bg-clip-text text-transparent italic font-Instrument">Starts Here</span>
            </h2>

            {/* Paragraph - Max-width and margin adjusted */}
            <p className="text-sm md:text-base text-white/90 max-w-xl mx-auto mb-6 md:mb-8 leading-relaxed">
              High-performing creative teams rely on clarity, speed, and trust. Sevvy provides a system that
              supports all three without disrupting how teams already work.
            </p>

            {/* Button */}
            <button className="inline-flex items-center gap-3 px-6 md:px-8 py-2 md:py-2.5 bg-orange-500 text-white font-semibold border-white border-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm md:text-base mb-4 cursor-pointer">
  <span>Let's craft together</span>
  
  
  <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full -mr-4 md:-mr-6">
    <svg
      width="18" 
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-black"
    >
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeJourneySection;