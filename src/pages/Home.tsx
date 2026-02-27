import { Link } from "react-router-dom";
import { ArrowRight, Shield, Truck, Award, Users, Factory, Leaf, CheckCircle, Star, Quote, Zap, Globe, BarChart3, Boxes, TrendingUp, Clock, Package, Layers } from "lucide-react";
import { useScrollAnimation, useCounter } from "@/hooks/useScrollAnimation";
import heroBg from "@/assets/hero-bg.jpg";
import productBopp from "@/assets/product-bopp-tape.jpg";
import productStretch from "@/assets/product-stretch-film.jpg";
import productStraps from "@/assets/product-straps.jpg";

const stats = [
  { label: "Happy Clients", end: 100, suffix: "+" },
  { label: "Products Delivered", end: 5000, suffix: "+" },
  { label: "Industries Served", end: 6, suffix: "" },
  { label: "Years of Trust", end: 3, suffix: "+" },
];

const whyChoose = [
  { icon: Award, title: "Premium Materials", desc: "We source only export-grade raw materials — ensuring superior tensile strength, adhesion performance, and long shelf life across every product batch.", highlight: "ISO-grade quality" },
  { icon: Factory, title: "Custom Manufacturing", desc: "From custom widths and lengths to branded printing and private-label packaging, our flexible production lines adapt to your exact specifications at scale.", highlight: "Fully customizable" },
  { icon: Truck, title: "On-Time Delivery", desc: "Our dedicated logistics network ensures dispatch within committed timelines, with real-time tracking and pan-India coverage for seamless supply chain integration.", highlight: "99% on-time rate" },
  { icon: Shield, title: "Rigorous Quality Control", desc: "Every product undergoes multi-stage inspection — from raw material testing to final dispatch audits — ensuring zero-defect delivery and consistent batch quality.", highlight: "Multi-stage QC" },
  { icon: Leaf, title: "Sustainable Practices", desc: "We actively invest in eco-friendly materials, recyclable packaging solutions, and waste-reduction processes to minimize environmental impact without compromising performance.", highlight: "Eco-certified" },
  { icon: Users, title: "100% Client Satisfaction", desc: "Transparent pricing, dedicated account management, and responsive after-sales support — we build lasting partnerships based on trust, reliability, and mutual growth.", highlight: "Trusted partner" },
];

const testimonials = [
  { name: "Mehul Vora", text: "Consistent quality, competitive pricing, and reliable delivery. Vraj Packaging has become a trusted partner for our bulk packaging needs.", rating: 4.5 },
  { name: "Rajesh Mehta", text: "We have been sourcing BOPP packing tape from Vraj Packaging and are very satisfied with the quality and consistency. The adhesive strength, finish, and durability are excellent, and deliveries are always on time. Pricing is also competitive compared to the market. Overall, a reliable supplier.", rating: 4.5 },
  { name: "Priya Sharma", text: "Vraj Packaging has consistently delivered high-quality carton sealing tapes and stretch films that meet our bulk requirements without compromising on performance.", rating: 4 },
];

const industries = [
  { icon: Boxes, label: "FMCG & Retail" },
  { icon: Globe, label: "Export & Logistics" },
  { icon: Zap, label: "Automotive" },
  { icon: BarChart3, label: "Pharmaceuticals" },
  { icon: TrendingUp, label: "Agriculture" },
  { icon: Factory, label: "Manufacturing" },
];

const featuredProducts = [
  { image: productBopp, name: "BOPP Carton Sealing Tapes", desc: "Reliable carton closure for FMCG, pharma, e-commerce, and manufacturing.", icon: Package },
  { image: productStretch, name: "Stretch Film", desc: "Superior load containment for warehousing, logistics, and pallet wrapping.", icon: Shield },
  { image: productStraps, name: "PP & PET Straps", desc: "Light-duty to heavy-duty strapping for every industrial application.", icon: Layers },
];

const StatCounter = ({ label, end, suffix }: { label: string; end: number; suffix: string }) => {
  const { ref, count } = useCounter(end);
  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl md:text-5xl font-bold text-primary transition-transform duration-300 group-hover:scale-110" style={{ fontFamily: "'Playfair Display', serif" }}>
        {count}{suffix}
      </div>
      <p className="text-accent-foreground/60 text-sm mt-2 uppercase tracking-wider">{label}</p>
    </div>
  );
};

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: fullStars }).map((_, j) => (
        <Star key={j} className="w-4 h-4 text-primary fill-primary" />
      ))}
      {hasHalf && (
        <div className="relative w-4 h-4">
          <Star className="w-4 h-4 text-primary/30 absolute" />
          <div className="overflow-hidden w-1/2 absolute">
            <Star className="w-4 h-4 text-primary fill-primary" />
          </div>
        </div>
      )}
    </div>
  );
};

