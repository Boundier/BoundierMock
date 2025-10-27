import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, AlertTriangle, CheckCircle2, Info, Star, Eye } from "lucide-react";
import OverlayNotification from "./OverlayNotification";

// Use only existing avatars
import avatar1 from "@assets/stock_images/professional_busines_103f900a.jpg";
import avatar2 from "@assets/stock_images/professional_busines_33c7c8b4.jpg";
import avatar3 from "@assets/stock_images/professional_busines_fa0e9841.jpg";
import avatar4 from "@assets/stock_images/professional_busines_a7d8a242.jpg";
import avatar5 from "@assets/stock_images/professional_busines_9e364d75.jpg";

// *** Only 5 posts ***
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
      description: "Positive framing encourages outdoor activity. Even simple info subtly shapes your behavior and mood.",
    },
  },
  {
    type: "subtle",
    content: "Reminder: The library will be closed Friday for maintenance. Please return books to avoid inconvenience.",
    author: "City Library",
    avatar: avatar3,
    time: "4 hours ago",
    hasOverlay: true,
    icon: Eye,
    iconColor: "text-chart-4",
    overlayData: {
      level: "subtle",
      title: "Subconscious Influence Detected",
      description: "Gentle urgency and appeal to order. Routine notices can nudge you to act sooner than planned.",
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
      description: "Scarcity triggers, urgency, and FOMO are being used to rush your decision-making. Consider if you really want this, or just feel pressured.",
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
      description: "Social conformity pressure and fear of exclusion are present. Pause and reflect before engaging.",
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
      description: "Appeal to authority and future bias gently shape your judgment while feeling neutral.",
    },
  },
];

const userStats = [
  { label: "Subtle influences revealed", value: 5 },
  { label: "Manipulative triggers avoided", value: 1 },
  { label: "Mindful interaction streak", value: "7 days" },
];
const rewardBadge = {
  name: "Mindful Surfer",
  icon: Star,
  description: "For maintaining a 7-day streak of conscious browsing with overlays ON.",
};

export default function LiveDemo() {
  const [showOverlayDetails, setShowOverlayDetails] = useState(false);
  const [overlayDetails, setOverlayDetails] = useState<any>(null);
  const [dashboardMode, setDashboardMode] = useState(false);
  const [overlaysOn, setOverlaysOn] = useState(true);

  const toggleOverlays = () => setOverlaysOn(!overlaysOn);

  const handleCardClick = (index: number) => {
    if (contentExamples[index].hasOverlay && overlaysOn) {
      setOverlayDetails(contentExamples[index].overlayData);
      setShowOverlayDetails(true);
    }
  };

  const goToDashboard = () => setDashboardMode(true);

  if (dashboardMode) {
    return (
      <div className="mx-auto max-w-2xl py-8 animate-fadein">
        <h2 className="text-3xl font-bold mb-4 text-center">Your Boundier Reward Dashboard</h2>
        <div className="mb-4 flex justify-center">
          <Button variant="secondary" onClick={() => setDashboardMode(false)}>Back to Demo</Button>
        </div>
        <div className="grid gap-6">
          <div className="flex flex-wrap gap-4 justify-center mb-2">
            {userStats.map((stat, idx) => (
              <div key={idx} className="px-4 py-1 rounded bg-white shadow border font-medium text-lg">
                {stat.label}: <span className="font-bold text-chart-2">{stat.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex flex-col items-center">
            <rewardBadge.icon className="w-10 h-10 text-chart-1 mb-2" />
            <span className="font-bold text-xl">{rewardBadge.name}</span>
            <span className="text-chart-3 text-base">{rewardBadge.description}</span>
          </div>
          <div className="mt-6 p-4 bg-chart-3/10 rounded">
            <p className="text-chart-3 text-center">
              Tip: The more you use overlays and reflect on explainability cards, the more you unlock mindful streaks and community rewards!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Live Cognitive Firewall Demo</h2>
      <div className="mb-6 flex justify-center">
        <Button variant="outline" onClick={toggleOverlays}>
          {overlaysOn ? "Hide Overlays" : "Show Overlays"}
        </Button>
        <Button variant="default" className="ml-3" onClick={goToDashboard}>
          View My Stats & Rewards
        </Button>
      </div>
      <div className="space-y-6">
        {contentExamples.map((ex, i) => (
          <Card key={i} className="p-4 flex gap-3 items-start relative shadow">
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
                    variant={ex.type === "manipulative" ? "destructive" : ex.type === "subtle" ? "default" : ex.type === "caution" ? "outline" : "secondary"}
                    className="cursor-pointer"
                    onClick={() => handleCardClick(i)}
                  >
                    <ex.icon className="inline w-4 h-4 mr-2" />
                    {ex.overlayData?.title || "Explain"}
                  </Badge>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
      {showOverlayDetails && overlayDetails && (
        <OverlayNotification
          title={overlayDetails.title}
          description={overlayDetails.description}
          level={overlayDetails.level}
          onClose={() => setShowOverlayDetails(false)}
        />
      )}
    </div>
  );
}
