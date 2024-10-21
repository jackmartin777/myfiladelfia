import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

interface SearchResult {
  title: string;
  description: string;
  link: string;
}

const SearchResults: React.FC = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, [location.search]);

  const performSearch = (query: string) => {
    // This is a mock search function. In a real application, you would
    // typically make an API call to your backend to perform the search.
    const mockResults: SearchResult[] = [
      {
        title: "Biblical Counselling Course",
        description: "Our comprehensive Biblical Counselling program designed to equip you with Scripture-based counseling techniques.",
        link: "/biblical-counselling"
      },
      {
        title: "Theological Skills Development",
        description: "Enhance your theological understanding and skills with our in-depth courses.",
        link: "/theological-skills"
      },
      {
        title: "Short Courses in Christian Ministry",
        description: "Explore our range of short courses designed to boost your ministry skills.",
        link: "/short-courses"
      },
      // Add more mock results as needed
    ];

    // Filter results based on the query
    const filteredResults = mockResults.filter(result => 
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <div className="bg-neutral-100 min-h-screen py-12">
      <Helmet>
        <title>Search Results - MyFiladelfia</title>
        <meta name="description" content={`Search results for "${searchQuery}" on MyFiladelfia's online theology and biblical counselling courses.`} />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark">Search Results</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-lg text-gray-600 mb-4">
            Showing results for: <span className="font-semibold">"{searchQuery}"</span>
          </p>
          {results.length > 0 ? (
            <ul className="space-y-6">
              {results.map((result, index) => (
                <li key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <Link to={result.link} className="block hover:bg-gray-50 transition-colors rounded-md p-2">
                    <h2 className="text-xl font-semibold text-primary-dark mb-2">{result.title}</h2>
                    <p className="text-gray-600">{result.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No results found for "{searchQuery}". Please try a different search term.</p>
          )}
        </div>
        <div className="text-center">
          <Link to="/" className="btn btn-primary inline-flex items-center">
            <Search className="w-5 h-5 mr-2" />
            New Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;