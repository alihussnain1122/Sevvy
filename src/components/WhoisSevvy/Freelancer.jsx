
import React from 'react';
import FadeInSection from '../FadeInSection';

const Freelance = () => {
  const features = [
    {
      text: 'Revision tracking cuts back-and-forth by ',
      highlight: '50%',
      suffix: ''
    },
    {
      text: '',
      highlight: 'Clean workflows ',
      suffix: 'elevate professionalism'
    },
    {
      text: '',
      highlight: 'Faster approvals ',
      suffix: 'shorten payment cycles'
    },
    {
      text: '',
      highlight: 'Auto-portfolios ',
      suffix: 'showcase wins effortlessly'
    }
  ];

  return (
    <section className="relative py-12 overflow-hidden">
      <FadeInSection>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight">
            <span className="text-orange-400 italic font-Instrument">
              Freelancer
            </span>
            <span className="text-black"> & Solo Teams</span>
          </h2>
        </div>

        {/* Image */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-150">
            <img
              src="/WhoIsSevvy/freelancer.webp"
              alt="Creative & Video Agencies Workflow"
              className="w-full h-auto object-contain rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
          
          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
            {features.map((feature, index) => {
              const isFullWidth =
                index === 0 || index === features.length - 1;

              return (
                <div
                  key={index}
                  className={`bg-white/50 rounded-xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 
                  ${isFullWidth ? 'col-span-2' : 'col-span-1'}`}
                >
                  <p
                    className={
                      index === 0 || index === 3
                        ? 'text-sm md:text-base text-gray-800 font-medium tracking-tight'
                        : 'text-base md:text-lg text-gray-800 font-medium'
                    }
                  >
                    {feature.text}
                    <span className="text-orange-400 font-semibold">
                      {feature.highlight}
                    </span>
                    {feature.suffix}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Paragraph */}
          <div className="flex items-center justify-center md:justify-start md:mt-12 order-1 md:order-2">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-md">
              Freelancers spend up to{' '}
              <span className="text-orange-400 font-semibold">
                40% of time
              </span>{' '}
              on non billable coordination. Sevvy provides a professional
              system that speeds approvals and builds client confidence.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button className="bg-linear-to-r from-orange-500 to-orange-200 text-white font-semibold px-8 py-3 rounded-xl cursor-pointer">
            Get Free Trial
          </button>
        </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Freelance;
