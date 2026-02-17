import React from "react";

const Hero = () => {
return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">Who Is Sevvy For </span>
            
          </h2>

          <p className="mx-auto mt-6 max-w-[65ch] text-base sm:text-lg leading-relaxed text-gray-600">
            Sevvy is built for creative teams and individuals who need a clear,
            structured way to move content from idea to publishing. Manage every
            workstage without it juggling multiple tools or broken workflows.
          </p>
        </div>

        {/* Main Layout */}
        <div className="relative mt-14 md:-mt-10 flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-center">
          
          {/* Left Side (Mobile = stacked, Desktop = absolute) */}
          <div className="flex flex-col items-center gap-8 lg:absolute lg:left-40 lg:top-14 lg:items-start">
            
            {/* Pie Chart */}
            <div className="w-[220px] sm:w-[240px]">
              <img
                src="/WhoIsSevvy/Hero/piechart.webp"
                alt="Pie chart"
                className="w-full object-contain"
              />
            </div>

            {/* Overview */}
            <div className="w-[280px] sm:w-[340px] lg:relative lg:left-2 lg:bottom-12">
              <img
                src="/WhoIsSevvy/Hero/overview.webp"
                alt="Overview graph"
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Center Character */}
          <div className="relative z-10 flex flex-col items-center">
            <img
              src="/WhoIsSevvy/Hero/avatar.webp"
              alt="Mascot"
              className="h-[240px] w-[240px] sm:h-[280px] sm:w-[280px] lg:h-[300px] lg:w-[300px] object-contain drop-shadow-2xl"
            />

            {/* Customers Card */}
            <div className="relative mt-6 md:mt-2 w-[220px] sm:w-[260px] lg:left-10">
              <img
                src="/WhoIsSevvy/Hero/Card.webp"
                alt="Customers card"
                className="w-full object-contain drop-shadow-xl"
              />
            </div>

            {/* CTA Button */}
            <button className="mt-12 sm:mt-14 lg:mt-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-300 px-10 sm:px-16 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-xl transition duration-300 hover:from-orange-600 hover:to-orange-400">
              Get 14 Days Free Trial
            </button>
          </div>

          {/* Right Side Team Card */}
          <div className="mt-10 w-[280px] sm:w-[330px] lg:absolute lg:right-[130px] lg:top-24 lg:w-[360px]">
            <img
              src="/WhoIsSevvy/Hero/team.webp"
              alt="Team list"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;