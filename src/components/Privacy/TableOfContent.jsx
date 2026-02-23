import React, { useState } from "react";

// Combined Table of Contents for desktop and mobile (Premium Design)
const TableOfContent = ({ headings, activeId, onClick }) => {
  const filteredHeadings = headings || [];

  if (!filteredHeadings.length) return null;

  return (
    <>
      {/* Desktop Premium Sidebar */}
      <nav
        className="hidden md:block sticky top-0 w-[280px]"
        aria-label="Table of Contents"
      >
        <div className="relative p-6">
          
          {/* Left Gradient Accent Line */}
          <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-gradient-to-b from-orange-400 via-orange-200 to-transparent rounded-full" />

          {/* Title */}
          <h3 className="text-xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Table of Contents
          </h3>

          {/* Scroll Container */}
          <div className="relative max-h-[calc(100vh-10rem)] overflow-y-auto pr-2 custom-scroll">
            
            {/* Top Fade */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent z-10" />

            <ul className="space-y-1">
              {filteredHeadings.map((h) => {
                const isActive = activeId === h.id;
                return (
                  <li key={h.id} className="transition-all duration-300">
                    <a
                      href={`#${h.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onClick(h.id);
                      }}
                      className={`
                        group relative block rounded-lg px-4 py-2 text-sm leading-relaxed transition-all duration-300
                        ${
                          isActive
                            ? "bg-orange-50 text-orange-600 font-semibold shadow-sm"
                            : "text-gray-600 hover:text-orange-500 hover:bg-orange-50/60"
                        }
                      `}
                    >
                      {/* Active Indicator Dot */}
                      <span
                        className={`
                          absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full transition-all duration-300
                          ${
                            isActive
                              ? "bg-orange-500 scale-100"
                              : "bg-gray-300 group-hover:bg-orange-400 scale-75"
                          }
                        `}
                      />

                      <span className="ml-4 line-clamp-2">{h.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Bottom Fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent" />
          </div>
        </div>
      </nav>

    </>
  );
};


export default TableOfContent;