import React from "react";
import { motion } from "framer-motion";

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
  const ovalOffsetX = -80; // Shift oval left on desktop to add right-side breathing room

  return (
    <section className="w-full py-4 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-4xl text-gray-900 text-center mb-16"
        >
          What You Can Do <span className="italic text-orange-300 font-Instrument">Inside Sevvy</span>
        </motion.h2>


        {/* Responsive Oval Layout (Always visible, scales for mobile) */}
        {/* Desktop oval layout */}
        <div className="hidden md:block -mt-26 relative w-full h-[650px]">
          {/* Mascot Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.img
              src="/HowItWorks/Inside/mascot.webp"
              alt="Mascot"
              className="w-[280px] h-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              animate={{ y: [0, -12, 0] }}
              style={{ animation: 'mascotFloat 5s ease-in-out infinite' }}
            />
          </div>
          {items.map((item, index) => {
            const rX = radiusX;
            const rY = radiusY;
            const radian = (item.angle * Math.PI) / 180;
            const x = rX * Math.cos(radian);
            const y = rY * Math.sin(radian);
            return (
              <motion.div
                key={index}
                className="absolute flex flex-col items-center text-center w-[220px]"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  left: `calc(50% + ${x + ovalOffsetX}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img src={item.img} alt="" className="w-12 h-12 object-contain mb-3" />
                <p className="text-[13px] text-gray-800 leading-tight">
                  {item.label.split("\n").map((line, idx) => (
                    <span key={idx} className="block">
                      {line.split("**").map((part, i) =>
                        i % 2 === 1 ? <b key={i} className="font-bold text-black">{part}</b> : part
                      )}
                    </span>
                  ))}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile mascot on top, animation below */}
        <div className="md:hidden w-full flex flex-col items-center">
          <motion.img
            src="/HowItWorks/Inside/mascot.webp"
            alt="Mascot"
            className="w-24 h-auto mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ animation: 'mascotFloat 5s ease-in-out infinite' }}
          />
          <div className="w-full overflow-x-auto relative">
            <div
              className="flex flex-nowrap gap-4 px-2 animate-horizontal-scroll"
              style={{
                animation: 'scroll-x 18s linear infinite alternate',
              }}
            >
              {items.map((item, index) => (
                <div key={index} className="flex-shrink-0 flex flex-col items-center text-center min-w-[140px]">
                  <img src={item.img} alt="" className="w-8 h-8 object-contain mb-2" />
                  <p className="text-xs text-gray-800 leading-tight">
                    {item.label.split("\n").map((line, idx) => (
                      <span key={idx} className="block">
                        {line.split("**").map((part, i) =>
                          i % 2 === 1 ? <b key={i} className="font-bold text-black">{part}</b> : part
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
            {/* Horizontal scroll animation keyframes */}
            <style>{`
              @keyframes scroll-x {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-horizontal-scroll {
                will-change: transform;
              }
              @keyframes mascotFloat {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-12px); }
              }
            `}</style>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-4"
        >
          <button className="px-10 py-3.5 bg-gradient-to-r from-orange-500 to-orange-300 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition-all  hover:shadow-orange-200 cursor-pointer">
            Build Your Workflow Your Way
          </button>
        </motion.div>
      </div>
    </section>
    
  );
};

export default Inside;