import { motion } from "framer-motion";
import { Check, Tv, Wifi, Shield, Zap, Clock, ThumbsUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const features = [
    { icon: <Shield className="w-10 h-10 text-accent" />, title: "No Contracts", desc: "Freedom to switch anytime without penalties." },
    { icon: <Zap className="w-10 h-10 text-accent" />, title: "No Data Caps", desc: "Stream, game, and download as much as you want." },
    { icon: <Clock className="w-10 h-10 text-accent" />, title: "99.9% Uptime", desc: "Reliable connection you can count on 24/7." },
    { icon: <ThumbsUp className="w-10 h-10 text-accent" />, title: "Price Lock", desc: "Your price stays the same for 24 months." },
  ];

  const comparisonData = [
    { feature: "Fiber Connection", us: true, them: false },
    { feature: "Symmetrical Speeds", us: true, them: false },
    { feature: "No Data Caps", us: true, them: false },
    { feature: "No Contracts", us: true, them: false },
    { feature: "24/7 Local Support", us: true, them: true },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Abstract Background with Gradients */}
        <div className="absolute inset-0 bg-secondary overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          {/* Using an Unsplash image with overlay for texture */}
          {/* woman using tablet happy family living room */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://pixabay.com/get/gb574d4a153839708af842f7f7117034fcbd5a9db2a9d4bdf6ff45e28ec52bd617fa1d9f1d023200afddd73e52d25650a99936462835a1cdf5aa190a8d92ce036_1280.jpg')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-primary/40"></div>
        </div>

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-sm font-semibold tracking-wide uppercase">New Areas Live Now</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
              Internet Built for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
                Speed & Life
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 max-w-lg leading-relaxed">
              Experience the future of connectivity with ultra-fast fiber optic internet. No contracts, no hidden fees, just pure speed.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {["No Credit Check", "No Deposit", "Setup Fee"].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="font-medium">{badge}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                className="btn-accent text-lg px-8 py-4 shadow-orange-500/25"
              >
                Check Availability
              </button>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}
                className="px-8 py-4 rounded-lg font-semibold text-white border-2 border-white/20 hover:bg-white/10 transition-colors"
              >
                View Plans
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <ContactForm type="residential" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">Why Choose Blue Mogul?</h2>
            <p className="text-xl text-slate-600">
              We're not just another ISP. We're your neighbors, committed to bringing the best technology to our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-600">Everything you need, nothing you don't. Taxes and equipment included.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard 
              title="Basic" 
              price="79.99" 
              speed="500 Mbps"
              setupFee="99"
              features={[
                { text: "Unlimited Data", included: true },
                { text: "Wi-Fi Router Included", included: true },
                { text: "No Contract", included: true },
                { text: "HD Streaming", included: true },
                { text: "24/7 Support", included: true },
              ]}
            />
            <PricingCard 
              title="Pro" 
              price="99.99" 
              speed="700 Mbps"
              setupFee="249"
              isPopular={true}
              features={[
                { text: "Unlimited Data", included: true },
                { text: "Mesh WiFi System", included: true },
                { text: "No Contract", included: true },
                { text: "4K UHD Streaming", included: true },
                { text: "Priority Support", included: true },
              ]}
            />
            <PricingCard 
              title="Elite" 
              price="149.99" 
              speed="1 Gig"
              setupFee="349"
              features={[
                { text: "Unlimited Data", included: true },
                { text: "Wi-Fi 6 Mesh System", included: true },
                { text: "No Contract", included: true },
                { text: "8K Streaming & Gaming", included: true },
                { text: "Priority Support", included: true },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Bundle Section */}
      <section id="bundles" className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('/sling-tv-background.jpg')] bg-cover bg-center"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4">Blue Mogul + Sling TV</div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">Stream Live TV Your Way</h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Exclusive bundle pricing when you combine Blue Mogul Fiber with Sling TV. Cut the cord and keep the channels you love.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold uppercase tracking-wider text-accent mb-2">Entertainment Starter</h3>
              <div className="text-4xl font-extrabold mb-1">$109.99<span className="text-lg font-normal">/mo</span></div>
              <p className="text-slate-300 mb-6">500 Mbps + Sling Orange</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-accent" /> 30+ Live Channels</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-accent" /> ESPN, Disney, TNT</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-accent" /> 50 Hours Cloud DVR</li>
              </ul>
            </div>
            
            <div className="bg-accent/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-accent relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</div>
              <h3 className="text-xl font-bold uppercase tracking-wider text-accent mb-2">Sports Fan</h3>
              <div className="text-4xl font-extrabold mb-1">$129.99<span className="text-lg font-normal">/mo</span></div>
              <p className="text-slate-300 mb-6">700 Mbps + Sling Blue</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-accent" /> 40+ Live Channels</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-accent" /> NFL, FOX, NBC, USA</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-accent" /> Stream on 3 Devices</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold uppercase tracking-wider text-accent mb-2">Ultimate Combo</h3>
              <div className="text-4xl font-extrabold mb-1">$194.99<span className="text-lg font-normal">/mo</span></div>
              <p className="text-slate-300 mb-6">1 Gig + Sling Orange+Blue</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-accent" /> 50+ Live Channels</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-accent" /> All Sports & Entertainment</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-accent" /> 200 Hours Cloud DVR</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://www.sling.com/?agent_id=T_WILLIAMS&affiliate=35893292"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-secondary hover:bg-slate-100 font-bold px-8 py-4 rounded-lg shadow-lg transition-colors inline-flex items-center gap-2"
            >
              <Tv className="w-5 h-5" /> Get Sling TV
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">Us vs. Them</h2>
            <p className="text-xl text-slate-600">See clearly why Blue Mogul Fiber is the superior choice.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-6 px-6 text-left text-slate-500 font-medium">Features</th>
                  <th className="py-6 px-6 text-center w-1/4">
                    <span className="text-primary font-bold text-xl block">Blue Mogul</span>
                  </th>
                  <th className="py-6 px-6 text-center w-1/4">
                    <span className="text-slate-400 font-bold text-lg block">Cable Internet</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-700">{row.feature}</td>
                    <td className="py-4 px-6 text-center bg-blue-50/30">
                      {row.us ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full">
                          <Check className="w-5 h-5" />
                        </div>
                      ) : (
                         <div className="inline-block w-4 h-0.5 bg-slate-300"></div>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.them ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full">
                          <Check className="w-5 h-5" />
                        </div>
                      ) : (
                        <div className="inline-block w-4 h-0.5 bg-slate-300"></div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* About Us + Partners Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Shield className="w-4 h-4" /> Veteran-Owned &amp; Operated
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">About Blue Mogul</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Blue Mogul Enterprise, LLC is a 100% veteran-owned technology company headquartered in Houston, Texas. We're committed to delivering enterprise-grade fiber internet, voice solutions, and managed IT services to homes and businesses in our community.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { value: "99.9%", label: "Uptime SLA" },
              { value: "24/7", label: "Local Support" },
              { value: "10 Gbps", label: "Backbone Speed" },
              { value: "100%", label: "Fiber Network" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100">
                <div className="text-3xl font-extrabold text-primary mb-1">{value}</div>
                <div className="text-sm font-medium text-slate-500">{label}</div>
              </div>
            ))}
          </div>

          {/* Trusted Partners */}
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-secondary mb-2">Our Trusted Partners</h3>
            <p className="text-slate-500 text-sm">Powered by industry leaders to deliver the best experience</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Frontier Communications", desc: "Fiber Network Provider", color: "bg-red-50 border-red-100 text-red-700" },
              { name: "Yeastar", desc: "VoIP & PBX Solutions", color: "bg-blue-50 border-blue-100 text-blue-700" },
              { name: "Sling TV", desc: "Live TV Streaming", color: "bg-orange-50 border-orange-100 text-orange-700" },
              { name: "Vultr", desc: "Cloud Infrastructure", color: "bg-indigo-50 border-indigo-100 text-indigo-700" },
              { name: "Voip.ms", desc: "Voice Services", color: "bg-green-50 border-green-100 text-green-700" },
            ].map(({ name, desc, color }) => (
              <div key={name} className={`flex items-center gap-3 px-5 py-3.5 rounded-xl border ${color} shadow-sm`}>
                <div>
                  <div className="font-bold text-sm leading-tight">{name}</div>
                  <div className="text-xs opacity-70">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Contact Form (shown only on small screens) */}
      <section className="lg:hidden py-16 bg-slate-100">
        <div className="container-custom">
           <ContactForm type="residential" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
