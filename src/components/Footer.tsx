import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-sans font-semibold mb-6">MyFiladelfia</h3>
            <p className="text-neutral-200">Empowering Christian leaders through faith-based education and practical skills development.</p>
          </div>
          <div>
            <h4 className="text-xl font-sans font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-fc9112 transition-colors">Home</Link></li>
              <li><Link to="/all-courses" className="hover:text-fc9112 transition-colors">All Courses</Link></li>
              <li><Link to="/biblical-counselling" className="hover:text-fc9112 transition-colors">Biblical Counselling</Link></li>
              <li><Link to="/theological-skills" className="hover:text-fc9112 transition-colors">Theological Skills</Link></li>
              <li><Link to="/christian-religious-professional" className="hover:text-fc9112 transition-colors">Christian Religious Professional</Link></li>
              <li><Link to="/short-courses" className="hover:text-fc9112 transition-colors">Short Courses</Link></li>
              <li><Link to="/blog" className="hover:text-fc9112 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-fc9112 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-sans font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="hover:text-fc9112 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-fc9112 transition-colors">Cookie Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-fc9112 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-sans font-semibold mb-6">Connect With Us</h4>
            <div className="flex flex-wrap gap-6">
              <a href="https://www.facebook.com/myfiladelfiasdp" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-3xl hover:text-fc9112 transition-colors"><Facebook /></a>
              <a href="https://x.com/myfiladelfiasdp" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-3xl hover:text-fc9112 transition-colors"><Twitter /></a>
              <a href="https://www.instagram.com/myfiladelfiasdp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-3xl hover:text-fc9112 transition-colors"><Instagram /></a>
              <a href="https://www.linkedin.com/in/pastjackmartin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-3xl hover:text-fc9112 transition-colors"><Linkedin /></a>
              <a href="https://www.youtube.com/@MyFiladelfiaSDP" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-3xl hover:text-fc9112 transition-colors"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} MyFiladelfia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;