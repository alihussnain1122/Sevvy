import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] text-gray-700 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10 md:px-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="font-bold text-3xl text-gray-900 tracking-tight flex items-center">
                sevvy
                <span className="text-orange-500 text-4xl ml-1" style={{lineHeight:0}}>.</span>
              </span>
            </div>
            <p className="mt-2 text-base leading-relaxed text-gray-700 max-w-xs">
              A centralized creative management engine for modern teams. From intake to publishing, everything lives in one connected workspace.
            </p>
            <div className="flex gap-5 mt-2">
              {/* Social Icons */}
              <a href="#" aria-label="Facebook" className="text-orange-500 hover:text-orange-600 transition-colors duration-200">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-orange-500 hover:text-orange-600 transition-colors duration-200">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.39 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-orange-500 hover:text-orange-600 transition-colors duration-200">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <rect width="20" height="20" x="2" y="2" rx="5" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="5" strokeWidth="2"/>
                  <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* How It Works */}
          {/* <nav aria-label="How It Works" className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-900 text-lg mb-1 tracking-tight ">How It Works</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Autocapture</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Data Governance</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Virtual Events</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Virtual Users</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Behavioral Analytics</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Connect</a></li>
            </ul>
          </nav> */}

          {/* Solutions */}
          <nav aria-label="Solutions" className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-900 text-lg mb-1 tracking-tight">Solutions</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="hover:text-orange-500 transition-colors">For Agencies</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">For Content Teams</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">For Creators</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">For Freelancers</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">For Non-Technical Teams</a></li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-900 text-lg mb-1 tracking-tight ">Company</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Sevvy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center md:justify-between gap-4 text-sm">
          <div className="flex flex-col items-start gap-1 text-gray-800">
            <span>© 2026 Sevvy Workflow. All rights reserved.</span>
            <span className="text-gray-500">Powered by ShortVids</span>
          </div>
          <div className="flex gap-8 md:gap-16 mt-2 md:mt-0 md:pr-36">
            <a href="#" className="hover:text-orange-500 transition-colors">Legal</a>
            <a href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
