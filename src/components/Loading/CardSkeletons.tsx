import { Skeleton } from "./Skeleton";
import { cn } from "@/lib/utils";

interface TripCardSkeletonProps {
  className?: string;
}

export function TripCardSkeleton({ className }: TripCardSkeletonProps) {
  return (
    <div className={cn("rounded-lg border border-border bg-card overflow-hidden", className)}>
      {/* Image */}
      <Skeleton className="aspect-[16/10] w-full" />
      
      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        
        <div className="flex items-center gap-4 pt-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </div>
  );
}

export function TripCardGridSkeleton({ count = 6, className }: { count?: number; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <TripCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function DestinationCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-lg border border-border bg-card overflow-hidden", className)}>
      <Skeleton className="aspect-[4/3] w-full" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex items-center gap-2 pt-1">
          <Skeleton className="h-4 w-4 rounded" />
          <Skeleton className="h-3 w-12" />
        </div>
      </div>
    </div>
  );
}

export function FeatureCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-lg border border-border bg-card p-6 space-y-4", className)}>
      <Skeleton className="h-12 w-12 rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

export function StatCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-lg border border-border bg-card p-4", className)}>
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <div className="space-y-1.5 flex-1">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-6 w-12" />
        </div>
      </div>
    </div>
  );
}
