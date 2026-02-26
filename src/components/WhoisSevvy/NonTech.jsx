
import React from 'react';

const NontechCreativeTeams = () => {
  const features = [
    {
      text: 'Contextual collaboration reduces ',
      highlight: 'clarification by 30%',
      suffix: ''
    },
    {
      text: '',
      highlight: 'Live in minutes, ',
      suffix: 'not weeks'
    },
    {
      text: '',
      highlight: 'Visual-first ',
      suffix: 'workflows'
    },
    {
      text: 'Everything centralized in one ',
      highlight: 'intuitive workspace',
      suffix: ''
    }
  ];

  return (
    <section className="relative bg-[#fffbf7] py-12 overflow-hidden">
      {/* Gradient Overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-80 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)'
        }}
      />

      {/* Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight">
            <span className="text-gray-800">Non-Technical & </span>
            <span className="text-orange-400 italic font-Instrument">Creative Teams</span>
          </h2>
        </div>

        {/* Top Center Image */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-150">
            <img
              src="/WhoIsSevvy/nontech.webp"
              alt="Creative & Video Agencies Workflow"
              className="w-full h-auto object-contain rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Content: Paragraph left, Cards right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
          {/* Paragraph - Left Side */}
          <div className="flex items-center justify-center md:justify-start md:mt-18 md:px-12">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-md">
              Many creative teams abandon traditional PM tools because they feel rigid or overly technical. Sevy is designed for visual, iterative workflows, not checklist-heavy systems that slow adoption.
            </p>
          </div>

          {/* Feature Cards Grid - Right Side */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => {
              // First (0) and last (3) card full width
              const isFullWidth = index === 0 || index === features.length - 1;
              return (
                <div
                  key={index}
                  className={`bg-white/50 rounded-xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${isFullWidth ? "col-span-2" : "col-span-1"}`}
                >
                  <p
                    className={
                      (index === 0 || index === 3)
                        ? "text-sm md:text-base text-gray-800 font-medium tracking-tight"
                        : "text-base md:text-lg text-gray-800 font-medium"
                    }
                  >
                    {feature.text}
                    <span className="text-orange-400 font-semibold"> {feature.highlight}</span>
                    {feature.suffix}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center">
          <button
            className="bg-linear-to-r from-orange-500 to-orange-200 text-white font-semibold px-8 py-3 rounded-xl cursor-pointer"
          >
            Get Free Trial
          </button>
        </div>
        </div>
    
    </section>
  );
};

export default NontechCreativeTeams;
