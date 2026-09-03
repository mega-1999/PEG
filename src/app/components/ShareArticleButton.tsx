"use client";

import React from "react";
import { Share2 } from "lucide-react";

export default function ShareArticleButton({ title }: { title: string }) {
  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.share) {
      navigator.share({
        title,
        url: window.location.href,
      }).catch(() => {});
    } else if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      alert("Article link copied to clipboard!");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="w-full flex items-center justify-center gap-2 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-200 transition-colors cursor-pointer"
    >
      <Share2 className="w-4 h-4 text-[#1B79EE]" />
      <span>Share Technical Article</span>
    </button>
  );
}
