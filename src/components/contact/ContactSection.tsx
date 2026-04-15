'use client';

import { useState, Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Globe 
} from 'lucide-react';
import { FiLinkedin } from 'react-icons/fi';
import CalendlyEmbed from './CalendlyEmbed';
import cvData from '@/content/cv.json';
import { hero } from '@/content/hero';

function ContactForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        message: `I am interested in: ${decodeURIComponent(serviceParam)}\n\n---\nTell me more about your organisation and what you are looking to achieve.`
      }));
    }
  }, [serviceParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(`Inquiry from ${formData.name}${formData.organisation ? ` (${formData.organisation})` : ''}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Organisation: ${formData.organisation || 'N/A'}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
      );
      
      // Open the user's default email client
      window.location.href = `mailto:johnbaru2002@gmail.com?subject=${subject}&body=${body}`;
      
      // Show success screen as confirmation that we've triggered the handoff
      setSubmitted(true);
    } catch (error) {
      console.error('Hand-off to email app failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/60 text-[10px] uppercase tracking-widest mb-1.5 block ml-1 font-semibold">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 transition-all duration-300 backdrop-blur-sm"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-white/60 text-[10px] uppercase tracking-widest mb-1.5 block ml-1 font-semibold">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 transition-all duration-300 backdrop-blur-sm"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="text-white/60 text-[10px] uppercase tracking-widest mb-1.5 block ml-1 font-semibold">Organisation</label>
                <input
                  type="text"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 transition-all duration-300 backdrop-blur-sm"
                  placeholder="Your Company Name"
                  value={formData.organisation}
                  onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                />
              </div>
              <div>
                <label className="text-white/60 text-[10px] uppercase tracking-widest mb-1.5 block ml-1 font-semibold">Inquiry Details</label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 transition-all duration-300 backdrop-blur-sm resize-none"
                  placeholder="How can John support your organisation?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group active:scale-[0.98] shadow-lg shadow-violet-900/20"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className={`w-4 h-4 transition-transform ${isSubmitting ? 'translate-x-1 -translate-y-1' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
              </button>
              <p className="text-[10px] text-white/30 text-center mt-4">
                Inquiries are sent directly to John's primary email. Responses typically within 24 hours.
              </p>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 px-6 bg-white/[0.03] rounded-2xl border border-white/10 backdrop-blur-md"
          >
            <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-violet-400" />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-white mb-3">Message Sent</h3>
            <p className="text-white/60 text-sm max-w-xs mx-auto leading-relaxed">
              Your message has been prepared! If your email app didn't open automatically, please send your inquiry to <span className="text-violet-400 font-semibold tracking-wide">johnbaru2002@gmail.com</span>.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-8 text-violet-400 text-xs font-semibold hover:text-violet-300 transition-colors uppercase tracking-widest"
            >
              Send another message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactSection() {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: cvData.contact.email,
      href: `mailto:${cvData.contact.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: cvData.contact.phone,
      href: `tel:${cvData.contact.phone.replace(/\s+/g, '')}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: cvData.contact.location,
    },
    {
      icon: Globe,
      label: 'Availability',
      value: hero.available,
    }
  ];

  return (
    <section className="bg-[#0a0a0b] pb-24 md:pb-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: CALENDLY & DESCRIPTION (Span 5) */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="bg-white/[0.06] border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              {/* Subtle top glow */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
              
              <span className="text-violet-400 text-[10px] uppercase tracking-[0.3em] mb-4 block font-bold">
                Direct Booking
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Schedule a Private Consultation
              </h2>
              <p className="text-white/60 text-xs md:text-sm mb-10 leading-relaxed max-w-md">
                Select a direct time slot across John's global calendar. All sessions are conducted securely via high-bandwidth remote environments.
              </p>
              
              <CalendlyEmbed />
            </div>
          </motion.div>

          {/* RIGHT: FORM & DETAILS (Span 7) */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col gap-10"
          >
            {/* FORM CARD */}
            <div className="bg-white/[0.06] border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl group shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
              <span className="text-violet-400 text-[10px] uppercase tracking-[0.3em] mb-4 block font-bold">
                Message Interface
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Prefer to Write First?
              </h2>
              <p className="text-white/60 text-xs md:text-sm mb-10 leading-relaxed max-w-md">
                For detailed project inquiries or specific advisory requests, use the direct message interface below.
              </p>

              <Suspense fallback={<div className="h-[400px] flex items-center justify-center text-white/20">Loading interface...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            {/* DETAILS & SOCIALS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
              <div className="space-y-6">
                <h3 className="font-playfair text-xl font-bold text-white mb-6 ml-1">Digital Reach</h3>
                <div className="grid grid-cols-1 gap-y-4">
                  {contactItems.map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-violet-500/20 group-hover:border-violet-500/40 transition-all duration-300">
                        <item.icon className="text-violet-400 w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-white/30 text-[9px] uppercase tracking-widest mb-0.5 font-bold">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a href={item.href} className="text-white/80 text-xs font-medium hover:text-violet-400 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white/80 text-xs font-medium">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end gap-6">
                <a 
                  href={cvData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-violet-500/30 rounded-2xl px-8 py-5 transition-all duration-300 group"
                >
                  <FiLinkedin className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform" />
                  <span className="text-white text-sm font-semibold tracking-wide">Connect on LinkedIn</span>
                </a>
                <p className="text-[10px] text-white/20 font-medium uppercase tracking-[0.2em] md:text-right px-2">
                  Established 2000 &bull; Global Operations
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
