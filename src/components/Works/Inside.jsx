import React from "react";

const Inside = () => {
  return (
    <section className="w-full py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-20">
          What You Can Do <span className="italic text-orange-500 font-Instrument">Inside Sevvy</span>
        </h2>

        {/* Main Content Area - Desktop */}
        <div className="hidden md:block relative w-full min-h-[650px]">
          
          {/* Center Mascot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">32
            <img 
              src="/HowItWorks/Inside/mascot.webp" 
              alt="Sevvy Mascot" 
              className="w-[280px] h-auto"
            />
          </div>

          {/* Top Left - Adobe */}
          <div className="absolute top-8 left-8 text-center w-[180px]">
            <img src="/HowItWorks/Inside/adobe.webp" alt="Adobe" className="w-12 h-12 mx-auto mb-3" />
            <p className="text-sm text-gray-900 leading-tight">
              Work with <span className="font-bold">Adobe Creative Cloud</span> files inside live projects
            </p>
          </div>

          {/* Middle Left - Google Drive */}
          <div className="absolute top-1/2 -translate-y-1/2 left-8 text-center w-[180px]">
            <img src="/HowItWorks/Inside/drive.webp" alt="Google Drive" className="w-12 h-12 mx-auto mb-3" />
            <p className="text-sm text-gray-900 leading-tight">
              Pull videos directly from <span className="font-bold">Google Drive</span> without duplication
            </p>
          </div>

          {/* Bottom Left - Zoom */}
          <div className="absolute bottom-32 left-8 text-center w-[180px]">
            <img src="/HowItWorks/Inside/zoom.webp" alt="Zoom" className="w-12 h-12 mx-auto mb-3" />
            <p className="text-sm text-gray-900 leading-tight">
              Run <span className="font-bold">Zoom</span> feedback sessions with notes tied to assets
            </p>
          </div>

          {/* Bottom Center Left - Record */}
          <div className="absolute bottom-2 left-1/2 -translate-x-[120px] text-center w-[160px]">
            <img src="/HowItWorks/Inside/record.webp" alt="Record" className="w-12 h-12 mx-auto mb-3" />
            <p className="text-sm text-gray-900 leading-tight">
              <span className="font-bold">Record screen</span> walkthroughs for clearer direction
            </p>
          </div>

          {/* Bottom Center Right - Facebook */}
          <div className="absolute bottom-2 left-1/2 translate-x-[20px] text-center w-[160px]">
            <img src="/HowItWorks/Inside/facebook.webp" alt="Facebook" className="w-12 h-12 mx-auto mb-3" />
            <p className="text-sm text-gray-900 leading-tight">
              Publish approved content through <span className="font-bold">Facebook APIs</span>
            </p>
          </div>

          {/* Top Right - Track Ads */}
          <div className="absolute top-8 right-8 text-center w-[180px]">
            <img src="/HowItWorks/Inside/analytics.webp" alt="Track Ads" className="w-12 h-12 mx-auto mb-3" />
            <p className="text-sm text-gray-900 leading-tight">
              <span className="font-bold">Track live ads</span> and creative references centrally
            </p>
          </div>

          {/* Middle Right - Client Portal */}
          <div className="absolute top-1/2 -translate-y-1/2 right-8 text-center w-[180px]">
            <img src="/HowItWorks/Inside/analytics.webp" alt="Client Portal" className="w-12 h-12 mx-auto mb-3" />
            <p className="text-sm text-gray-900 leading-tight">
              Share <span className="font-bold">branded client portals</span> under your business name
            </p>
          </div>

          {/* Bottom Right - Capture */}
          <div className="absolute bottom-32 right-8 text-center w-[180px]">
            <img src="/HowItWorks/Inside/advertising.webp" alt="Capture" className="w-12 h-12 mx-auto mb-3" />
            <p className="text-sm text-gray-900 leading-tight">
              <span className="font-bold">Capture ads</span> and inspiration using the Chrome extension
            </p>
          </div>

        </div>

        {/* Mobile Layout - Simple Grid */}
        <div className="md:hidden grid grid-cols-1 gap-8">
          <div className="text-center">
            <img src="/HowItWorks/Inside/adobe.webp" alt="Adobe" className="w-12 h-12 mx-auto mb-3" />
            <p className="text-sm text-gray-900">Work with <span className="font-bold">Adobe Creative Cloud</span> files inside live projects</p>
          </div>
          <div className="text-center">
            <img src="/HowItWorks/inside/drive.png" alt="Google Drive" className="w-12 h-12 mx-auto mb-3" />
            <p className="text-sm text-gray-900">Pull videos directly from <span className="font-bold">Google Drive</span> without duplication</p>
          </div>
          <div className="text-center">
            <img src="/HowItWorks/inside/zoom.png" alt="Zoom" className="w-12 h-12 mx-auto mb-3" />
            <p className="text-sm text-gray-900">Run <span className="font-bold">Zoom</span> feedback sessions with notes tied to assets</p>
          </div>
          <div className="text-center">
            <img src="/HowItWorks/inside/record.png" alt="Record" className="w-12 h-12 mx-auto mb-3" />
            <p className="text-sm text-gray-900"><span className="font-bold">Record screen</span> walkthroughs for clearer direction</p>
          </div>
          <div className="text-center">
            <img src="/HowItWorks/inside/facebook.png" alt="Facebook" className="w-12 h-12 mx-auto mb-3" />
            <p className="text-sm text-gray-900">Publish approved content through <span className="font-bold">Facebook APIs</span></p>
          </div>
          <div className="text-center">
            <img src="/HowItWorks/inside/analytics.png" alt="Track Ads" className="w-12 h-12 mx-auto mb-3" />
            <p className="text-sm text-gray-900"><span className="font-bold">Track live ads</span> and creative references centrally</p>
          </div>
          <div className="text-center">
            <img src="/HowItWorks/inside/portal.png" alt="Client Portal" className="w-12 h-12 mx-auto mb-3" />
            <p className="text-sm text-gray-900">Share <span className="font-bold">branded client portals</span> under your business name</p>
          </div>
          <div className="text-center">
            <img src="/HowItWorks/inside/capture.png" alt="Capture" className="w-12 h-12 mx-auto mb-3" />
            <p className="text-sm text-gray-900"><span className="font-bold">Capture ads</span> and inspiration using the Chrome extension</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-all duration-300">
            Build Your Workflow Your Way
          </button>
        </div>

      </div>
    </section>
  );
};

export default Inside;
