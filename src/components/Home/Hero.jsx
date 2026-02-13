import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#f8f9fa] pt-20 pb-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center z-10 relative">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm mb-8">
            <span className="flex items-center justify-center w-5 h-5  text-white">✨</span>
            <span className="text-sm font-medium text-gray-700">A Unified Creative Management Engine</span>
        </div>

        {/* Headings */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight text-center mb-2">
          Streamline Your Content
        </h1>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent tracking-tight text-center mb-6">
          Workflow With Sevy
        </h1>

        {/* Subtitle & Description */}
        <p className="text-xl font-semibold text-gray-800 text-center mb-2">
            Designed by Creators for Creators
        </p>
        <p className="text-gray-500 text-center mb-8 max-w-xl">
            Replace fragmented tools with a unified AI-powered platform
        </p>

        {/* CTA Button */}
        <button className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
            Start 14 Days Free Trial
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>

      </div>

      {/* Diagram Section */}
      <div className="relative w-full max-w-[1200px] mx-auto h-[600px]">
        
        {/* SVG Connections Background */}
        <svg
          viewBox="0 0 1200 600"
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Glow Filter */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Beam Animation */}
            <style>{`
              .beam {
                stroke-dasharray: 1200;
                stroke-dashoffset: 1200;
                animation: beamAnim 2.5s ease-out infinite;
              }
              @keyframes beamAnim {
                0% { stroke-dashoffset: 1200; opacity: 0; }
                20% { opacity: 1; }
                100% { stroke-dashoffset: 0; opacity: 0; }
              }
              .ringPulse {
                animation: ringAnim 3s ease-out infinite;
                transform-origin: center;
              }
              @keyframes ringAnim {
                0% { transform: scale(0.8); opacity: 0.6; }
                70% { transform: scale(1.3); opacity: 0; }
                100% { transform: scale(1.3); opacity: 0; }
              }
            `}</style>
          </defs>

          {/* Base Rings */}
          {[80, 140, 200, 260].map((r, i) => (
            <circle
              key={i}
              cx="600"
              cy="300"
              r={r}
              stroke="#e5e7eb"
              strokeWidth="1.5"
              fill="none"
            />
          ))}

          {/* Animated Rings */}
          {[80, 140, 200, 260].map((r, i) => (
            <circle
              key={`a-${i}`}
              cx="600"
              cy="300"
              r={r}
              stroke="#f97316"
              strokeWidth="2"
              fill="none"
              filter="url(#glow)"
              className="beam"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}

          {/* Center Pulse */}
          <circle
            cx="600"
            cy="300"
            r="60"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            className="ringPulse"
          />

          {/* Top Center Line */}
          <line
            x1="600"
            y1="220"
            x2="600"
            y2="180"
            stroke="#f97316"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#glow)"
            className="beam"
            style={{ animationDelay: "0.5s" }}
          />

          {/* Bottom Center Line */}
          <line
            x1="600"
            y1="380"
            x2="600"
            y2="440"
            stroke="#f97316"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#glow)"
            className="beam"
            style={{ animationDelay: "0.7s" }}
          />

          {/* Left Lines */}
          <path
            d="M220 120 V300 H340"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            className="beam"
            style={{ animationDelay: "1.2s" }}
          />
          <path
            d="M160 250 H340"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            className="beam"
            style={{ animationDelay: "1.4s" }}
          />
          <path
            d="M180 480 V350 H340"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            className="beam"
            style={{ animationDelay: "1.6s" }}
          />

          {/* Right Lines */}
          <path
            d="M980 120 V300 H860"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            className="beam"
            style={{ animationDelay: "1.3s" }}
          />
          <path
            d="M820 280 H1040"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            className="beam"
            style={{ animationDelay: "1.5s" }}
          />
          <path
            d="M960 480 V350 H740"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            className="beam"
            style={{ animationDelay: "1.7s" }}
          />
        </svg>

        {/* --- Center Elements --- */}
        
        {/* Center Character (Bot) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100 z-20 animate-icon-glow-centered" style={{animationDelay: '0.2s'}}>
             {/* Center Bot */}
             <img src="/Home/hero/vframe.png" alt="Sevy Bot" className="w-16 h-16 object-contain" />
        </div>

        {/* Database Icon (Above) */}
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 z-10 w-12 h-12 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center animate-icon-glow-centered" style={{animationDelay: '0.5s'}}>
             {/* Database */}
             <img src="/Home/hero/db.png" alt="Database" className="w-8 h-8 object-contain" />
        </div>

        {/* Robot Head Icon (Below) */}
        <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 z-10 w-12 h-12 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center animate-icon-glow-centered" style={{animationDelay: '0.7s'}}>
             {/* Robot Head */}
             <img src="/Home/hero/bot.png" alt="Robot" className="w-8 h-8 object-contain" />
        </div>


        {/* --- Floating Icons (Left) --- */}

        {/* Google Drive (Top Left) */}
        <div className="absolute top-[12%] left-[15%] w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center cursor-pointer z-10 animate-icon-glow" style={{animationDelay: '1.2s'}}>
            {/* Google Drive */}
            <img src="/Home/hero/drive.png" alt="Drive" className="w-10 h-10 object-contain" />
        </div>

        {/* Stack/Monday (Mid Left) */}
        <div className="absolute top-[38%] left-[10%] w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center cursor-pointer z-10 animate-icon-glow" style={{animationDelay: '1.4s'}}>
             {/* Clickup */}
             <img src="/Home/hero/clickup.png" alt="Clickup" className="w-8 h-8 object-contain" />
        </div>

        {/* Asana/Dots (Inner Left) */}
        <div className="absolute top-[42%] left-[22%] w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center cursor-pointer z-10 animate-icon-glow" style={{animationDelay: '1.0s'}}>
             {/* Asana */}
             <img src="/Home/hero/dots.png" alt="Asana" className="w-8 h-8 object-contain" />
        </div>

        {/* Trello (Bottom Left) */}
        <div className="absolute bottom-[15%] left-[13%] w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center cursor-pointer z-10 animate-icon-glow" style={{animationDelay: '1.6s'}}>
             {/* Trello */}
             <img src="/Home/hero/trello.png" alt="Trello" className="w-8 h-8 object-contain" />
        </div>


        {/* --- Floating Icons (Right) --- */}

        {/* Audio (Top Right) */}
        <div className="absolute top-[12%] right-[15%] w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center cursor-pointer z-10 animate-icon-glow" style={{animationDelay: '1.3s'}}>
             {/* Audio */}
             <img src="/Home/hero/audio.png" alt="Audio" className="w-10 h-10 object-contain" />
        </div>

        {/* Diamond (Mid Right) */}
        <div className="absolute top-[42%] right-[10%] w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center cursor-pointer z-10 animate-icon-glow" style={{animationDelay: '1.5s'}}>
             {/* Diamond */}
             <img src="/Home/hero/clickup.png" alt="Diamond" className="w-8 h-8 object-contain" />
        </div>

        {/* Slack (Bottom Right) */}
        <div className="absolute bottom-[20%] right-[19%] w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center cursor-pointer z-10 animate-icon-glow" style={{animationDelay: '1.7s'}}>
             {/*  Slack */}
             <img src="/Home/hero/slack.png" alt="Slack" className="w-8 h-8 object-contain" />
        </div>


        {/* --- Speech Bubbles --- */}
        
        {/* Left Bubble */}
        <div className="absolute top-[45%] left-[28%] bg-white border border-orange-200 rounded-lg px-4 py-2 shadow-md max-w-[150px] z-10">
            <p className="text-[10px] text-gray-600 font-medium leading-tight">
                Who seems most unknowledgeable on this topic?
            </p>
        </div>

        {/* Right Top Bubble */}
        <div className="absolute top-[35%] right-[20%] bg-orange-50 border border-orange-200 rounded-lg px-4 py-2 shadow-md max-w-[150px] z-10">
            <p className="text-[10px] text-gray-700 font-medium leading-tight">
                What was the user's past few orders?
            </p>
        </div>

        {/* Right Bottom Bubble */}
        <div className="absolute bottom-[35%] right-[25%] bg-white border border-orange-200 rounded-lg px-4 py-2 shadow-md max-w-[150px] z-10">
            <p className="text-[10px] text-gray-600 font-medium leading-tight">
                How does the team fix this problem?
            </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;