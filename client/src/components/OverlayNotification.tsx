import { AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface OverlayNotificationProps {
  level: "safe" | "caution" | "manipulative";
  title: string;
  description: string;
  onContinue?: () => void;
  onSwitch?: () => void;
  onClose?: () => void;
}

const levelConfig = {
  safe: {
    color: "bg-chart-2 border-chart-2",
    badge: "Safe Content",
    badgeClass: "bg-chart-2/20 text-chart-2 border-chart-2/30",
  },
  caution: {
    color: "bg-chart-3 border-chart-3",
    badge: "Caution",
    badgeClass: "bg-chart-3/20 text-chart-3 border-chart-3/30",
  },
  manipulative: {
    color: "bg-destructive border-destructive",
    badge: "Manipulative Content",
    badgeClass: "bg-destructive/20 text-destructive border-destructive/30",
  },
};

export default function OverlayNotification({
  level,
  title,
  description,
  onContinue,
  onSwitch,
  onClose,
}: OverlayNotificationProps) {
  const config = levelConfig[level];

  return (
    <div className="relative w-full max-w-md overflow-visible">
      <div
        className={`relative rounded-lg border-2 ${config.color} bg-card/95 p-6 backdrop-blur-xl`}
        data-testid={`overlay-${level}`}
      >
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 hover-elevate active-elevate-2 rounded-md p-1 text-muted-foreground"
            data-testid="button-close-overlay"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        <div className="mb-4 flex items-start gap-3">
          <div className={`rounded-md p-2 ${config.color.replace('border-', 'bg-')}/20`}>
            <AlertTriangle className={`h-5 w-5 ${config.color.replace('bg-', 'text-').replace('border-', 'text-')}`} />
          </div>
          <div className="flex-1">
            <Badge variant="outline" className={`${config.badgeClass} mb-2 border`} data-testid={`badge-${level}`}>
              {config.badge}
            </Badge>
            <h3 className="font-semibold text-foreground" data-testid="text-overlay-title">
              {title}
            </h3>
          </div>
        </div>

        <p className="mb-6 text-sm text-muted-foreground" data-testid="text-overlay-description">
          {description}
        </p>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button
            variant="outline"
            className="flex-1"
            onClick={onContinue}
            data-testid="button-continue"
          >
            Continue Anyway
          </Button>
          <Button
            variant="default"
            className="flex-1"
            onClick={onSwitch}
            data-testid="button-switch"
          >
            Switch Content
          </Button>
        </div>
      </div>
    </div>
  );
}
