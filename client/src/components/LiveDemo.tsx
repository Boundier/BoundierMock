import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, AlertTriangle, CheckCircle2, Info } from "lucide-react";
import OverlayNotification from "./OverlayNotification";

const contentExamples = [
  {
    type: "safe",
    content: "Check out this interesting article on sustainable living practices and how small changes can make a big environmental impact.",
    author: "Green Living Daily",
    time: "2 hours ago",
    hasOverlay: false,
    icon: CheckCircle2,
    iconColor: "text-chart-2",
  },
  {
    type: "manipulative",
    content: "URGENT: You're missing out! Only 2 spots left! Act NOW or regret forever! Limited time offer expires in 5 minutes! This deal will NEVER come back! ⚠️🔥",
    author: "QuickBuy Deals",
    time: "15 minutes ago",
    hasOverlay: true,
    icon: AlertTriangle,
    iconColor: "text-destructive",
    overlayData: {
      level: "manipulative" as const,
      title: "Hidden Influence Detected",
      description: "This content targets your subconscious with scarcity triggers, false urgency, and FOMO tactics designed to bypass rational decision-making.",
    },
  },
  {
    type: "caution",
    content: "Everyone is talking about this! Don't be the only one who doesn't know! 🔥 Join thousands who already discovered this life-changing secret!",
    author: "Viral Trends",
    time: "1 hour ago",
    hasOverlay: true,
    icon: Info,
    iconColor: "text-chart-3",
    overlayData: {
      level: "caution" as const,
      title: "Subconscious Influence Detected",
      description: "This content uses social conformity pressure and fear of exclusion to trigger subconscious engagement responses.",
    },
  },
  {
    type: "safe",
    content: "New study finds that spending 30 minutes outdoors daily can improve mental health and reduce stress levels. Read the full research here.",
    author: "Science Today",
    time: "3 hours ago",
    hasOverlay: false,
    icon: CheckCircle2,
    iconColor: "text-chart-2",
  },
  {
    type: "manipulative",
    content: "Your friends are getting ahead while you're stuck! Click here before it's too late! You'll kick yourself if you miss this! Last chance! 💰",
    author: "Success Shortcuts",
    time: "30 minutes ago",
    hasOverlay: true,
    icon: AlertTriangle,
    iconColor: "text-destructive",
    overlayData: {
      level: "manipulative" as const,
      title: "High Influence Detected",
      description: "Multiple psychological triggers detected: social comparison, loss aversion, time pressure, and emotional manipulation designed to force immediate action.",
    },
  },
];

export default function LiveDemo() {
  const [activeOverlay, setActiveOverlay] = useState<number | null>(1);
  const [analyzedCount, setAnalyzedCount] = useState(0);

  const handleAnalyze = () => {
    if (analyzedCount < contentExamples.length) {
      setAnalyzedCount(analyzedCount + 1);
      const hasOverlay = contentExamples[analyzedCount]?.hasOverlay;
      if (hasOverlay) {
        setActiveOverlay(analyzedCount);
      }
    } else {
      setAnalyzedCount(0);
      setActiveOverlay(null);
    }
  };

  return (
    <section id="demo" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-primary bg-primary/10 text-primary">
            Interactive Demo
          </Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl" data-testid="text-demo-title">
            See Boundier in Action
          </h2>
          <p className="mt-4 text-lg text-foreground" data-testid="text-demo-subtitle">
            Experience how Boundier reveals the hidden subconscious influence in content
          </p>
        </div>

        <div className="mb-8 flex items-center justify-between rounded-lg border border-primary/20 bg-card p-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 animate-pulse rounded-full bg-primary" />
              <span className="text-sm font-medium">Analyzing Content</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span className="text-sm text-foreground">
              {analyzedCount}/{contentExamples.length} posts analyzed
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleAnalyze}
            data-testid="button-analyze-next"
          >
            {analyzedCount < contentExamples.length ? 'Analyze Next' : 'Reset Demo'}
          </Button>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {contentExamples.map((example, index) => {
            const isVisible = index <= analyzedCount;
            const Icon = example.icon;
            
            return (
              <div 
                key={index} 
                className={`relative transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
                data-testid={`demo-content-${index}`}
              >
                <Card className="p-6 border-l-4" style={{
                  borderLeftColor: example.hasOverlay ? '#FF3B3B' : '#22C55E'
                }}>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20" />
                      <div>
                        <div className="font-semibold text-sm">{example.author}</div>
                        <div className="text-xs text-foreground/70">{example.time}</div>
                      </div>
                    </div>
                    {isVisible && (
                      <div className={`flex items-center gap-2 ${example.iconColor}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                  
                  <p className="mb-4 text-foreground">{example.content}</p>
                  
                  <div className="flex items-center gap-6 text-foreground/70">
                    <button className="flex items-center gap-2 text-sm hover-elevate active-elevate-2">
                      <Heart className="h-4 w-4" />
                      <span>{Math.floor(Math.random() * 500) + 50}</span>
                    </button>
                    <button className="flex items-center gap-2 text-sm hover-elevate active-elevate-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>{Math.floor(Math.random() * 100) + 10}</span>
                    </button>
                    <button className="flex items-center gap-2 text-sm hover-elevate active-elevate-2">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </Card>

                {example.hasOverlay && activeOverlay === index && example.overlayData && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/90 p-6 backdrop-blur-sm rounded-lg animate-in fade-in duration-300">
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
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-foreground/70">
            Demo showing real-time content analysis and subconscious influence detection
          </p>
        </div>
      </div>
    </section>
  );
}
