import { Shield, Eye, Bell, BarChart3, Settings, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Subconscious Analysis",
    description: "Advanced AI detects hidden psychological influence patterns in content, revealing what targets your subconscious mind.",
  },
  {
    icon: Eye,
    title: "Privacy-First Design",
    description: "All analysis happens on your device. Your data never leaves your phone, ensuring complete privacy.",
  },
  {
    icon: Bell,
    title: "Smart Awareness Alerts",
    description: "Get timely, non-intrusive notifications revealing the hidden influence tactics in content you're viewing.",
  },
  {
    icon: BarChart3,
    title: "Influence Analytics",
    description: "Track which psychological triggers affect you most with detailed insights and pattern recognition.",
  },
  {
    icon: Settings,
    title: "Fully Customizable",
    description: "Adjust sensitivity levels, choose which influence tactics to monitor, and customize alert preferences.",
  },
  {
    icon: Lock,
    title: "Awareness, Not Blocking",
    description: "We don't block content. We reveal the hidden subconscious influence, empowering you to make conscious choices.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl" data-testid="text-features-title">
            Powerful Features for Conscious Reading
          </h2>
          <p className="mt-4 text-lg text-foreground" data-testid="text-features-subtitle">
            Everything you need to see what's really influencing you
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover-elevate"
              data-testid={`card-feature-${index + 1}`}
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold" data-testid={`text-feature-${index + 1}-title`}>
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground" data-testid={`text-feature-${index + 1}-description`}>
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
