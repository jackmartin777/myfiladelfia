import React from 'react';
import { Mail, FileText, Share2, Printer, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'MyFiladelfia',
          text: 'Check out MyFiladelfia\'s online theology and biblical counselling courses!',
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Web Share API not supported in your browser. You can copy the URL to share.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary-dark">Get in Touch</h2>
        
        <div className="max-w-md mx-auto space-y-6">
          <a href="mailto:Jack@myfiladelfia.com" className="btn btn-primary w-full text-center flex items-center justify-center">
            <Mail className="w-5 h-5 mr-2" />
            Email Us
          </a>
          
          <a href="https://drive.google.com/drive/folders/1ZNJ5TH1LpKDhpw5CMDk90YQv6EFJ5V4L?usp=drive_link" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="btn btn-secondary w-full text-center flex items-center justify-center">
            <FileText className="w-5 h-5 mr-2" />
            View Our Brochures
          </a>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-primary-dark">Connect With Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/myfiladelfiasdp" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary hover:text-primary-dark transition-colors">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="https://twitter.com/myfiladelfiasdp" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-primary hover:text-primary-dark transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/myfiladelfiasdp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary hover:text-primary-dark transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/pastjackmartin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary hover:text-primary-dark transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://www.youtube.com/@MyFiladelfiaSDP" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-primary hover:text-primary-dark transition-colors">
              <Youtube className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-primary-dark">Share This Page</h3>
          <div className="flex justify-center space-x-4">
            <button onClick={handleShare} className="btn btn-outline-primary flex items-center">
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </button>
            <button onClick={handlePrint} className="btn btn-outline-primary flex items-center">
              <Printer className="w-5 h-5 mr-2" />
              Print to PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;