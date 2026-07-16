// src/components/common/LoadingSkeleton.tsx
interface LoadingSkeletonProps {
  variant?: 'grid' | 'table' | 'detail';
  count?: number;
}

export default function LoadingSkeleton({ variant = 'grid', count = 4 }: LoadingSkeletonProps) {
  // 1. Catalog Page Grid Card Skeleton
  if (variant === 'grid') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="animate-pulse space-y-4 bg-white p-4 border border-slate-200/60 rounded-3xl shadow-sm">
            <div className="aspect-[3/4] w-full bg-slate-200 rounded-2xl" />
            <div className="space-y-2">
              <div className="h-4 bg-slate-200 rounded-md w-3/4" />
              <div className="h-3 bg-slate-200 rounded-md w-1/2" />
            </div>
            <div className="h-9 bg-slate-100 rounded-xl w-full" />
          </div>
        ))}
      </div>
    );
  }

  // 2. Admin Inventory Table Row Skeleton
  if (variant === 'table') {
    return (
      <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 space-y-4 shadow-sm">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="animate-pulse flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-10 h-14 bg-slate-200 rounded-lg shrink-0" />
              <div className="space-y-2 flex-1 max-w-md">
                <div className="h-4 bg-slate-200 rounded-md w-2/3" />
                <div className="h-3 bg-slate-100 rounded-md w-1/4" />
              </div>
            </div>
            <div className="h-8 bg-slate-200 rounded-xl w-16 shrink-0" />
          </div>
        ))}
      </div>
    );
  }

  // 3. Complete Singular Book Detail View Skeleton
  return (
    <div className="animate-pulse grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-6 sm:p-8 border border-slate-200/60 rounded-3xl shadow-sm">
      <div className="aspect-[3/4] w-full bg-slate-200 rounded-2xl" />
      <div className="md:col-span-2 space-y-4">
        <div className="h-8 bg-slate-200 rounded-md w-3/4" />
        <div className="h-4 bg-slate-200 rounded-md w-1/4" />
        <div className="h-3 bg-slate-100 rounded-md w-12" />
        <div className="space-y-2 pt-4">
          <div className="h-4 bg-slate-100 rounded-md w-full" />
          <div className="h-4 bg-slate-100 rounded-md w-full" />
          <div className="h-4 bg-slate-100 rounded-md w-5/6" />
        </div>
      </div>
    </div>
  );
}