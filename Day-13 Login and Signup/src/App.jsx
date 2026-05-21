import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Lucide UI Icons (ONLY valid ones)
import {
  Menu,
  X,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  DollarSign,
  Users,
  Headset,
  Map,
  Search,
  Square,
} from "lucide-react";

// ✅ React Icons (Brand Icons)
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// ── Replace with your own images or Unsplash URLs ──
const heroBg =
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600";
const aboutInterior =
  "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800";
const property1 =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600";
const property2 =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600";
const property3 =
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600";
const property4 =
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600";
const avatar1 = "https://i.pravatar.cc/150?img=12";
const avatar2 = "https://i.pravatar.cc/150?img=47";
const avatar3 = "https://i.pravatar.cc/150?img=68";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  propertyType: z.string().min(1, "Please select a property type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().optional(),
});

const properties = [
  {
    id: 1,
    type: "Luxury",
    image: property1,
    title: "Modern Glass Villa",
    location: "Beverly Hills, CA",
    price: "$12,500,000",
    desc: "A stunning architectural masterpiece with sweeping city views and infinity pool.",
  },
  {
    id: 2,
    type: "Buy",
    image: property2,
    title: "Downtown Penthouse",
    location: "Manhattan, NY",
    price: "$8,200,000",
    desc: "Sleek and sophisticated living in the clouds with panoramic skyline views.",
  },
  {
    id: 3,
    type: "Buy",
    image: property3,
    title: "Coastal Estate",
    location: "Malibu, CA",
    price: "$18,900,000",
    desc: "Private beach access and Mediterranean design make this estate unforgettable.",
  },
  {
    id: 4,
    type: "Rent",
    image: property4,
    title: "Architectural Retreat",
    location: "Aspen, CO",
    price: "$35,000/mo",
    desc: "Minimalist concrete and wood home nestled perfectly within nature.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "James Harrington",
    role: "CEO, TechCorp",
    image: avatar1,
    text: "Prestige Estates redefined what I thought was possible in real estate. The level of service and the properties they curate are truly exceptional.",
  },
  {
    id: 2,
    name: "Eleanor Vance",
    role: "Art Director",
    image: avatar2,
    text: "A deeply curated selection of homes. I felt understood from day one. My penthouse is an architectural dream realized.",
  },
  {
    id: 3,
    name: "Robert Sterling",
    role: "Investor",
    image: avatar3,
    text: "Unmatched market knowledge and a perfectly streamlined process. They handle luxury with the discretion and elegance it requires.",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    desc: "Every property is rigorously vetted for quality and legal standing.",
  },
  {
    icon: DollarSign,
    title: "Best Market Prices",
    desc: "Our exclusive network guarantees unmatched value.",
  },
  {
    icon: Users,
    title: "Trusted Agents",
    desc: "Work with elite professionals who know the luxury market inside out.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    desc: "Around-the-clock concierge service for our esteemed clients.",
  },
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [filter, setFilter] = useState("All");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookingSchema),
  });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setTestimonialIndex((p) => (p + 1) % testimonials.length),
      4000,
    );
    return () => clearInterval(t);
  }, []);

  const onSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const filtered =
    filter === "All" ? properties : properties.filter((p) => p.type === filter);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="app-root">
      {/* Background blobs */}
      <div className="blobs-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
      </div>

      {/* ── NAVBAR ── */}
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="container navbar-inner">
          <a
            href="#"
            className={`logo ${isScrolled ? "logo-dark" : "logo-light"}`}
          >
            {/* <Square size={16} className="logo-icon" /> */}
            Prestige <em>Estates</em>
          </a>

          <div className="nav-links">
            {["Home", "About", "Properties", "Booking", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link ${isScrolled ? "nav-link-dark" : "nav-link-light"}`}
                >
                  {item}
                  <span className="nav-underline" />
                </a>
              ),
            )}
          </div>

          <div className="nav-right">
            <a
              href="#booking"
              className={`schedule-btn ${isScrolled ? "schedule-btn-dark" : "schedule-btn-light"}`}
            >
              Schedule Tour
            </a>
            <button
              className={`menu-btn ${isScrolled ? "menu-btn-dark" : "menu-btn-light"}`}
              onClick={() => setIsMobileMenuOpen((o) => !o)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
          >
            {["Home", "About", "Properties", "Booking", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mobile-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ── */}
      <section id="home" className="hero">
        <div className="hero-bg">
          <img src={heroBg} alt="Luxury home" />
          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="hero-inner"
          >
            <motion.div variants={fadeUp} className="hero-badges">
              {["1,200+ Properties", "18 Years Exp", "Top 1% Agents"].map(
                (b) => (
                  <span key={b} className="hero-badge">
                    <span className="badge-dot" />
                    {b}
                  </span>
                ),
              )}
            </motion.div>

            <motion.h1 variants={fadeUp} className="hero-title">
              Find Your Dream <br />
              <em>Property Today</em>
            </motion.h1>

            <motion.p variants={fadeUp} className="hero-sub">
              Curating the world's most exquisite homes for those who demand
              nothing less than absolute perfection.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-ctas">
              <a href="#properties" className="btn-primary">
                Explore Properties <ArrowRight size={18} />
              </a>
              <a href="#booking" className="btn-outline-white">
                Book a Private Visit
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="hero-search">
              <div className="search-field">
                <p className="sf-label">Location</p>
                <p className="sf-val">New York, NY</p>
              </div>
              <div className="search-divider" />
              <div className="search-field">
                <p className="sf-label">Property Type</p>
                <p className="sf-val">Penthouse</p>
              </div>
              <div className="search-divider" />
              <div className="search-field">
                <p className="sf-label">Budget</p>
                <p className="sf-val">$5M – $10M</p>
              </div>
              <button className="search-btn">
                <Search size={20} />
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="scroll-label">Scroll</span>
          <motion.div
            className="scroll-line"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section bg-white">
        <div className="container about-grid">
          <motion.div
            className="about-img-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <img
              src={aboutInterior}
              alt="Elegant Interior"
              className="about-img"
            />
            <div className="about-badge">
              <span className="about-badge-num">18+</span>
              <span className="about-badge-text">
                Years of
                <br />
                Excellence
              </span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div className="about-text-block">
              <motion.h2 variants={fadeUp} className="section-title">
                A Legacy of <em className="text-gold">Luxury</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="body-text">
                Prestige Estates was founded on a simple principle:
                extraordinary people deserve extraordinary spaces. For nearly
                two decades, we have been the silent architects behind the
                world's most significant real estate acquisitions.
                <br />
                <br />
                Our approach is deeply personal, rooted in discretion, and
                elevated by an unmatched understanding of architectural
                significance.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="stats-grid">
              {[
                ["1,200+", "Properties Sold"],
                ["840", "Happy Clients"],
                ["18", "Years Exp."],
              ].map(([n, l]) => (
                <div key={l} className="stat-card">
                  <h4 className="stat-num">{n}</h4>
                  <p className="stat-label">{l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PROPERTIES ── */}
      <section id="properties" className="section bg-gray">
        <div className="container">
          <div className="props-header">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="section-title">
                Curated <em className="text-gold">Collection</em>
              </h2>
              <p className="body-text">
                Discover our portfolio of exceptional properties.
              </p>
            </motion.div>

            <motion.div
              className="filter-bar"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {["All", "Buy", "Rent", "Luxury"].map((btn) => (
                <button
                  key={btn}
                  onClick={() => setFilter(btn)}
                  className={`filter-btn ${filter === btn ? "filter-active" : ""}`}
                >
                  {btn}
                </button>
              ))}
            </motion.div>
          </div>

          <motion.div layout className="props-grid">
            <AnimatePresence>
              {filtered.map((prop) => (
                <motion.div
                  key={prop.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="prop-card"
                >
                  <div className="prop-img-wrap">
                    <img
                      src={prop.image}
                      alt={prop.title}
                      className="prop-img"
                    />
                    <span className="prop-type-badge">{prop.type}</span>
                  </div>
                  <div className="prop-body">
                    <span className="prop-price">{prop.price}</span>
                    <h3 className="prop-title">{prop.title}</h3>
                    <p className="prop-location">
                      <MapPin size={12} /> {prop.location}
                    </p>
                    <p className="prop-desc">{prop.desc}</p>
                    <button className="btn-view">View Details</button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Why <em className="text-gold">Prestige</em>
            </h2>
            <p className="body-text mx-auto" style={{ maxWidth: 480 }}>
              The prestige difference lies in our uncompromising standards.
            </p>
          </div>

          <motion.div
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`feature-card ${i === 0 ? "feature-card-wide" : ""}`}
                >
                  <span className="feature-num">0{i + 1}</span>
                  <div className="feature-icon-wrap">
                    <Icon size={24} className="icon-gold" />
                  </div>
                  <h4 className="feature-title">{f.title}</h4>
                  <p className="feature-desc">{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section id="booking" className="section bg-gray">
        <div className="container">
          <div className="booking-card">
            <div className="booking-progress">
              <div className="booking-progress-bar" />
            </div>

            <div className="text-center mb-12">
              <h2 className="section-title">
                Request a <em className="text-gold">Viewing</em>
              </h2>
              <p className="body-text">
                Our concierge team will arrange a private tour.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                className="success-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="success-icon-wrap">
                  <CheckCircle size={40} className="icon-gold" />
                </div>
                <h3 className="success-title">Request Received</h3>
                <p className="body-text">
                  Our concierge will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      {...register("fullName")}
                      className="form-input"
                      placeholder="John Doe"
                    />
                    {errors.fullName && (
                      <p className="form-error">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      {...register("email")}
                      className="form-input"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="form-error">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="form-row-3">
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input
                      {...register("phone")}
                      className="form-input"
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && (
                      <p className="form-error">{errors.phone.message}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Property Type</label>
                    <select
                      {...register("propertyType")}
                      className="form-input"
                    >
                      <option value="">Select Type</option>
                      {["Apartment", "Villa", "Penthouse", "Commercial"].map(
                        (o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ),
                      )}
                    </select>
                    {errors.propertyType && (
                      <p className="form-error">
                        {errors.propertyType.message}
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Budget Range</label>
                    <select {...register("budget")} className="form-input">
                      <option value="">Select Budget</option>
                      {["$1M - $5M", "$5M - $10M", "$10M+"].map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="form-error">{errors.budget.message}</p>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Additional Requests</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="form-input form-textarea"
                    placeholder="Tell us about your requirements…"
                  />
                </div>

                <button type="submit" className="btn-submit">
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="testi-wrap">
            <motion.div
              key={testimonialIndex}
              className="testi-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <span className="testi-quote">"</span>
              <div className="testi-inner">
                <div className="testi-avatar-col">
                  <img
                    src={testimonials[testimonialIndex].image}
                    alt={testimonials[testimonialIndex].name}
                    className="testi-avatar"
                  />
                  <h5 className="testi-name">
                    {testimonials[testimonialIndex].name}
                  </h5>
                  <p className="testi-role">
                    {testimonials[testimonialIndex].role}
                  </p>
                </div>
                <div className="testi-body">
                  <div className="testi-stars">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} className="star-icon" />
                    ))}
                  </div>
                  <p className="testi-text">
                    "{testimonials[testimonialIndex].text}"
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="testi-nav">
              <div className="testi-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    className={`testi-dot ${i === testimonialIndex ? "testi-dot-active" : ""}`}
                  />
                ))}
              </div>
              <div className="testi-arrows">
                <button
                  className="arrow-btn"
                  onClick={() =>
                    setTestimonialIndex(
                      (p) =>
                        (p - 1 + testimonials.length) % testimonials.length,
                    )
                  }
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  className="arrow-btn"
                  onClick={() =>
                    setTestimonialIndex((p) => (p + 1) % testimonials.length)
                  }
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section bg-gray">
        <div className="container contact-grid">
          <div className="contact-form-card">
            <h2 className="section-title">
              Get in <em className="text-gold">Touch</em>
            </h2>
            <p className="body-text mb-10">
              Our advisory team is at your disposal.
            </p>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name" className="contact-input" />
              <input
                type="email"
                placeholder="Email"
                className="contact-input"
              />
              <textarea
                rows={3}
                placeholder="Message"
                className="contact-input contact-textarea"
              />
              <button className="btn-primary">
                Send Message <ArrowRight size={14} />
              </button>
            </form>
          </div>

          <div className="contact-info-card">
            {[
              [
                MapPin,
                "Headquarters",
                "1234 Madison Avenue, Penthouse Suite, New York, NY 10028",
              ],
              [Phone, "Direct Line", "+1 (212) 555-0198"],
              [Mail, "Email", "advisory@prestigeestates.com"],
            ].map(([Icon, title, val]) => (
              <div key={title} className="contact-detail">
                <div className="contact-icon-wrap">
                  <Icon size={20} className="icon-gold" />
                </div>
                <div>
                  <h4 className="contact-detail-title">{title}</h4>
                  <p className="contact-detail-val">{val}</p>
                </div>
              </div>
            ))}
            <div className="map-placeholder">
              <Map size={20} className="map-icon" />
              <span className="map-label">Interactive Map</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-divider" />
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo logo-dark">
              <Square size={14} className="logo-icon" /> Prestige{" "}
              <em>Estates</em>
            </a>
            <p className="footer-desc">
              Curating the world's most exquisite homes. Excellence is our
              minimum standard.
            </p>
            <div className="social-row">
              {[
                [FaFacebook, "fb"],
                [FaTwitter, "tw"],
                [FaInstagram, "ig"],
                [FaLinkedin, "li"],
              ].map(([Icon, k]) => (
                <a key={k} href="#" className="social-icon">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {[
                "Home",
                "About Us",
                "Properties",
                "Concierge Services",
                "Journal",
                "Contact",
              ].map((l) => (
                <li key={l}>
                  <a href="#" className="footer-link">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Legal</h4>
            <ul className="footer-links">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Accessibility",
              ].map((l) => (
                <li key={l}>
                  <a href="#" className="footer-link">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Prestige Estates. All rights
            reserved.
          </p>
          <p>
            Designed with <em className="text-gold">intention</em>.
          </p>
        </div>
      </footer>
    </div>
  );
}
