import React from 'react';
import { Link } from 'react-router-dom';
import ShareSection from './ShareSection';

const timeAgo = (dateString) => {
  const now = new Date();
  const past = new Date(dateString);
  const diffMs = now - past;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins} min ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  if (diffDays < 30) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  if (diffMonths < 12) return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
  return `${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
};

// Inject IDs into h2/h3 tags inside HTML string so TOC anchors work
const injectHeadingIds = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  let index = 0;
  doc.querySelectorAll('h2, h3').forEach((el) => {
    if (!el.id) {
      const generated = `heading-${index}-${el.textContent
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')}`;
      el.id = generated;
    }
    index++;
  });
  return doc.body.innerHTML;
};

const BlogContent = ({ post }) => {
  const featuredImage =
    post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;

  const categoryName =
    post._embedded?.['wp:term']?.[0]?.[0]?.name || null;

  const authorName =
    post._embedded?.author?.[0]?.name || 'Admin';

  const processedContent = injectHeadingIds(post.content.rendered);

  return (
    <article className="min-w-0">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <Link to="/" className="text-orange-500 hover:underline font-medium">
          Home
        </Link>
        <span>/</span>
        <span
          className="truncate"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </nav>

      {/* Title */}
      <h1
        className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-4"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
        <span className="font-medium text-gray-700">{authorName}</span>
        {categoryName && (
          <span className="bg-orange-50 text-orange-500 px-3 py-0.5 rounded-full text-xs font-semibold">
            {categoryName}
          </span>
        )}
        <span className="flex items-center gap-1">
          <svg
            className="w-4 h-4 text-orange-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {timeAgo(post.date)}
        </span>
      </div>

      {/* Featured Image */}
      {featuredImage ? (
        <img
          src={featuredImage}
          alt={post.title.rendered.replace(/<[^>]+>/g, '')}
          loading="lazy"
          className="w-full rounded-xl mb-8 object-cover max-h-120"
        />
      ) : (
        <div className="w-full h-64 bg-gray-100 rounded-xl mb-8 flex items-center justify-center">
          <span className="text-gray-400 text-sm">No image available</span>
        </div>
      )}

      {/* Article Content */}
      <div
        className="blog-article-content prose prose-lg max-w-none
          [&_p]:text-gray-600 [&_p]:leading-8 [&_p]:mb-6
          [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-gray-900
          [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-gray-800
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:text-gray-600
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:text-gray-600
          [&_li]:mb-2 [&_li]:leading-7
          [&_a]:text-orange-500 [&_a]:underline [&_a]:hover:text-orange-600
          [&_blockquote]:border-l-4 [&_blockquote]:border-orange-400 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-500 [&_blockquote]:my-6
          [&_img]:rounded-xl [&_img]:my-6 [&_img]:w-full [&_img]:object-cover
          [&_strong]:font-semibold [&_strong]:text-gray-800
          [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm
          [&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_pre]:p-4 [&_pre]:rounded-xl [&_pre]:overflow-x-auto [&_pre]:mb-6"
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />

      {/* Share Section */}
      <ShareSection post={post} />
    </article>
  );
};

export default BlogContent;