const Home = () => {
  const hero = useScrollAnimation(0.1);
  const who = useScrollAnimation();
  const why = useScrollAnimation();
  const test = useScrollAnimation();
  const ind = useScrollAnimation();
  const cta = useScrollAnimation();
  const prodPreview = useScrollAnimation();
  const trustAnim = useScrollAnimation();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-accent/85" />
        </div>
        <div ref={hero.ref} className="relative z-10 max-w-5xl mx-auto text-center px-6 py-32">
          <div className={hero.isVisible ? "animate-slide-up" : "opacity-0"}>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-6">
              Est. 2022 — Gujarat, India
            </p>
          </div>
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 ${hero.isVisible ? "animate-slide-up-delay-1" : "opacity-0"}`}>
            Where Global Quality
            <span className="block text-primary mt-2">Meets Industrial Strength</span>
          </h1>
          <p className={`text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 ${hero.isVisible ? "animate-slide-up-delay-2" : "opacity-0"}`}>
            Reliable. Scalable. Export-Ready. Delivering High-Quality Packaging Materials Across India and Global Markets.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${hero.isVisible ? "animate-slide-up-delay-3" : "opacity-0"}`}>
            <Link to="/products" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:brightness-110 transition-all flex items-center gap-2 justify-center hover:shadow-xl hover:shadow-primary/20 hover:scale-105 duration-300">
              Explore Products <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all text-center hover:scale-105 duration-300 hover:border-primary/50">
              Get a Quote
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-primary rounded-full animate-[scrollDot_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent py-16 border-b border-border/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => <StatCounter key={s.label} {...s} />)}
        </div>
      </section>

      {/* Who We Are */}
      <section ref={who.ref} className="section-padding bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className={who.isVisible ? "animate-slide-right" : "opacity-0"}>
            <p className="text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-3">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Your Trusted Packaging Partner Since 2022</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vraj Packaging is a Gujarat-based industrial packaging solutions provider specializing in high-performance adhesive tapes, stretch films, jumbo rolls, and strapping solutions. We combine modern manufacturing technology with rigorous quality standards to deliver products that perform consistently across demanding industrial environments.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Built on consistency, transparent pricing, and customer-first service, we serve FMCG, pharmaceutical, automotive, agricultural, manufacturing, and logistics industries across India while expanding globally.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With a rapidly growing client base of 100+ businesses and an unwavering commitment to on-time delivery, Vraj Packaging has established itself as a reliable name in industrial packaging within just a few years of operations.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm uppercase tracking-wide group">
              Learn More About Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className={`grid grid-cols-2 gap-4 ${who.isVisible ? "animate-slide-left" : "opacity-0"}`}>
            {[
              { icon: CheckCircle, label: "Quality Consistency" },
              { icon: Shield, label: "Export Standards" },
              { icon: Factory, label: "Bulk Manufacturing" },
              { icon: Leaf, label: "Eco-Friendly" },
            ].map((item, i) => (
              <div key={item.label} className="glass-card rounded-xl p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-medium text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section ref={prodPreview.ref} className="section-padding bg-accent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-3">Our Products</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Packaging Solutions That Perform</h2>
            <p className="text-accent-foreground/50 mt-3 max-w-xl mx-auto text-sm">From adhesive tapes to heavy-duty straps — every product is engineered for reliability and built for scale.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProducts.map((p, i) => (
              <Link
                to="/products"
                key={p.name}
                className={`group rounded-2xl overflow-hidden border border-border/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  prodPreview.isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent" />
                  <div className="absolute top-4 right-4 bg-primary/90 p-2 rounded-xl">
                    <p.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5 bg-accent/50">
                  <h3 className="text-white font-bold text-lg mb-2">{p.name}</h3>
                  <p className="text-accent-foreground/50 text-sm leading-relaxed mb-3">{p.desc}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 border-2 border-primary/30 text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={why.ref} className="section-padding bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Strength in Every Seal</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">We don't just manufacture packaging — we engineer reliability, performance, and trust into every product that leaves our facility.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <div
                key={item.title}
                className={`glass-card rounded-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-transparent hover:border-primary/20 ${
                  why.isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>{item.title}</h3>
                    <span className="text-primary/70 text-xs font-semibold uppercase tracking-wider">{item.highlight}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section ref={ind.ref} className="py-16 bg-background border-y border-border/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-3">Industries We Serve</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Trusted Across Sectors</h2>
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ${ind.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            {industries.map((item, i) => (
              <div key={item.label} className="glass-card rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group" style={{ animationDelay: `${i * 0.08}s` }}>
                <item.icon className="w-7 h-7 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-foreground text-xs font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section ref={trustAnim.ref} className="py-12 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${trustAnim.isVisible ? "animate-fade-in" : "opacity-0"}`}>
            {[
              { icon: Shield, label: "Quality Assured", desc: "Multi-stage inspection on every batch" },
              { icon: Truck, label: "Pan-India Delivery", desc: "Reliable logistics across all states" },
              { icon: Clock, label: "24hr Quote Response", desc: "Fast turnaround on all enquiries" },
              { icon: Leaf, label: "Eco-Responsible", desc: "Recyclable & sustainable materials" },
            ].map((badge, i) => (
              <div key={badge.label} className="flex items-start gap-3 group" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <badge.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">{badge.label}</p>
                  <p className="text-muted-foreground text-xs">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={test.ref} className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`glass-card rounded-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-primary/10 ${
                  test.isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <StarRating rating={t.rating} />
                <p className="text-foreground font-semibold text-sm mt-3">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={cta.ref} className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-accent" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 border border-primary/30 rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary/20 rounded-full animate-[pulse_5s_ease-in-out_infinite_1s]" />
        </div>
        <div className={`relative z-10 max-w-3xl mx-auto text-center px-6 ${cta.isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <Clock className="w-10 h-10 text-primary mx-auto mb-6 animate-[pulse_2s_ease-in-out_infinite]" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Packaging?</h2>
          <p className="text-accent-foreground/60 mb-8 text-lg">Get a custom quote for your packaging needs today. We deliver quality, on time, every time.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold hover:brightness-110 transition-all hover:shadow-xl hover:shadow-primary/25 hover:scale-105 duration-300">
            Request a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;