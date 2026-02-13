import React from 'react';
import './Choose.css';

const Choose = () => {
  const features = [
    {
      icon: '/Home/choose/creativity.png',
      title: 'Built for Creative Reality',
      description: 'Made for how creative teams actually work.'
    },
    {
      icon: '/Home/choose/design.png',
      title: 'Client-Ready by Design',
      description: 'Professional, shareable workspaces clients understand.'
    },
    {
      icon: '/Home/choose/energy.png',
      title: 'One System, Zero Tool-Hopping',
      description: 'All creative work runs inside one connected system'
    },
    {
      icon: '/Home/choose/flow.png',
      title: 'Flow Over Features',
      description: 'A system that moves work forward, not menus.'
    },
    {
      icon: '/Home/choose/team.png',
      title: 'Scales with Your Team',
      description: 'Grows with volume, not complexity'
    },
    {
      icon: '/Home/choose/afford.png',
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
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      />
      <div className="choose-container">
        <div className="choose-header">
          <h2 className="choose-title">
            Why Agencies Choose <span className="highlight">Sevy</span> Workflow
          </h2>
          <p className="choose-subtitle">
            Not another tool, a system built for<br />real creative operations.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="benefits-section font-bold">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <span className="checkmark">✓</span>
              <span className="benefit-text">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <button className="explore-btn ">
            Explore More <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Choose;
