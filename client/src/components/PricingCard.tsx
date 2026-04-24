import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  speed: string;
  price: string;
  setupFee?: string;
  features: PricingFeature[];
  isPopular?: boolean;
  onSelect?: () => void;
  colorTheme?: "blue" | "orange";
}

export default function PricingCard({ 
  title, 
  speed, 
  price,
  setupFee,
  features, 
  isPopular = false,
  onSelect,
  colorTheme = "blue"
}: PricingCardProps) {
  const themeClasses = {
    blue: {
      border: "border-primary",
      bg: "bg-secondary",
      text: "text-primary",
      button: "bg-primary hover:bg-secondary",
      badge: "bg-primary",
    },
    orange: {
      border: "border-accent",
      bg: "bg-orange-600",
      text: "text-accent",
      button: "bg-accent hover:bg-orange-600",
      badge: "bg-accent",
    }
  };

  const theme = themeClasses[colorTheme];

  const handleSelect = () => {
    onSelect?.();
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 flex flex-col h-full ${isPopular ? theme.border : "border-transparent"}`}
    >
      {isPopular && (
        <div className={`absolute top-0 right-0 ${theme.badge} text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide`}>
          Most Popular
        </div>
      )}

      <div className={`p-6 ${isPopular ? theme.bg : "bg-slate-50"} ${isPopular ? "text-white" : "text-slate-900"}`}>
        <h3 className="text-xl font-bold uppercase tracking-wider opacity-80">{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-extrabold tracking-tight">$</span>
          <span className="text-6xl font-extrabold tracking-tight">{price}</span>
          <span className="ml-1 text-xl font-medium opacity-80">/mo</span>
        </div>
        <div className="mt-2 text-2xl font-bold">
          {speed} <span className="text-sm font-normal opacity-80">Download/Upload</span>
        </div>
        {setupFee && (
          <div className="mt-2 text-sm opacity-80">
            + ${setupFee} one-time setup
          </div>
        )}
      </div>

      <div className="flex-1 p-6 bg-white">
        <ul className="space-y-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${feature.included ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-300"}`}>
                <Check className="w-4 h-4" />
              </div>
              <span className={`ml-3 text-sm ${feature.included ? "text-slate-700" : "text-slate-400 decoration-slate-300 line-through"}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 bg-slate-50 mt-auto">
        <Button 
          onClick={handleSelect}
          className={`w-full py-6 text-lg font-bold shadow-md ${isPopular ? theme.button + " text-white" : "bg-white text-slate-700 border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50"}`}
        >
          Choose Plan
        </Button>
      </div>
    </motion.div>
  );
}
