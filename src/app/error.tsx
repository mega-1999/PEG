"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime Error Boundary caught:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-white text-[#023380] flex flex-col items-center justify-center px-6 py-24 selection:bg-[#0271f1] selection:text-white">
      <div className="w-full max-w-xl bg-white border border-[#023380]/10 p-10 md:p-14 shadow-2xl relative text-center">
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />

        <div className="w-16 h-16 bg-red-50 border border-red-200 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <span className="font-mono text-xs font-black tracking-[0.3em] uppercase text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200 inline-block mb-4">
          Telemetry Interrupted &bull; System Recovery
        </span>

        <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#023380] mb-3">
          Application Exception Encountered
        </h1>

        <p className="text-[#023380] text-sm font-semibold leading-relaxed mb-8">
          A runtime processing anomaly occurred while rendering this view. Your session and saved data remain intact.
        </p>

        {/* Action Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#023380] text-white font-mono text-xs font-black uppercase tracking-wider hover:bg-[#0271f1] transition-all shadow-md cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Retry Telemetry</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-50 text-[#023380] border border-[#0271f1]/30 font-mono text-xs font-black uppercase tracking-wider hover:bg-blue-100 transition-all"
          >
            <Home className="w-4 h-4 text-[#0271f1]" />
            <span>Return to Hub</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
