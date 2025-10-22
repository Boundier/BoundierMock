import React from "react";
import { Shield, Eye, Brain } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              Boundier — Your Cognitive Firewall
            </h1>
            <p className="mt-6 text-lg text-foreground">
              Detect the hidden subconscious influence behind content in real-time and take back control of your attention.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow hover:brightness-95"
                href="#demo"
              >
                See Live Demo
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md border border-primary/20 bg-card px-6 py-3 text-sm font-medium text-foreground hover:shadow-sm"
                href="#how-it-works"
              >
                Learn how it works
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Phone mockup / illustration would go here */}
            <div className="h-[420px] w-full rounded-xl bg-gradient-to-br from-background to-card" />
          </div>
        </div>

        {/* Social proof / stats removed per request */}
      </div>
    </section>
  );
}
