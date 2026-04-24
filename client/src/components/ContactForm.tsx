import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useCheckAvailability } from "@/hooks/useCheckAvailability";

interface ContactFormProps {
  type?: "residential" | "business";
}

export default function ContactForm({ type: _ = "residential" }: ContactFormProps) {
  const { status, message, pon, checkAvailability, reset } = useCheckAvailability();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await checkAvailability(formData);
  }

  const header = (
    <div className="bg-gradient-to-r from-secondary to-primary p-6 text-center text-white">
      <h3 className="text-2xl font-bold mb-1 text-white">Check Availability</h3>
      <p className="text-sm opacity-80">Ready for faster internet? Let's get you connected.</p>
    </div>
  );

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden" id="contact">
        {header}
        <div className="p-6 text-center" data-testid="success-message">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-green-600 mb-2">Great News!</h3>
          <p className="text-slate-600 text-sm mb-1">{message}</p>
          {pon && (
            <p className="text-slate-400 text-xs mb-4">Reference #: <span className="font-semibold">{pon}</span></p>
          )}
          <p className="text-slate-500 text-xs mb-5">
            Questions? Call us at{" "}
            <a href="tel:3463095514" className="text-primary font-semibold hover:underline">(346) 309-5514</a>
          </p>
          <Button
            className="bg-accent hover:bg-orange-600 text-white"
            onClick={() => { reset(); setFormData({ name: "", phone: "", email: "", address: "" }); }}
            data-testid="button-new-request"
          >
            Check Another Address
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden" id="contact">
      {header}

      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4" id="availabilityForm">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-xs font-semibold text-slate-600">Full Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-10 bg-slate-50 text-sm"
                data-testid="input-fullname"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="phone" className="text-xs font-semibold text-slate-600">Phone Number</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(555) 123-4567"
                required
                value={formData.phone}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  if (value.length > 0) {
                    if (value.length <= 3) value = `(${value}`;
                    else if (value.length <= 6) value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
                    else value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
                  }
                  setFormData({ ...formData, phone: value });
                }}
                className="h-10 bg-slate-50 text-sm"
                data-testid="input-phone"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="email" className="text-xs font-semibold text-slate-600">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-10 bg-slate-50 text-sm"
              data-testid="input-email"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="address" className="text-xs font-semibold text-slate-600">Service Address</Label>
            <Input
              type="text"
              id="address"
              name="address"
              placeholder="123 Main St, Houston, TX 77001"
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="h-10 bg-slate-50 text-sm"
              data-testid="input-address"
            />
          </div>

          {status === "error" && (
            <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg" data-testid="error-message">
              <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              <p className="text-xs text-red-700">{message}</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full h-11 text-base bg-accent hover:bg-orange-600 text-white font-bold shadow-md"
            disabled={status === "loading"}
            data-testid="button-submit"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Checking...
              </>
            ) : (
              <>
                Check Availability <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <p className="text-xs text-center text-slate-400">
            By submitting this form, you agree to receive calls or texts from Blue Mogul Fiber.
          </p>
        </form>
      </div>
    </div>
  );
}
