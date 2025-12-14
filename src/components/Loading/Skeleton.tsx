import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-muted",
        className
      )}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-background/60 to-transparent" />
    </div>
  );
}

export function SkeletonText({ className, lines = 3 }: SkeletonProps & { lines?: number }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-4",
            i === lines - 1 ? "w-3/4" : "w-full"
          )}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className }: SkeletonProps) {
  return (
    <div className={cn("rounded-lg border border-border bg-card p-6 space-y-4", className)}>
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-3 w-1/4" />
        </div>
      </div>
      <SkeletonText lines={3} />
    </div>
  );
}

export function SkeletonImage({ className, aspectRatio = "video" }: SkeletonProps & { aspectRatio?: "video" | "square" }) {
  return (
    <Skeleton
      className={cn(
        "w-full",
        aspectRatio === "video" ? "aspect-video" : "aspect-square",
        className
      )}
    />
  );
}
