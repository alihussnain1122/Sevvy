import React from "react";
import { motion } from "framer-motion";

const slideIn = (from = 'left', delay = 0) => ({
  initial: { opacity: 0, x: from === 'left' ? -60 : 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
});

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

const Stages = () => {
  return (
    <section className="relative w-full py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Stage 1: Intake & Alignment */}
        <div className="mb-16">
          <motion.div {...fadeUp(0)} className="text-center mb-8">
            <p className="text-orange-400 font-bold text-xl  tracking-wide mb-2">Stage 1</p>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">Intake & Alignment</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Left */}
            <motion.div {...slideIn('left', 0.1)} className="flex justify-center">
              <img 
                src="/HowItWorks/stages/1.webp" 
                alt="Intake & Alignment" 
                className="max-w-md w-full h-auto object-contain"
              />
            </motion.div>
            
            {/* Content Right */}
            <motion.div {...slideIn('right', 0.2)}>
              <h3 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4">Start with clarity</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Defined goals, formats, deadlines, and references reduce  <br /> early rework by up to 30% and align teams before <br /> execution begins.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Standardized<strong> creative briefs</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Centralized<strong> assets and references</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Defined<strong> priorities and ownership</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Clear alignment </strong>from day one</span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-200 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-orange-200 cursor-pointer">
                Create Your First Project
              </button>
            </motion.div>
          </div>
        </div>

        {/* Stage 2: Workflow & Visibility */}
        <div className="mb-16">
          <div className="bg-[#fffbf8] rounded-3xl md:p-12 p-0 relative overflow-hidden">
            {/* Top gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-0" style={{
          background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)'
        }} />
            <motion.div {...fadeUp(0)} className="text-center mb-8 relative z-10">
              <p className="text-orange-400 font-bold text-xl tracking-wide mb-2">Stage 2</p>
              <h2 className="text-2xl md:text-4xl font-semibold  text-gray-900">Workflow & Visibility</h2>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Left */}
              <motion.div {...slideIn('left', 0.1)} className="text-left p-1 md:p-6 order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4">Track progress clearly</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Flexible views and real-time dashboards help <br /> teams save 3–5 hours weekly by reducing <br /> coordination and manual status tracking.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Table, board,</strong> and <strong>grouped views</strong></span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Real-time </strong>status updates</span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Cross-project </strong>visibility</span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>Clear <strong>task ownership</strong></span>
                  </li>
                </ul>
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-200 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300  hover:shadow-orange-200 cursor-pointer">
                  Control Your Workflow
                </button>
              </motion.div>
              
              {/* Image Right */}
              <motion.div {...slideIn('right', 0.2)} className="flex justify-center order-1 lg:order-2">
                <img 
                  src="/HowItWorks/stages/2.webp" 
                  alt="Workflow & Visibility" 
                  className="max-w-md w-full h-auto object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stage 3: Review & Feedback */}
        <div className="mb-16">
          <motion.div {...fadeUp(0)} className="text-center mb-8">
            <p className="text-orange-400 font-bold text-xl tracking-wide mb-2">Stage 3</p>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">Feedback & Collaboration</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Left */}
            <motion.div {...slideIn('left', 0.1)} className="flex justify-center">
              <img 
                src="/HowItWorks/stages/3.webp" 
                alt="Review & Feedback" 
                className="max-w-md w-full h-auto object-contain"
              />
            </motion.div>
            
            {/* Content Right */}
            <motion.div {...slideIn('right', 0.2)}>
              <h3 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4">Centralize feedback</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Disconnected reviews can double turnaround time.<br /> Timestamped, in-context feedback keeps revisions <br /> structured and predictable.
              </p>
              <ul className="space-y-3 mb-6">
                {/* <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Timestamped visual annotations</strong></span>
                </li> */}
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Threaded</strong> comment conversations</span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Version </strong>comparison tools</span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Clean <strong>version tracking</strong></span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-200 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-orange-200 cursor-pointer">
                Streamline Reviews
              </button>
            </motion.div>
          </div>
        </div>

        {/* Stage 4: Approval & Version Control */}
        <div className="mb-16">
          <div className="bg-[#fffbf8] rounded-3xl md:p-12 p-0 relative overflow-hidden">
            {/* Top gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-0" style={{
          background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)'
        }} />
            <motion.div {...fadeUp(0)} className="text-center mb-8 relative z-10">
              <p className="text-orange-400 font-bold text-xl tracking-wide mb-2">Stage 4</p>
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">Approval & Publishing</h2>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Left */}
              <motion.div {...slideIn('left', 0.1)} className="text-left p-1 md:p-6 order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4">Ship without delays</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Undefined approval states can extend timelines by <br /> 50%. Clear status controls and live notifications <br />prevent delivery bottlenecks.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>Defined <strong>approval stages</strong></span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>Instant <strong>status update</strong></span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>Visible<strong> revision </strong> history</span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>Direct <strong> publishing </strong> to web or local</span>
                  </li>
                </ul>
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-200 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-orange-200 cursor-pointer">
                  Accelerate Delivery
                </button>
              </motion.div>
              {/* Image Right */}
              <motion.div {...slideIn('right', 0.2)} className="flex justify-center order-1 lg:order-2">
                <img 
                  src="/HowItWorks/stages/4.webp" 
                  alt="Approval & Version Control" 
                  className="max-w-md w-full h-auto object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stage 5: Publishing & Asset Library */}
        <div className="mb-16">
          <motion.div {...fadeUp(0)} className="text-center mb-8">
            <p className="text-orange-400 font-bold text-xl tracking-wide mb-2">Stage 5</p>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">Showcase, Reuse & Scale</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Left */}
            <motion.div {...slideIn('left', 0.1)} className="flex justify-center">
              <img 
                src="/HowItWorks/stages/5.webp" 
                alt="Publishing & Asset Library" 
                className="max-w-md w-full h-auto object-contain"
              />
            </motion.div>
            
            {/* Content Right */}
            <motion.div {...slideIn('right', 0.2)}>
              <h3 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4">Turn work into assets</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Over 70% of content is never reused. Structured libraries <br /> convert finished work into searchable, reusable <br /> campaign-ready assets.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Auto <strong>generated portfolio</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Organized <strong>asset library</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Client ready</strong> sharing links</span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Compaign ready</strong> reuse system</span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-200 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-orange-200 cursor-pointer">
                Make Work Reusable
              </button>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stages;
