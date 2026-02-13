import React from "react";

const Vision = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        paddingTop: '48px', // ~py-12
        paddingBottom: '48px',
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
          Our <span className="italic text-orange-500 font-Instrument">Vision</span>
        </h2>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Clarity */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-colors duration-200 hover:bg-[#fffaf7]">
            <div className="text-orange-500 text-2xl mb-3">→</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Clarity</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              Creative teams deserve systems that make work visible, structured, and easy to manage at scale.
            </p>
          </div>
          {/* Card 2: Simplicity */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-colors duration-200 hover:bg-[#fffaf7]">
            <div className="text-orange-500 text-2xl mb-3">→</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Simplicity</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              Powerful tools shouldn't feel heavy. We believe creative operations should be intuitive, not technical.
            </p>
          </div>
          {/* Card 3: Continuity */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-colors duration-200 hover:bg-[#fffaf7]">
            <div className="text-orange-500 text-2xl mb-3">→</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuity</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              Work shouldn't end at approval. Every project should compound into long-term assets, insights, and growth.
            </p>
          </div>
        </div>
        {/* CTA Button */}
        <div className="text-center mt-8">
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full font-semibold shadow-md hover:brightness-110 transition-all duration-300">
            Build the System Your Team Deserves
          </button>
        </div>
      </div>
    </section>
  );
};

export default Vision;
