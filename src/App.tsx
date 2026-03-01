import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Portfolio from "@/pages/Portfolio";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import logo from "@/assets/logo.jpeg";
//import ChatBot from "@/components/ChatBot";

const queryClient = new QueryClient();

/* 🔥 Loader Component */
const PageLoader = () => (
  <motion.div
    className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[99999]"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* Logo */}
    <img
    src={logo}
      alt="Vraj Packaging"
      className="w-44 mb-6 animate-pulse"
    />

    {/* Spinner */}
    <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
  </motion.div>
);

/* 🔥 Routes Wrapper with Loader */
const AnimatedRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <AnimatePresence>
        {loading && <PageLoader />}
      </AnimatePresence>

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />

        <main className="min-h-[100vh]">
          <AnimatedRoutes />
        </main>

        <Footer />
        <BackToTop />
        {/* <ChatBot />    */}
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919830427374?text=Hello%20I%20am%20interested%20in%20your%20packaging%20products"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-24 right-6 z-[9999] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle size={24} />
        </a>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;