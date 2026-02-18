import {  Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import CoursesPage from "../pages/CoursesPage";
import CourseDetailPage from "../pages/CourseDetailPage";
import TestimonialsPage from "../pages/TestimonialsPage";
import ContactPage from "../pages/ContactPage";
import AdmissionPage from "../pages/AdmissionPage";
import PrivacyPage from "../pages/PrivacyPage";
import AppDevelopmentPage from "../pages/AppDevelopment";
import DigitalMarketingPage from "../pages/DigitalMarketing";
import GoogleAdsPage from "../pages/Googleads";
import SEOPage from "../pages/Seo";
import SMMPage from "../pages/Smm";
import WordpressPage from "../pages/Wordpress";
export default function AppRoutes() {
  return (
    
      <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/courses" element={<CoursesPage />} />
  <Route path="/courses/:id" element={<CourseDetailPage />} />
  <Route path="/testimonials" element={<TestimonialsPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/admission" element={<AdmissionPage />} />
  <Route path="/privacy" element={<PrivacyPage />} />
  <Route path="/app-development" element={<AppDevelopmentPage />} />
  <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
  <Route path="/seo" element={<SEOPage />} />
  <Route path="/google-ads" element={<GoogleAdsPage />} />
  <Route path="/social-media" element={<SMMPage />} />
  <Route path="/wordpress" element={<WordpressPage />} />
  <Route path="/courses/app-development" element={<AppDevelopmentPage />} />
  <Route path="/courses/digital-marketing" element={<DigitalMarketingPage />} />
  <Route path="/courses/seo" element={<SEOPage />} />
  <Route path="/courses/google-ads" element={<GoogleAdsPage />} />
  <Route path="/courses/social-media" element={<SMMPage />} />
  <Route path="/courses/wordpress" element={<WordpressPage />} />
</Routes>
  );
}
