import { useScrollAnimation, useCounter } from "@/hooks/useScrollAnimation";
import { Target, Eye, Compass, Shield, Award, Lightbulb, Leaf, Heart, User, Building2, Globe, TrendingUp, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // ✅ ADDED


const coreValues = [
  { icon: Shield, title: "Quality Consistency", desc: "Multi-stage quality inspection on every batch — ensuring zero-defect delivery across all orders." },
  { icon: Heart, title: "Transparent Pricing", desc: "Honest, competitive factory-direct pricing with no hidden costs or last-minute surcharges." },
  { icon: User, title: "Customer-Centric", desc: "Every decision driven by client satisfaction — from product design to post-delivery support." },
  { icon: Award, title: "Operational Excellence", desc: "Streamlined processes, lean manufacturing, and continuous improvement for maximum efficiency." },
  { icon: Lightbulb, title: "Innovation", desc: "Constantly evolving with industry-leading solutions, modern machinery, and advanced adhesive technologies." },
  { icon: Leaf, title: "Sustainability", desc: "Eco-friendly materials, recyclable packaging, and responsible manufacturing for a greener future." },
];

const timeline = [
  { year: "2022", title: "Company Founded", desc: "Vraj Packaging established at Shivam Industrial Estate, Chhatral, Gujarat with a bold vision to deliver innovative, high-performance packaging solutions to Indian industries." },
  { year: "2023", title: "Product Line Expansion", desc: "Rapidly expanded offerings to include BOPP tapes, printed tapes, stretch films, jumbo rolls, and PP/PET strapping solutions — building a comprehensive product portfolio." },
  { year: "2024", title: "Market Growth & Scale", desc: "Scaled operations to serve 100+ clients across 6 industries. Established partnerships with FMCG, pharmaceutical, and logistics companies across India." },
  { year: "2025", title: "Modernization & Export Readiness", desc: "Invested in modernized production capabilities, strengthened quality certifications, and initiated global supply chain partnerships for export-grade manufacturing." },
  { year: "2026", title: "National Expansion & Brand Leadership", desc: "Expanding distribution network across India with new warehousing capabilities, launching premium product lines, and strengthening brand recognition as a top-tier packaging solutions provider." },
];

const companyHighlights = [
  { icon: Building2, value: "2022", label: "Year Established" },
  { icon: Globe, value: "6+", label: "Industries Served" },
  { icon: TrendingUp, value: "100+", label: "Active Clients" },
  { icon: Award, value: "5000+", label: "Products Delivered" },
];

const About = () => {
  const intro = useScrollAnimation();
  const founder = useScrollAnimation();
  const values = useScrollAnimation();
  const tl = useScrollAnimation();
  const highlights = useScrollAnimation();
  const [headerLoaded, setHeaderLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeaderLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
        <motion.div
      className="pt-[72px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Page Header — animated with floating shapes */}
      <section className="bg-accent py-20 md:py-28 relative overflow-hidden">
        {/* Floating decorative shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-[10%] w-20 h-20 rounded-full border border-primary/20 animate-[float_6s_ease-in-out_infinite]" />
          <div className="absolute bottom-12 right-[15%] w-14 h-14 rounded-full bg-primary/10 animate-[float_8s_ease-in-out_1s_infinite]" />
          <div className="absolute top-1/2 left-[80%] w-8 h-8 rotate-45 border border-primary/15 animate-[float_7s_ease-in-out_2s_infinite]" />
          <div className="absolute bottom-8 left-[30%] w-6 h-6 rounded-full bg-primary/5 animate-[float_5s_ease-in-out_0.5s_infinite]" />
          <div className="absolute top-16 right-[35%] w-10 h-10 rotate-12 border border-white/5 animate-[float_9s_ease-in-out_3s_infinite]" />
        </div>
        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <p className={`text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 transition-all duration-700 ${headerLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>About Us</p>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700 delay-150 ${headerLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>Our Purpose & Direction</h1>
          <p className={`text-accent-foreground/60 text-lg max-w-2xl mx-auto transition-all duration-700 delay-300 ${headerLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Built on integrity, quality, and a relentless pursuit of excellence in industrial packaging since 2022.
          </p>
          <div className={`mt-6 flex justify-center gap-1 transition-all duration-700 delay-500 ${headerLoaded ? "opacity-100" : "opacity-0"}`}>
            <span className="w-8 h-1 rounded-full bg-primary" />
            <span className="w-2 h-1 rounded-full bg-primary/50" />
            <span className="w-2 h-1 rounded-full bg-primary/30" />
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section ref={intro.ref} className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className={intro.isVisible ? "animate-slide-right" : "opacity-0"}>
            <p className="text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-3">Company Overview</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Packaging Excellence Since 2022</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vraj Packaging is committed to delivering reliable and cost-effective industrial packaging materials that ensure cargo safety and enhance brand visibility. Our operations include manufacturing, sourcing, custom printing, quality control, domestic distribution, logistics coordination, and international trade development.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded with a vision to revolutionize India's packaging industry, we combine modern manufacturing with traditional values of trust and quality to serve businesses of all sizes — from local enterprises to multinational corporations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Headquartered at Shivam Industrial Estate in Chhatral, Gujarat, our strategically located facility enables efficient production and rapid distribution across India's key industrial corridors. We take pride in our growing reputation as a dependable, quality-first packaging partner.
            </p>
          </div>
          <div className={`grid grid-cols-2 gap-4 ${intro.isVisible ? "animate-slide-left" : "opacity-0"}`}>
            {[
              { icon: Target, title: "Mission", desc: "To provide reliable, cost-effective packaging solutions ensuring cargo safety and brand value.", span: "" },
              { icon: Eye, title: "Vision", desc: "To become a globally trusted packaging partner known for quality, innovation, and satisfaction.", span: "" },
              { icon: Compass, title: "Goal", desc: "Establish Vraj Packaging as a preferred global industrial packaging supplier serving multinational clients with export-grade quality.", span: "col-span-2" },
            ].map((card, i) => (
              <div
                key={card.title}
                className={`glass-card rounded-xl p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group hover:border-primary/20 ${card.span}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                  <card.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="font-bold text-foreground text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{card.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section ref={highlights.ref} className="py-16 bg-muted/30 border-y border-border/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.03),transparent_70%)] pointer-events-none" />
        <div className={`max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10 ${highlights.isVisible ? "animate-slide-up" : "opacity-0"}`}>
          {companyHighlights.map((h, i) => (
            <div
              key={h.label}
              className="text-center group cursor-default hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 transition-colors group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]">
                <h.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-3xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>{h.value}</p>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section ref={founder.ref} className="section-padding bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className={`glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center hover:shadow-2xl transition-all duration-500 hover:border-primary/20 ${founder.isVisible ? "animate-scale-up" : "opacity-0"}`}>
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-accent flex items-center justify-center shrink-0 relative group">
              <span className="text-5xl text-primary font-bold relative z-10" style={{ fontFamily: "'Playfair Display', serif" }}>JP</span>
              <div className="absolute inset-0 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="absolute -inset-1 rounded-2xl border border-primary/10 group-hover:border-primary/25 transition-colors duration-500" />
            </div>
            <div>
              <p className="text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-2">Founder & Director</p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Jatin Parikh</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                As the Founder and Director of Vraj Packaging, I lead with a clear mandate — to build a globally competitive packaging enterprise defined by precision, performance, and uncompromising standards.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                My focus is on strategic expansion, operational discipline, and long-term value creation, ensuring that every partnership reflects reliability, strength, and international credibility.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through disciplined growth and forward-thinking execution, I am committed to positioning Vraj Packaging as a respected force in the global packaging industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={tl.ref} className="section-padding bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.04),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className={`text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-3 ${tl.isVisible ? "animate-fade-in" : "opacity-0"}`}>Our Journey</p>
            <h2 className={`text-3xl md:text-4xl font-bold text-foreground ${tl.isVisible ? "animate-slide-up" : "opacity-0"}`}>Growth Timeline</h2>
            <p className={`text-muted-foreground mt-3 max-w-xl mx-auto ${tl.isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>From a bold idea in 2022 to a rapidly scaling enterprise — our journey reflects relentless ambition and disciplined execution.</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/20" />
            {/* Animated pulse traveling down the line */}
            <div className="absolute left-6 md:left-1/2 top-0 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent animate-[travelDown_3s_ease-in-out_infinite] z-[1]" />
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-14 last:mb-0 ${
                  tl.isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}>
                  <div className="glass-card rounded-xl p-6 ml-14 md:ml-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
                    <div className="relative z-10">
                      <p className="text-primary font-bold text-3xl mb-1 group-hover:scale-105 transition-transform origin-left inline-block">{item.year}</p>
                      <h4 className="text-foreground font-bold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-[0_0_12px_hsl(var(--primary)/0.5)] hover:scale-125 transition-transform" />
                  <div className="absolute inset-0 w-6 h-6 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: "2.5s", animationDelay: `${i * 0.4}s` }} />
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={values.ref} className="section-padding bg-accent relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-primary/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 -left-10 w-40 h-40 rounded-full bg-primary/5 animate-[float_8s_ease-in-out_2s_infinite]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className={`text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-3 ${values.isVisible ? "animate-fade-in" : "opacity-0"}`}>Core Values</p>
            <h2 className={`text-3xl md:text-4xl font-bold text-white ${values.isVisible ? "animate-slide-up" : "opacity-0"}`}>What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v, i) => (
              <div
                key={v.title}
                className={`border border-border/10 rounded-xl p-8 hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden ${
                  values.isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-700" />
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <v.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{v.title}</h3>
                <p className="text-accent-foreground/60 text-sm leading-relaxed">{v.desc}</p>
                <ChevronRight className="w-4 h-4 text-primary/0 group-hover:text-primary/60 transition-all duration-300 mt-3 group-hover:translate-x-1" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;