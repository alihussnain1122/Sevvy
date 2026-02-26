import React, { useEffect, useMemo, useState, useRef } from 'react';

const TableOfContents = ({ content }) => {
  const [activeId, setActiveId] = useState('');
  const observerRef = useRef(null);

  const headings = useMemo(() => {
    if (!content) return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const elements = doc.querySelectorAll('h2');
    return Array.from(elements).map((el, index) => {
      const id =
        el.id ||
        `heading-${index}-${el.textContent
          .trim()
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '')}`;
      return {
        id,
        text: el.textContent.trim(),
        level: el.tagName.toLowerCase(),
      };
    });
  }, [content]);

  useEffect(() => {
    if (!headings.length) return;

    const articleEl = document.querySelector('.blog-article-content');
    if (!articleEl) return;

    const els = articleEl.querySelectorAll('h2');
    els.forEach((el, index) => {
      if (!el.id) {
        el.id = headings[index]?.id || `heading-${index}`;
      }
    });

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    els.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, [headings]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offset = 100;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  if (!headings.length) return null;

  return (
    <div className="sticky top-28">
      {/* Card */}
      <div className="relative bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-lg p-6">
        
        {/* Left Accent Line */}
        <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-gradient-to-b from-orange-400 via-orange-200 to-transparent rounded-full" />

        <h3 className="text-xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Table of Contents
        </h3>

        {/* Scroll Container */}
        <div className="relative max-h-[calc(100vh-10rem)] overflow-y-auto pr-2 custom-scroll">
          
          {/* Top Fade */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent z-10" />
          
          <ul className="space-y-1">
            {headings.map((heading) => {
              const isActive = activeId === heading.id;
              return (
                <li
                  key={heading.id}
                  className="transition-all duration-300"
                >
                  <a
                    href={`#${heading.id}`}
                    onClick={(e) => handleClick(e, heading.id)}
                    className={`
                      group relative block rounded-lg px-4 py-2 text-sm leading-relaxed transition-all duration-300
                      ${
                        isActive
                          ? 'bg-orange-50 text-orange-600 font-semibold shadow-sm'
                          : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50/60'
                      }
                    `}
                  >
                    {/* Active Indicator Dot */}
                    <span
                      className={`
                        absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full transition-all duration-300
                        ${
                          isActive
                            ? 'bg-orange-500 scale-100'
                            : 'bg-gray-300 group-hover:bg-orange-400 scale-75'
                        }
                      `}
                    />
                    
                    <span className="ml-4 line-clamp-2">
                      {heading.text}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Bottom Fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      {/* Custom Scrollbar */}
      <style jsx>{`
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(251, 146, 60, 0.4);
          border-radius: 20px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(251, 146, 60, 0.7);
        }
      `}</style>
    </div>
  );
};

export default TableOfContents;
