import React, { useEffect, useMemo, useState, useRef } from 'react';

const TableOfContents = ({ content }) => {
  const [activeId, setActiveId] = useState('');
  const observerRef = useRef(null);

  // Derive headings from content with useMemo to avoid setState-in-effect
  const headings = useMemo(() => {
    if (!content) return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const elements = doc.querySelectorAll('h2, h3');
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

  // Inject IDs into rendered DOM headings & set up Intersection Observer
  useEffect(() => {
    if (!headings.length) return;

    const articleEl = document.querySelector('.blog-article-content');
    if (!articleEl) return;

    const els = articleEl.querySelectorAll('h2, h3');
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
    <div className="sticky top-28 bg-white rounded-2xl shadow-sm p-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <h3 className="text-xl font-extrabold text-gray-900 mb-6">Table of Contents</h3>
      <ul className="divide-y divide-gray-200">
        {headings.map((heading, idx) => {
          const isActive = activeId === heading.id;
          return (
            <li
              key={heading.id}
              className={
                [
                  'py-3',
                  heading.level === 'h3' ? 'pl-6' : '',
                  idx === 0 ? '' : '',
                ].join(' ')
              }
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={
                  [
                    'block transition-all duration-200',
                    'text-base',
                    isActive
                      ? 'text-orange-500 font-bold border-l-4 border-orange-500 bg-orange-50 pl-4 -ml-6 rounded-r-lg'
                      : 'text-gray-700 hover:text-orange-500 border-l-4 border-transparent pl-4 -ml-6',
                  ].join(' ')
                }
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableOfContents;
