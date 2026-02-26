import React, { useState, useEffect } from 'react';
import Hero from "../components/Blogs/Hero";
import RecentBlogs from "../components/Blogs/RecentBlogs";
import LastSection from "../components/Blogs/Last";

const API_URL = "https://whitesmoke-rabbit-770677.hostingersite.com/wp-json/wp/v2/posts?_embed";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#fffbf8] gap-6">
        {/* Spinning ring with mascot inside */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* Outer spinning ring */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ animation: 'spinRing 1.4s linear infinite' }}
            viewBox="0 0 144 144"
            fill="none"
          >
            <circle cx="72" cy="72" r="66" stroke="#fed7aa" strokeWidth="8" />
            <circle
              cx="72" cy="72" r="66"
              stroke="url(#orangeGrad)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="100 315"
            />
            <defs>
              <linearGradient id="orangeGrad" x1="0" y1="0" x2="144" y2="144" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#fdba74" />
              </linearGradient>
            </defs>
          </svg>
          {/* Mascot centered inside */}
          <img
            src="/HowItWorks/Inside/mascot.webp"
            alt="Loading…"
            className="w-20 h-20 object-contain relative z-10"
            style={{ animation: 'mascotPulse 1.4s ease-in-out infinite' }}
          />
        </div>

        <p className="text-orange-400 font-semibold text-sm tracking-widest uppercase animate-pulse">
          Loading posts…
        </p>

        <style>{`
          @keyframes spinRing {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes mascotPulse {
            0%, 100% { transform: scale(1); }
            50%       { transform: scale(1.08); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <Hero featuredPost={posts[0] || null} />
      <RecentBlogs posts={posts.slice(1)} />
      <LastSection />
    </>
  );
}
