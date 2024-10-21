import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './components/AboutUs';
import ChristianReligiousProfessional from './pages/ChristianReligiousProfessional';
import BiblicalCounselling from './pages/BiblicalCounselling';
import TheologicalSkills from './pages/TheologicalSkills';
import ShortCourses from './pages/ShortCourses';
import AllCourses from './pages/AllCourses';
import Investment from './pages/Investment';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import Level1 from './pages/Level1';
import Level2 from './pages/Level2';
import Level3 from './pages/Level3';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsOfService from './pages/TermsOfService';
import NeedCounselling from './pages/NeedCounselling';
import AdminPage from './pages/AdminPage';
import FAQ from './pages/FAQ';
import SearchResults from './pages/SearchResults';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/christian-religious-professional" element={<ChristianReligiousProfessional />} />
            <Route path="/biblical-counselling" element={<BiblicalCounselling />} />
            <Route path="/theological-skills" element={<TheologicalSkills />} />
            <Route path="/short-courses" element={<ShortCourses />} />
            <Route path="/courses" element={<AllCourses />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/biblical-counselling/level-1" element={<Level1 />} />
            <Route path="/biblical-counselling/level-2" element={<Level2 />} />
            <Route path="/biblical-counselling/level-3" element={<Level3 />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/need-counselling" element={<NeedCounselling />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;