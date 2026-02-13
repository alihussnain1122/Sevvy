import React from "react";

const Stages = () => {
  return (
    <section className="relative w-full py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Stage 1: Intake & Alignment */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <p className="text-orange-500 font-bold text-xl uppercase tracking-wide mb-2">Stage 1</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Intake & Alignment</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Left */}
            <div className="flex justify-center">
              <img 
                src="/HowItWorks/stages/1.webp" 
                alt="Intake & Alignment" 
                className="max-w-md w-full h-auto object-contain"
              />
            </div>
            
            {/* Content Right */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4">Start with clarity</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Defined goals, formats, deadlines, and references reduce  <br /> early rework by up to 30% and align teams before execution begins.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Standardized creative briefs</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Centralized assets and references</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Defined priorities and ownership</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Clear alignment from day one</strong></span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                Create Your First Project
              </button>
            </div>
          </div>
        </div>

        {/* Stage 2: Workflow & Visibility */}
        <div className="mb-16">
          <div className="bg-[#EFEAE4] rounded-3xl p-12" style={{
            background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
            maskImage: 'linear-gradient(to top, transparent 0%, black 10%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 10%, black 100%)'
          }}>
            <div className="text-center mb-8">
              <p className="text-orange-500 font-bold text-xl uppercase tracking-wide mb-2">Stage 2</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Workflow & Visibility</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Left */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4">Track progress clearly</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Flexible views and real-time dashboards help teams save 3–5 hours weekly by reducing coordination and manual status tracking.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Table, board, and grouped views</strong></span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Real-time status updates</strong></span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Cross-project visibility</strong></span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Clear task ownership</strong></span>
                  </li>
                </ul>
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Control Your Workflow
                </button>
              </div>
              
              {/* Image Right */}
              <div className="flex justify-center">
                <img 
                  src="/HowItWorks/stages/2.webp" 
                  alt="Workflow & Visibility" 
                  className="max-w-md w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stage 3: Review & Feedback */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <p className="text-orange-500 font-bold text-xl uppercase tracking-wide mb-2">Stage 3</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Review & Feedback</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Left */}
            <div className="flex justify-center">
              <img 
                src="/HowItWorks/stages/3.webp" 
                alt="Review & Feedback" 
                className="max-w-md w-full h-auto object-contain"
              />
            </div>
            
            {/* Content Right */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4">Centralize feedback</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Pin-point annotations and threaded comments eliminate version confusion, cut revision cycles by 40%, and keep all stakeholders aligned.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Timestamped visual annotations</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Threaded comment conversations</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Version comparison tools</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Clear feedback trails</strong></span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                See How It Works
              </button>
            </div>
          </div>
        </div>

        {/* Stage 4: Approval & Version Control */}
        <div className="mb-16">
          <div className="bg-[#EFEAE4] rounded-3xl p-12" style={{
            background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
            maskImage: 'linear-gradient(to top, transparent 0%, black 10%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 10%, black 100%)'
          }}>
            <div className="text-center mb-8">
              <p className="text-orange-500 font-bold text-xl uppercase tracking-wide mb-2">Stage 4</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Approval & Version Control</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Left */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4">Maintain control</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Structured approval workflows and automated versioning prevent unauthorized changes and ensure compliance teams can audit every decision.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Defined approval stages</strong></span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Automatic version history</strong></span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Role-based permissions</strong></span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Audit-ready documentation</strong></span>
                  </li>
                </ul>
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Learn About Approvals
                </button>
              </div>
              
              {/* Image Right */}
              <div className="flex justify-center">
                <img 
                  src="/HowItWorks/stages/4.webp" 
                  alt="Approval & Version Control" 
                  className="max-w-md w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stage 5: Publishing & Asset Library */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <p className="text-orange-500 font-bold text-xl uppercase tracking-wide mb-2">Stage 5</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Publishing & Asset Library</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Left */}
            <div className="flex justify-center">
              <img 
                src="/HowItWorks/stages/5.webp" 
                alt="Publishing & Asset Library" 
                className="max-w-md w-full h-auto object-contain"
              />
            </div>
            
            {/* Content Right */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4">Deploy and reuse</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                One-click distribution to channels and searchable asset libraries speed up campaign launches and reduce duplicate work across teams.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Multi-channel publishing</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Branded asset library</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Smart search and tagging</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Reusable templates</strong></span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                Explore Publishing
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stages;
