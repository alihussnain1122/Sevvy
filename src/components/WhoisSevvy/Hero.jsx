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
        {/* Mobile view custom layout */}
        <div className="block lg:hidden mt-14 flex flex-col items-center justify-center">
          {/* Mascot on top */}
          <img
            src="/WhoIsSevvy/Hero/avatar.webp"
            alt="Mascot"
            className="h-[140px] w-[140px] xs:h-[180px] xs:w-[180px] sm:h-[220px] sm:w-[220px] object-contain drop-shadow-2xl mb-2"
          />
          {/* Overview image below mascot */}
          <div className="w-[220px] xs:w-[260px] sm:w-[320px] mb-2">
            <img
              src="/WhoIsSevvy/Hero/overview.webp"
              alt="Overview graph"
              className="w-full object-contain"
            />
          </div>
          {/* Card and Piechart in same row below overview */}
          <div className="flex flex-row w-full justify-center gap-2 mb-2">
            <div className="w-[120px] xs:w-[140px] sm:w-[160px]">
              <img
                src="/WhoIsSevvy/Hero/Card.webp"
                alt="Customers card"
                className="w-full object-contain drop-shadow-xl"
              />
            </div>
            <div className="w-[100px] xs:w-[120px] sm:w-[140px]">
              <img
                src="/WhoIsSevvy/Hero/piechart.webp"
                alt="Pie chart"
                className="w-full object-contain"
              />
            </div>
          </div>
          {/* Team image at last */}
          <div className="w-[220px] xs:w-[260px] sm:w-[320px] mt-2">
            <img
              src="/WhoIsSevvy/Hero/team.webp"
              alt="Team list"
              className="w-full object-contain"
            />
          </div>
          {/* CTA Button */}
          <button className="mt-8 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-300 px-8 py-3 text-sm font-semibold text-white shadow-xl transition duration-300 hover:from-orange-600 hover:to-orange-400 w-full max-w-xs mx-auto">
            Get 14 Days Free Trial
          </button>
        </div>

        {/* Desktop view original layout (unchanged) */}
        <div className="hidden lg:flex relative mt-14 flex-row items-center justify-center">
          {/* Left Side */}
          <div className="flex flex-col items-center gap-8 absolute left-40 top-14">
            <div className="w-[240px]">
              <img
                src="/WhoIsSevvy/Hero/piechart.webp"
                alt="Pie chart"
                className="w-full object-contain"
              />
            </div>
            <div className="w-[340px] relative left-2 bottom-12">
              <img
                src="/WhoIsSevvy/Hero/overview.webp"
                alt="Overview graph"
                className="w-full object-contain"
              />
            </div>
          </div>
          {/* Center Character */}
          <div className="relative z-10 flex flex-col items-center mx-auto">
            <img
              src="/WhoIsSevvy/Hero/avatar.webp"
              alt="Mascot"
              className="h-[300px] w-[300px] object-contain drop-shadow-2xl"
            />
            <div className="relative mt-2 w-[260px] left-10">
              <img
                src="/WhoIsSevvy/Hero/Card.webp"
                alt="Customers card"
                className="w-full object-contain drop-shadow-xl"
              />
            </div>
            <button className="mt-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-300 px-16 py-4 text-base font-semibold text-white shadow-xl transition duration-300 hover:from-orange-600 hover:to-orange-400 hover:scale-105">
              Get 14 Days Free Trial
            </button>
          </div>
          {/* Right Side Team Card */}
          <div className="flex flex-col items-center mt-10 absolute right-[130px] top-24 w-[360px]">
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