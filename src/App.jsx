import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Menu, X, BookOpen, 
  FolderOpen, Search, 
  Laptop, Smartphone, ClipboardCheck
} from 'lucide-react';
import dashboardImg from './assets/dashboard.png';
import logoImg from './assets/logo.png';

const LOGIN_URL = import.meta.env.VITE_LOGIN_URL || 'https://centralis-988w.onrender.com/login';
const ANDROID_APP_URL = import.meta.env.VITE_ANDROID_APP_URL || '';
const DESKTOP_APP_URL = import.meta.env.VITE_DESKTOP_APP_URL || '';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: custom * 0.2, ease: [0.25, 0.1, 0.25, 1] }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const childVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="navbar-wrapper"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <nav className="navbar">
        <a href="#" className="nav-brand">
          <img src={logoImg} alt="Centralis Logo" className="nav-brand-logo" />
          <span>CENTRALIS</span>
        </a>
        
        <div className="nav-links">
          <a href="#overview" className="nav-link">Overview</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#download" className="nav-link">Download</a>
        </div>

        <div className="nav-actions">
          <a href={LOGIN_URL} className="nav-link" style={{ fontWeight: 500 }}>Sign In</a>
          <a href="#features" className="btn btn-primary">
            Explore Centralis <ArrowRight size={18} />
          </a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <motion.div 
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#overview" className="nav-link" onClick={() => setIsOpen(false)}>Overview</a>
          <a href="#features" className="nav-link" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#how-it-works" className="nav-link" onClick={() => setIsOpen(false)}>How It Works</a>
          <a href="#download" className="nav-link" onClick={() => setIsOpen(false)}>Download</a>
          <hr style={{ borderColor: 'var(--border-color)', margin: '8px 0' }} />
          <a href={LOGIN_URL} className="nav-link" style={{ fontWeight: 500 }} onClick={() => setIsOpen(false)}>Sign In</a>
          <a href="#features" className="btn btn-primary" style={{ justifyContent: 'center' }} onClick={() => setIsOpen(false)}>
            Explore Centralis
          </a>
        </motion.div>
      )}
    </motion.div>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <section id="overview" className="hero-section">
        <div className="container hero-grid">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="badge" variants={childVariant}>
              <div className="badge-indicator"></div>
              A centralized space for faculty resources
            </motion.div>
            <motion.h1 className="h1" variants={childVariant}>
              Your Faculty Resources, Organized in <span className="text-gradient">One Place.</span>
            </motion.h1>
            <motion.p className="text-lg" variants={childVariant}>
              Centralis helps faculty submit requirements, and enables admins to easily verify compliance while organizing academic resources in one secure platform.
            </motion.p>
            <motion.div className="hero-actions" variants={childVariant}>
              <a href="#features" className="btn btn-primary">
                Explore Features <ArrowRight size={18} />
              </a>
              <a href={LOGIN_URL} className="btn-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                Sign In <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ perspective: 1200 }}
          >
            <div className="hero-image-glow"></div>
            <motion.img 
              src={dashboardImg} 
              alt="Centralis Dashboard Preview" 
              className="hero-dashboard-img" 
              whileHover={{ 
                scale: 1.05, 
                rotateX: 2, 
                rotateY: -4, 
                boxShadow: "0 25px 50px -12px rgba(112, 43, 45, 0.4)" 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ cursor: "pointer" }}
            />
          </motion.div>
        </div>
      </section>

      <section id="features" className="section section-bg-white">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="h2">Everything your faculty resources need.</h2>
            <p className="text-lg" style={{ marginTop: '16px' }}>
              Built specifically for academic environments to streamline how you access and manage your materials.
            </p>
          </motion.div>

          <motion.div 
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { icon: FolderOpen, title: 'Centralized Documents', desc: 'Keep academic documents and relevant faculty files organized in one place for quick retrieval.' },
              { icon: BookOpen, title: 'Teaching Materials', desc: 'Access teaching references, lecture materials, and educational resources effortlessly.' },
              { icon: Search, title: 'Search & Discovery', desc: 'Help faculty locate materials instantly using the powerful built-in search functionality.' },
              { icon: ClipboardCheck, title: 'Requirement Verification', desc: 'Administrators can easily check and verify all requirements submitted by users in real-time.' }
            ].map((feature, i) => (
              <motion.div className="feature-card" key={i} variants={childVariant}>
                <div className="feature-icon-wrapper">
                  <feature.icon size={24} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className="section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="h2">How it works</h2>
            <p className="text-lg" style={{ marginTop: '16px' }}>
              A straightforward process designed to get you to your resources faster.
            </p>
          </motion.div>

          <motion.div 
            className="steps-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { num: 1, title: 'Admin Invitation', desc: 'Administrators initiate access by inviting users directly via their Gmail addresses.' },
              { num: 2, title: 'Accept & Register', desc: 'Users accept the email invitation and complete a setup form to gain system access.' },
              { num: 3, title: 'Submit Requirements', desc: 'Users securely submit their academic documents and required materials into the repository.' },
              { num: 4, title: 'Admin Verification', desc: 'Administrators can seamlessly review, track, and verify all submitted requirements.' }
            ].map((step, i) => (
              <motion.div className="step-card" key={i} variants={childVariant}>
                <div className="step-number">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="download" className="section section-bg-white">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="h2">Take Centralis Wherever You Work.</h2>
            <p className="text-lg" style={{ marginTop: '16px' }}>
              Future desktop and mobile versions of Centralis can make faculty resources more accessible across devices.
            </p>
          </motion.div>

          <motion.div 
            className="downloads-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="download-card" variants={childVariant}>
              <Smartphone className="download-icon" />
              <div>
                <h3 className="step-title">Centralis for Android</h3>
                <p className="step-desc" style={{ marginBottom: '24px' }}>Access faculty resources on compatible Android devices.</p>
              </div>
              <button className="btn btn-primary w-full" disabled={!ANDROID_APP_URL} style={{ width: '100%' }}>
                {ANDROID_APP_URL ? 'Download APK' : 'Coming Soon'}
              </button>
            </motion.div>
            
            <motion.div className="download-card" variants={childVariant}>
              <Laptop className="download-icon" />
              <div>
                <h3 className="step-title">Centralis for Desktop</h3>
                <p className="step-desc" style={{ marginBottom: '24px' }}>A dedicated desktop experience for faculty resources.</p>
              </div>
              <button className="btn btn-primary w-full" disabled={!DESKTOP_APP_URL} style={{ width: '100%' }}>
                {DESKTOP_APP_URL ? 'Download Installer' : 'Coming Soon'}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="h2">A Better Way to Organize Faculty Resources</h2>
            <p className="text-lg" style={{ marginTop: '16px', maxWidth: '800px', marginInline: 'auto' }}>
              Centralis goes beyond a standard repository—it provides a centralized platform for faculty to submit academic documents while allowing administrators to easily check, track, and verify user requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container">
        <motion.section 
          className="cta-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeUp}
        >
          <h2 className="h2" style={{ color: 'var(--white)' }}>Ready to access your faculty resources?</h2>
          <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Sign in to Centralis to continue to your existing Faculty Repository System.
          </p>
          <a href={LOGIN_URL} className="btn btn-white">
            Sign In to Centralis <ArrowRight size={18} />
          </a>
        </motion.section>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={logoImg} alt="Centralis Logo" className="nav-brand-logo" />
                <span>CENTRALIS</span>
              </div>
              <p className="footer-desc">
                Faculty Repository System for organizing, managing, and accessing academic materials.
              </p>
            </div>
            <div>
              <h4 className="footer-title">Navigation</h4>
              <div className="footer-links">
                <a href="#overview" className="footer-link">Overview</a>
                <a href="#features" className="footer-link">Features</a>
                <a href="#how-it-works" className="footer-link">How It Works</a>
                <a href="#download" className="footer-link">Download</a>
              </div>
            </div>
            <div>
              <h4 className="footer-title">System</h4>
              <div className="footer-links">
                <a href={LOGIN_URL} className="footer-link">Sign In</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Centralis Faculty Repository System.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
