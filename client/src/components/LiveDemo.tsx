import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, AlertTriangle, CheckCircle2, Info, Star, Eye } from "lucide-react";
import OverlayNotification from "./OverlayNotification";

// Mock avatars (add a sixth for subtle post)
import avatar1 from "@assets/stock_images/professional_busines_103f900a.jpg";
import avatar2 from "@assets/stock_images/professional_busines_33c7c8b4.jpg";
import avatar3 from "@assets/stock_images/professional_busines_fa0e9841.jpg";
import avatar4 from "@assets/stock_images/professional_busines_a7d8a242.jpg";
import avatar5 from "@assets/stock_images/professional_busines_9e364d75.jpg";
import avatar6 from "@assets/stock_images/professional_busines_demo_subtle.jpg";

// Updated content examples array
const contentExamples = [
  {
    type: "safe",
    content:
      "Check out this interesting article on sustainable living practices and how small changes can make a big environmental impact.",
    author: "Green Living Daily",
    avatar: avatar1,
    time: "2 hours ago",
    hasOverlay: false,
    icon: CheckCircle2,
    iconColor: "text-chart-2",
  },
  {
    type: "manipulative",
    content:
      "URGENT: You're missing out! Only 2 spots left! Act NOW or regret forever! Limited time offer expires in 5 minutes! This deal will NEVER come back! ⚠️🔥",
    author: "QuickBuy Deals",
    avatar: avatar2,
    time: "15 minutes ago",
    hasOverlay: true,
    icon: AlertTriangle,
    iconColor: "text-destructive",
    overlayData: {
      level: "manipulative",
      title: "Hidden Influence Detected",
      description:
        "This content targets your subconscious with scarcity triggers, false urgency, and FOMO tactics designed to bypass rational decision-making.",
    },
  },
  {
    type: "caution",
    content:
      "Everyone is talking about this! Don't be the only one who doesn't know! 🔥 Join thousands who already discovered this life-changing secret!",
    author: "Viral Trends",
    avatar: avatar3,
    time: "1 hour ago",
    hasOverlay: true,
    icon: Info,
    iconColor: "text-chart-3",
    overlayData: {
      level: "caution",
      title: "Subconscious Influence Detected",
      description:
        "This content uses social conformity pressure and fear of exclusion to trigger subconscious engagement responses.",
    },
  },
  {
    type: "safe",
    content:
      "New study finds that spending 30 minutes outdoors daily can improve mental health and reduce stress levels. Read the full research here.",
    author: "Science Today",
    avatar: avatar4,
    time: "3 hours ago",
    hasOverlay: false,
    icon: CheckCircle2,
    iconColor: "text-chart-2",
  },
  {
    type: "manipulative",
    content:
      "Your friends are getting ahead while you're stuck! Click here before it's too late! You'll kick yourself if you miss this! Last chance! 💰",
    author: "Success Shortcuts",
    avatar: avatar5,
    time: "30 minutes ago",
    hasOverlay: true,
    icon: AlertTriangle,
    iconColor: "text-destructive",
    overlayData: {
      level: "manipulative",
      title: "High Influence Detected",
      description:
        "Multiple psychological triggers detected: social comparison, loss aversion, time pressure, and emotional manipulation designed to force immediate action.",
    },
  },
  {
    type: "subtle",
    content:
      "Leading experts agree you should always invest in your future. Check out our recommended plans.",
    author: "Financial Insights",
    avatar: avatar6,
    time: "10 minutes ago",
    hasOverlay: true,
    icon: Eye,
    iconColor: "text-chart-4",
    overlayData: {
      level: "subtle",
      title: "Low-Level Influence Detected",
      description:
        "This content uses appeals to authority ('experts agree') and future bias to nudge decisions gently, affecting your judgment while feeling neutral.",
    },
  },
];

// Mock Analytics/Rewards as before
const userStats = [
  { label: "FOMO triggers avoided", value: 4 },
  { label: "Conscious scroll sessions", value: 7 },
  { label: "Mindful interaction streak", value: "5 days" },
];
const rewardBadge = {
  name: "Mindful Surfer",
  icon: Star,
  description: "Awarded for maintaining a 5-day streak of conscious browsing.",
};

export default function LiveDemo() {
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);
  const [showOverlayDetails, setShowOverlayDetails] = useState(false);
  const [overlayDetails, setOverlayDetails] = useState<any>(null);
  const [showBadges, setShowBadges] = useState(false);
  const [overlaysOn, setOverlaysOn] = useState(true);

  // Toggle overlays on/off
  const toggleOverlays = () => setOverlaysOn(!overlaysOn);

  // When an overlay badge is clicked, show explainability details
  const handleCardClick = (index: number) => {
    if (contentExamples[index].hasOverlay && overlaysOn) {
      setOverlayDetails(contentExamples[index].overlayData);
      setShowOverlayDetails(true);
    }
  };

  // Animate and show badges/stats
  const revealBadges = () => setShowBadges(true);

  return (
    <div className="mx-auto max-w-2xl py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Live Cognitive Firewall Demo</h2>
      <div className="mb-6 flex justify-center">
        <Button variant="outline" onClick={toggleOverlays}>
          {overlaysOn ? "Hide Overlays" : "Show Overlays"}
        </Button>
        <Button variant="default" className="ml-3" onClick={revealBadges}>
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
                {ex.hasOverlay && overlaysOn ? (
                  <Badge
                    color={ex.iconColor}
                    variant={
                      ex.type === "manipulative"
                        ? "destructive"
                        : ex.type === "subtle"
                        ? "default"
                        : "outline"
                    }
                    className="cursor-pointer"
                    onClick={() => handleCardClick(i)}
                  >
                    <ex.icon className="inline w-4 h-4 mr-2" />
                    {ex.overlayData?.title}
                  </Badge>
                ) : null}
                {ex.type === "safe" && (
                  <Badge color={ex.iconColor} variant="secondary">
                    <CheckCircle2 className="inline w-4 h-4 mr-2" /> No Influence Detected
                  </Badge>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Explainability card popup */}
      {showOverlayDetails && overlayDetails && (
        <OverlayNotification
          title={overlayDetails.title}
          description={overlayDetails.description}
          level={overlayDetails.level}
          onClose={() => setShowOverlayDetails(false)}
        />
      )}

      {/* User stats and badge preview */}
      {showBadges && (
        <div className="mt-10 p-6 rounded bg-chart-1/5 border flex flex-col items-center text-center animate-fadein">
          <h3 className="text-xl font-bold mb-2">Your Impact This Week</h3>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            {userStats.map((stat, idx) => (
              <div key={idx} className="px-4 py-1 rounded bg-white shadow border font-medium text-lg">
                {stat.label}: <span className="font-bold text-chart-2">{stat.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex flex-col items-center">
            <rewardBadge.icon className="w-8 h-8 text-chart-1 mb-2" />
            <span className="font-bold">{rewardBadge.name}</span>
            <span className="text-chart-3 text-sm">{rewardBadge.description}</span>
          </div>
        </div>
      )}
    </div>
  );
}
