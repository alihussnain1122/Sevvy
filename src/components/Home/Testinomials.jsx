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
      cardDescription: 'Extract text file data and send it to your chosen app – automation does the work for you..'
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
      cardDescription: 'Automate tasks across platforms with a single click – just select a workflow and watch it run.'
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
      cardDescription: 'Publish to multiple platforms at once – content auto‑optimized for each.'
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
          maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)'
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
          Trusted by <span className="text-orange-500 italic font-Instrument">leading</span> brands
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
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === 'plan'
                  ? 'text-orange-500'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 9.52637H12.6842M15.8421 9.52637H19" stroke="#FF710B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.52637 19.0001V9.52637" stroke="#FF710B" stroke-width="1.5" />
                <path d="M9.52632 7.15789V4M15.4474 15.4474C13.8684 15.4474 12.2895 16.7279 12.2895 19H10.3158C7.33868 19 5.84974 19 4.92526 18.0747C4.00079 17.1495 4 15.6613 4 12.6842V10.3158C4 7.33868 4 5.84974 4.92526 4.92526C5.85053 4.00079 7.33868 4 10.3158 4H12.6842C15.6613 4 17.1503 4 18.0747 4.92526C18.9992 5.85053 19 7.33868 19 10.3158V16.1129C19 16.8786 18.6958 17.613 18.1544 18.1544C17.613 18.6958 16.8786 19 16.1129 19" stroke="#FF710B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              Plan
            </button>
            <button
              onClick={() => setActiveTab('execute')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === 'execute'
                  ? 'text-orange-500'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15.8335C7.5 14.4528 8.61929 13.3335 10 13.3335C11.3807 13.3335 12.5 14.4528 12.5 15.8335C12.5 17.2142 11.3807 18.3335 10 18.3335C8.61929 18.3335 7.5 17.2142 7.5 15.8335Z" stroke="black" stroke-width="1.5" />
                <path d="M9.99967 1.66675V10.0001M9.99967 1.66675C9.53217 1.66675 9.17551 2.03175 8.46384 2.76175L7.08301 4.14175M9.99967 1.66675C10.4688 1.66675 10.8247 2.03175 11.5363 2.76175L12.9172 4.14175" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              Execute
            </button>
            <button
              onClick={() => setActiveTab('publish')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === 'publish'
                  ? 'text-orange-500'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16634 9.87492L7.60384 11.4374C7.43717 11.6041 7.2394 11.6841 7.01051 11.6774C6.78162 11.6708 6.58356 11.5838 6.41634 11.4166C6.26356 11.2499 6.18356 11.0555 6.17634 10.8333C6.16912 10.611 6.24912 10.4166 6.41634 10.2499L9.41634 7.24992C9.49967 7.16659 9.58995 7.1077 9.68717 7.07325C9.7844 7.03881 9.88856 7.02131 9.99967 7.02075C10.1108 7.0202 10.215 7.0377 10.3122 7.07325C10.4094 7.10881 10.4997 7.1677 10.583 7.24992L13.583 10.2499C13.7497 10.4166 13.8297 10.611 13.823 10.8333C13.8163 11.0555 13.7363 11.2499 13.583 11.4166C13.4163 11.5833 13.2186 11.6702 12.9897 11.6774C12.7608 11.6846 12.5627 11.6046 12.3955 11.4374L10.833 9.87492V15.8333C10.833 16.0694 10.753 16.2674 10.593 16.4274C10.433 16.5874 10.2352 16.6671 9.99967 16.6666C9.76412 16.666 9.56634 16.586 9.40634 16.4266C9.24634 16.2671 9.16634 16.0694 9.16634 15.8333V9.87492ZM3.33301 6.66659V4.99992C3.33301 4.54159 3.49634 4.14936 3.82301 3.82325C4.14967 3.49714 4.5419 3.33381 4.99967 3.33325H14.9997C15.458 3.33325 15.8505 3.49659 16.1772 3.82325C16.5038 4.14992 16.6669 4.54214 16.6663 4.99992V6.66659C16.6663 6.9027 16.5863 7.10075 16.4263 7.26075C16.2663 7.42075 16.0686 7.50047 15.833 7.49992C15.5975 7.49936 15.3997 7.41936 15.2397 7.25992C15.0797 7.10047 14.9997 6.9027 14.9997 6.66659V4.99992H4.99967V6.66659C4.99967 6.9027 4.91967 7.10075 4.75967 7.26075C4.59967 7.42075 4.4019 7.50047 4.16634 7.49992C3.93079 7.49936 3.73301 7.41936 3.57301 7.25992C3.41301 7.10047 3.33301 6.9027 3.33301 6.66659Z" fill="black" />
              </svg>

              Publish
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 pl-8 lg:pl-12">

          {/* Left Side - Text Content */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-8">
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
            <div className="bg-white border border-black rounded-2xl p-4 h-full pb-0 flex flex-col justify-between min-h-[400px]">
              <div className="border-t border-l border-r border-black rounded-t-2xl p-6 h-full flex flex-col gap-4">
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <svg width="70" height="100" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M54.7991 0H14.9452C6.6912 0 0 6.69123 0 14.9453V54.7993C0 63.0534 6.6912 69.7446 14.9452 69.7446H54.7991C63.0532 69.7446 69.7444 63.0534 69.7444 54.7993V14.9453C69.7444 6.69123 63.0532 0 54.7991 0Z" fill="#CCCCCC" />
                    </svg>

                  </div>
                  <svg width="273" height="30" viewBox="0 0 273 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M257.805 0H14.9452C6.6912 0 0 6.69123 0 14.9453V19.927C0 28.1811 6.6912 34.8723 14.9452 34.8723H257.805C266.059 34.8723 272.75 28.1811 272.75 19.927V14.9453C272.75 6.69123 266.059 0 257.805 0Z" fill="#323232" fill-opacity="0.2" />
                  </svg>

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
                      className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all bg-black text-white border-none hover:bg-orange-500 hover:text-white"
                    >
                      {button}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;