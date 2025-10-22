import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import OverlayNotification from "./OverlayNotification";

const contentExamples = [
  {
    type: "safe",
    content: "Check out this interesting article on sustainable living practices.",
    author: "Green Living Daily",
    hasOverlay: false,
  },
  {
    type: "manipulative",
    content: "URGENT: You're missing out! Only 2 spots left! Act NOW or regret forever! Limited time offer expires in 5 minutes! ⚠️",
    author: "QuickBuy Deals",
    hasOverlay: true,
    overlayData: {
      level: "manipulative" as const,
      title: "Manipulative Content Detected",
      description: "This content uses emotional triggers, false urgency, and FOMO tactics designed to bypass your rational thinking.",
    },
  },
  {
    type: "caution",
    content: "Everyone is talking about this! Don't be the only one who doesn't know! 🔥",
    author: "Viral Trends",
    hasOverlay: true,
    overlayData: {
      level: "caution" as const,
      title: "Engagement Bait Detected",
      description: "This content uses social pressure and bandwagon effect to encourage engagement.",
    },
  },
];

export default function LiveDemo() {
  const [activeOverlay, setActiveOverlay] = useState<number | null>(1);

  return (
    <section id="demo" className="relative bg-card/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 text-primary">
            Interactive Demo
          </Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl" data-testid="text-demo-title">
            See Boundier in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground" data-testid="text-demo-subtitle">
            Experience how Boundier detects and alerts you to manipulative content
          </p>
        </div>

        <div className="mx-auto max-w-2xl space-y-6">
          {contentExamples.map((example, index) => (
            <div key={index} className="relative" data-testid={`demo-content-${index}`}>
              <Card className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div>
                    <div className="font-semibold text-sm">{example.author}</div>
                    <div className="text-xs text-muted-foreground">2 hours ago</div>
                  </div>
                </div>
                
                <p className="mb-4 text-foreground">{example.content}</p>
                
                <div className="flex items-center gap-6 text-muted-foreground">
                  <button className="flex items-center gap-2 text-sm hover-elevate active-elevate-2">
                    <Heart className="h-4 w-4" />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center gap-2 text-sm hover-elevate active-elevate-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>Comment</span>
                  </button>
                  <button className="flex items-center gap-2 text-sm hover-elevate active-elevate-2">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
              </Card>

              {example.hasOverlay && activeOverlay === index && example.overlayData && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/60 p-6 backdrop-blur-sm">
                  <OverlayNotification
                    level={example.overlayData.level}
                    title={example.overlayData.title}
                    description={example.overlayData.description}
                    onContinue={() => {
                      console.log('Continue clicked');
                      setActiveOverlay(null);
                    }}
                    onSwitch={() => {
                      console.log('Switch content clicked');
                      setActiveOverlay(null);
                    }}
                    onClose={() => setActiveOverlay(null)}
                  />
                </div>
              )}
            </div>
          ))}

          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => setActiveOverlay(1)}
              data-testid="button-replay-demo"
            >
              Replay Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
