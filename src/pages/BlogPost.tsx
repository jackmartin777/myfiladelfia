import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

interface BlogPostContent {
  title: string;
  body: string;
  author: { name: string };
  publishedAt: string;
  imageUrl: string;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post] = useState<BlogPostContent | null>({
    title: "Sample Blog Post",
    body: "This is a sample blog post content. In a real application, this would be fetched from a database or API.",
    author: { name: "John Doe" },
    publishedAt: "2024-05-01",
    imageUrl: "https://example.com/sample-image.jpg"
  });

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-neutral-100 min-h-screen">
      <SEO 
        title={`${post.title} - MyFiladelfia`}
        description={post.body.substring(0, 160)}
        canonicalUrl={`/blog/${slug}`}
      />
      <div className="container mx-auto px-4 py-16">
        <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary-dark mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        <article className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-6 text-primary-dark">{post.title}</h1>
          <p className="text-gray-600 mb-8">By {post.author.name} | {new Date(post.publishedAt).toLocaleDateString()}</p>
          
          <div className="prose max-w-none">
            <p>{post.body}</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;