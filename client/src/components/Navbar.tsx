import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Wifi, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Residential", path: "/" },
    { name: "Business", path: "/business" },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
            <Wifi className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold leading-none ${scrolled || location !== "/" ? "text-secondary" : "text-white"}`}>
              BLUE MOGUL
            </span>
            <span className={`text-xs font-medium tracking-widest ${scrolled || location !== "/" ? "text-accent" : "text-white/80"}`}>
              FIBER
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <span
                className={`text-sm font-semibold cursor-pointer hover:text-accent transition-colors ${
                  location === link.path 
                    ? "text-accent" 
                    : scrolled || location !== "/" ? "text-slate-600" : "text-white/90"
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <Button 
            onClick={scrollToContact}
            className="bg-accent hover:bg-orange-600 text-white font-semibold shadow-lg hover:shadow-orange-500/20"
          >
            Get Started
          </Button>
          <a href="tel:3463095514" className={`flex items-center gap-2 font-bold ${scrolled || location !== "/" ? "text-secondary" : "text-white"}`} data-testid="link-phone">
            <Phone className="w-4 h-4" />
            <span>(346) 309-5514</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <span
                    className="text-lg font-semibold text-slate-700 block py-2 border-b border-slate-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
              <Button onClick={scrollToContact} className="w-full bg-accent hover:bg-orange-600 mt-4">
                Check Availability
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
