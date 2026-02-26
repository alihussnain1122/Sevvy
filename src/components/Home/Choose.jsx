
import React from 'react';
import './Choose.css';

const Choose = () => {
  const features = [
    {
      icon: '/Home/choose/creativity.webp',
      title: 'Built for Creative Reality',
      description: 'Made for how creative teams actually work.'
    },
    {
      icon: '/Home/choose/design.webp',
      title: 'Client-Ready by Design',
      description: 'Professional, shareable workspaces clients understand.'
    },
    {
      icon: '/Home/choose/energy.webp',
      title: 'One System, Zero Tool-Hopping',
      description: 'All creative work runs inside one connected system'
    },
    {
      icon: '/Home/choose/flow.webp',
      title: 'Flow Over Features',
      description: 'A system that moves work forward, not menus.'
    },
    {
      icon: '/Home/choose/team.webp',
      title: 'Scales with Your Team',
      description: 'Grows with volume, not complexity'
    },
    {
      icon: '/Home/choose/afford.webp',
      title: 'Affordable by Default',
      description: 'Powerful without the heavy cost.'
    }
  ];

  const benefits = [
    'Fewer follow-ups.',
    'Faster approvals.',
    'Higher perceived professionalism.'
  ];

  return (
    <section className="choose-section">
      <div
        className="gradient-overlay"
        style={{
          background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)'
        }}
      />
      <div className="choose-container">
    
          <div className="choose-header">
            <h2 className="choose-title">
              Why Agencies Choose <span className="highlight font-Instrument">Sevvy</span> Workflow
            </h2>
            <p className="choose-subtitle">
              Not another tool, a system built for<br />real creative operations.
            </p>
          </div>
 

      
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  {/* Front Face */}
                  <div className="flip-card-front feature-card">
                    <div className="feature-icon">
                      <img src={feature.icon} alt={feature.title} />
                    </div>
                    <h3 className="text-orange-500 text-xl font-bold">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>

                  {/* Back Face */}
                  <div className="flip-card-back">
                    <div className="back-icon">
                      <img src={feature.icon} alt={feature.title} />
                    </div>
                    <div className="back-divider" />
                    <p className="back-title">{feature.title}</p>
                    <p className="back-description">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
    

          <div className="benefits-section font-extrabold">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 mb-4 w-full max-w-sm mx-auto">
                <span className="text-orange-500 font-extrabold shrink-0">
                  ✓
                </span>
                <span className="text-left font-extrabold text-gray-900 leading-tight italic md:text-lg">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <div className="cta-section">
            <button className="inline-flex items-center 
                     bg-gradient-to-r from-orange-500 to-orange-200  
                     text-white 
                     pl-10 pr-6 py-2 
                     rounded-full 
                     shadow transition-transform duration-200
                     hover:scale-105 
                     cursor-pointer text-xl text-bold hover:shadow-xl hover:shadow-orange-200">
              Explore More <svg width="16" height="16" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2 md:ml-2'>
<path d="M1.5 10.4971H20.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.999 1.5L20.499 10.4973L10.999 19.4947" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            </button>
          </div>
      
      </div>
    </section>
  );
};

export default Choose;
