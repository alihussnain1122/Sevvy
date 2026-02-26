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
      <div className="min-h-screen flex justify-center items-center bg-[#fffbf8]">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
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
