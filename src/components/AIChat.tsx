import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Sparkles, MapPin, Calendar, DollarSign, Mic, Wand2, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your AI travel assistant. Tell me where you'd like to go, and I'll help you plan an amazing trip!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickActions = [
    { icon: MapPin, label: "Add beaches", prompt: "Add more beach activities to my trip" },
    { icon: Trash2, label: "Remove museums", prompt: "Remove all museum visits" },
    { icon: DollarSign, label: "Reduce budget", prompt: "Make this trip more budget-friendly" },
    { icon: Wand2, label: "Optimize route", prompt: "Optimize my travel route to minimize travel time" },
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        role: "assistant",
        content: "I'd be happy to help plan your trip! Let me know your preferences: budget, travel style, and dates.",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <div className="flex flex-col h-full max-h-[600px]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "flex gap-3 animate-slide-up",
              message.role === "user" ? "flex-row-reverse" : "flex-row"
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                message.role === "user" ? "bg-gradient-primary" : "bg-gradient-secondary"
              )}
            >
              {message.role === "user" ? (
                <User className="w-5 h-5 text-white" />
              ) : (
                <Bot className="w-5 h-5 text-white" />
              )}
            </div>
            <div
              className={cn(
                "max-w-[70%] p-4 rounded-2xl",
                message.role === "user"
                  ? "bg-gradient-primary text-white"
                  : "glass-card"
              )}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 animate-fade-in">
            <div className="w-8 h-8 rounded-full bg-gradient-secondary flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="glass-card p-4 rounded-2xl">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.2s" }} />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-t border-border">
        <p className="text-xs text-muted-foreground mb-3">Quick refinements:</p>
        <div className="grid grid-cols-2 gap-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleQuickAction(action.prompt)}
              className="p-3 rounded-lg glass-card hover:bg-muted/50 transition-all duration-300 text-left group hover-lift"
            >
              <action.icon className="w-4 h-4 text-primary mb-1 group-hover:scale-110 transition-transform" />
              <p className="text-xs font-medium">{action.label}</p>
            </button>
          ))}
        </div>
        <Button className="w-full mt-3 bg-gradient-primary hover:opacity-90 gap-2">
          <Wand2 className="w-4 h-4" />
          One-Click Optimization
        </Button>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="flex-shrink-0 hover-lift">
            <Mic className="w-4 h-4" />
          </Button>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type or speak to refine your trip..."
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon" className="bg-gradient-primary hover:opacity-90 hover-lift">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
