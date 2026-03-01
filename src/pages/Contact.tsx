import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, ChevronDown, ChevronUp, HelpCircle, Shield, Truck, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  { q: "What is the minimum order quantity?", a: "Minimum order quantities vary by product — typically 100 rolls for BOPP tapes, 50 rolls for stretch film, and 100 kg for strapping solutions. Contact us for specific requirements." },
  { q: "Do you offer custom printing on tapes?", a: "Yes, we offer custom logo and text printing on BOPP tapes. Share your design and quantity requirements, and our team will provide a detailed quotation." },
  { q: "What areas do you deliver to?", a: "We deliver across India with a strong logistics network. We also support international export with FOB and CIF shipping options." },
  { q: "How long does delivery take?", a: "Standard orders are dispatched within 5–10 business days. Custom print orders may take 12–14 business days depending on design approval and quantity." },
  { q: "Do you provide product samples?", a: "Yes, we can provide product samples for evaluation before placing bulk orders. Contact our sales team to request samples." },
  { q: "What payment terms do you offer?", a: "We offer flexible payment terms including advance payment, credit terms for regular clients, and LC-based payments for international orders." },
];

const Contact = () => {
  const { toast } = useToast();
  const form = useScrollAnimation();
  const info = useScrollAnimation();
  const faqAnim = useScrollAnimation();
  const trustAnim = useScrollAnimation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [quoteForm, setQuoteForm] = useState({ name: "", company: "", country: "", product: "", quantity: "", message: "" });

const handleContact = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/send-inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactForm),
    });

    if (res.ok) {
      toast({
        title: "Inquiry Sent Successfully!",
        description: "We will contact you within 24 hours.",
      });

      setContactForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      toast({
        title: "Failed to Send",
        description: "Please try again.",
      });
    }
  } catch (error) {
    toast({
      title: "Server Error",
      description: "Backend is not running.",
    });
  }
};

const handleQuote = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/request-quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: quoteForm.name,
        company: quoteForm.company,
        country: quoteForm.country,
        product: quoteForm.product,
        quantity: quoteForm.quantity,
        requirements: quoteForm.message,
      }),
    });

    if (res.ok) {
      toast({
        title: "Quote Request Sent!",
        description: "Our team will contact you soon.",
      });

      setQuoteForm({
        name: "",
        company: "",
        country: "",
        product: "",
        quantity: "",
        message: "",
      });
    } else {
      toast({
        title: "Failed to Send",
        description: "Please try again.",
      });
    }
  } catch (error) {
    toast({
      title: "Server Error",
      description: "Backend is not running.",
    });
  }
};

  const inputClass = "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all";

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-accent py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-32 h-32 rounded-full border border-primary/30 animate-[float_6s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full border border-primary/20 animate-[float_8s_ease-in-out_infinite_1s]" />
        </div>
        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4 animate-fade-in">Contact Us</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-up">Get In Touch</h1>
          <p className="text-accent-foreground/60 text-lg max-w-2xl mx-auto animate-slide-up-delay-1">
            Ready to discuss your packaging needs? Reach out for inquiries, quotes, or partnerships.
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <section ref={trustAnim.ref} className="bg-background border-b border-border">
        <div className={`max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border ${trustAnim.isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {[
            { icon: Clock, label: "Response Within 24 Hours" },
            { icon: Shield, label: "Quality Guaranteed" },
            { icon: Truck, label: "Pan-India Delivery" },
            { icon: Package, label: "Free Sample Available" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2.5 py-5 px-3 hover:bg-muted/30 transition-colors duration-300">
              <item.icon size={18} className="text-primary shrink-0" />
              <p className="text-foreground text-xs font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div ref={info.ref} className={`lg:col-span-2 ${info.isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
            <div className="space-y-6">
              {[
                { 
                  icon: MapPin, 
                  title: "Office Address", 
                  value: "Block No. 250, Shade No. 30, Shivam Estate, Chhatral GIDC, Chhatral, Gandhinagar, Gujarat - 382729", 
                  href: "https://www.google.com/maps/search/?api=1&query=Shivam+Industrial+Estate+Chhatral+Gujarat+India"
                },                { icon: Phone, title: "Phone", value: "+91 9830427374", href: "tel:+919830427374" },
                { icon: Mail, title: "Email", value: "vrajpack01@gmail.com", href: "mailto:vrajpack01@gmail.com" },
                { icon: Clock, title: "Business Hours", value: "Mon – Sat: 9:00 AM – 7:00 PM", href: undefined },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-sm">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden border border-border h-48">
<a
  href="https://www.google.com/maps/search/?api=1&query=Shivam+Industrial+Estate+Chhatral+Gujarat+India"
  target="_blank"
  rel="noopener noreferrer"
  className="block rounded-xl overflow-hidden border border-border/20 hover:scale-[1.01] transition-transform duration-300"
>
  <iframe
    src="https://www.google.com/maps?q=Shivam+Industrial+Estate+Chhatral+Gujarat+India&output=embed"
    width="100%"
    height="320"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
  />
</a>
            </div>
          </div>

          {/* Forms */}
          <div ref={form.ref} className={`lg:col-span-3 space-y-8 ${form.isVisible ? "animate-slide-left" : "opacity-0"}`}>
            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Send an Inquiry</h3>
              <form onSubmit={handleContact} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name *" required value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className={inputClass} />
                  <input type="email" placeholder="Email Address *" required value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className={inputClass} />
                </div>
                <input type="tel" placeholder="Phone Number" value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} className={inputClass} />
                <textarea placeholder="Your Message *" required rows={4} value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} className={inputClass} />
                <button type="submit" className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:brightness-110 transition-all hover:shadow-lg hover:shadow-primary/25">
                  <Send size={16} /> Send Inquiry
                </button>
              </form>
            </div>

            {/* Quote Form */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Request a Quote</h3>
              <form onSubmit={handleQuote} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name *" required value={quoteForm.name} onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })} className={inputClass} />
                  <input type="text" placeholder="Company Name" value={quoteForm.company} onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })} className={inputClass} />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Country" value={quoteForm.country} onChange={(e) => setQuoteForm({ ...quoteForm, country: e.target.value })} className={inputClass} />
                  <select value={quoteForm.product} onChange={(e) => setQuoteForm({ ...quoteForm, product: e.target.value })} className={inputClass}>
                    <option value="">Select Product *</option>
                    <option>BOPP Carton Sealing Tapes</option>
                    <option>Printed & Advertising Tapes</option>
                    <option>Coated Jumbo Rolls</option>
                    <option>Stretch Film</option>
                    <option>PP Straps</option>
                    <option>PET Straps</option>
                    <option>Custom Packaging</option>
                  </select>
                </div>
                <input type="text" placeholder="Estimated Quantity" value={quoteForm.quantity} onChange={(e) => setQuoteForm({ ...quoteForm, quantity: e.target.value })} className={inputClass} />
                <textarea placeholder="Additional Requirements" rows={3} value={quoteForm.message} onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })} className={inputClass} />
                <button type="submit" className="flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:brightness-110 transition-all">
                  <ArrowRight size={16} /> Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqAnim.ref} className="section-padding bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-3 text-sm">Find answers to common queries about our products, ordering, and delivery.</p>
          </div>
          <div className={`space-y-3 ${faqAnim.isVisible ? "animate-slide-up" : "opacity-0"}`}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-primary shrink-0" />
                    <span className="text-foreground font-medium text-sm">{faq.q}</span>
                  </div>
                  {openFaq === i ? <ChevronUp size={18} className="text-primary shrink-0" /> : <ChevronDown size={18} className="text-muted-foreground shrink-0" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed pl-12">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
