import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Eye, Brain } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 bg-background" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center text-center">
          <div className="max-w-5xl space-y-8">
            <div className="space-y-6">
              <h1 className="font-display text-6xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl" data-testid="text-hero-title">
                You see it.{" "}
                <span className="text-primary">
                  We read it.
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-xl text-foreground sm:text-2xl" data-testid="text-hero-subtitle">
                Boundier detects the hidden subconscious influence behind content, empowering you to take back control of your attention.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                variant="default"
                className="gap-2 text-base px-8 py-6"
                onClick={() => {
                  document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-testid="button-see-demo"
              >
                See Demo <Play className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base px-8 py-6"
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-testid="button-learn-more"
              >
                Learn More <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="flex flex-col items-center gap-3">
                <div className="rounded-full bg-primary/10 p-4 border border-primary/20">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div className="font-display text-4xl font-bold text-primary" data-testid="text-stat-1">
                  87%
                </div>
                <div className="text-sm text-foreground">
                  Less manipulation
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="rounded-full bg-primary/10 p-4 border border-primary/20">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <div className="font-display text-4xl font-bold text-primary" data-testid="text-stat-2">
                  45min
                </div>
                <div className="text-sm text-foreground">
                  Time saved daily
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="rounded-full bg-primary/10 p-4 border border-primary/20">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <div className="font-display text-4xl font-bold text-primary" data-testid="text-stat-3">
                  10k+
                </div>
                <div className="text-sm text-foreground">
                  Protected users
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
