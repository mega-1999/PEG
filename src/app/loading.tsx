import React from "react";
import { RefreshCw, ShieldCheck } from "lucide-react";

export default function RootLoading() {
  return (
    <div className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center space-y-4">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-4 border-[#023380]/10 border-t-[#023380] animate-spin" />
        <ShieldCheck className="w-6 h-6 text-[#0271f1] absolute" />
      </div>
      <div className="text-center space-y-1">
        <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-[#023380]">
          Precast Engineering Group
        </p>
        <p className="font-mono text-[10px] text-[#0271f1] tracking-widest uppercase">
          Initializing Telemetry Pipeline...
        </p>
      </div>
    </div>
  );
}
