import React from "react";

const Hero = () => {
 return (
    <section className="relative w-full bg-[#f8f9fa] pt-20 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center z-10 relative">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-black rounded-full shadow-sm mb-8">
          <span className="flex items-center justify-center w-5 h-5 text-white">
            ✨
          </span>
          <span className="text-sm font-medium text-gray-700">
            A Unified Creative Management Engine
          </span>
        </div>

        {/* Headings */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight text-center mb-2">
          Streamline Your Content
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent tracking-tight text-center mb-6">
          Workflow With Sevvy
        </h1>

        {/* Subtitle & Description */}
        <p className="text-lg md:text-xl font-semibold text-gray-800 text-center mb-2">
          Designed by Creators for Creators
        </p>
        <p className="text-sm md:text-base text-gray-500 text-center mb-8 max-w-xl px-4">
          Replace fragmented tools with a unified AI-powered platform
        </p>

        {/* CTA Button */}
        <button className="px-6 md:px-8 py-3 md:py-3.5 bg-gradient-to-r from-orange-500 to-orange-200 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm md:text-base">
          Start 14 Days Free Trial
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>

      {/* Diagram Section */}
      <div className="relative w-full max-w-[1200px] mx-auto h-[420px] md:h-[600px]">
        {/* SVG Connections Background */}
        <svg
          viewBox="0 0 1200 600"
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <style>{`
              .beam {
                stroke-dasharray: 1200;
                stroke-dashoffset: 1200;
                animation: beamAnim 8s ease-out infinite;
              }
              @keyframes beamAnim {
                0% { stroke-dashoffset: 1200; opacity: 0; }
                20% { opacity: 1; }
                100% { stroke-dashoffset: 0; opacity: 0; }
              }
              .ringPulse {
                animation: ringAnim 5s ease-out infinite;
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
          <g className="hidden md:block">
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
          </g>

          {/* Animated Rings */}
          <g className="hidden md:block">
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
          </g>

          {/* Lines */}
          <line
            x1="595"
            y1="340"
            x2="596"
            y2="410"
            stroke="#f97316"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#glow)"
            className="beam"
            style={{ animationDelay: "0.5s" }}
          />
          <line
            x1="605"
            y1="340"
            x2="606"
            y2="410"
            stroke="#f97316"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#glow)"
            className="beam"
            style={{ animationDelay: "0.5s" }}
          />
          <line
            x1="605"
            y1="180"
            x2="606"
            y2="260"
            stroke="#f97316"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#glow)"
            className="beam"
            style={{ animationDelay: "0.7s" }}
          />
          <line
            x1="595"
            y1="180"
            x2="596"
            y2="260"
            stroke="#f97316"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#glow)"
            className="beam"
            style={{ animationDelay: "0.7s" }}
          />
          {/* Left Lines */}
          <path
            d="M215 -100 V295 H550"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            className="beam"
            style={{ animationDelay: "1.2s" }}
          />
          <path
            d="M125 70 V308 H550"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            className="beam"
            style={{ animationDelay: "1.2s" }}
          />
          <path
            d="M290 130 V280 H560"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            className="beam"
            style={{ animationDelay: "1.4s" }}
          />

          <path
            d="M300 400 V320 H590"
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
            d="M985 -100 V300 H650"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            className="beam"
            style={{ animationDelay: "1.3s" }}
          />

          <path
            d="M870 140 V280 H640"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            className="beam"
            style={{ animationDelay: "1.5s" }}
          />

          <path
            d="M940 400 V320 H640"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            className="beam"
            style={{ animationDelay: "1.7s" }}
          />
        </svg>

        {/* Center Bot */}
        <div
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 
          w-14 h-14 md:w-24 md:h-24 
          bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100 z-20"
        >
          <img
            src="/Home/hero/vframe.webp"
            alt="Sevy Bot"
            className="w-10 h-10 md:w-20 md:h-20 object-contain"
          />
        </div>

        {/* Database Icon */}
        <div
          className="absolute top-[31%] md:top-[22%] left-[50%] -translate-x-1/2 
          w-10 h-10 md:w-12 md:h-12 
          bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center z-10"
        >
          <img
            src="/Home/hero/db.webp"
            alt="Database"
            className="w-5 h-5 md:w-8 md:h-8 object-contain"
          />
        </div>

        {/* Robot Head Icon */}
        <div
          className="absolute top-[58%] md:top-[68%] left-[50%] -translate-x-1/2 
          w-10 h-10 md:w-12 md:h-12 
          bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center z-10"
        >
          <img
            src="/Home/hero/bot.webp"
            alt="Robot"
            className="w-5 h-5 md:w-8 md:h-8 object-contain"
          />
        </div>

        {/* LEFT ICONS */}
        <div
          className="absolute top-[10%] left-[12%] md:-top-[25%] md:left-[15%]
          w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl shadow-lg border border-gray-100 
          flex items-center justify-center z-10"
        >
          <img
            src="/Home/hero/drive.webp"
            alt="Drive"
            className="w-7 h-7 md:w-10 md:h-10 object-contain"
          />
        </div>

        <div
          className="absolute top-[23%] left-[5%] md:top-[3%] md:left-[8%]
          w-10 h-10 md:w-14 md:h-14 bg-white rounded-2xl shadow-lg border border-gray-100 
          flex items-center justify-center z-10"
        >
          <img
            src="/Home/hero/clickup.webp"
            alt="Clickup"
            className="w-6 h-6 md:w-8 md:h-8 object-contain"
          />
        </div>

        <div
          className="absolute top-[28%] left-[19%] md:top-[15%] md:left-[22%]
          w-10 h-10 md:w-14 md:h-14 bg-white rounded-2xl shadow-lg border border-gray-100 
          flex items-center justify-center z-10"
        >
          <img
            src="/Home/hero/dots.webp"
            alt="Dots"
            className="w-6 h-6 md:w-8 md:h-8 object-contain"
          />
        </div>

        <div
          className="absolute top-[63%] left-[20%] md:bottom-[15%] md:left-[23%]
          w-10 h-10 md:w-14 md:h-14 bg-white rounded-2xl shadow-lg border border-gray-100 
          flex items-center justify-center z-10"
        >
          <img
            src="/Home/hero/trello.webp"
            alt="Trello"
            className="w-6 h-6 md:w-8 md:h-8 object-contain"
          />
        </div>

        {/* RIGHT ICONS */}
        <div
          className="absolute top-[10%] right-[12%] md:-top-[25%] md:right-[15%]
          w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl shadow-lg border border-gray-100 
          flex items-center justify-center z-10"
        >
          <img
            src="/Home/hero/audio.webp"
            alt="Audio"
            className="w-7 h-7 md:w-10 md:h-10 object-contain"
          />
        </div>

        <div
          className="absolute top-[30%] right-[22%] md:top-[15%] md:right-[25%]
          w-10 h-10 md:w-14 md:h-14 bg-white rounded-2xl shadow-lg border border-gray-100 
          flex items-center justify-center z-10"
        >
          <img
            src="/Home/hero/clickup.webp"
            alt="Diamond"
            className="w-6 h-6 md:w-8 md:h-8 object-contain"
          />
        </div>

        <div
          className="absolute top-[62%] right-[16%] md:bottom-[20%] md:right-[19%]
          w-10 h-10 md:w-14 md:h-14 bg-white rounded-2xl shadow-lg border border-gray-100 
          flex items-center justify-center z-10"
        >
          <img
            src="/Home/hero/slack.webp"
            alt="Slack"
            className="w-6 h-6 md:w-8 md:h-8 object-contain"
          />
        </div>

        {/* SPEECH BUBBLES */}
        <div
          className="absolute top-[33%] left-[32%] md:top-[30%] md:left-[27%]
          bg-[#efefef] border border-orange-400 rounded-lg 
          px-2 py-1 md:px-4 md:py-2 
          shadow-md max-w-[110px] md:max-w-[150px] z-10 hidden md:flex"
        >
          <p className="text-[8px] md:text-[10px] text-gray-600 font-medium leading-tight">
            Who seems most unknowledgeable on this topic?
          </p>
        </div>

        <div
          className="absolute top-[23%] right-[25%] md:top-[35%] md:right-[30%]
          bg-[#efefef] border border-orange-400 rounded-lg 
          px-2 py-1 md:px-4 md:py-2 
          shadow-md max-w-[120px] md:max-w-[150px] z-10 hidden md:flex" 
        >
          <p className="text-[8px] md:text-[10px] text-gray-700 font-medium leading-tight">
            What was the user's past few orders?
          </p>
        </div>

        <div
          className="absolute top-[65%] right-[30%] md:bottom-[37%] md:right-[27%]
  bg-[#efefef] border border-orange-400 rounded-lg 
  px-3 py-2 md:px-4 md:py-5
  shadow-md w-[140px] md:w-[180px]
  z-10 flex items-center justify-center text-center hidden md:flex"
        >
          <p className="text-[10px] md:text-[12px] text-gray-600 font-medium leading-snug break-words">
            How does the team fix this problem?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;