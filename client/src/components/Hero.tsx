import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@assets/generated_images/Phone_mockup_with_overlay_warning_31148716.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl" data-testid="text-hero-title">
                You see it.{" "}
                <span className="bg-gradient-to-r from-primary to-chart-4 bg-clip-text text-transparent">
                  We read it.
                </span>
              </h1>
              <p className="text-lg text-foreground sm:text-xl" data-testid="text-hero-subtitle">
                Boundier detects the hidden subconscious influence behind content, empowering you to take back control of your attention.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="default"
                className="gap-2"
                onClick={() => {
                  document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-testid="button-see-demo"
              >
                See Demo <Play className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-card/50 backdrop-blur-sm"
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-testid="button-learn-more"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="font-display text-3xl font-bold text-foreground" data-testid="text-stat-1">
                  87%
                </div>
                <div className="text-sm text-muted-foreground">
                  Less manipulation
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="font-display text-3xl font-bold text-foreground" data-testid="text-stat-2">
                  45min
                </div>
                <div className="text-sm text-muted-foreground">
                  Time saved daily
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="font-display text-3xl font-bold text-foreground" data-testid="text-stat-3">
                  10k+
                </div>
                <div className="text-sm text-muted-foreground">
                  Protected users
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-3xl" />
              <img
                src={heroImage}
                alt="Boundier app showing content warning overlay"
                className="relative z-10 w-full max-w-md drop-shadow-2xl"
                data-testid="img-hero-mockup"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
