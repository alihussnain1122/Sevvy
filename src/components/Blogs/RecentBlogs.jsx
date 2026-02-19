import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecentBlogs = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleRows, setVisibleRows] = useState(1); 

    const API_URL = "https://whitesmoke-rabbit-770677.hostingersite.com/wp-json/wp/v2/posts?_embed";

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setPosts(data.slice(1)); 
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        // Image ke format ke mutabiq
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
    };

    const totalVisibleCount = 2 + (visibleRows * 3);
    const displayedPosts = posts.slice(0, totalVisibleCount);

    // Reusable Card Component to keep code clean
    const BlogCard = ({ post, isLarge }) => (
        <Link
            to={`/blog/${post.slug}`}
            className="group bg-[#fffbf8] rounded-[25px] border border-gray-300 p-4 shadow-sm hover:shadow-md transition-all flex flex-col"
        >
            {/* Image Section */}
            <div
                className={`w-full ${isLarge ? 'h-60' : 'h-44'} rounded-[25px] bg-cover bg-center mb-5 transition-transform duration-300 group-hover:scale-[1.01]`}
                style={{
                    backgroundImage: `url(${post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'})`,
                }}
            ></div>

            {/* Content Section */}
            <div className="px-2 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                    {/* Badge */}
                    <span className="px-3 py-1.5 bg-[#FFF5EE] text-[#FF710B] text-[11px] font-bold rounded-full uppercase tracking-wide">
                        Last Update
                    </span>
                    {/* Date */}
                    <div className="flex items-center gap-1.5 text-gray-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF710B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span className="text-[12px] font-medium">{formatDate(post.date)}</span>
                    </div>
                </div>

                {/* Title */}
                <h3 
                    className={`${isLarge ? 'text-xl' : 'text-lg'} font-bold text-[#1A1A1A] mb-3 leading-snug line-clamp-2`}
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />

                {/* Excerpt */}
                <p 
                    className="text-[13px] text-gray-500 leading-relaxed mb-5 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />

                {/* Footer Link */}
                <div className="flex items-center gap-1 text-orange-400 text-sm mt-auto pb-2">
                    Learn More 
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all group-hover:translate-x-1">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </div>
        </Link>
    );

    if (loading) {
        return (
            <section className="py-16 px-4 bg-[#fffbf8]">
                <div className="max-w-7xl mx-auto flex justify-center items-center">
                    <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            </section>
        );
    }

    return (
        <section className="relative py-16 px-4 bg-[#fffbf8]">
            {/* Background Gradient - UNTOUCHED */}
            <div
                className="absolute top-0 left-0 right-0 h-24 z-0"
                style={{
                    background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
                    maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)'
                }}
            />
            
            <div className="relative max-w-7xl mx-auto z-10">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
                        Recent <span className="italic text-orange-400 font-Instrument">Blogs</span>
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto">
                        Explore practical insights designed for agencies, content teams, creators, and freelancers.
                    </p>
                </div>

                {posts.length > 0 && (
                    <>
                        {/* 1. Top Row: 2 Large Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            {displayedPosts.slice(0, 2).map((post) => (
                                <BlogCard key={post.id} post={post} isLarge={true} />
                            ))}
                        </div>

                        {/* 2. Dynamic Grid: Rows of 3 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {displayedPosts.slice(2).map((post) => (
                                <BlogCard key={post.id} post={post} isLarge={false} />
                            ))}
                        </div>
                    </>
                )}

                {/* 3. Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-16">
                    {totalVisibleCount < posts.length && (
                        <button 
                            onClick={() => setVisibleRows(prev => prev + 1)}
                            className="px-10 py-3 bg-gradient-to-r from-orange-500 to-orange-200 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-all cursor-pointer"
                        >
                            Learn More
                        </button>
                    )}

                    {visibleRows > 1 && (
                        <button 
                            onClick={() => setVisibleRows(1)}
                            className="px-10 py-3 border-2 border-orange-400 text-orange-500 font-semibold rounded-xl  transition-all cursor-pointer"
                        >
                            See Less
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default RecentBlogs;