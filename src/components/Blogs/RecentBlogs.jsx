import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecentBlogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://public-api.wordpress.com/wp/v2/sites/sevvvy4.wordpress.com/posts?_embed";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPosts(data.slice(1, 6));
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
    return `${date.getDate()} Jan, ${date.getFullYear()}`;
  };

  if (loading) {
    return (
      <section className="py-16 px-4 bg-[#F5EFE8]">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-[#F5EFE8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Recent <span className="italic text-orange-500">Blogs</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto">
            Explore practical insights designed for agencies, content teams, creators, and freelancers.
          </p>
        </div>

        {posts.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {posts.slice(0, 2).map((post) => (
                <Link
                  key={post.id}
                  to={`/blogs/${post.slug}`}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div
                    className="h-56 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'})`,
                    }}
                  ></div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full font-medium">
                        Last Update
                      </span>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 text-orange-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                    <h3
                      className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <p
                      className="text-sm text-gray-600 mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <span className="inline-flex items-center gap-1 text-orange-500 font-semibold text-sm hover:gap-2 transition-all">
                      Learn More
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.slice(2, 5).map((post) => (
                <Link
                  key={post.id}
                  to={`/blogs/${post.slug}`}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div
                    className="h-44 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'})`,
                    }}
                  ></div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full font-medium">
                        Last Update
                      </span>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 text-orange-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                    <h3
                      className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <p
                      className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <span className="inline-flex items-center gap-1 text-orange-500 font-semibold text-sm hover:gap-2 transition-all">
                      Learn More
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        <div className="text-center mt-10">
          <button className="px-10 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
