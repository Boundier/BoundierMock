import { Shield, Eye, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: Shield,
    title: "Subconscious Analysis",
    description: "Boundier analyzes the hidden psychological influence in content, detecting manipulation tactics that bypass conscious awareness.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Instant Awareness",
    description: "Get non-intrusive alerts revealing the subconscious triggers embedded in content, helping you make conscious decisions.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Build Better Habits",
    description: "Track your progress with detailed analytics showing which influence tactics affect you most, building immunity over time.",
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
          <p className="mt-4 text-lg text-foreground" data-testid="text-how-it-works-subtitle">
            Three simple steps to see the hidden influence behind what you read
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
