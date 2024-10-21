import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeartHandshake, Menu, X, ChevronDown, ChevronRight, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const coursesDropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCoursesDropdown = () => setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (coursesDropdownRef.current && !coursesDropdownRef.current.contains(event.target as Node)) {
        setIsCoursesDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const menuItems = [
    { name: 'Home', link: '/' },
    {
      name: 'Courses',
      link: '/courses',
      submenu: [
        { name: 'Biblical Counselling', link: '/biblical-counselling' },
        { name: 'Theological Skills', link: '/theological-skills' },
        { name: 'Christian Religious Professional', link: '/christian-religious-professional' },
        { name: 'Short Courses', link: '/short-courses' },
      ],
    },
    { name: 'About', link: '/about' },
    { name: 'Investment', link: '/investment' },
    { name: 'Blog', link: '/blog' },
    { name: 'Get in Touch', link: '/contact' },
    { name: 'Need Counselling', link: '/need-counselling' },
    { name: 'FAQ', link: '/faq' },
  ];

  return (
    <header className={`bg-white shadow-md py-4 sticky top-0 z-50 transition-all duration-300 ${isSticky ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <HeartHandshake className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-3 text-primary group-hover:text-primary-dark transition-colors" />
          <span className="text-xl md:text-2xl font-sans font-semibold text-primary-dark group-hover:text-primary transition-colors">MyFiladelfia</span>
        </Link>
        
        <nav className="hidden md:flex space-x-4 lg:space-x-8 items-center">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.submenu ? (
                <div ref={coursesDropdownRef}>
                  <button
                    onClick={toggleCoursesDropdown}
                    className="text-gray-700 hover:text-primary flex items-center transition-colors p-2"
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  {isCoursesDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-10 animate-fadeIn">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                          onClick={() => setIsCoursesDropdownOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link to={item.link} className="text-gray-700 hover:text-primary transition-colors p-2">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <button onClick={toggleSearch} className="text-gray-700 hover:text-primary transition-colors p-2">
            <Search className="w-6 h-6" />
          </button>
        </nav>
        
        <div className="md:hidden flex items-center">
          <button onClick={toggleSearch} className="text-gray-700 hover:text-primary transition-colors p-2 mr-2">
            <Search className="w-6 h-6" />
          </button>
          <button onClick={toggleMenu} className="text-gray-700 hover:text-primary transition-colors p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden bg-white shadow-md mt-4 py-4 animate-fadeIn">
          <nav className="container mx-auto px-4">
            {menuItems.map((item) => (
              <div key={item.name} className="py-2">
                {item.submenu ? (
                  <button
                    onClick={toggleCoursesDropdown}
                    className="w-full text-left text-gray-700 hover:text-primary flex justify-between items-center transition-colors p-2"
                  >
                    {item.name}
                    <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isCoursesDropdownOpen ? 'transform rotate-90' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={item.link}
                    className="block text-gray-700 hover:text-primary transition-colors p-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
                {item.submenu && isCoursesDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2 animate-fadeIn">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.link}
                        className="block text-sm text-gray-700 hover:text-primary transition-colors p-2"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsCoursesDropdownOpen(false);
                        }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Search overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center animate-fadeIn p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search courses, topics, or articles..."
                className="w-full p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="bg-primary text-white p-2 rounded-r-md hover:bg-primary-dark transition-colors">
                <Search className="w-6 h-6" />
              </button>
            </form>
            <button onClick={toggleSearch} className="mt-4 text-gray-600 hover:text-gray-800 transition-colors p-2">
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;