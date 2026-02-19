import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL =
  "https://whitesmoke-rabbit-770677.hostingersite.com/wp-json/wp/v2/posts?_embed";

const MorePosts = ({ currentSlug }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        // Exclude currently viewed post
        const filtered = Array.isArray(data)
          ? data.filter((p) => p.slug !== currentSlug).slice(0, 3)
          : [];
        setPosts(filtered);
      } catch (err) {
        console.error('MorePosts fetch error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [currentSlug]);

  const stripHtml = (html) => html?.replace(/<[^>]+>/g, '') || '';

  if (loading) {
    return (
      <div className="mt-16">
        <h2 className="text-xl font-bold text-gray-800 mb-6">More Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse">
              <div className="h-40 bg-gray-200" />
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-100 rounded w-full" />
                <div className="h-3 bg-gray-100 rounded w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!posts.length) return null;

  return (
    <div className="mt-16">
      <h2 className="text-xl font-bold text-gray-800 mb-6">More Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {posts.map((post) => {
          const thumb =
            post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
          const excerpt = stripHtml(post.excerpt?.rendered || '').slice(0, 100);

          return (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col"
            >
              {/* Thumbnail */}
              {thumb ? (
                <img
                  src={thumb}
                  alt={stripHtml(post.title.rendered)}
                  loading="lazy"
                  className="h-40 w-full object-cover rounded-t-xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              ) : (
                <div className="h-40 bg-gray-100 rounded-t-xl flex items-center justify-center">
                  <span className="text-gray-300 text-xs">No image</span>
                </div>
              )}

              {/* Card Body */}
              <div className="p-4 flex flex-col grow">
                <h3
                  className="text-sm font-bold text-gray-800 leading-snug mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-4 grow">
                  {excerpt}…
                </p>
                <span className="flex items-center gap-1 text-orange-500 text-xs font-semibold mt-auto">
                  Learn More
                  <svg
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Learn More Button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/blog"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default MorePosts;
