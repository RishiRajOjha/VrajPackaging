import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X, ArrowRight, ChevronLeft, ChevronRight, CheckCircle, Clock, ShieldCheck, Award } from "lucide-react";
import { Link } from "react-router-dom";
import productBopp from "@/assets/product-bopp-tape.jpg";
import productPrinted from "@/assets/product-printed-boxes.jpg";
import productStretch from "@/assets/product-stretch-film.jpg";
import productStraps from "@/assets/product-straps.jpg";
import productJumbo from "@/assets/Jumbo.jpeg";
import productIndustrial from "@/assets/product-industrial.jpg";
import portfolioBoppPharma from "@/assets/portfolio-bopp-pharma.jpg";
import portfolioBoppEcommerce from "@/assets/portfolio-bopp-ecommerce.jpg";
import portfolioPrintedExport from "@/assets/advertize.jpeg";
import portfolioPrintedRetail from "@/assets/portfolio-printed-retail.jpg";
import portfolioJumboIndustrial from "@/assets/portfolio-jumbo-industrial.jpg";
import portfolioStretchAuto from "@/assets/portfolio-stretch-auto.jpg";
import portfolioPpAgriculture from "@/assets/portfolio-pp-agriculture.jpg";
import portfolioPetExport from "@/assets/portfolio-pet-export.jpg";
import portfolioPetCement from "@/assets/portfolio-pet-cement.jpg";
import IndustrialPackingTapes from "@/assets/industrial_packaging_tapesv.jpg";
import BundlingTape from "@/assets/bundling_tapesv.jpg";
import nonoisetapesv from "@/assets/no_noise_tapesv.jpg";
import easy_to_tear_tapes from "@/assets/easy_to_tear_tapesv.jpg";
import stationary_tapes from "@/assets/stationary_tapesv.jpg";

 


const categories = ["All", "BOPP Tapes", "Printed Tapes", "Jumbo Rolls", "Stretch Film", "PP Straps", "PET Straps"];


