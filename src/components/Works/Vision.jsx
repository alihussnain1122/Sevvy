import React from "react";

const Vision = () => {
  return (
    <section className="relative w-full py-16">
      <div className=" mx-auto px-6">
        <div className="bg-[#fffbf8] rounded-3xl p-12 relative overflow-hidden">
            {/* Top gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none" style={{
              background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
              maskImage: 'linear-gradient(to top, transparent 0%, black 50%, black 50%), linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 50%, black 50%), linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in'
            }} />
          
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-black">
              Our <span className="italic font-Instrument text-orange-500">Vision</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* Block 1: Clarity */}
            <div className="relative self-start">
              {/* Background Number */}
              <div className="absolute -top-6 -right-1 pr-6 text-[100px] md:text-[110px] font-bold text-[#ffe0c9] z-0 leading-none select-none">
                1
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex gap-4">
                {/* Orange Vertical Line */}
                <div className="w-1 bg-orange-500 rounded-full flex-shrink-0"></div>
                
                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Clarity</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Creative teams deserve systems that make work visible, structured, and easy to manage at scale.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2: Simplicity */}
            <div className="relative self-center mt-4 md:mt-8">
              {/* Background Number */}
              <div className="absolute -top-6 -right-2 pr-6 text-[100px] md:text-[110px] font-bold text-[#ffe0c9] z-0 leading-none select-none">
                2
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex gap-4">
                {/* Orange Vertical Line */}
                <div className="w-1 bg-orange-500 rounded-full flex-shrink-0"></div>
                
                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Simplicity</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Powerful tools shouldn't feel heavy. We believe creative operations should be intuitive, not technical.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 3: Continuity */}
            <div className="relative  self-end mt-16 md:mt-36">
              {/* Background Number */}
              <div className="absolute -top-6 -right-2 pr-6 text-[100px] md:text-[110px] font-bold text-[#ffe0c9] z-0 leading-none select-none">
                3
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex gap-4">
                {/* Orange Vertical Line */}
                <div className="w-1 bg-orange-500 rounded-full flex-shrink-0"></div>
                
                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuity</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Work shouldn't end at approval. Every project should compound into long-term assets, insights, and growth.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button className="px-10 py-3 bg-gradient-to-r from-orange-500 to-orange-200 text-white font-semibold rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              Build the System Your Team Deserves
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Vision;
