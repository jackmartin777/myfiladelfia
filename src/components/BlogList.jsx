import React, { useState, useEffect } from 'react';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch blog posts from an API or database here
    const fetchPosts = async () => {
      // Simulating an API call with static data
      const staticPosts = [
        { _id: '1', title: 'Understanding Biblical Counseling', excerpt: 'Explore the foundations of Biblical counseling...' },
        { _id: '2', title: 'The Importance of Theological Education', excerpt: 'Discover why ongoing theological education is crucial...' },
        { _id: '3', title: 'Applying Scripture in Daily Life', excerpt: 'Learn practical ways to apply biblical teachings...' },
      ];
      setPosts(staticPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;