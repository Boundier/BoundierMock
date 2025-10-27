import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, AlertTriangle, CheckCircle2, Info, Star, Eye, X } from "lucide-react";

// Use only existing avatars
import avatar1 from "@assets/stock_images/professional_busines_103f900a.jpg";
import avatar2 from "@assets/stock_images/professional_busines_33c7c8b4.jpg";
import avatar3 from "@assets/stock_images/professional_busines_fa0e9841.jpg";
import avatar4 from "@assets/stock_images/professional_busines_a7d8a242.jpg";
import avatar5 from "@assets/stock_images/professional_busines_9e364d75.jpg";

// 5 posts only, all overlays consistent, "why"-explanations
const contentExamples = [
  {
    type: "subtle",
    content: "Here's yesterday's weather update: Mostly sunny, gentle breeze. Don't miss a beautiful day outdoors!",
    author: "Weather Now",
    avatar: avatar4,
    time: "6 hours ago",
    hasOverlay: true,
    icon: Eye,
    iconColor: "text-chart-4",
    overlayData: {
      level: "subtle",
      title: "Subconscious Influence Detected",
      description: "This message uses positive framing to directly increase your motivation for outdoor activity—weather updates don’t just inform, they guide mood and planning decisions.",
    },
  },
  {
    type: "subtle",
    content: "Reminder: The library will be closed Friday for maintenance. Please return books on time to avoid inconvenience.",
    author: "City Library",
    avatar: avatar3,
    time: "4 hours ago",
    hasOverlay: true,
    icon: Eye,
    iconColor: "text-chart-4",
    overlayData: {
      level: "subtle",
      title: "Subconscious Influence Detected",
      description: "Urgency cues are present to prompt responsible, timely action—administrative reminders intentionally nudge compliance and punctuality.",
    },
  },
  {
    type: "manipulative",
    content: "URGENT: Only 2 spots left! Act NOW or regret forever! This deal will NEVER come back! ⚠️🔥",
    author: "QuickBuy Deals",
    avatar: avatar2,
    time: "15 minutes ago",
    hasOverlay: true,
    icon: AlertTriangle,
    iconColor: "text-destructive",
    overlayData: {
      level: "manipulative",
      title: "Hidden Influence Detected",
      description: "Scarcity and loss aversion are used to override your critical thinking and trigger stress-driven actions. This content is designed to elicit impulsivity.",
    },
  },
  {
    type: "caution",
    content: "Everyone is talking about this! Don't be the only one who doesn't know! 🔥 Join thousands who already discovered this secret!",
    author: "Viral Trends",
    avatar: avatar3,
    time: "1 hour ago",
    hasOverlay: true,
    icon: Info,
    iconColor: "text-chart-3",
    overlayData: {
      level: "caution",
      title: "Subconscious Influence Detected",
      description: "Social proof and fear of missing out compel you to conform. This pattern targets your instinct to follow the crowd and avoid exclusion.",
    },
  },
  {
    type: "subtle",
    avatar: avatar1,
    content: "Leading experts agree you should always invest in your future. See our plans.",
    author: "Financial Insights",
    time: "10 minutes ago",
    hasOverlay: true,
    icon: Eye,
    iconColor: "text-chart-4",
    overlayData: {
      level: "subtle",
      title: "Subconscious Influence Detected",
      description: "Using 'experts agree' leverages authority bias—a proven method for eliciting compliance and trust, regardless of your own evaluation.",
    },
  },
];

const analyticsStats = [
  { label: "Subtle influences revealed", value: 5 },
  { label: "Manipulative triggers avoided", value: 1 },
  { label: "Mindful interaction streak", value: "7 days" },
];
const rewardsList = [
  {
    name: "Mindful Surfer",
    icon: Star,
    description: "Awarded for a 7-day streak of conscious browsing with overlays ON.",
  },
  {
    name: "Trigger Spotter",
    icon: Eye,
    description: "Identified 10 unique subconscious influence patterns.",
  },
  {
    name: "Critical Thinker",
    icon: Info,
    description: "Paused and read explainability cards on every overlay this week.",
  },
];

