import React from 'react';

const ShareSection = ({ post }) => {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(post.title?.rendered?.replace(/<[^>]+>/g, '') || '');
  const categoryTerms = post._embedded?.['wp:term']?.[0] || [];

  const shareLinks = [
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: `https://www.instagram.com/`,
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="mt-10 pt-8 border-t border-gray-200">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Share Icons */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-700">Share this:</span>
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={`Share on ${link.name}`}
              className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Tags */}
        {categoryTerms.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {categoryTerms.map((term) => (
              <span
                key={term.id}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-orange-50 hover:text-orange-500 cursor-default transition-colors"
              >
                {term.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShareSection;
