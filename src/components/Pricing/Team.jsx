import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TeamsSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px 0px' });

    const bulletVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    };
    const bulletPoints = [
        "Structured work stages that don't fall apart under pressure",
        "Collaboration without endless threads and follow-ups",
        "A workflow that stays usable as complexity increases"
    ];

    return (
        <section className="w-full py-16 lg:py-24 -mt-28" ref={ref}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Background color layer is only on this rounded div */}
                <div className="bg-[#fffbf8] rounded-3xl p-12 relative overflow-hidden">
            {/* Top gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none" style={{
          background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)'
        }} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left Side Content */}
                        <motion.div
                            className="space-y-6 mt-4"
                            initial={{ opacity: 0, x: -45 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -45 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
                                <span className="text-orange-400">Built for Teams That Publish at Scale</span>
                            </h2>

                            <p className="text-gray-600 text-base lg:text-lg max-w-xl">
                                Sevvy isn't another planning board. It's an execution layer designed to keep content moving,
                                even as teams and volume grow.
                            </p>

                            <motion.ul
                                className="space-y-4 mt-8"
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } } }}
                            >
                                {point => (
                                    <li key={point} className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-orange-400 mt-2.5"></span>
                                        <span className="text-orange-400 font-medium text-lg">
                                            {point}
                                        </span>
                                    </li>
                                )}
                                {bulletPoints.map((point, index) => (
                                    <motion.li key={index} variants={bulletVariants} className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5"></span>
                                        <span className="text-orange-400 font-medium text-base lg:text-lg">
                                            {point}
                                        </span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>

                        {/* Right Side - The Fixed Bend Effect */}
                        <motion.div
                            className="relative flex justify-center lg:justify-end"
                            initial={{ opacity: 0, x: 45 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 45 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="">

                                {/* 1. Deepest Blur Layer (Bend / Tilt) */}
                                <div className="absolute inset-0 transform -translate-x-12 translate-y-10 -rotate-6 scale-100 blur-lg opacity-30 select-none pointer-events-none">
                                    <img
                                        src="/Pricing/teams/image.webp"
                                        alt=""

                                    />
                                </div>

                                {/* 2. Secondary "Echo" Layer (The actual 'bend' look) */}
                <div className="absolute inset-0 transform 
                            origin-top           
                            -rotate-[18deg]        
                            -translate-x-12        /* Left side move karne ke liye */
                            translate-y-4         /* Thora sa niche lane ke liye */
                            scale-100 
                            blur-[2px] 
                            opacity-40 
                            select-none 
                            pointer-events-none">
                                    <img
                                        src="/Pricing/teams/image.webp"
                                        alt=""
                                        className="w-full h-full object-contain rounded-2xl border border-orange-100/20"
                                    />
                                </div>

                                {/* 3. Main Image Layer */}
                                <div className="relative z-10">
                                    <img
                                        src="/Pricing/teams/image.webp"
                                        alt="Teams workflow visualization"
                                        className="w-full max-w-md lg:max-w-lg block"
                                    />
                                </div>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamsSection;