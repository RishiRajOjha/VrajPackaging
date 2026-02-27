import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-accent/95 backdrop-blur-xl shadow-lg"
          : "bg-accent/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="VRAJ Packaging" className="w-10 h-10 rounded-lg object-cover" />
          <div className="flex flex-col leading-none">
            <span className="text-primary font-bold text-lg tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              VRAJ
            </span>
            <span className="text-accent-foreground/60 text-[9px] tracking-[0.2em] uppercase font-medium">
              PACKAGING
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-accent-foreground/70 hover:text-primary"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-4 right-4 h-[2px] bg-primary transition-transform origin-left ${
                  location.pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-5 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-[13px] font-semibold hover:brightness-110 transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-accent-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-accent border-t border-border/20 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col py-4 px-5 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`py-3 text-sm font-medium tracking-wide transition-colors border-b border-border/10 last:border-0 ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-accent-foreground/70 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-3 bg-primary text-primary-foreground py-3 rounded-full text-sm font-semibold text-center"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;