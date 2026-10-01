import React from "react";

export default function BlogLoadingSkeleton() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-10 md:px-20 animate-pulse">
      {/* Header Skeleton */}
      <div className="max-w-3xl space-y-4 mb-12">
        <div className="h-6 w-48 bg-[#023380]/10 rounded" />
        <div className="h-12 w-full max-w-lg bg-[#023380]/15 rounded" />
        <div className="h-4 w-96 bg-[#023380]/10 rounded" />
      </div>

      {/* Filter Tabs Skeleton */}
      <div className="flex gap-3 mb-10 overflow-x-auto">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-9 w-28 bg-[#023380]/10 rounded shrink-0" />
        ))}
      </div>

      {/* Cards Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white border border-[#023380]/10 rounded-none overflow-hidden shadow-md">
            <div className="h-56 bg-[#023380]/10 w-full" />
            <div className="p-6 space-y-3">
              <div className="h-4 w-24 bg-[#0271f1]/20 rounded" />
              <div className="h-6 w-full bg-[#023380]/15 rounded" />
              <div className="h-14 w-full bg-[#023380]/5 rounded" />
              <div className="h-8 w-32 bg-[#023380]/10 rounded mt-4" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
