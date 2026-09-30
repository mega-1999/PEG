"use client";

import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, Environment, Html, ContactShadows } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Layers, Maximize, RotateCcw, Activity, Cuboid } from 'lucide-react';

// 1. YOUR 3D ASSETS DATA (Update the .glb paths to match your files)
const culvertModels = [
  {
    id: "MOD_01",
    name: "Standard Single-Cell",
    type: "Box_Culvert",
    specs: "3000mm x 3000mm x 2500mm",
    file: "/GLB/1.glb", // <-- Replace with your GLB path
  },
  {
    id: "MOD_02",
    name: "Multi-Cell Distributor",
    type: "Twin Box_Culvert",
    specs: "6000mm x 3000mm x 2500mm",
    file: "/GLB/1.glb", // <-- Replace with your GLB path
  },
  {
    id: "MOD_03",
    name: "Wingwall Assembly",
    type: "End Section",
    specs: "Flared 45-Degree Headwall",
    file: "/GLB/1.glb", // <-- Replace with your GLB path
  },
  {
    id: "MOD_04",
    name: "Skewed Culvert Segment",
    type: "Angled Box",
    specs: "15-Degree Skew Angle",
    file: "/GLB/1.glb", // <-- Replace with your GLB path
  },
  {
    id: "MOD_05",
    name: "Heavy-Duty Base Slab",
    type: "Foundation Element",
    specs: "AASHTO HS-20 Loading",
    file: "/GLB/1.glb", // <-- Replace with your GLB path
  }
];

// 2. THE 3D MODEL LOADER COMPONENT
function GLBModel({ url }: { url: string }) {
  // useGLTF automatically caches the model, making switching instant after the first load
  const { scene } : any = useGLTF(url);
  return <primitive object={scene} scale={1} />;
}

// Custom Loading Fallback inside the 3D Canvas
function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-[#1B79EE] border-t-transparent rounded-full animate-spin" />
        <span className="font-mono text-xs font-black text-[#1B79EE] tracking-widest uppercase bg-[#004aad]/80 px-4 py-2 backdrop-blur-sm">
          Compiling Precast Matrix...
        </span>
      </div>
    </Html>
  );
}

export default function InteractiveCulvertViewer() {
  const [activeModel, setActiveModel] = useState(culvertModels[0]);
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <section className="w-full min-h-[900px] py-20 bg-[#071324] text-white overflow-hidden relative">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: `linear-gradient(#1B79EE 1px, transparent 1px), linear-gradient(90deg, #1B79EE 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <div className="px-6 md:px-12 lg:px-20 relative z-10 h-full flex flex-col xl:flex-row gap-12">
        
        {/* LEFT PANEL: UI & SELECTOR HUD */}
        <div className="xl:w-1/3 flex flex-col justify-center space-y-10">
          <div>
            <div className="flex items-center gap-3 text-[#1B79EE] font-mono text-[10px] font-black uppercase tracking-[0.5em] mb-4">
              <Cuboid className="w-4 h-4 animate-pulse" /> Live CAD Matrix
            </div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-none uppercase">
              INTERACTIVE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B79EE] to-[#1B79EE]">
                TELEMETRY.
              </span>
            </h2>
            <p className="mt-4 text-[#1B79EE] font-medium leading-relaxed text-sm">
              Inspect our precast box culvert dimensions and structural geometries in real-time. Drag to rotate, scroll to zoom.
            </p>
          </div>

          {/* Model Selector Menu */}
          <div className="flex flex-col gap-3">
            {culvertModels.map((model) => (
              <button
                key={model.id}
                onClick={() => setActiveModel(model)}
                className={`group flex items-center justify-between p-4 border transition-all duration-300 text-left
                  ${activeModel.id === model.id 
                    ? 'bg-[#1B79EE]/10 border-[#1B79EE] shadow-[0_0_20px_rgba(34,211,238,0.15)]' 
                    : 'bg-white/5 border-white/10 hover:border-[#1B79EE]/50 hover:bg-white/10'
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 border transition-colors ${activeModel.id === model.id ? 'bg-[#1B79EE]/20 border-[#1B79EE] text-[#1B79EE]' : 'bg-transparent border-white/20 text-[#1B79EE] group-hover:text-white'}`}>
                    <Box className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`font-black uppercase tracking-tight ${activeModel.id === model.id ? 'text-white' : 'text-[#1B79EE]'}`}>
                      {model.name}
                    </h4>
                    <p className="font-mono text-[10px] text-[#1B79EE] tracking-widest">{model.type}</p>
                  </div>
                </div>
                
                {/* Active Indicator Pulse */}
                {activeModel.id === model.id && (
                  <Activity className="w-5 h-5 text-[#1B79EE] animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL: 3D RENDER CANVAS */}
        <div className="xl:w-2/3 h-[600px] xl:h-[800px] relative border border-[#1B79EE]/30 bg-gradient-to-b from-[#0a1b35] to-[#040b17] shadow-2xl overflow-hidden group">
          
          {/* Active Model HUD Overlay */}
          <div className="absolute top-6 left-6 z-10 pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModel.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-black/40 backdrop-blur-md border border-white/10 p-4"
              >
                <div className="font-mono text-[9px] text-[#1B79EE] uppercase tracking-widest mb-1">{activeModel.id}</div>
                <div className="text-xl font-black text-white uppercase tracking-tighter">{activeModel.name}</div>
                <div className="font-mono text-xs text-[#1B79EE] mt-2 flex items-center gap-2">
                  <Layers className="w-3 h-3" /> {activeModel.specs}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Canvas Controls Overlay */}
          <div className="absolute bottom-6 right-6 z-10 flex gap-2">
            <button 
              onClick={() => setAutoRotate(!autoRotate)}
              className={`p-3 backdrop-blur-md border transition-colors flex items-center gap-2 ${autoRotate ? 'bg-[#1B79EE]/20 border-[#1B79EE] text-[#1B79EE]' : 'bg-black/40 border-white/20 text-white hover:border-[#1B79EE]'}`}
            >
              <RotateCcw className={`w-4 h-4 ${autoRotate ? 'animate-spin-slow' : ''}`} />
              <span className="font-mono text-[9px] font-bold uppercase tracking-widest hidden sm:block">Auto-Spin</span>
            </button>
            <div className="p-3 bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center gap-2">
              <Maximize className="w-4 h-4" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-widest hidden sm:block">Scroll to Zoom</span>
            </div>
          </div>

          {/* THE WEBGL CANVAS */}
          <div className="w-full h-full cursor-move">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [4, 4, 4], fov: 45 }}>
              
              {/* Studio Lighting Environment */}
              <Environment preset="city" />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />

              <Suspense fallback={<Loader />}>
                {/* Stage automatically centers and scales the model perfectly */}
                <Stage environment="city" intensity={0.5} adjustCamera={false}>
                  <GLBModel url={activeModel.file} />
                </Stage>
                
                {/* Generates a soft, realistic shadow directly under the 3D model */}
                <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={20} blur={2} far={4} />
              </Suspense>

              {/* Interaction Controls */}
              <OrbitControls 
                makeDefault 
                autoRotate={autoRotate} 
                autoRotateSpeed={1.5} 
                enablePan={true}
                enableZoom={true}
                minDistance={2}
                maxDistance={15}
                maxPolarAngle={Math.PI / 2 + 0.1} // Prevents camera from going under the floor
              />
            </Canvas>
          </div>

        </div>

      </div>
    </section>
  );
}