import { Card } from "@/components/ui/card";

export default function DashboardPreview() {
  return (
    <section className="relative bg-gradient-to-b from-card/30 to-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl" data-testid="text-dashboard-title">
            Understand Your Influence Profile
          </h2>
          <p className="mt-4 text-lg text-foreground" data-testid="text-dashboard-subtitle">
            See which subconscious triggers affect you and track your growing awareness
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <Card className="p-6 text-center">
            <div className="mb-2 font-display text-3xl font-bold text-chart-2" data-testid="text-metric-1">
              2.4k
            </div>
            <div className="text-sm text-foreground">
              Hidden influences revealed this month
            </div>
          </Card>
          <Card className="p-6 text-center">
            <div className="mb-2 font-display text-3xl font-bold text-chart-3" data-testid="text-metric-2">
              68%
            </div>
            <div className="text-sm text-foreground">
              Reduction in subconscious reactions
            </div>
          </Card>
          <Card className="p-6 text-center">
            <div className="mb-2 font-display text-3xl font-bold text-primary" data-testid="text-metric-3">
              3.2h
            </div>
            <div className="text-sm text-foreground">
              Average time saved per week
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
