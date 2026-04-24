import { motion } from "framer-motion";
import { Check, Building2, Server, BarChart, Headphones, ShieldCheck, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import ContactForm from "@/components/ContactForm";

export default function Business() {
  const businessFeatures = [
    { icon: <Server className="w-10 h-10 text-white" />, title: "Dedicated IP", desc: "Static IPs available for your servers and security systems." },
    { icon: <ShieldCheck className="w-10 h-10 text-white" />, title: "SLA Guarantee", desc: "Business-grade Service Level Agreements for peace of mind." },
    { icon: <Headphones className="w-10 h-10 text-white" />, title: "24/7 Priority Support", desc: "Direct access to our dedicated business support team." },
    { icon: <Globe className="w-10 h-10 text-white" />, title: "Scalable Bandwidth", desc: "Easily upgrade your speeds as your business grows." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Business Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-slate-900">
          {/* office modern meeting room glass walls */}
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full border border-accent/30 text-accent">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wide">Blue Mogul Business</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
              Power Your Business with <br/>
              <span className="text-accent">2 Gig Fiber</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-lg leading-relaxed">
              Don't let slow internet hold your business back. Get symmetrical gigabit speeds, 99.99% uptime, and dedicated support.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {["Symmetrical Upload/Download", "Dedicated Account Manager", "Service Level Agreements", "4 Hour Response Time"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-medium text-slate-200">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                className="btn-accent text-lg px-8 py-4 shadow-lg shadow-orange-500/20"
              >
                Get a Custom Quote
              </button>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="hidden lg:block bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl"
          >
             <div className="grid grid-cols-2 gap-4">
               {businessFeatures.map((f, i) => (
                 <div key={i} className="p-6 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors border border-white/5">
                   <div className="mb-4">{f.icon}</div>
                   <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                 </div>
               ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* Bandwidth Calculator Teaser */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-secondary to-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[128px] opacity-20"></div>
             
             <div className="relative z-10 max-w-3xl mx-auto space-y-8">
               <BarChart className="w-16 h-16 mx-auto text-accent" />
               <h2 className="text-3xl md:text-4xl font-bold text-white">One Speed. Maximum Power.</h2>
               <p className="text-xl text-slate-300">
                 We only offer 2 Gig symmetrical fiber because your business deserves the best. No complicated tiers, just blazing fast connectivity.
               </p>
               
               <div className="flex justify-center mt-12">
                  <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-accent/30 shadow-xl max-w-md">
                    <h3 className="font-bold text-xl mb-2 text-accent">2 Gig Symmetrical Fiber</h3>
                    <p className="text-sm text-slate-300 mb-4">Perfect for any business size - from small offices to large enterprises with hundreds of users.</p>
                    <div className="text-3xl font-bold">2000Mbps</div>
                    <p className="text-sm text-slate-400 mt-2">Upload & Download</p>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Business Pricing */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Business Fiber Plans</h2>
            <p className="text-xl text-slate-600">Enterprise-grade connectivity at competitive rates.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard 
              title="2 Gig Internet Only" 
              price="299.99" 
              speed="2 Gig"
              colorTheme="orange"
              features={[
                { text: "Symmetrical 2 Gig Speeds", included: true },
                { text: "Business Wi-Fi Router", included: true },
                { text: "Static IP Included", included: true },
                { text: "24/7 Priority Support", included: true },
                { text: "No Data Caps", included: true },
              ]}
            />
            <PricingCard 
              title="Complete Solution" 
              price="449.99" 
              speed="2 Gig"
              isPopular={true}
              colorTheme="orange"
              features={[
                { text: "Symmetrical 2 Gig Speeds", included: true },
                { text: "Business VoIP Phone System", included: true },
                { text: "Professional Email Hosting", included: true },
                { text: "250GB Private Cloud Storage", included: true },
                { text: "4-Hour SLA Response", included: true },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-secondary">Let's Discuss Your Needs</h2>
            <p className="text-lg text-slate-600 mb-8">
              Fill out the form to check availability for your business address. Our enterprise sales team will reach out within 24 hours to build a custom plan for you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Custom Infrastructure</h4>
                  <p className="text-slate-600">We can run dedicated fiber lines to your building if you aren't already on our grid.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Managed Security</h4>
                  <p className="text-slate-600">Optional firewall and threat detection services to keep your business data safe.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <ContactForm type="business" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
