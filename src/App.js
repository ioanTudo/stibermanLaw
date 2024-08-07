import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AboutPage } from "./pages/about/about";
import { AreasWeServePage } from "./pages/areas-we-serve/areasWeServe";
import { BlogPage } from "./pages/blog/blog";
import { TestimonialsPage } from "./pages/testimonials/testimonials";
import { LearningCenterPage } from "./pages/learning-center/learningCenter";
import { ContactPage } from "./pages/contact-us/contactUs";
import { PracticeAreasPage } from "./pages/practice-areas/practice-areas";
import { Home } from "./pages/home/home";
import { useRef } from "react";

import { Header } from "./components/header/header";

function App() {
  const navRef = useRef(null);

  return (
    <BrowserRouter>
      <Header navRef={navRef} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice-areas" element={<PracticeAreasPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/areas-we-serve" element={<AreasWeServePage />} />
        <Route path="/learning-center" element={<LearningCenterPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
