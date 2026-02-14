import React from "react";

const Inside = () => {
  // Image ke mutabiq exact angles
  const items = [
    { img: "/HowItWorks/Inside/adobe.webp", label: "Work with **Adobe**\n**Creative Cloud** files\ninside live projects", angle: 240 }, // Top Left
    { img: "/HowItWorks/Inside/analytics.webp", label: "**Track live ads** and \ncreative references\n centrally", angle: 300 }, // Top Right
    { img: "/HowItWorks/Inside/drive.webp", label: "Pull videos directly from \n**Google Drive** without \nduplication", angle: 190 }, // Mid Left
    { img: "/HowItWorks/Inside/dashboard.webp", label: "Share **branded client \nportals** under your \nbusiness name", angle: -10 }, // Mid Right (Slightly above center)
    { img: "/HowItWorks/Inside/zoom.webp", label: "Run **Zoom** feedback \nsessions with notes tied \nto assets", angle: 150 }, // Bottom Left
    { img: "/HowItWorks/Inside/advertising.webp", label: "**Capture ads** and \ninspiration using the \nChrome extension", angle: 30 },  // Bottom Right
    { img: "/HowItWorks/Inside/record.webp", label: "**Record screen** \nwalkthroughs for clearer \ndirection", angle: 110 },      // Bottom Mid-Left
    { img: "/HowItWorks/Inside/facebook.webp", label: "Publish approved \ncontent through \n**Facebook APIs**", angle: 70 },        // Bottom Mid-Right
  ];

  // Oval shape settings
  const radiusX = 420; // Width of the oval
  const radiusY = 240; // Height of the oval (Kam karne se shape flat oval banegi)

  return (
    <section className="w-full py-4 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl text-gray-900 text-center mb-24">
          What You Can Do <span className="italic text-orange-300 font-Instrument">Inside Sevvy</span>
        </h2>


        {/* Responsive Oval Layout (Always visible, scales for mobile) */}
        <div className="-mt-26 relative w-full h-[420px] md:h-[650px]">
          {/* Mascot Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <img 
              src="/HowItWorks/Inside/mascot.webp" 
              alt="Mascot" 
              className="w-[140px] h-auto md:w-[280px]"
            />
          </div>
          {items.map((item, index) => {
            // Responsive oval radii
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            const rX = isMobile ? 180 : radiusX;
            const rY = isMobile ? 110 : radiusY;
            const radian = (item.angle * Math.PI) / 180;
            const x = rX * Math.cos(radian);
            const y = rY * Math.sin(radian);
            return (
              <div
                key={index}
                className="absolute flex flex-col items-center text-center w-[140px] md:w-[220px]"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img src={item.img} alt="" className="w-8 h-8 md:w-12 md:h-12 object-contain mb-2 md:mb-3" />
                <p className="text-xs md:text-[13px] text-gray-800 leading-tight">
                  {item.label.split("\n").map((line, idx) => (
                    <span key={idx} className="block">
                      {line.split("**").map((part, i) =>
                        i % 2 === 1 ? <b key={i} className="font-bold text-black">{part}</b> : part
                      )}
                    </span>
                  ))}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-4">
          <button className="px-10 py-3.5 bg-gradient-to-r from-orange-500 to-orange-300 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition-all cursor-pointer">
            Build Your Workflow Your Way
          </button>
        </div>
      </div>
    </section>
    
  );
};

export default Inside;