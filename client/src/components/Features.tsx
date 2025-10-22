import { Shield, Eye, Bell, BarChart3, Settings, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Real-Time Protection",
    description: "Advanced AI continuously monitors content across all your apps, detecting manipulative patterns instantly.",
  },
  {
    icon: Eye,
    title: "Privacy-First Design",
    description: "All analysis happens on your device. Your data never leaves your phone, ensuring complete privacy.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get timely, non-intrusive alerts that help you make conscious decisions without breaking your flow.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track your digital wellbeing with detailed insights, weekly reports, and progress visualization.",
  },
  {
    icon: Settings,
    title: "Fully Customizable",
    description: "Adjust sensitivity levels, choose which apps to monitor, and customize alert preferences to fit your needs.",
  },
  {
    icon: Lock,
    title: "No Blocking, Just Awareness",
    description: "We don't block apps or content. Instead, we empower you with awareness to make better choices.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl" data-testid="text-features-title">
            Powerful Features for Your Digital Wellbeing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground" data-testid="text-features-subtitle">
            Everything you need to reclaim control over your attention
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
