import React from "react";
import Link from "next/link";

const categories = [
  "Manhole Covers",
  "Gully Gratings",
  "Heavy Traffic Gratings",
  "Access Covers",
  "Telecom & Electrical",
  "Drainage Channels",
  "Tree Grates",
  "Standard Junction Boxes",
  "FUBOX Systems",
  "Support Brackets"
];

const products = [
  {
    id: "manhole-covers",
    title: "Manhole Covers",
    description: "Available in modern designs and various resistance classes. Mega Foundries ductile iron covers are engineered securely for high-load municipal sealing and sewage networks.",
    image: "/images/products/manhole-cover.png", // Replace with your image paths
    link: "/products/manhole-covers"
  },
  {
    id: "gully-gratings",
    title: "Gully Gratings",
    description: "High-performance iron gratings supplied in multiple sizes and load classes for efficient rainwater collection on urban roads, highways, parking lots, and industrial plants.",
    image: "/images/products/gully-gratings.png",
    link: "/products/gully-gratings"
  },
  {
    id: "heavy-traffic",
    title: "Heavy Traffic Gratings",
    description: "Engineered to withstand intensive point loads up to 90 tons. The ultimate solution for heavy industrial zones, logistics hubs, airports, and dockyards.",
    image: "/images/products/heavy-traffic.png",
    link: "/products/heavy-traffic"
  },
  {
    id: "access-covers",
    title: "Access Covers for Inspection Chambers",
    description: "Versatile inspection and access solutions for water, sewage, and electrical distribution chambers. Built with airtight sealing, dual-face options, and modular sizing.",
    image: "/images/products/access-covers.png",
    link: "/products/access-covers"
  },
  {
    id: "telecom-electrical",
    title: "Fiber Optic, Telecom & Electrical Covers",
    description: "Specialized infrastructure covers offering secure access, single/articulated mechanics, and tamper-proof locking mechanisms across varying heavy-duty utility networks.",
    image: "/images/products/telecom-covers.png",
    link: "/products/telecom-covers"
  },
  {
    id: "drainage-channels",
    title: "Surface Drainage Channels",
    description: "Premium linear drainage solutions combining polymer concrete channels with solid ductile iron gratings to ensure rapid water evacuation performance.",
    image: "/images/products/drainage-channels.png",
    link: "/products/drainage-channels"
  }
];

const MegaProducts = () => {
  return (
    <section className="bg-[#121212] text-gray-200 py-16 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="border-b border-zinc-800 pb-6 mb-10">
          <h2 className="text-3xl font-light tracking-wide text-white mb-2">
            Explore <span className="font-semibold text-[#cc2221]">Mega Foundries</span> Products
          </h2>
          <p className="text-sm text-zinc-400">
            Complete line of world-class nodular ductile iron products (Fe 50007), delivering ultimate durability and engineering modernity to your infrastructure projects.
          </p>
        </div>

        {/* Categorized Quick Links Menu */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-16 text-xs uppercase tracking-wider">
          {categories.map((cat, index) => (
            <button
              key={index}
              className="px-3 py-2 border border-zinc-800 bg-[#1a1a1a] hover:bg-[#cc2221] hover:border-[#cc2221] text-zinc-300 hover:text-white transition-all duration-200 rounded-sm"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid / Row Layout */}
        <div className="space-y-20">
          {products.map((product) => (
            <div 
              key={product.id}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16 border-b border-zinc-900 pb-12 last:border-0"
            >
              {/* Product Image Wrapper Container */}
              <div className="w-full md:w-1/3 flex justify-center items-center bg-[#181818] p-6 rounded-lg border border-zinc-800/40 shadow-inner group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-56 object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback visual mock if images are loading/missing during setup
                    e.currentTarget.src = "https://via.placeholder.com/300x200/222/fff?text=Casting+Product";
                  }}
                />
              </div>

              {/* Product Content Details */}
              <div className="w-full md:w-2/3 flex flex-col items-start justify-center">
                <h3 className="text-2xl font-semibold text-white tracking-wide mb-3">
                  {product.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-2xl">
                  {product.description}
                </p>
                
                {/* Styled Red Border Action Button per the image */}
                <Link
                  href={product.link}
                  className="
                    inline-block text-xs font-bold uppercase tracking-widest text-white 
                    border border-[#cc2221] px-6 py-3 bg-transparent 
                    hover:bg-[#cc2221] transition-all duration-300 ease-in-out
                    rounded-xs
                  "
                >
                  View Products
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MegaProducts;