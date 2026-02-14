import React from 'react';

const Teams = () => {
  return (
    <section className="w-full bg-[#fffaf7] py-8 relative">
      {/* Top background with gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-48"
        style={{
          background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-8 pl-8 sm:px-10 lg:px-14 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl text-black mb-4">
            Creative Teams Don't Break<br /> from <span className="text-orange-300 italic font-Instrument">talent</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            They break when tools fragment the work, the <br /> context, and the flow
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
            <button className="inline-flex items-center 
                   bg-gradient-to-r from-orange-500 to-orange-200  
                   text-white 
                   pl-8 pr-3 py-1 
                   rounded-full 
                   cursor-pointer
                   transition-all duration-3000">

              <span className="font-medium">
                View unified system
              </span>

              <span className="ml-4 
                   bg-white 
                   rounded-full 
                   w-12 h-12 
                   flex items-center justify-center">

                <svg width="20" height="20" viewBox="0 0 21 22" fill="none">
                  <path d="M0 11H18" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M9 2L18 11L9 20" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                </svg>

              </span>
            </button>

          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            <img
              src="/Home/teams/tools.webp"
              alt="Fragmented tools across creative stack"
              className="w-full h-auto rounded-3xl  transition-shadow"
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
            <button className="inline-flex items-center 
                   bg-gradient-to-r from-orange-500 to-orange-200  
                   text-white 
                   pl-8 pr-3 py-1 
                   rounded-full 
                   cursor-pointer
                   transition-all duration-300">

              <span className="font-medium">
                Extend content lifecycle
              </span>

              <span className="ml-4 
                   bg-white 
                   rounded-full 
                   w-12 h-12 
                   flex items-center justify-center">

                <svg width="20" height="20" viewBox="0 0 21 22" fill="none">
                  <path d="M0 11H18" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M9 2L18 11L9 20" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                </svg>

              </span>
            </button>

          </div>

          {/* Left Image */}
          <div className="lg:w-1/2">
            <img
              src="/Home/teams/system.webp"
              alt="No system for publishing"
              className="w-full h-auto rounded-3xl transition-shadow"
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
            <button className="inline-flex items-center 
                   bg-gradient-to-r from-orange-500 to-orange-200  
                   text-white 
                   pl-8 pr-3 py-1 
                   rounded-full 
                   cursor-pointer
                   transition-all duration-300">

              <span className="font-medium">
                Fix review flow
              </span>

              <span className="ml-4 
                   bg-white 
                   rounded-full 
                   w-12 h-12 
                   flex items-center justify-center">

                <svg width="20" height="20" viewBox="0 0 21 22" fill="none">
                  <path d="M0 11H18" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M9 2L18 11L9 20" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                </svg>

              </span>
            </button>

          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            <img
              src="/Home/teams/cost.webp"
              alt="Unstructured feedback loops"
              className="w-full h-auto rounded-3xl transition-shadow"
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
            <button className="inline-flex items-center 
                   bg-gradient-to-r from-orange-500 to-orange-200  
                   text-white 
                   pl-8 pr-3 py-1 
                   rounded-full 
                   cursor-pointer
                   transition-all duration-300">

              <span className="font-medium">
                Reduce tool Costs
              </span>

              <span className="ml-4 
                   bg-white 
                   rounded-full 
                   w-12 h-12 
                   flex items-center justify-center">

                <svg width="20" height="20" viewBox="0 0 21 22" fill="none">
                  <path d="M0 11H18" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M9 2L18 11L9 20" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                </svg>

              </span>
            </button>

          </div>

          {/* Left Image */}
          <div className="lg:w-1/2">
            <img
              src="/Home/teams/cost.webp"
              alt="Rising costs from tool stacking"
              className="w-full h-auto rounded-3xl transition-shadow"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Teams;
