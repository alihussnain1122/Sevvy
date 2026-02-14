import React from "react";

const Centralization = () => {
  return (
    <section className="relative w-full bg-[#fffaf7]  overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading Area */}
        <div className="text-center mb-6" style={{
          background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)'
        }}>
          <h2 className="text-4xl mt-4 md:text-5xl text-gray-900 mb-4 font-poppins">
            One <span className="italic text-orange-400 font-Instrument">Centralized Workspace</span> that
            <br />
            Replaces Everything
          </h2>
          <p className="text-black text-base md:text-lg max-w-[600px] mx-auto leading-relaxed">
            Sevvy consolidates project management, file handling/feedback, approvals, publishing, and client access into a single system 
            <br />
            designed for creative operations.
          </p>
        </div>

        {/* Circles Container */}
        <div className="relative w-full h-[500px] md:h-[600px] mt-8 mb-2">
          
          {/* Top Row - Left Circle: Intake (Purple) */}
            <div className="absolute top-16 left-1/2 -translate-x-[280px] md:-translate-x-[320px] w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full border-[8px] border-purple-300 bg-transparent flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Intake</h3>
            <p className="text-xs text-black text-center px-10 py-4 leading-tight">
              Structured briefs, 
              <br />
              goals, assets, and 
              <br />
            deadlines captured
              <br /> upfront.
            </p>
          </div>

          {/* Top Row - Center Circle: Execute (Orange) */}
            <div className="absolute top-12 md:top-8 left-1/2 -translate-x-1/2 w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full border-[8px] border-orange-300 bg-transparent flex flex-col items-center justify-center z-10">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Execute</h3>
            <p className="text-xs text-black text-center px-10 py-4 leading-tight">
              Tasks, files, and 
              <br />
              timelines aligned 
              <br /> in one workspace.
            </p>
          </div>

          {/* Top Row - Right Circle: Review (Green) */}
            <div className="absolute top-16 left-1/2 translate-x-[60px] md:translate-x-[60px] w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full border-[8px] border-green-300 bg-transparent flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Review</h3>
            <p className="text-xs text-black text-center px-10 py-4 leading-tight">
                    Timestamped feedback <br /> with one 
               clear conversation thread.
            </p>
          </div>

          {/* Bottom Row - Left Circle: Approve (Yellow) */}
            <div className="absolute bottom-16 md:bottom-24 left-1/2 -translate-x-[200px] md:-translate-x-[220px] w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full border-[8px] border-yellow-300 bg-transparent flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Approve</h3>
            <p className="text-xs text-black text-center px-10 py-4 leading-tight ml-6">
              Defined stages  <br /> with visible status <br /> and version control.
            </p>
          </div>

          {/* Bottom Row - Right Circle: Publish (Blue) */}
            <div className="absolute bottom-16 md:bottom-24 left-1/2 translate-x-[-40px] md:translate-x-[-40px] w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full border-[8px] border-sky-300 bg-transparent flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Publish</h3>
            <p className="text-xs text-gray-600 text-center px-10 py-4 leading-tight">
              Approved work moves live and stays reusable.
            </p>
          </div>

          {/* Mobile Stack - Hidden on Desktop */}
          <div className="md:hidden flex flex-col items-center gap-8 relative">
            {/* Mobile view would stack circles vertically if needed */}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-200 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Unify Your Creative Stack Today
          </button>
        </div>

      </div>
    </section>
  );
};

export default Centralization;
