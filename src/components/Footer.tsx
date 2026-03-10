import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpeg";


const Footer = () => (
  <footer className="bg-accent text-accent-foreground/70">
    {/* Main Footer */}
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
          <img src={logo} alt="VRAJ Packaging" className="w-10 h-10 rounded-lg object-cover" />
          <div className="flex flex-col leading-none">
            <span className="text-primary font-bold text-lg tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              VRAJ
            </span>
            <span className="text-accent-foreground/60 text-[9px] tracking-[0.2em] uppercase font-medium">
              PACKAGING
            </span>
          </div>
          </div>
          <p className="text-sm leading-relaxed text-accent-foreground/50 mb-5">
            Gujarat-based industrial packaging solutions provider — delivering high-performance adhesive tapes, stretch films, and strapping solutions across India and global markets.
          </p>
          <a
            href="https://wa.me/919830427374"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all"
          >
            Chat on WhatsApp <ArrowRight size={14} />
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Products", href: "/products" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Services", href: "/services" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-sm text-accent-foreground/50 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Our Products</h4>
          <ul className="space-y-3">
            {[
              "BOPP Carton Sealing Tapes",
              "Printed & Advertising Tapes",
              "Coated Jumbo Rolls",
              "Stretch Film",
              "PP Straps",
              "PET Straps",
            ].map((product) => (
              <li key={product}>
                <Link to="/products" className="text-sm text-accent-foreground/50 hover:text-primary transition-colors">
                  {product}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact Info</h4>
          <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin size={16} className="text-primary mt-1 shrink-0" />
            
            <div className="text-sm text-accent-foreground/50 leading-relaxed">
              <p>Block No. 250, Shade No. 30</p>
              <p>Shivam Estate</p>
              <p>Chhatral GIDC</p>
              <p>Chhatral, Gandhinagar</p>
              <p>Gujarat - 382729</p>
            </div>
          </div>
            <div className="flex items-start gap-3">
              <Phone size={16} className="text-primary mt-0.5 shrink-0" />
              <a href="tel:+919830427374" className="text-sm text-accent-foreground/50 hover:text-primary transition-colors">+91 9830427374</a>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={16} className="text-primary mt-0.5 shrink-0" />
              <a href="mailto:vrajpack01@gmail.com" className="text-sm text-accent-foreground/50 hover:text-primary transition-colors">vrajpack01@gmail.com</a>
            </div>
          </div>
          <div className="mt-6 p-4 rounded-xl bg-white/5 border border-border/10">
            <p className="text-xs text-accent-foreground/40 mb-1">Business Hours</p>
            <p className="text-sm text-accent-foreground/60 font-medium">Mon – Sat: 9:00 AM – 7:00 PM</p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-border/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-accent-foreground/40 text-xs">
          © {new Date().getFullYear()} Vraj Packaging. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link to="/products" className="text-accent-foreground/40 text-xs hover:text-primary transition-colors">Products</Link>
          <Link to="/services" className="text-accent-foreground/40 text-xs hover:text-primary transition-colors">Services</Link>
          <Link to="/contact" className="text-accent-foreground/40 text-xs hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;