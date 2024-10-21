import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, Search } from 'lucide-react';
import SEO from '../components/SEO';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  readTime: number;
  imageUrl: string;
  category: string;
}

// Static blog post data
const staticBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Biblical Counseling',
    slug: 'understanding-biblical-counseling',
    excerpt: 'Explore the foundations and principles of Biblical counseling in modern ministry.',
    publishedAt: '2024-05-01',
    readTime: 5,
    imageUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Counseling'
  },
  {
    id: '2',
    title: 'The Importance of Theological Education',
    slug: 'importance-of-theological-education',
    excerpt: 'Discover why ongoing theological education is crucial for effective ministry.',
    publishedAt: '2024-04-15',
    readTime: 7,
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Education'
  },
  {
    id: '3',
    title: 'Applying Scripture in Daily Life',
    slug: 'applying-scripture-in-daily-life',
    excerpt: 'Learn practical ways to apply biblical teachings to everyday situations.',
    publishedAt: '2024-03-30',
    readTime: 6,
    imageUrl: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Spiritual Growth'
  }
];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(staticBlogPosts);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = staticBlogPosts.filter(post =>
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.category.toLowerCase().includes(term)
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="bg-neutral-100 min-h-screen">
      <SEO 
        title="Blog - MyFiladelfia"
        description="Explore insightful articles on theology, ministry, and Christian living from MyFiladelfia's expert contributors."
        canonicalUrl="/blog"
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark">MyFiladelfia Blog</h1>
        
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 pl-10 border rounded-md focus:ring-2 focus:ring-primary"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {filteredPosts.length === 0 ? (
          <p className="text-center text-gray-600">No blog posts found. Try a different search term.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                {post.imageUrl && (
                  <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                  <span className="text-sm font-semibold text-primary-light mb-2 inline-block">{post.category}</span>
                  <h2 className="text-xl font-bold mb-2 text-primary-dark">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime} min read
                    </span>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="text-primary hover:text-primary-dark flex items-center transition-colors">
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;