import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TableOfContents from '../components/BlogDetails/TableOfContents';
import BlogContent from '../components/BlogDetails/BlogContent';
import MorePosts from '../components/BlogDetails/MorePosts';

const API_BASE =
  "https://whitesmoke-rabbit-770677.hostingersite.com/wp-json/wp/v2/posts?_embed";

// Skeleton loader matching the two-column layout
const BlogDetailsSkeleton = () => (
  <div className="min-h-screen bg-[#f5f5f5]">
    <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
      <div className="lg:grid lg:grid-cols-[300px_1fr] gap-10 items-start animate-pulse">
        {/* TOC skeleton */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-sm p-6 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-5" />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-3 bg-gray-100 rounded w-full" />
          ))}
        </div>

        {/* Content skeleton */}
        <div className="space-y-5">
          <div className="h-3 bg-gray-200 rounded w-32" />
          <div className="h-8 bg-gray-200 rounded w-3/4" />
          <div className="flex gap-4">
            <div className="h-4 bg-gray-100 rounded w-20" />
            <div className="h-4 bg-gray-100 rounded w-16" />
            <div className="h-4 bg-gray-100 rounded w-24" />
          </div>
          <div className="w-full h-72 bg-gray-200 rounded-xl" />
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 bg-gray-100 rounded w-full" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Error state
const BlogError = ({ message }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center px-6 text-center">
      <div className="bg-white rounded-2xl shadow-sm p-10 max-w-md">
        <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Post Not Found</h2>
        <p className="text-gray-500 text-sm mb-6">{message || 'The blog post you are looking for does not exist or has been removed.'}</p>
        <button
          onClick={() => navigate('/blog')}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-full transition-colors"
        >
          Back to Blog
        </button>
      </div>
    </div>
  );
};

const BlogDetails = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      setLoading(true);
      setPost(null);
      setError(null);

      try {
        const res = await fetch(
          `${API_BASE}/posts?slug=${slug}&_embed`
        );

        if (!res.ok) {
          throw new Error(`API responded with status ${res.status}`);
        }

        const data = await res.json();

        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('Post not found');
        }

        setPost(data[0]);
      } catch (err) {
        console.error('BlogDetails fetch error:', err);
        setError(err.message || 'Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <BlogDetailsSkeleton />;
  if (error || !post) return <BlogError message={error} />;

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 ">
        {/* Two-column grid: TOC left, content right */}
        <div className="lg:grid lg:grid-cols-[300px_1fr] gap-10 items-start">
          {/* Left: Table of Contents (sticky) */}
          <aside className="hidden lg:block self-start sticky top-0">
            <TableOfContents content={post.content.rendered} />
          </aside>

          {/* Right: Blog Content */}
          <main>
            <BlogContent post={post} />
          </main>
        </div>

        {/* More Posts — full width below the grid */}
        <MorePosts currentSlug={slug} />
      </div>
    </div>
  );
};

export default BlogDetails;
