import React from 'react';
import FadeInSection from '../FadeInSection';
import { motion } from 'framer-motion';

const Operation = () => {
  const articles = [
    {
      id: 1,
      image: '/Home/operation/Frame-1.webp',
      title: 'The Cost of Creative Outload',
      size: 'large'
    },
    {
      id: 2,
      image: '/Home/operation/Frame-2.webp',
      title: 'Building Systems That Scale',
      size: 'small'
    },
    {
      id: 3,
      image: '/Home/operation/Frame-3.webp',
      title: 'Structure Without Boundaries',
      size: 'small'
    }
  ];

  return (
    <FadeInSection>
      <section className="bg-[#FAF9F7] py-4 md:py-6 px-4 md:px-5 flex justify-center items-center relative ">
      {/* Top background with gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-25"
        style={{
          background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)'
        }}
      />
      <div className="max-w-7xl mx-auto w-full z-20">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[42px] text-black mb-3 leading-tight">
            Creative Operations, <span className="text-[#FF8C42] font-Instrument italic">Explained</span>
          </h2>
          <p className="text-base md:text-lg text-black">
            Articles on building structure without killing creativity.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 md:ml-8 lg:ml-40">
          {/* Large Card - Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative rounded-3xl overflow-hidden h-[220px] md:h-[320px] group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          >
            <img 
              src={articles[0].image} 
              alt={articles[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 px-4">
              <span className="text-2xl md:text-[38px] font-bold text-[#6B3F1D] text-center leading-tight mt-12">{articles[0].title}</span>
            </div>
          </motion.div>

          {/* Right Side - Two Small Cards */}
          <div className="flex flex-row md:flex-col gap-3 w-full">
            {/* Top Small Card */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden h-30 w-1/2 min-w-0 md:w-80 md:h-[160px] group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              <img 
                src={articles[1].image} 
                alt={articles[1].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 px-4">
                <span className="text-lg md:text-[22px] font-bold text-white text-center leading-tight mt-8">{articles[1].title}</span>
              </div>
            </motion.div>

            {/* Bottom Small Card */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden h-30 w-1/2 min-w-0 md:w-80 md:h-[160px] group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              <img 
                src={articles[2].image} 
                alt={articles[2].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 px-4">
                <span className="text-lg md:text-[22px] font-bold text-white text-center leading-tight mt-8">{articles[2].title}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-200 text-white text-sm md:text-base font-semibold py-3 md:py-3.5 px-6 md:px-8 rounded-full flex items-center gap-2.5 transition-all duration-300 shadow-lg hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#FF8C42]/40 cursor-pointer">
            Explore More <svg width="16" height="16" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2 md:ml-2'>
              <path d="M1.5 10.4971H20.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.999 1.5L20.499 10.4973L10.999 19.4947" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      </section>
    </FadeInSection>
  );
};

export default Operation;
