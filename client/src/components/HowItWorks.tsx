import { Shield, Eye, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: Shield,
    title: "Real-Time Detection",
    description: "Boundier analyzes content as you scroll, identifying manipulative patterns, emotional triggers, and dark UX tactics.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Instant Awareness",
    description: "Get non-intrusive overlays when manipulative content is detected, helping you make conscious decisions about your attention.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Build Better Habits",
    description: "Track your progress with detailed analytics and insights, learning what triggers you and building healthier digital habits.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl" data-testid="text-how-it-works-title">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground" data-testid="text-how-it-works-subtitle">
            Three simple steps to take back control of your digital wellbeing
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative overflow-visible p-8 hover-elevate"
              data-testid={`card-step-${index + 1}`}
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="rounded-lg bg-primary/10 p-3">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-display text-6xl font-bold text-muted/20">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold" data-testid={`text-step-${index + 1}-title`}>
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground" data-testid={`text-step-${index + 1}-description`}>
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
