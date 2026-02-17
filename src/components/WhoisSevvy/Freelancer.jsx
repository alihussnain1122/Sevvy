import React from 'react';

const Freelance = () => {
  const features = [
    {
      text: 'Visual calarity reduce reworks by ',
      highlight: '30-40%',
      suffix: ''
    },
    {
      text: 'In-context feedback cuts review cycles by ',
      highlight: '50%',
      suffix: ''
    },
    {
      text: 'Fewer handoffs save ',
      highlight: '3–5 hours',
      suffix: 'weekly'
    },
    {
      text: '',
      highlight: 'One system ',
      suffix: 'scales high-volume output'
    }
  ];

  return (
    <section className="relative py-12 overflow-hidden">
      

      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight">
            <span className="text-gray-800">Social Media & </span>
            <span className="text-orange-400 italic font-Instrument">Content Teams</span>
          </h2>
        </div>

        {/* Top Center Image */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-[600px]">
            <img
              src="/WhoIsSevvy/socialmedia.webp"
              alt="Creative & Video Agencies Workflow"
              className="w-full h-auto object-contain rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Content: Cards left, Paragraph right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
          {/* Feature Cards Grid - Left Side */}
          {/* Feature Cards Grid - Left Side */}
<div className="grid grid-cols-2 gap-4">
  {features.map((feature, index) => {
    // Pehla (0) aur Aakhri (3) card full width lega
    const isFullWidth = index === 0 || index === features.length - 1;

    return (
      <div
        key={index}
        className={`bg-white/50 rounded-xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 
          ${isFullWidth ? "col-span-2" : "col-span-1"}`}
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

          {/* Paragraph - Right Side */}
          <div className="flex items-center justify-center md:justify-start">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-md">
              Marketing teams often juggle 4–6 tools just to ship content. Coordination slows production. Sevvy keeps planning, review, and publishing aligned in one unified workspace.
            </p>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center">
          <button
            className="bg-gradient-to-r from-orange-500 to-orange-200 text-white font-semibold px-8 py-3 rounded-xl cursor-pointer"
          >
            Get Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
