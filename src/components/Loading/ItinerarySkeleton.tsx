import { Skeleton, SkeletonText } from "./Skeleton";
import { cn } from "@/lib/utils";

interface ItinerarySkeletonProps {
  className?: string;
  days?: number;
}

export function ItineraryDaySkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-lg border border-border bg-card p-5", className)}>
      {/* Day header */}
      <div className="flex items-center gap-3 mb-4">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-3 w-32" />
        </div>
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>

      {/* Activities */}
      <div className="space-y-3 ml-5 pl-5 border-l-2 border-border">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-4 py-3">
            <div className="flex flex-col items-center">
              <Skeleton className="h-3 w-3 rounded-full" />
              <Skeleton className="h-12 w-0.5 mt-2" />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-5 w-5 rounded" />
              </div>
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-2/3" />
            </div>
            <Skeleton className="h-16 w-20 rounded-md hidden sm:block" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ItinerarySkeleton({ className, days = 3 }: ItinerarySkeletonProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-40" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-9 w-24 rounded-md" />
            <Skeleton className="h-9 w-24 rounded-md" />
          </div>
        </div>

        {/* Stats bar */}
        <div className="flex gap-6 p-4 rounded-lg border border-border bg-muted/30">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded-md" />
              <div className="space-y-1">
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Days */}
      <div className="space-y-4">
        {Array.from({ length: days }).map((_, i) => (
          <ItineraryDaySkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

export function ItineraryGeneratingSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-16 px-4", className)}>
      {/* Animated loader */}
      <div className="relative mb-8">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 animate-ping" style={{ animationDuration: '1.5s' }} />
      </div>

      {/* Status text */}
      <div className="text-center space-y-2 mb-8">
        <h3 className="text-lg font-medium text-foreground">Generating your itinerary</h3>
        <p className="text-sm text-muted-foreground max-w-sm">
          Our AI is crafting a personalized travel plan based on your preferences...
        </p>
      </div>

      {/* Progress steps */}
      <div className="w-full max-w-xs space-y-3">
        {[
          { label: "Analyzing preferences", complete: true },
          { label: "Finding best attractions", complete: true },
          { label: "Optimizing routes", active: true },
          { label: "Finalizing schedule", pending: true },
        ].map((step, i) => (
          <div key={i} className="flex items-center gap-3">
            <div
              className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center text-xs",
                step.complete && "bg-primary text-primary-foreground",
                step.active && "bg-primary/20 border-2 border-primary",
                step.pending && "bg-muted border border-border"
              )}
            >
              {step.complete && "✓"}
              {step.active && (
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              )}
            </div>
            <span
              className={cn(
                "text-sm",
                step.complete && "text-foreground",
                step.active && "text-foreground font-medium",
                step.pending && "text-muted-foreground"
              )}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
