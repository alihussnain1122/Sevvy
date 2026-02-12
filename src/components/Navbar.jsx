import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-sm px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Left Side: Logo + Navigation Links */}
            <div className="flex items-center gap-9">
              {/* Logo */}
              <Link to="/" className="text-2xl font-semibold text-gray-900 tracking-tight">
                sevvy<span className="text-orange-500">.</span>
              </Link>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-9">
                <Link 
                  to="/how-it-works" 
                  className="text-gray-700 hover:text-gray-900 text-[15px] font-normal transition-colors"
                >
                  How it works
                </Link>
                
                {/* <div className="relative">
                  <button
                    onClick={() => setFeaturesOpen(!featuresOpen)}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-[15px] font-normal transition-colors"
                  >
                    Features
                    <svg 
                      className="w-4 h-4 text-gray-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div> */}

                <Link 
                  to="/pricing" 
                  className="text-gray-700 hover:text-gray-900 text-[15px] font-normal transition-colors"
                >
                  Pricing
                </Link>

                <Link 
                  to="/blog" 
                  className="text-gray-700 hover:text-gray-900 text-[15px] font-normal transition-colors"
                >
                  Blogs
                </Link>

                {/* <div className="relative">
                  <button
                    onClick={() => setPlatformsOpen(!platformsOpen)}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-[15px] font-normal transition-colors"
                  >
                    Platforms
                    <svg 
                      className="w-4 h-4 text-gray-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>

            {/* Join Waitlist Button - Right Side */}
            <Link 
              to="/waitlist"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg text-[15px] font-medium flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Join Waitlist
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;