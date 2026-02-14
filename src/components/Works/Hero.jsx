import React from 'react';

export default function Hero() {
  return (
    <section className="w-full py-20 px-6 relative overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto">
        
        {/* --- Top Text Content --- */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-3">
            From Idea to Published
          </h2>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#FF8A3D] to-orange-200 bg-clip-text text-transparent">Without Losing Control</span>
            </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Creative work slows down when systems fragment. Sevvy replaces scattered tools 
            with a unified, connected workflow that moves content forward without friction. Briefs, 
            assets, feedback, approvals, publishing, and client visibility live inside one platform, 
            so teams stay aligned and output stays predictable.
          </p>
        </div>


        {/* --- All 3 layers stacked together --- */}
        <div className="absolute bottom-48 relative flex justify-center items-center mx-auto mt-0 mb-8 max-w-5xl z-5" style={{minHeight: '520px'}}>
          
          {/* Layer 1 (outermost): Elements.webp — subscribe, instagram, revenue, sales, wavy lines etc */}
          <img 
            src="/public/Elements.webp" 
            alt="UI Elements Background" 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto object-contain z-0 pointer-events-none select-none"
          />

          {/* Layer 2 (middle): Kits.webp — data analytics, dashboard widgets */}
          <img 
            src="/public/Kits.webp" 
            alt="Data Kits and Analytics" 
            className="absolute left-1/2 mt-[520px] -translate-x-1/2 -translate-y-[45%] w-[900px]  h-auto object-contain z-10 pointer-events-none select-none"
          />

          {/* Layer 3 (topmost): character.webp + "How Sevvy Works" text */}
          <div className="relative z-20 flex items-start justify-center gap-4 md:gap-6 -mt-8">
            <img 
              src="/public/character.webp" 
              alt="Sevvy Character" 
              className="w-[220px] h-auto drop-shadow-2xl"
            />
            <h3 className="text-3xl font-extrabold mt-[30px] -ml-[38px] text-[#FF8A3D] leading-tight text-center">
              How Sevvy<br />Works
            </h3>
          </div>
        </div>

        {/* --- Bottom Buttons --- */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 -mt-52 relative z-40">
          <button className="bg-[#FF8A3D] hover:bg-[#FF7A2D] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg">
            Start Your Creative Workflow
          </button>
          
          <button className="border-2 border-[#FF8A3D] text-[#FF8A3D] bg-white hover:bg-orange-50 font-semibold px-8 py-4 rounded-full flex items-center gap-3 text-base md:text-lg transition-all duration-300">
            <span className="w-6 h-6 rounded-full bg-[#FF8A3D] flex items-center justify-center text-white text-xs">▶</span> 
            Watch Sevvy In Action
          </button>
        </div>

      </div>
    </section>
  );
}