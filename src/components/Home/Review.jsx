import React from 'react';

const testimonials = [
  {
    quote: 'Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    name: 'Justus Menke',
    role: 'CEO Eronaman',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    quote: 'Accusamus et iusto odi ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
    name: 'Britain Eriksen',
    role: 'CEO Universal',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    quote: 'Accusamus et iusto odi ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
    name: 'Britain Eriksen',
    role: 'CEO Universal',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    quote: 'On the other righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.',
    name: 'Serhiy Hipskyy',
    role: 'CEO Universal',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    quote: 'On the other righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.',
    name: 'Serhiy Hipskyy',
    role: 'CEO Universal',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    quote: 'On the other righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.',
    name: 'Serhiy Hipskyy',
    role: 'CEO Universal',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  }
];

const StarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);

const Review = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl  text-gray-800">
            Don’t <span className="italic text-orange-500 font-Instrument italic">Believe</span> Us?
          </h2>
          <p className="text-lg text-gray-500 mt-4">
            See Real Results from Real Teams
          </p>
        </div>

        {/* Smooth Scrolling Testimonials */}
        <div className="relative w-full overflow-x-hidden">
          <div className="flex gap-8 animate-review-scroll will-change-transform min-w-[1800px]">
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 relative mt-8 min-w-[320px] max-w-[340px] flex-shrink-0"
              >
                <div className="absolute -top-6 left-6 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-serif">“</span>
                </div>
                <div className="flex text-orange-500 mt-8 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @keyframes review-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-review-scroll {
              animation: review-scroll 32s linear infinite;
            }
          `}</style>
        </div>

        <div className="text-center mt-12 md:mt-16 ">
          <button className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-200 font-semibold text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full hover:scale-105 transition-transform duration-300 md:text-base">
            View All <svg width="12" height="12" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2 md:ml-2'>
<path d="M1.5 10.4971H20.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.999 1.5L20.499 10.4973L10.999 19.4947" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;