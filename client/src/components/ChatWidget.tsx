import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Wifi, ChevronDown } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  text: string;
}

const SESSION_ID = `web-${Math.random().toString(36).slice(2, 10)}`;

const GREETING: Message = {
  id: 0,
  role: "assistant",
  text: "Hi! I'm the Blue Mogul virtual assistant. Ask me anything about our fiber internet plans, availability, pricing, or how to get started. How can I help you today?",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { id: nextId.current++, role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionId: SESSION_ID }),
      });
      const data = await res.json();
      const reply = data.reply || data.error || "Sorry, I couldn't get a response right now.";
      const botMsg: Message = { id: nextId.current++, role: "assistant", text: reply };
      setMessages((prev) => [...prev, botMsg]);
      if (!open) setUnread((n) => n + 1);
    } catch {
      const errMsg: Message = {
        id: nextId.current++,
        role: "assistant",
        text: "Connection error. Please try again or call us at (346) 309-5514.",
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Chat Panel */}
      <div
        className={`fixed bottom-24 right-5 z-50 flex flex-col rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ width: 360, maxHeight: "calc(100vh - 140px)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-secondary to-primary text-white shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
              <Wifi className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="font-bold text-sm leading-tight">Blue Mogul Support</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-white/70">Online now</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close chat"
            data-testid="button-close-chat"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto bg-slate-50 px-4 py-3 space-y-3 min-h-0" style={{ maxHeight: 380 }}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "assistant" && (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-2 mt-0.5 shrink-0">
                  <Wifi className="w-3 h-3 text-white" />
                </div>
              )}
              <div
                className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === "user"
                    ? "bg-primary text-white rounded-tr-sm"
                    : "bg-white text-slate-700 border border-slate-100 rounded-tl-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-2 mt-0.5 shrink-0">
                <Wifi className="w-3 h-3 text-white" />
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                <div className="flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={sendMessage}
          className="flex items-center gap-2 px-3 py-2.5 bg-white border-t border-slate-100 shrink-0"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about plans, pricing, availability…"
            className="flex-1 text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-slate-400"
            disabled={loading}
            data-testid="input-chat"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="w-9 h-9 rounded-xl bg-primary hover:bg-secondary disabled:opacity-40 flex items-center justify-center transition-colors shrink-0"
            data-testid="button-send-chat"
            aria-label="Send message"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 text-white animate-spin" />
            ) : (
              <Send className="w-4 h-4 text-white" />
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="bg-white text-center py-1.5 text-[10px] text-slate-400 border-t border-slate-100 shrink-0">
          Powered by Blue Mogul AI · <a href="tel:3463095514" className="text-primary hover:underline font-medium">(346) 309-5514</a>
        </div>
      </div>

      {/* FAB Toggle Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ background: "linear-gradient(135deg, #0A5EB5 0%, #0F2942 100%)" }}
        aria-label="Toggle chat"
        data-testid="button-toggle-chat"
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 text-white" />
            {unread > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center">
                {unread}
              </span>
            )}
          </>
        )}
      </button>
    </>
  );
}
