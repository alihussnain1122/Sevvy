import React from "react";

const Stages = () => {
  return (
    <section className="relative w-full py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Stage 1: Intake & Alignment */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <p className="text-orange-500 font-bold text-xl uppercase tracking-wide mb-2">Stage 1</p>
            <h2 className="text-2xl md:text-4xl  text-gray-900">Intake & Alignment</h2>
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
                  <span>Standardized<strong> creative briefs</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Centralized<strong> assets and references</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Defined<strong> priorities and ownership</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Clear alignment </strong>from day one</span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-200 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                Create Your First Project
              </button>
            </div>
          </div>
        </div>

        {/* Stage 2: Workflow & Visibility */}
        <div className="mb-16">
          <div className="bg-[#fffbf8] rounded-3xl p-12 relative overflow-hidden">
            {/* Top gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none" style={{
              background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
              maskImage: 'linear-gradient(to top, transparent 0%, black 50%, black 50%), linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 50%, black 50%), linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in'
            }} />
            <div className="text-center mb-8 relative z-10">
              <p className="text-orange-500 font-bold text-xl uppercase tracking-wide mb-2">Stage 2</p>
              <h2 className="text-2xl md:text-4xl  text-gray-900">Workflow & Visibility</h2>
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
                    <span><strong>Table, board,</strong> and <strong>grouped views</strong></span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Real-time </strong>status updates</span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Cross-project </strong>visibility</span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>Clear <strong>task ownership</strong></span>
                  </li>
                </ul>
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-200 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
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
            <h2 className="text-2xl md:text-4xl text-gray-900">Review & Feedback</h2>
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
                {/* <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Timestamped visual annotations</strong></span>
                </li> */}
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Threaded</strong> comment conversations</span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Version </strong>comparison tools</span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Clean <strong>version tracking</strong></span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-200 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                Streamline Reviews
              </button>
            </div>
          </div>
        </div>

        {/* Stage 4: Approval & Version Control */}
        <div className="mb-16">
          <div className="bg-[#fffbf8] rounded-3xl p-12 relative overflow-hidden">
            {/* Top gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none" style={{
              background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
              maskImage: 'linear-gradient(to top, transparent 0%, black 50%, black 50%), linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 50%, black 50%), linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in'
            }} />
            <div className="text-center mb-8">
              <p className="text-orange-500 font-bold text-xl uppercase tracking-wide mb-2">Stage 4</p>
              <h2 className="text-2xl md:text-4xl text-gray-900">Approval & Version Control</h2>
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
                    <span>Defined <strong>approval stages</strong></span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>Instant <strong>status update</strong></span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>Visible<strong> revision </strong> history</span>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>Direct <strong> publishing </strong> to web or local</span>
                  </li>
                </ul>
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-200 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Accelerate Delivery
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
            <h2 className="text-2xl md:text-4xl text-gray-900">Publishing & Asset Library</h2>
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
              <h3 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4">Turn work into assets</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Over 70% of content is never reused. Structured libraries <br /> convert finished work into searchable, reusable <br /> campaign-ready assets.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Auto <strong>generated portfolio</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>Organized <strong>asset library</strong></span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Client ready</strong> sharing links</span>
                </li>
                <li className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Compaign ready</strong> reuse system</span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-200 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                Make Work Reusable
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stages;
