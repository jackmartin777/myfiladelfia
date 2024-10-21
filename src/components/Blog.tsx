import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Briefcase } from 'lucide-react';

const blogPosts = [
  {
    title: "The Role of Technology in Modern Ministry",
    excerpt: "Exploring how digital tools can enhance spiritual outreach and community building.",
    date: "October 15, 2024",
    icon: <Briefcase className="w-12 h-12 text-white" />
  },
  {
    title: "Integrating Faith and Mental Health",
    excerpt: "Bridging the gap between spiritual guidance and psychological well-being.",
    date: "October 8, 2024",
    icon: <Users className="w-12 h-12 text-white" />
  },
  {
    title: "The Importance of Continuous Learning in Ministry",
    excerpt: "Why ongoing education is crucial for effective spiritual leadership.",
    date: "October 1, 2024",
    icon: <BookOpen className="w-12 h-12 text-white" />
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-[#0f5b94]">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  {post.icon}
                </div>
                <h3 className="text-xl font-merriweather mb-2 text-[#0f5b94]">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <time dateTime={post.date} className="text-sm text-gray-500">{post.date}</time>
                  <Link to="/blog" className="text-[#0f5b94] hover:underline">Read More</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/blog" className="btn btn-secondary">View All Posts</Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;