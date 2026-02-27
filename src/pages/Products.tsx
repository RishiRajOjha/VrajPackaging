import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, ChevronDown, ChevronUp, CheckCircle, Package, Shield, Truck, Award, Factory, Layers, Zap, BarChart3 } from "lucide-react";
import productBopp from "@/assets/product-bopp-tape.jpg";
import productPrintedNew from "@/assets/advertize.jpeg";
import productJumboNew from "@/assets/Jumbo.jpeg";
import productStretch from "@/assets/product-stretch-film.jpg";
import productStraps from "@/assets/product-straps.jpg";
import productIndustrial from "@/assets/product-industrial.jpg";


const products = [
  {
    id: "bopp",
    name: "BOPP Carton Sealing Tapes",
    image: productBopp,
    icon: Package,
    desc: "Premium quality BOPP carton sealing tapes designed for reliable carton closure across diverse industries. Our tapes offer excellent adhesion, consistent unwinding, and long shelf life — ensuring your packaging stays sealed from warehouse to delivery.",
    features: [
      "Superior adhesive strength for secure sealing",
      "Consistent quality across every roll",
      "Available in transparent, brown & colored variants",
      "Temperature & moisture resistant for all climates",
      "Smooth and silent unwinding for efficient packing lines",
    ],
    materials: "Biaxially Oriented Polypropylene (BOPP) film with acrylic or hot-melt adhesive coating",
    sizes: "36mm, 48mm, 72mm width | 40m to 1000m length options",
    moq: "100 rolls minimum",
    industries: ["FMCG", "Pharmaceutical", "E-commerce", "Retail", "Manufacturing Units", "Logistics & Warehousing", "Agriculture Packaging"],
    bestFor: "Carton sealing, everyday packaging, warehouse operations",
  },
  {
    id: "printed",
    name: "Printed & Advertising Tapes",
    image: productPrintedNew,
    icon: Award,
    desc: "Custom branded packaging tapes that transform every carton into a powerful branding tool. Our printed tapes feature high-quality logo printing, delivering consistent brand visibility throughout the supply chain — from factory floor to customer doorstep.",
    features: [
      "High-quality company logo and text printing",
      "Tamper-evident branding for added security",
      "Strong adhesive with branded finish",
      "Cost-effective marketing on every shipment",
      "Custom designs for seasonal campaigns & promotions",
    ],
    materials: "BOPP film with precision ink printing and high-performance adhesive",
    sizes: "Custom widths from 36mm to 72mm | Variable lengths",
    moq: "500 rolls minimum for custom print orders",
    industries: ["FMCG Brands", "E-commerce Companies", "Retail Chains", "Pharmaceutical Companies", "Consumer Goods Manufacturers", "Export Companies"],
    bestFor: "Brand visibility, tamper-evident packaging, marketing",
  },
  {
    id: "jumbo",
    name: "Coated Jumbo Rolls",
    image: productJumboNew,
    icon: Layers,
    desc: "High-grade coated jumbo rolls serving as the foundational raw material for tape converters and packaging manufacturers. Produced with precision coating technology, our jumbo rolls ensure uniform adhesive application and consistent performance for downstream tape production.",
    features: [
      "Precision-coated adhesive with uniform thickness",
      "Available in acrylic & hot-melt adhesive types",
      "Suitable for high-speed slitting and converting",
      "Consistent roll diameter and core alignment",
      "Bulk supply capability for large-scale operations",
    ],
    materials: "BOPP base film with precision-coated acrylic or hot-melt adhesive layer",
    sizes: "Standard widths: 1270mm, 1280mm, 1620mm | Custom widths available",
    moq: "Based on tonnage requirement",
    industries: ["Packaging Manufacturers", "Tape Converters", "Industrial Units", "Manufacturing Plants", "Export Packaging Units"],
    bestFor: "Tape converters, raw material supply, industrial manufacturing",
  },
  {
    id: "stretch",
    name: "Stretch Film",
    image: productStretch,
    icon: Shield,
    desc: "High-clarity stretch film engineered for superior load containment and pallet wrapping applications. Our stretch films provide excellent cling, puncture resistance, and stretchability — safeguarding your goods during storage and transit across all distribution channels.",
    features: [
      "Excellent elongation and cling properties",
      "High puncture and tear resistance",
      "Crystal-clear transparency for easy identification",
      "Available in hand-wrap and machine-wrap grades",
      "Reduces packaging waste with optimal stretch ratio",
    ],
    materials: "Linear Low-Density Polyethylene (LLDPE) with multi-layer cast technology",
    sizes: "300mm to 500mm width | 15 to 23 micron thickness | 250m to 1500m length",
    moq: "50 rolls minimum",
    industries: ["Logistics & Warehousing", "FMCG Distribution", "Pharmaceutical Distribution", "Automobile Industry", "Agriculture Exporters", "Manufacturing Units", "E-commerce Fulfillment Centers"],
    bestFor: "Pallet wrapping, load containment, transit protection",
  },
  {
    id: "pp-straps",
    name: "PP (Polypropylene) Straps",
    image: productStraps,
    icon: Truck,
    desc: "Reliable polypropylene strapping solutions designed for light to medium-duty bundling and securing applications. Our PP straps offer a perfect balance of strength and flexibility, making them ideal for everyday carton bundling, courier packaging, and retail distribution needs.",
    features: [
      "Lightweight yet strong for everyday strapping",
      "Smooth surface for safe manual handling",
      "Available in multiple colors for product coding",
      "Compatible with manual and semi-automatic tools",
      "Cost-effective alternative for routine packaging needs",
    ],
    materials: "Virgin polypropylene resin with consistent tensile properties",
    sizes: "6mm to 19mm width | 0.4mm to 1.2mm thickness",
    moq: "100 kg minimum",
    industries: ["FMCG Packaging", "E-commerce", "Retail Distribution", "Courier & Logistics", "Carton Bundling Applications", "Agriculture Packaging"],
    bestFor: "Carton bundling, courier packaging, light-duty strapping",
  },
  {
    id: "pet-straps",
    name: "PET (Polyester) Straps",
    image: productIndustrial,
    icon: Factory,
    desc: "Heavy-duty PET strapping solutions built for high tensile strength applications in demanding industrial environments. Our PET straps deliver superior load retention and shock resistance, making them the preferred choice for securing heavy cargo, steel coils, timber, and export shipments.",
    features: [
      "High tensile strength comparable to steel strapping",
      "Excellent shock absorption and recovery",
      "Resistant to UV, moisture, and corrosion",
      "Lighter and safer than steel alternatives",
      "Recyclable and environmentally responsible",
    ],
    materials: "High-tenacity polyester resin with embossed or smooth surface finish",
    sizes: "9mm to 32mm width | 0.5mm to 1.27mm thickness",
    moq: "200 kg minimum",
    industries: ["Automobile Industry", "Steel & Metal Industry", "Heavy Manufacturing", "Brick & Cement Industry", "Textile Industry", "Export & Cargo Handling", "Industrial Machinery Manufacturers"],
    bestFor: "Heavy-duty securing, steel/metal bundling, export cargo",
  },
];

