import React from 'react';

const Teams = () => {
  return (
    <section className="w-full bg-[#fffaf7] py-20 relative">
      {/* Top background with gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-48"
        style={{
          background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Creative Teams Don't Break<br /> from <span className="text-orange-500 italic font-Instrument">talent</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            They break when tools fragment the work, the context, and the flow
          </p>
        </div>

        {/* Section 1: Fragmented Tools */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-32">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Fragmented Tools Across the Creative Stack
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Tasks, files, feedback, and publishing live in separate tools. Teams switch between 4–6 apps per project, losing context and momentum along the way. More tools don't add clarity — they dilute ownership. No shared context. No single view.
            </p>
            <p className="text-gray-900 italic mb-8 font-bold">
              No shared context. No single view.
            </p>
            <button className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all">
              View unified system
              <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </button>
          </div>
          
          {/* Right Image */}
          <div className="lg:w-1/2">
            <img 
              src="/Home/teams/tools.webp" 
              alt="Fragmented tools across creative stack" 
              className="w-full h-auto rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
            />
          </div>
        </div>

        {/* Section 2: No System for Publishing */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 mb-32">
          {/* Right Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              No System for Publishing and Tracking
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Approved work is delivered and then forgotten. Over 70% of finished content is never reused or showcased again. Value stops at delivery instead of compounding over time.
            </p>
            <p className="text-gray-900 italic mb-8 font-bold">
              Manual publishing, delayed posting
            </p>
            <button className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all">
              Extend content lifecycle
              <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </button>
          </div>
          
          {/* Left Image */}
          <div className="lg:w-1/2">
            <img 
              src="/Home/teams/system.webp" 
              alt="No system for publishing" 
              className="w-full h-auto rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
            />
          </div>
        </div>

        {/* Section 3: Unstructured Feedback */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-32">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Unstructured Feedback and Approval Loops
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Feedback arrives through chats, emails, and side conversations. Review cycles stretch 2–3× longer when comments aren't tied to the work. What should be simple turns into repeated clarification.
            </p>
            <p className="text-gray-900 italic mb-8 font-bold">
              Too many voices. No clear signal.
            </p>
            <button className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all">
              Fix review flow
              <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </button>
          </div>
          
          {/* Right Image */}
          <div className="lg:w-1/2">
            <img 
              src="/Home/teams/cost.webp" 
              alt="Unstructured feedback loops" 
              className="w-full h-auto rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
            />
          </div>
        </div>

        {/* Section 4: Rising Costs */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          {/* Right Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Rising Costs from Tool Stacking
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Teams pay for task tools, chat apps, storage, and review platforms. Combined costs often exceed $300/month, without solving the workflow. Sevvy replaces the stack starting at $18.99/month.
            </p>
            <p className="text-gray-900 italic mb-8 font-bold">
              Internal expense rises, reducing profits
            </p>
            <button className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all">
              Reduce tool costs
              <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </button>
          </div>
          
          {/* Left Image */}
          <div className="lg:w-1/2">
            <img 
              src="/Home/teams/cost.webp" 
              alt="Rising costs from tool stacking" 
              className="w-full h-auto rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Teams;
