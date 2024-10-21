import React, { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'

// Import components that are used in the initial render
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

// Lazy load other components
const ContactUs = lazy(() => import('./pages/ContactUs'))
const AboutUs = lazy(() => import('./components/AboutUs'))
const ChristianReligiousProfessional = lazy(() => import('./pages/ChristianReligiousProfessional'))
const BiblicalCounselling = lazy(() => import('./pages/BiblicalCounselling'))
const TheologicalSkills = lazy(() => import('./pages/TheologicalSkills'))
const ShortCourses = lazy(() => import('./pages/ShortCourses'))
const AllCourses = lazy(() => import('./pages/AllCourses'))
const Investment = lazy(() => import('./pages/Investment'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Level1 = lazy(() => import('./pages/Level1'))
const Level2 = lazy(() => import('./pages/Level2'))
const Level3 = lazy(() => import('./pages/Level3'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const NeedCounselling = lazy(() => import('./pages/NeedCounselling'))
const FAQ = lazy(() => import('./pages/FAQ'))
const SearchResults = lazy(() => import('./pages/SearchResults'))

const App: React.FC = () => {
  return (
    <Router>
      <HelmetProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<div className="container mx-auto px-4 py-8 text-center">Loading...</div>}>
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
                <Route path="/faq" element={<FAQ />} />
                <Route path="/search" element={<SearchResults />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </HelmetProvider>
    </Router>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)