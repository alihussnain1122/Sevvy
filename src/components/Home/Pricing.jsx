import React from 'react';

const Pricing = () => {
  const pricingPlans = [
    {
      type: 'trial',
      title: 'Experience Sevvy for 14 Days, On Us',
      subtitle: 'Test your workflow, not your patience. No credit card required',
      features: [
        'Full access to every workspace and template',
        'Live support to get your team running fast',
        'Upgrade, downgrade, or cancel anytime with zero risk'
      ],
      buttonText: 'Start My 14-Day Free Trial',
      buttonStyle: 'outline'
    },
    {
      type: 'basic',
      title: 'Basic',
      price: '$19',
      period: '/ month',
      subtitle: 'Start building projects with structure',
      description: 'Our basic plan is built specifically for solo creators and small teams who want clarity from day one.',
      features: [
        '1 focused workspace',
        'Up to 3 collaborators',
        '10GB secure storage',
        'Essential workflow templates',
        'Email support when you need it'
      ],
      buttonText: 'Try for Free',
      buttonStyle: 'outline'
    },
    {
      type: 'premium',
      title: 'Premium',
      price: '$49',
      period: '/ month',
      subtitle: 'Turn content into a repeatable system',
      description: 'Sevvy\'s premium plan is the most popular choice for agencies looking to produce content consistently across clients, formats, platforms, and clients.',
      highlightText: 'Everything in Basic, plus:',
      features: [
        'Up to 5 active workspaces',
        '6 team members collaborating in real time',
        '15GB storage',
        'Priority support',
        'Advanced workflow templates'
      ],
      buttonText: 'Subscribe Now',
      buttonStyle: 'solid',
      isPopular: true
    },
    {
      type: 'gold',
      title: 'Gold',
      price: '$99',
      period: '/ month',
      subtitle: 'Run content operations like a machine',
      description: 'Our gold plan offers special features for high-velocity teams where content is a core business function.',
      highlightText: 'Everything in Premium, plus:',
      features: [
        'Up to 6 workspaces',
        '10 team members',
        '100GB storage',
        '24/7 phone support',
        'Fully customizable templates'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'outline'
    }
  ];

  const benefits = [
    'Change plans anytime',
    'No contracts',
    'No forced tiers',
    'No fine print'
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-5 flex justify-center items-center">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-[42px] font-semibold text-[#2D2D2D] mb-3 leading-tight">
            Start Where Your <span className="text-orange-400 font-Instrument italic">Workflow</span> is
          </h2>
          <p className="text-base md:text-lg text-[#6B6B6B]">
            Scale when the work scales, not before.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-start">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#E8E8E8] rounded-xl p-8 flex flex-col transition-all duration-300 hover:translate-y-2 hover:bg-gradient-to-r from-orange-500 to-orange-200 hover:border-[#FFB380] hover:shadow-lg group"
            >
              {/* Card Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-3 leading-snug group-hover:text-white">
                  {plan.title}
                </h3>
                {plan.price && (
                  <div className="my-4">
                    <span className="text-4xl font-bold text-[#2D2D2D] group-hover:text-white">{plan.price}</span>
                    <span className="text-base text-[#6B6B6B] ml-1 group-hover:text-white">{plan.period}</span>
                  </div>
                )}
                <p className="text-sm text-[#6B6B6B] font-bold leading-relaxed group-hover:text-white">
                  {plan.subtitle}
                </p>
              </div>

              {/* Card Body */}
              <div className="mb-6">
                {plan.description && (
                  <p className="text-[13px] text-[#6B6B6B] leading-relaxed mb-5 group-hover:text-white">
                    {plan.description}
                  </p>
                )}
                
                {plan.highlightText && (
                  <p className="text-sm font-semibold text-[#2D2D2D] mb-4 group-hover:text-white">
                    {plan.highlightText}
                  </p>
                )}

                <hr className="border-t border-[#E8E8E8] mb-4 group-hover:border-white" />
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[13px]">
                      <span className="text-[#FF8C42] font-bold text-base flex-shrink-0 mt-0.5 group-hover:text-white">✓</span>
                      <span className="text-[#4A4A4A] leading-relaxed group-hover:text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div>
                <button 
                  className="w-full py-3.5 px-6 rounded-lg text-sm font-semibold transition-all duration-300 bg-white text-black border-[#FF8C42] border-2 cursor-pointer"
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3 justify-center items-center mb-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 justify-center">
              <span className="text-[#FF8C42] text-xl font-bold">✓</span>
              <span className="text-lg font-bold italic text-[#2D2D2D]">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-[#FF8C42] to-[#FFD19C] text-white text-lg py-3 px-8 rounded-full flex items-center gap-3 transition-all duration-300 focus:outline-none hover:scale-105">
            Pricing Detail
            <span className="text-xl font-bold">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
