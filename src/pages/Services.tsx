import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Paintbrush, Factory, Tag, Printer, MessageCircle, Truck, ArrowRight, CheckCircle, Package, Layers, Shield } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Custom Packaging Design",
    desc: "We work closely with clients to design packaging solutions tailored to their product dimensions, branding requirements, and industry standards. Whether you need a specific tape width, custom strap colour, or unique stretch film gauge — we make it happen.",
    benefits: ["Tailored to your product specifications", "Brand-aligned design language", "Prototype development before production", "Cost-optimized material selection"],
  },
  {
    icon: Factory,
    title: "Bulk Manufacturing",
    desc: "Our high-capacity production lines are equipped to handle large-volume orders with consistent quality and on-time delivery. From BOPP jumbo rolls to PET straps in bulk, we maintain strict quality standards across every production run.",
    benefits: ["Scalable production capacity", "Consistent batch-to-batch quality", "Competitive bulk pricing", "Flexible production scheduling"],
  },
  {
    icon: Tag,
    title: "Private Label Packaging",
    desc: "We offer white-label and private label packaging services for brands wanting premium packaging under their own identity. Your brand name on our quality products — complete confidentiality guaranteed.",
    benefits: ["Your brand, our quality", "Confidential manufacturing process", "Custom print & finishing options", "End-to-end brand packaging support"],
  },
  {
    icon: Printer,
    title: "Branding & Printing",
    desc: "Custom printing on tapes and packaging materials to enhance brand recognition. Our printing capabilities allow your company logo, product name, and handling instructions to be directly printed on tapes for a professional finish.",
    benefits: ["Company logo printing on tapes", "Custom text & handling instructions", "Consistent print quality across batches", "Multiple colour options available"],
  },
  {
    icon: MessageCircle,
    title: "Packaging Consultation",
    desc: "Our experts guide you in selecting the right packaging materials for your specific use case. We analyse your product type, transit conditions, and storage needs to recommend the most effective and cost-efficient solution.",
    benefits: ["Industry-specific expertise", "Cost reduction strategies", "Material suitability guidance", "Application-based recommendations"],
  },
  {
    icon: Truck,
    title: "Logistics & Delivery Support",
    desc: "End-to-end logistics coordination ensures your packaging materials are delivered on time — whether within India or for international export. We handle dispatch planning and shipment tracking so you can focus on your business.",
    benefits: ["Pan-India delivery network", "FOB & CIF export options", "Timely dispatch coordination", "Warehousing & storage support"],
  },
];

const capabilities = [
  { icon: Package, title: "Adhesive Tapes", desc: "BOPP transparent, brown, printed, and custom branded tapes for every sealing need." },
  { icon: Layers, title: "Strapping Solutions", desc: "PP straps for light-duty bundling and PET straps for heavy-duty industrial applications." },
  { icon: Shield, title: "Stretch & Wrap", desc: "Manual and machine-grade stretch films for pallet wrapping and product protection." },
  { icon: Factory, title: "Jumbo Rolls", desc: "Coated BOPP jumbo rolls for tape converters and industrial packaging manufacturers." },
];

const Services = () => {
  const heroAnim = useScrollAnimation();
  const anim = useScrollAnimation();
  const capAnim = useScrollAnimation();
  const commitAnim = useScrollAnimation();

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-accent py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-32 h-32 rounded-full border border-primary/30 animate-[float_6s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full border border-primary/20 animate-[float_8s_ease-in-out_infinite_1s]" />
        </div>
        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 animate-fade-in">Our Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-up">Full-Service Packaging Solutions</h1>
          <p className="text-accent-foreground/60 text-lg max-w-2xl mx-auto animate-slide-up-delay-1">
            From material selection to final delivery — we are your complete packaging partner, offering end-to-end solutions for every industry.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background border-b border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { value: "6+", label: "Service Offerings" },
            { value: "100+", label: "Clients Served" },
            { value: "15+", label: "Industries Covered" },
            { value: "Pan-India", label: "Delivery Network" },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-7 px-4 hover:bg-muted/30 transition-colors duration-300">
              <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-muted-foreground text-xs mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section ref={anim.ref} className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Comprehensive Packaging Services</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">Each service is designed to deliver measurable value — from reducing costs to improving product safety during transit.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`glass-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group ${
                  anim.isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-foreground font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Capabilities */}
      <section ref={capAnim.ref} className="section-padding bg-accent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-3">What We Manufacture</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Product Capabilities</h2>
            <p className="text-accent-foreground/50 mt-3 max-w-xl mx-auto text-sm">We specialise in manufacturing a focused range of high-quality packaging products, each engineered for specific industrial applications.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`border border-border/10 rounded-2xl p-6 text-center hover:bg-white/5 transition-all duration-500 group ${
                  capAnim.isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{cap.title}</h4>
                <p className="text-accent-foreground/50 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section ref={commitAnim.ref} className="section-padding bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-3">Our Commitment</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Built on Trust & Quality</h2>
          </div>
          <div className={`grid md:grid-cols-3 gap-8 ${commitAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            {[
              { title: "Consistent Quality", desc: "Strict quality control at every stage of production ensures that every product leaving our facility meets the highest standards." },
              { title: "Reliable Supply", desc: "We maintain adequate inventory and flexible production schedules to ensure uninterrupted supply, even during peak demand periods." },
              { title: "Client Partnership", desc: "We believe in building long-term partnerships. Our team works closely with clients to understand their evolving needs and deliver accordingly." },
            ].map((item, i) => (
              <div key={item.title} className="text-center" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">{i + 1}</span>
                </div>
                <h3 className="text-foreground font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-primary blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-accent-foreground/60 mb-8">Our team is ready to help you find the perfect packaging solution. Get in touch for a free consultation.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold hover:brightness-110 transition-all hover:shadow-xl hover:shadow-primary/25">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;