export default function LiveDemo() {
  const [showOverlayDetails, setShowOverlayDetails] = useState(false);
  const [overlayDetails, setOverlayDetails] = useState<any>(null);
  const [detailPosition, setDetailPosition] = useState<{top: number; left: number}|null>(null);
  const [dashboardMode, setDashboardMode] = useState<"analytics"|"rewards"|null>(null);
  const [overlaysOn, setOverlaysOn] = useState(true);

  // Animation + position explainability card near overlay
  const handleCardClick = (index: number, event: React.MouseEvent) => {
    if (contentExamples[index].hasOverlay && overlaysOn) {
      setOverlayDetails(contentExamples[index].overlayData);
      const rect = (event.target as HTMLElement).getBoundingClientRect();
      setDetailPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
      });
      setShowOverlayDetails(true);
    }
  };

  // Hover animation for cards
  const cardClass = "p-4 flex gap-3 items-start relative shadow transition-all duration-150 hover:scale-105 hover:shadow-lg hover:bg-gray-50";

  // Rewards and Analytics use matching style
  const dashboardCardClass = "rounded shadow bg-white border p-4 transition-all duration-150 hover:scale-105 hover:shadow-lg hover:bg-gray-50 flex items-center gap-2 mb-3";

  const toggleOverlays = () => setOverlaysOn(!overlaysOn);

  // Boundier Analytics Dashboard
  if (dashboardMode === "analytics") {
    return (
      <div className="mx-auto max-w-2xl py-8 animate-fadein">
        <h2 className="text-3xl font-bold mb-4 text-center">Boundier Analytics</h2>
        <div className="mb-4 flex justify-center">
          <Button variant="secondary" onClick={() => setDashboardMode(null)}>Back to Demo</Button>
        </div>
        <div className="grid gap-4">
          {analyticsStats.map((stat, idx) => (
            <div key={idx} className={dashboardCardClass}>
              <span className="font-medium text-lg">{stat.label}:</span>
              <span className="font-bold text-chart-2">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Boundier Rewards Dashboard (matches analytics style/features)
  if (dashboardMode === "rewards") {
    return (
      <div className="mx-auto max-w-2xl py-8 animate-fadein">
        <h2 className="text-3xl font-bold mb-4 text-center">Boundier Rewards</h2>
        <div className="mb-4 flex justify-center">
          <Button variant="secondary" onClick={() => setDashboardMode(null)}>Back to Demo</Button>
        </div>
        <div className="grid gap-4">
          {rewardsList.map((reward, i) => (
            <div key={i} className={dashboardCardClass}>
              <reward.icon className="w-7 h-7 text-chart-1 mr-3" />
              <span className="font-bold">{reward.name}</span>
              <span className="text-chart-3">{reward.description}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-chart-3">
          Tip: More explainability and pattern recognition unlocks new rewards!
        </div>
      </div>
    );
  }

  // MAIN DEMO FEED
  return (
    <div className="mx-auto max-w-2xl py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Live Cognitive Firewall Demo</h2>
      <div className="mb-6 flex justify-center gap-2">
        <Button variant="outline" onClick={toggleOverlays}>
          {overlaysOn ? "Hide Overlays" : "Show Overlays"}
        </Button>
        <Button variant="default" onClick={() => setDashboardMode("analytics")}>
          View Boundier Analytics
        </Button>
        <Button variant="default" onClick={() => setDashboardMode("rewards")}>
          View Boundier Rewards
        </Button>
      </div>
      <div className="space-y-6">
        {contentExamples.map((ex, i) => (
          <Card key={i} className={cardClass}>
            <img src={ex.avatar} alt="author" className="w-12 h-12 rounded-full mt-1" />
            <div className="flex-1">
              <div className="flex items-center mb-1 gap-2">
                <span className="font-semibold">{ex.author}</span>
                <Badge variant="secondary">{ex.time}</Badge>
              </div>
              <div>
                <span>{ex.content}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Heart className="w-4 h-4" />
                <MessageCircle className="w-4 h-4" />
                <Share2 className="w-4 h-4" />
                {ex.hasOverlay && overlaysOn && (
                  <Badge
                    color={ex.iconColor}
                    variant="default"
                    className="cursor-pointer px-2 py-1 rounded transition hover:bg-chart-1/20"
                    onClick={e => handleCardClick(i, e)}
                  >
                    <Eye className="inline w-4 h-4 mr-2" />
                    {ex.overlayData?.title}
                  </Badge>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
      {/* Subtle, animated explainability card near overlay */}
      {showOverlayDetails && overlayDetails && detailPosition && (
        <div
          className="fixed z-50 rounded shadow-xl bg-white border p-4 animate-fadein transition-all"
          style={{
            top: detailPosition.top,
            left: detailPosition.left,
            minWidth: 260,
            maxWidth: 340,
            boxShadow: "0 2px 16px 0 rgba(0,0,0,0.15)",
            pointerEvents: "auto"
          }}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold text-base">{overlayDetails.title}</span>
            <button onClick={() => setShowOverlayDetails(false)} className="ml-2 rounded p-1 hover:bg-chart-3/10">
              <X className="w-4 h-4 text-chart-3" />
            </button>
          </div>
          <div className="text-chart-4 text-sm leading-relaxed">{overlayDetails.description}</div>
        </div>
      )}
    </div>
  );
}