const applicationGuide = [
  { icon: Package, application: "Carton Sealing", recommended: "BOPP Tapes", desc: "Standard carton closure for shipping, storage, and distribution." },
  { icon: Award, application: "Brand Marketing", recommended: "Printed Tapes", desc: "Turn every package into a branding opportunity with custom logo tapes." },
  { icon: Layers, application: "Tape Manufacturing", recommended: "Jumbo Rolls", desc: "Raw material supply for tape converters and packaging manufacturers." },
  { icon: Shield, application: "Pallet Protection", recommended: "Stretch Film", desc: "Secure palletised goods for safe storage and long-distance transit." },
  { icon: Zap, application: "Light Bundling", recommended: "PP Straps", desc: "Everyday carton and courier bundling with easy manual handling." },
  { icon: BarChart3, application: "Heavy-Duty Securing", recommended: "PET Straps", desc: "Industrial-grade strapping for steel, cement, and heavy cargo." },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const anim = useScrollAnimation();
  const IconComp = product.icon;

  return (
    <div
      ref={anim.ref}
      className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
        anim.isVisible ? "animate-slide-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className="relative h-56 overflow-hidden group">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/30 to-transparent" />
        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm p-2 rounded-xl">
          <IconComp className="w-5 h-5 text-primary-foreground" />
        </div>
        <h3 className="absolute bottom-4 left-6 right-6 text-white text-xl font-bold leading-tight">{product.name}</h3>
      </div>

      <div className="p-6">
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">{product.desc}</p>

        <div className="bg-muted/50 rounded-lg px-3 py-2 mb-4">
          <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">Best for:</span> {product.bestFor}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.industries.slice(0, 4).map((ind) => (
            <span key={ind} className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{ind}</span>
          ))}
          {product.industries.length > 4 && (
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium">+{product.industries.length - 4} more</span>
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all"
        >
          {expanded ? "Show Less" : "View Full Details"} {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        <div className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-[700px] opacity-100 mt-5" : "max-h-0 opacity-0"}`}>
          <div className="space-y-5 border-t border-border pt-5">
            <div>
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Industries Served</p>
              <div className="flex flex-wrap gap-1.5">
                {product.industries.map((ind) => (
                  <span key={ind} className="text-[10px] px-2.5 py-1 rounded-full bg-secondary/10 text-secondary font-medium">{ind}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Key Features</p>
              <div className="space-y-1.5">
                {product.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="bg-muted/50 rounded-xl p-3">
                <p className="text-xs font-semibold text-foreground mb-1">Materials</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{product.materials}</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-3">
                <p className="text-xs font-semibold text-foreground mb-1">Available Sizes</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{product.sizes}</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-3">
                <p className="text-xs font-semibold text-foreground mb-1">Min. Order Quantity</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{product.moq}</p>
              </div>
            </div>

            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 transition-all">
              Request a Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const statsAnim = useScrollAnimation();
  const guideAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-accent py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full border border-primary/30 animate-[float_6s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-20 w-24 h-24 rounded-full border border-primary/20 animate-[float_8s_ease-in-out_infinite_1s]" />
        </div>
        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 animate-fade-in">Our Products</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 animate-slide-up">
            Industrial Packaging Solutions
          </h1>
          <p className="text-accent-foreground/60 text-lg max-w-2xl mx-auto animate-slide-up-delay-1">
            Precision-engineered adhesive tapes, stretch films, and strapping solutions — trusted by manufacturers, exporters, and distributors across India.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section ref={statsAnim.ref} className="bg-background border-b border-border">
        <div className={`max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border ${statsAnim.isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {[
            { value: "6", label: "Product Lines" },
            { value: "15+", label: "Industries Served" },
            { value: "100%", label: "Quality Tested" },
            { value: "Pan India", label: "Delivery Network" },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-8 px-4 hover:bg-muted/30 transition-colors duration-300">
              <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-muted-foreground text-xs mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-3">Explore Our Range</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Built for Performance, Engineered for Reliability</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">Each product is manufactured to exacting standards, ensuring consistent quality and dependable performance across all applications.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* Application Guide */}
      <section ref={guideAnim.ref} className="section-padding bg-accent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-3">Application Guide</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Find the Right Product for Your Need</h2>
            <p className="text-accent-foreground/50 mt-3 max-w-xl mx-auto text-sm">Not sure which product suits your application? Use this guide to identify the best packaging solution for your specific use case.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {applicationGuide.map((item, i) => (
              <div
                key={item.application}
                className={`border border-border/10 rounded-2xl p-6 hover:bg-white/5 transition-all duration-500 group ${
                  guideAnim.isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{item.application}</h4>
                    <p className="text-primary text-xs font-semibold">{item.recommended}</p>
                  </div>
                </div>
                <p className="text-accent-foreground/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-3">Quality & Compliance</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Non-Negotiable Quality Standards</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Every product undergoes rigorous multi-stage testing before dispatch. We maintain strict raw material sourcing standards and batch-wise quality verification to ensure consistent performance.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Adhesion Strength Testing",
              "Thickness & Tensile Testing",
              "Load-Bearing Verification",
              "Batch-Wise Inspection",
              "Export Compliance Checks",
            ].map((q, i) => (
              <div
                key={q}
                className="glass-card rounded-xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <CheckCircle className="w-7 h-7 text-primary mx-auto mb-3" />
                <p className="text-foreground text-xs font-medium leading-tight">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaAnim.ref} className="section-padding bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-secondary blur-3xl" />
        </div>
        <div className={`max-w-3xl mx-auto text-center relative z-10 ${ctaAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Custom Packaging Solution?</h2>
          <p className="text-accent-foreground/60 mb-8">
            Share your requirements and our team will provide a detailed quotation within 24 hours. We cater to bulk orders with competitive pricing and reliable delivery timelines.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 transition-all">
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;