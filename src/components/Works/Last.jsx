import React from "react";

const CreativeJourneySection = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        {/*Card */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat w-full h-full bg-center"
            style={{
              backgroundImage: "url(/HowItWorks/Inside/Rectangle.webp)",
            }}
          ></div>

          {/* Content - Responsive padding and text */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center py-8 sm:py-12 md:py-16 lg:py-20 px-2 sm:px-6 md:px-12">
            {/* Heading - Responsive and keeps 'Starts Here' together */}
            <h2 className="mt-2 text-xl sm:text-2xl md:text-4xl lg:text-4xl text-white mb-2 sm:mb-3 md:mb-4 leading-tight break-words max-w-xs sm:max-w-md md:max-w-2xl">
              Your Creative Journey
              <br className="block sm:hidden" />
              <span className="bg-gradient-to-r from-orange-500 via-orange-500 to-orange-200 bg-clip-text text-transparent italic font-Instrument whitespace-nowrap">Starts Here</span>
            </h2>

            {/* Paragraph - Responsive max-width and margin */}
            <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-[95vw] sm:max-w-xl mx-auto mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              High-performing creative teams rely on clarity, speed, and trust. Sevvy provides a system that
              supports all three without disrupting how teams already work.
            </p>

            {/* Button - Responsive size and spacing */}
            <button className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 md:py-2.5 bg-orange-500 text-white font-semibold border-white border-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base mb-2 sm:mb-4 cursor-pointer">
              <span>Let's craft together</span>
              <div className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 bg-white rounded-full -mr-3 sm:-mr-4 md:-mr-6">
                <svg
                  width="16" 
                  height="16"
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