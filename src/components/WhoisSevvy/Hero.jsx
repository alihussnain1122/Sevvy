
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 35 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });

  const slideIn = (dir = "left", delay = 0) => ({
    initial: { opacity: 0, x: dir === "left" ? -50 : 50 },
    animate: inView ? { opacity: 1, x: 0 } : { opacity: 0, x: dir === "left" ? -50 : 50 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section className="w-full bg-white py-16" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        
          {/* Heading */}
          <motion.div className="text-center" {...fadeUp(0)}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="bg-linear-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">Who Is Sevvy For </span>
            </h2>
            <p className="mx-auto mt-6 max-w-[65ch] text-base sm:text-lg leading-relaxed text-gray-600">
              Sevvy is built for creative teams and individuals who need a clear,
              structured way to move content from idea to publishing. Manage every
              workstage without it juggling multiple tools or broken workflows.
            </p>
          </motion.div>

          {/* Main Layout */}
          {/* Mobile view custom layout */}
          <div className="lg:hidden mt-14 flex flex-col items-center justify-center">
            {/* Mascot on top */}
            <motion.img
              src="/WhoIsSevvy/Hero/avatar.webp"
              alt="Mascot"
              className="h-35 w-35 xs:h-[180px] xs:w-[180px] sm:h-55 sm:w-55 object-contain drop-shadow-2xl mb-2"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1, y: [0, -10, 0] } : {}}
              transition={{ opacity: { duration: 0.6, delay: 0.15 }, scale: { duration: 0.6, delay: 0.15 }, y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 } }}
            />
            {/* Overview image below mascot */}
            <motion.div className="w-55 xs:w-[260px] sm:w-[320px] mb-2" {...fadeUp(0.3)}>
              <img
                src="/WhoIsSevvy/Hero/overview.webp"
                alt="Overview graph"
                className="w-full object-contain"
              />
            </motion.div>
            {/* Card and Piechart in same row below overview */
          <div className="flex flex-row w-full justify-center gap-2 mb-2">
            <motion.div className="w-30 xs:w-[140px] sm:w-40" {...fadeUp(0.4)}>
              <img
                src="/WhoIsSevvy/Hero/Card.webp"
                alt="Customers card"
                className="w-full object-contain drop-shadow-xl"
              />
            </motion.div>
            <motion.div className="w-25 xs:w-[120px] sm:w-35" {...fadeUp(0.5)}>
              <img
                src="/WhoIsSevvy/Hero/piechart.webp"
                alt="Pie chart"
                className="w-full object-contain"
              />
            </motion.div>
          </div>
          /* Team image at last */}
          <motion.div className="w-55 xs:w-[260px] sm:w-[320px] mt-2" {...fadeUp(0.55)}>
            <img
              src="/WhoIsSevvy/Hero/team.webp"
              alt="Team list"
              className="w-full object-contain"
            />
          </motion.div>
          {/* CTA Button */}
          <motion.button
            className="mt-8 rounded-2xl bg-linear-to-r from-orange-500 to-orange-300 px-8 py-3 text-sm font-semibold text-white shadow-xl transition duration-300 hover:from-orange-600 hover:to-orange-400 w-full max-w-xs mx-auto"
            {...fadeUp(0.65)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Get 14 Days Free Trial
          </motion.button>
        </div>

        {/* Desktop view original layout (unchanged) */}
        <div className="hidden lg:flex relative mt-14 flex-row items-center justify-center">
          {/* Left Side */}
          <motion.div className="flex flex-col items-center gap-8 absolute left-40 top-14" {...slideIn("left", 0.3)}>
            <div className="w-60">
              <img
                src="/WhoIsSevvy/Hero/piechart.webp"
                alt="Pie chart"
                className="w-full object-contain"
              />
            </div>
            <div className="w-85 relative left-2 bottom-12">
              <img
                src="/WhoIsSevvy/Hero/overview.webp"
                alt="Overview graph"
                className="w-full object-contain"
              />
            </div>
          </motion.div>
          {/* Center Character */}
          <div className="relative z-10 flex flex-col items-center mx-auto">
            <motion.img
              src="/WhoIsSevvy/Hero/avatar.webp"
              alt="Mascot"
              className="h-75 w-75 object-contain drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1, y: [0, -14, 0] } : {}}
              transition={{
                opacity: { duration: 0.7, delay: 0.1 },
                scale: { duration: 0.7, delay: 0.1 },
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
              }}
            />
            <motion.div className="relative mt-2 w-65 left-10" {...fadeUp(0.5)}>
              <img
                src="/WhoIsSevvy/Hero/Card.webp"
                alt="Customers card"
                className="w-full object-contain drop-shadow-xl"
              />
            </motion.div>
            <motion.button
              className="mt-16 rounded-2xl bg-linear-to-r from-orange-500 to-orange-300 px-16 py-4 text-base font-semibold text-white shadow-xl transition duration-300 hover:from-orange-600 hover:to-orange-400 hover:scale-105"
              {...fadeUp(0.6)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Get 14 Days Free Trial
            </motion.button>
          </div>
          {/* Right Side Team Card */}
          <motion.div className="flex flex-col items-center mt-10 absolute right-32.5 top-24 w-90" {...slideIn("right", 0.3)}>
            <img
              src="/WhoIsSevvy/Hero/team.webp"
              alt="Team list"
              className="w-full object-contain"
            />
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
export default Hero;