const portfolioItems = [
  {
    image: portfolioBoppPharma,
    title: "BOPP Tape — FMCG Carton Sealing",
    category: "BOPP Tapes",
    desc: "High-volume transparent BOPP carton sealing tapes supplied to a leading FMCG brand for their distribution centers across India. Delivered consistent adhesion and reliable performance across seasonal demand spikes.",
    client: "Leading FMCG Brand",
    deliveryTime: "7 Days",
    result: "30% faster packing line output",
  },
  {
    image: portfolioBoppEcommerce,
    title: "BOPP Tape — Pharmaceutical Packaging",
    category: "BOPP Tapes",
    desc: "Tamper-evident carton sealing solution for a pharmaceutical distributor. Our tapes met stringent quality standards for medical supply chain packaging with excellent temperature resistance.",
    client: "Pharmaceutical Distributor",
    deliveryTime: "10 Days",
    result: "Zero tampering incidents reported",
  },
  {
    image: productBopp,
    title: "BOPP Tape — E-commerce Fulfillment",
    category: "BOPP Tapes",
    desc: "Bulk supply of brown and transparent BOPP tapes to an e-commerce fulfillment center. Smooth unwinding and strong hold ensured efficient packing line operations at scale.",
    client: "E-commerce Fulfillment Hub",
    deliveryTime: "5 Days",
    result: "Reduced tape wastage by 20%",
  },
  {
    image: portfolioPrintedRetail,
    title: "Branded Tape — Retail Chain",
    category: "Printed Tapes",
    desc: "Custom branded tapes designed for a national retail chain. Every carton becomes a branding opportunity, enhancing brand visibility from warehouse to store shelf.",
    client: "National Retail Chain",
    deliveryTime: "14 Days",
    result: "Enhanced brand recall at delivery",
  },
  {
    image: portfolioPrintedExport,
    title: "Printed Tape — Export Company",
    category: "Printed Tapes",
    desc: "High-quality printed packaging tapes for an export-oriented consumer goods company. Featured company logo and handling instructions in a single tape design.",
    client: "Export Consumer Goods Co.",
    deliveryTime: "12 Days",
    result: "Improved shipment identification",
  },
  {
    image: productJumbo,
    title: "Jumbo Rolls — Industrial Packaging Unit",
    category: "Jumbo Rolls",
    desc: "Bulk coated jumbo roll supply to an industrial packaging manufacturer. Our acrylic-coated rolls provided the foundation for their premium tape product line.",
    client: "Industrial Packaging Manufacturer",
    deliveryTime: "10 Days",
    result: "Consistent adhesive performance",
  },
  {
    image: portfolioStretchAuto,
    title: "Stretch Film — Warehouse Pallet Wrapping",
    category: "Stretch Film",
    desc: "Machine-grade stretch film deployed across a logistics company's warehousing operations. Superior cling and puncture resistance ensured secure pallet containment for long-distance transit.",
    client: "Logistics & Warehousing Co.",
    deliveryTime: "5 Days",
    result: "40% fewer transit damages",
  },
  {
    image: productStretch,
    title: "Stretch Film — Automobile Parts Protection",
    category: "Stretch Film",
    desc: "Specialized stretch film solution for an automobile parts manufacturer. High-clarity film provided excellent load protection while allowing easy visual inspection of wrapped components.",
    client: "Automobile Parts Manufacturer",
    deliveryTime: "8 Days",
    result: "Zero surface scratch complaints",
  },
  {
    image: portfolioPpAgriculture,
    title: "PP Straps — Courier & Logistics",
    category: "PP Straps",
    desc: "Lightweight polypropylene straps supplied for courier and logistics bundling applications. Smooth surface ensures safe manual handling while providing reliable carton securing.",
    client: "Courier & Logistics Firm",
    deliveryTime: "5 Days",
    result: "Faster manual strapping cycles",
  },
  {
    image: productStraps,
    title: "PP Straps — Agriculture Packaging",
    category: "PP Straps",
    desc: "Color-coded PP strapping solution for an agriculture export company. Used for bundling produce crates with consistent tension and easy identification during sorting.",
    client: "Agriculture Export Company",
    deliveryTime: "7 Days",
    result: "Simplified sorting & identification",
  },
  {
    image: portfolioPetExport,
    title: "PET Straps — Steel Industry",
    category: "PET Straps",
    desc: "Heavy-duty PET strapping deployed for a steel coil manufacturer. Our straps replaced traditional steel strapping, offering comparable tensile strength with significantly reduced weight and injury risk.",
    client: "Steel Coil Manufacturer",
    deliveryTime: "10 Days",
    result: "Eliminated steel strap injuries",
  },
  {
    image: productIndustrial,
    title: "PET Straps — Export Cargo Securing",
    category: "PET Straps",
    desc: "High-tensile PET straps used for export cargo handling and container securing. UV and moisture resistance ensured load integrity throughout international shipping routes.",
    client: "Export Cargo Handler",
    deliveryTime: "8 Days",
    result: "100% load integrity on transit",
  },
  {
    image: portfolioPetCement,
    title: "PET Straps — Brick & Cement Industry",
    category: "PET Straps",
    desc: "Robust PET strapping solution for brick and cement manufacturers. Superior shock absorption and recovery properties handled the heavy load cycles typical in construction material packaging.",
    client: "Brick & Cement Manufacturer",
    deliveryTime: "7 Days",
    result: "Reduced breakage during stacking",
  },
  {
  image: IndustrialPackingTapes,
  title: "Industrial Packing Tape",
  category: "BOPP Tapes",
  desc: "Heavy-duty industrial adhesive tapes designed for large-scale manufacturing and export packaging. Superior adhesion and durability for high-load cartons.",
  client: "Manufacturing Unit",
  deliveryTime: "6 Days",
  result: "Improved carton strength by 25%",
},
{
  image: BundlingTape,
  title: "Bundling Tape ",
  category: "BOPP Tapes",
  desc: "Strong bundling tapes used for grouping, securing, and organizing products in warehouses and logistics centers.",
  client: "Warehouse Distributor",
  deliveryTime: "5 Days",
  result: "Faster bundling efficiency",
},
{
  image: nonoisetapesv,
  title: "No Noise Tape — Silent Packaging",
  category: "BOPP Tapes",
  desc: "Low-noise adhesive tape engineered for silent unwinding in retail, offices, and controlled environments.",
  client: "Retail Packaging Division",
  deliveryTime: "7 Days",
  result: "Reduced packaging noise by 80%",
},
{
  image: stationary_tapes,
  title: "Stationary Tape — Multi-Color Utility",
  category: "BOPP Tapes",
  desc: "Stationery Tapes — Multi-Color Utility Tapes Versatile tapes designed primarily for everyday stationery and general-purpose applications. Available in vibrant colors like green, blue, black, red, orange, and purple, and customizable in various widths to meet customer requirements.",
  client: "Stationery & Office Supply Retailer",
  deliveryTime: "6 Days",
  result: "Strong market in stationery segment",
},
{
  image: easy_to_tear_tapes,
  title: "Easy-to-Tear Tape — User-Friendly Packaging",
  category: "BOPP Tapes",
  desc: "Easy-to-tear BOPP tape designed for user-friendly packaging applications. Engineered for effortless manual tearing without the need for scissors or dispensers, making it ideal for retail and consumer use.",
  client: "E-commerce Retailer",
  deliveryTime: "9 Days",
  result: "User-friendly packaging experience",
},
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const anim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();
  const processAnim = useScrollAnimation();
  const whyAnim = useScrollAnimation();

  const filtered = filter === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === filter);

  const navigateLightbox = (dir: number) => {
    if (lightbox === null) return;
    const next = lightbox + dir;
    if (next >= 0 && next < filtered.length) setLightbox(next);
  };

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-accent py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-32 h-32 rounded-full border border-primary/30 animate-[float_6s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full border border-primary/20 animate-[float_8s_ease-in-out_infinite_1s]" />
        </div>
        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 animate-fade-in">Portfolio</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 animate-slide-up">Our Work in Action</h1>
          <p className="text-accent-foreground/60 text-lg max-w-2xl mx-auto animate-slide-up-delay-1">
            Real-world packaging solutions delivered across FMCG, Pharmaceutical, Logistics, Manufacturing, and Export sectors — showcasing our product range in action.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section ref={processAnim.ref} className="section-padding bg-background border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-3">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">From Enquiry to Delivery</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">Every project follows a streamlined process designed for quality, speed, and complete client satisfaction.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Requirement Analysis", desc: "We understand your product, volume, and packaging needs through a detailed consultation." },
              { step: "02", title: "Material & Design", desc: "Our team selects the right materials and creates design specifications tailored to your application." },
              { step: "03", title: "Production & QC", desc: "Manufacturing begins with rigorous quality checks at every stage to ensure consistency." },
              { step: "04", title: "Dispatch & Support", desc: "On-time delivery with logistics coordination and dedicated post-sale support." },
            ].map((item, i) => (
              <div
                key={item.step}
                className={`relative p-6 rounded-2xl bg-card border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group ${
                  processAnim.isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <span className="text-5xl font-bold text-primary/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">{item.step}</span>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold text-sm">{item.step}</span>
                </div>
                <h3 className="text-foreground font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section ref={anim.ref} className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-3">Our Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Delivered Solutions Across Industries</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">Browse our completed projects to see how our packaging products perform in real-world applications.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                className={`glass-card rounded-2xl overflow-hidden cursor-pointer group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ${
                  anim.isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.08}s` }}
                onClick={() => setLightbox(i)}
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/60 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">View Details</span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{item.category}</span>
                  <h3 className="text-foreground font-bold mt-3 mb-1.5 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>{item.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{item.desc}</p>
                  <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border/50">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock size={12} className="text-primary" />
                      {item.deliveryTime}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CheckCircle size={12} className="text-secondary" />
                      <span className="line-clamp-1">{item.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyAnim.ref} className="section-padding bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-3">Why Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Sets Us Apart</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Quality Assurance", desc: "Every batch undergoes rigorous quality checks before dispatch to ensure consistent performance." },
              { icon: Clock, title: "On-Time Delivery", desc: "Reliable logistics and production planning ensure your orders reach you within committed timelines." },
              { icon: Award, title: "Industry Experience", desc: "Years of experience serving diverse industries from FMCG to heavy manufacturing." },
              { icon: CheckCircle, title: "Custom Solutions", desc: "We tailor our products to your exact specifications — dimensions, materials, and finishes." },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`p-6 rounded-2xl bg-card border border-border text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group ${
                  whyAnim.isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-foreground font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaAnim.ref} className="section-padding bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-primary blur-3xl" />
        </div>
        <div className={`max-w-3xl mx-auto text-center relative z-10 ${ctaAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have a Packaging Requirement?</h2>
          <p className="text-accent-foreground/60 mb-8">
            Whether it's bulk BOPP tapes, custom printed tapes, or heavy-duty PET straps — we deliver quality packaging solutions tailored to your industry needs.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 transition-all">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-accent/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-10" onClick={() => setLightbox(null)}>
            <X size={28} />
          </button>
          {lightbox > 0 && (
            <button className="absolute left-4 md:left-8 text-white hover:text-primary transition-colors z-10" onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}>
              <ChevronLeft size={32} />
            </button>
          )}
          {lightbox < filtered.length - 1 && (
            <button className="absolute right-4 md:right-8 text-white hover:text-primary transition-colors z-10" onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}>
              <ChevronRight size={32} />
            </button>
          )}
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[lightbox].image} alt={filtered[lightbox].title} className="w-full rounded-2xl shadow-2xl animate-scale-up" />
            <div className="mt-6 text-center">
              <span className="text-[11px] px-3 py-1 rounded-full bg-primary/20 text-primary font-medium">{filtered[lightbox].category}</span>
              <h3 className="text-white text-xl font-bold mt-3">{filtered[lightbox].title}</h3>
              <p className="text-accent-foreground/60 mt-2 max-w-2xl mx-auto text-sm leading-relaxed">{filtered[lightbox].desc}</p>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2 text-sm text-accent-foreground/50">
                  <Clock size={14} className="text-primary" />
                  {filtered[lightbox].deliveryTime}
                </div>
                <div className="flex items-center gap-2 text-sm text-accent-foreground/50">
                  <CheckCircle size={14} className="text-secondary" />
                  {filtered[lightbox].result}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;