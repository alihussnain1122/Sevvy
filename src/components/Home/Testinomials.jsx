import React, { useState } from 'react';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('plan');

  const tabContent = {
    plan: {
      title: 'Plan',
      sections: [
        {
          heading: 'Briefing',
          text: 'Define your project requirements and objectives. Our AI understands your goals and creates a comprehensive project plan tailored to your specific needs and timeline.'
        },
        {
          heading: 'Assets',
          text: 'Organize and manage all your project resources in one place. Connect your files, documents, and data sources seamlessly for efficient workflow management.'
        },
        {
          heading: 'Direction',
          text: 'Set clear milestones and deliverables with intelligent task prioritization. Our system helps you stay focused on what matters most to achieve your goals.'
        }
      ],
      cardQuestion: 'Which application you want to extract the text file content to',
      cardButtons: ['Google Sheets', 'Notion', 'Airtable'],
      cardDescription: 'Seamlessly extract and organize your text file content into your preferred application. Choose where you want to send your data and let our automation handle the rest.'
    },
    execute: {
      title: 'Execute',
      sections: [
        {
          heading: 'Automation',
          text: 'Run automated workflows that save hours of manual work. Our intelligent automation adapts to your processes and executes tasks with precision and reliability.'
        },
        {
          heading: 'Workflows',
          text: 'Create powerful multi-step workflows that connect your favorite tools. Build custom automation sequences that work exactly the way you need them to.'
        },
        {
          heading: 'Integration',
          text: 'Connect with over 100+ popular applications and services. Our seamless integrations ensure your data flows smoothly across all your tools and platforms.'
        }
      ],
      cardQuestion: 'Which workflow do you want to execute first',
      cardButtons: ['Data Sync', 'Export', 'Transform'],
      cardDescription: 'Launch your automated workflows with a single click. Select the workflow you want to run and watch as your tasks are completed automatically across all connected platforms.'
    },
    publish: {
      title: 'Publish',
      sections: [
        {
          heading: 'Deployment',
          text: 'Deploy your content instantly to multiple channels. Our platform ensures your work reaches the right audience at the perfect time with intelligent scheduling.'
        },
        {
          heading: 'Distribution',
          text: 'Distribute your content across all your channels effortlessly. Manage multi-channel publishing with a single workflow and maintain consistent branding everywhere.'
        },
        {
          heading: 'Sharing',
          text: 'Share your work with team members and stakeholders securely. Control access permissions and collaborate in real-time with built-in version control.'
        }
      ],
      cardQuestion: 'Where do you want to publish your content',
      cardButtons: ['Website', 'Social', 'Email'],
      cardDescription: 'Publish your content to multiple platforms simultaneously. Choose your destination and our system will optimize your content for each platform automatically.'
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <section className="w-full bg-white py-16 relative">
      {/* Top background with faded corners */}
      <div 
        className="absolute top-0 left-0 right-0 h-30"
        style={{
          background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      ></div>

      {/* Orange rectangle on the left */}
      <div 
        className="absolute left-0 top-30 w-30 h-45 rounded-r-lg"
        style={{ backgroundColor: '#fffaf7' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-800">
          Trusted by <span className="text-orange-500 italic font-serif">leading</span> brands 
        </h2>

        {/* Brand Logos - Animated Scroll */}
        <div className="relative w-full overflow-x-hidden mb-20">
          <div className="flex items-center gap-10 animate-logo-scroll will-change-transform" style={{ minWidth: '900px' }}>
            <img src="/Home/testimonial/gumroad.webp" alt="Gumroad" className="w-36 h-16 object-contain" />
            <img src="/Home/testimonial/coinbase.webp" alt="Coinbase" className="w-36 h-16 object-contain" />
            <img src="/Home/testimonial/raycast.webp" alt="Raycast" className="w-36 h-16 object-contain" />
            <img src="/Home/testimonial/together.webp" alt="Together.ai" className="w-36 h-16 object-contain" />
            <img src="/Home/testimonial/openai.webp" alt="OpenAI" className="w-36 h-16 object-contain rounded" />
            {/* Repeat for infinite effect */}
            <img src="/Home/testimonial/gumroad.webp" alt="Gumroad" className="w-36 h-16 object-contain opacity-50" />
            <img src="/Home/testimonial/coinbase.webp" alt="Coinbase" className="w-36 h-16 object-contain opacity-50" />
            <img src="/Home/testimonial/raycast.webp" alt="Raycast" className="w-36 h-16 object-contain opacity-50" />
            <img src="/Home/testimonial/together.webp" alt="Together.ai" className="w-36 h-16 object-contain opacity-50" />
            <img src="/Home/testimonial/openai.webp" alt="OpenAI" className="w-36 h-16 object-contain rounded opacity-50" />
          </div>
          <style>{`
            @keyframes logo-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-logo-scroll {
              animation: logo-scroll 18s linear infinite;
            }
          `}</style>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center bg-white rounded-full shadow-sm border border-gray-200 p-1">
            <button
              onClick={() => setActiveTab('plan')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === 'plan'
                  ? 'text-orange-500'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
              Plan
            </button>
            <button
              onClick={() => setActiveTab('execute')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === 'execute'
                  ? 'text-orange-500'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4v16h16"/>
                <path d="M4 14l4-4 4 4 8-8"/>
              </svg>
              Execute
            </button>
            <button
              onClick={() => setActiveTab('publish')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === 'publish'
                  ? 'text-orange-500'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
              Publish
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 pl-8 lg:pl-12">
          
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-orange-500 italic font-serif mb-8">
              {currentContent.title}
            </h3>
            
            <div className="space-y-6">
              {currentContent.sections.map((section, index) => (
                <div key={index}>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {section.heading}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Card */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm h-full flex flex-col justify-between min-h-[400px] transition-shadow duration-300 hover:shadow-[0_0_32px_0_rgba(255,169,107,0.5)]">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <path d="M14 2v6h6"/>
                  </svg>
                </div>
                <div className="flex-1 h-3 bg-gray-200 rounded-full max-w-[200px]"></div>
              </div>

              <div className="flex-grow">
                {/* Question */}
                <p className="text-gray-800 font-medium mb-4 text-base">
                  {currentContent.cardQuestion}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {currentContent.cardDescription}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                {currentContent.cardButtons.map((button, index) => (
                  <button
                    key={index}
                    className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all bg-gray-100 text-gray-700 border border-gray-200 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                  >
                    {button}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;