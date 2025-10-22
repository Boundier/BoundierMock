import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, CheckCircle2 } from "lucide-react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section id="cta" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Card className="relative overflow-hidden p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-chart-4/10" />
          
          <div className="relative text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl" data-testid="text-cta-title">
              See What You're Really Reading
            </h2>
            <p className="mt-4 text-lg text-foreground" data-testid="text-cta-subtitle">
              Join the waitlist to be notified when Boundier launches
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <div className="relative flex-1 sm:max-w-md">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                    data-testid="input-email"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg"
                  data-testid="button-join-waitlist"
                >
                  Join Waitlist
                </Button>
              </form>
            ) : (
              <div className="mt-8 flex items-center justify-center gap-2 text-chart-2" data-testid="text-success-message">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-medium">Thanks! We'll be in touch soon.</span>
              </div>
            )}

            <p className="mt-6 text-sm text-muted-foreground">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
