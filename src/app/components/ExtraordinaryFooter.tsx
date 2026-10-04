"use client";

import React from "react";
import PegOriginalFooter from "./PegOriginalFooter";
import PrecastTechFooter from "./PrecastTechFooter";

export default function ExtraordinaryFooter() {
  return (
    <footer className="relative w-full bg-[#002f7a] text-white border-t-2 border-slate-100 overflow-hidden select-none">
      {/* 1ST FOOTER: ORIGINAL PEG MASTER FOOTER */}
      {/* <PegOriginalFooter /> */}

      {/* 5PX SOLID WHITE SEPARATOR LINE */}
      {/* <div className="w-full h-[5px] bg-white shadow-xs" /> */}

      {/* 2ND FOOTER: PRECASTTECH DIGITAL OS FOOTER */}
      <PrecastTechFooter />
    </footer>
  );
}

export { PegOriginalFooter, PrecastTechFooter };