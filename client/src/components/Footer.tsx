import { Wifi, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
              <Wifi className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white leading-none">BLUE MOGUL</span>
              <span className="text-xs font-medium text-accent tracking-widest">FIBER</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Delivering the fastest, most reliable fiber internet directly to your home and business. Experience the difference of true fiber optic connectivity.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-accent transition-colors">Residential Plans</Link></li>
            <li><Link href="/business" className="hover:text-accent transition-colors">Business Solutions</Link></li>
            <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Check Availability</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent mt-0.5" />
              <span>801 Travis St<br />Houston, TX 77002</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent" />
              <a href="tel:3463095514" className="hover:text-accent transition-colors">(346) 309-5514</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent" />
              <a href="mailto:support@bluemogul.biz" className="hover:text-accent transition-colors">support@bluemogul.biz</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/BlueMogul/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white" data-testid="link-facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/bluemogul" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white" data-testid="link-linkedin">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/getbluemogul" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white" data-testid="link-instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <div className="mt-8">
            <p className="text-sm font-semibold text-white mb-2">Subscribe to our newsletter</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="bg-slate-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-accent" />
              <button className="bg-accent hover:bg-orange-600 text-white px-4 py-2 rounded-r-md transition-colors">Go</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>&copy; 2026 <a href="https://bluemogul.biz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Blue Mogul Enterprise, LLC</a>. All rights reserved. | Veteran-Owned | Houston, Texas.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
