const { createClient } = require('@supabase/supabase-js');

const url = 'https://kdhqhocqudzwwreoebjd.supabase.co';
const key = 'sb_publishable_kfU-eUvQl3jyXOv0spRBuA_S4Strrq_';
const supabase = createClient(url, key);

const posts = [
  {
    slug: "heavy-duty-precast-box-culverts-engineering",
    title: "Structural Superiority of Heavy-Duty Precast Box_Culverts",
    subtitle: "High-Load Underground Drainage Solutions Engineered for Highway HS-20 & Railway E-80 Standards",
    category: "Box_Culverts",
    cover_image: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/images/Box_Culvert/13.jpeg",
    featured_video: "https://pub-[#].dev/assets/video/E20_V1_final.mp4",
    secondary_videos: [
      "https://pub-2f3b9c4456934c568f5c9429715562aa.r2.dev/72_precast_manhole_Doghouse.646.mp4",
      "https://pub-2f3b9c4456934c568f5c9429715562aa.r2.dev/E24_v3_final_blue_bg.mp4"
    ],
    published_date: "August 28, 2026",
    read_time: "7 min read",
    author: {
      name: "Marcus Vance, PE",
      role: "Lead Structural Engineer",
      avatar: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/PrecastIndustry_Links/1.jpg"
    },
    excerpt: "Discover how monolithically poured precast box culverts accelerate underground infrastructure projects while exceeding ASTM C1577 structural requirements under extreme axle loads.",
    technical_specs: [
      { label: "ASTM Standard", value: "ASTM C1577 / C1433" },
      { label: "Design Load", value: "AASHTO HS-20 / HL-93 & Cooper E-80" },
      { label: "Concrete Strength", value: "6,000 – 8,500 PSI @ 28 Days" },
      { label: "Joint Protocol", value: "Flexible Butyl Rubber Gasket + External Wrap" },
      { label: "Lifespan Rating", value: "100+ Years Corrosion Resistant" }
    ],
    gallery: [
      {
        type: "image",
        url: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/images/Box_Culvert/11.jpeg",
        caption: "Precast Single-Cell Box_Culvert Section ready for crane delivery"
      },
      {
        type: "video",
        url: "https://pub-2f3b9c4456934c568f5c9429715562aa.r2.dev/E24_v3_final_blue_bg.mp4",
        caption: "Finite Element Stress Simulation of Box_Culvert Top Slab"
      },
      {
        type: "image",
        url: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/images/Box_Culvert/14.jpeg",
        caption: "Multi-cell precast culvert installation for storm runoff detention"
      },
      {
        type: "image",
        url: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/assets/images/Box_Culvert/15.jpeg",
        caption: "Tongue and Groove Joint Seal Assembly Inspection"
      }
    ],
    sections: [
      {
        heading: "1. Monolithic Pour vs. Cast-in-Place Structural Efficiency",
        subheading: "Quality Control in Plant-Controlled Curing Environments",
        content: [
          "Field-cast culverts are inherently susceptible to weather-induced micro-cracking, improper rebar placement, and delayed strength development. Monolithic precast box culverts manufactured under NPCA-certified factory settings guarantee precise water-cement ratios and accelerated steam curing.",
          "Our automated steel formwork system ensures strict dimensional tolerances (+/- 1/8 inch), resulting in zero field trimming and rapid job-site installation."
        ],
        callout: "Engineering Note: Precast box culverts achieve 80% design compressive strength within 48 hours of casting using optimized Type III Portland cement mixes.",
        specHighlight: {
          title: "ASTM C1577 Specification Compliance",
          items: [
            "Reinforced with grade 60 welded wire fabric (WWF) or deformed rebar cages.",
            "Hydrostatic pressure testing rated to 15 PSI without exterior membrane.",
            "Designed for zero-earth-cover up to 25 ft embankment overfill conditions."
          ]
        }
      }
    ],
    key_takeaways: [
      "Accelerates site completion by up to 75% compared to cast-in-place concrete structures.",
      "Engineered to withstand HS-20 traffic loads and Cooper E-80 heavy locomotive vibration.",
      "100-year design life backed by high-density, low-permeability concrete mix designs."
    ],
    related_slugs: [
      "precast-trench-drain-system-fea-analysis",
      "precast-manhole-systems-astm-c478"
    ],
    published: true
  },
  {
    slug: "precast-trench-drain-system-fea-analysis",
    title: "Advanced FEA Load & Hydrostatic Resistance Analysis for Heavy-Duty Precast Trench Drain Systems",
    subtitle: "Comprehensive structural validation under AASHTO H-20 / HS-20 & ASTM C857 loading specifications.",
    category: "Trenching",
    cover_image: "https://pub-2f3b9c4456934c568f5c9429715562aa.r2.dev/E25_V2_final.mp4",
    featured_video: "https://pub-2f3b9c4456934c568f5c9429715562aa.r2.dev/E25_V2_final.mp4",
    secondary_videos: [
      "https://pub-2f3b9c4456934c568f5c9429715562aa.r2.dev/E38_V3_final_blue_bg.mp4"
    ],
    published_date: "September 02, 2026",
    read_time: "8 min read",
    author: {
      name: "Marcus Vance, PE",
      role: "Lead Structural Engineer",
      avatar: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/PrecastIndustry_Links/1.jpg"
    },
    excerpt: "Deep-dive into high-capacity precast concrete trench drains engineered for industrial runoff, heavy transportation corridors, and severe chemical exposure environments.",
    technical_specs: [
      { label: "Standard Rating", value: "AASHTO M306 / ASTM C857 Class A4" },
      { label: "Concrete Mix", value: "8,500 PSI High-Density Micro-Silica" },
      { label: "Flow Velocity", value: "Up to 18.5 FPS at 1% Sloped Channels" },
      { label: "Grate Options", value: "Ductile Iron Class F (90,000 lbs proof load)" }
    ],
    gallery: [
      {
        type: "video",
        url: "https://pub-2f3b9c4456934c568f5c9429715562aa.r2.dev/E25_V2_final.mp4",
        caption: "High-Speed Dynamic Hydraulic Flow Simulation inside Channel"
      }
    ],
    sections: [
      {
        heading: "1. Hydraulic Capacity & Built-in Slope Velocity",
        content: [
          "Precast linear trench drains incorporate radius bottoms and pre-sloped channels (0.5% to 1.0%) to prevent sediment accumulation and optimize hydraulic flow.",
          "Smooth interior surfaces achieve a Manning roughness coefficient of n = 0.010, significantly outperforming rough cast-in-place concrete channels (n = 0.014)."
        ]
      }
    ],
    key_takeaways: [
      "AASHTO H-20 and HS-20 wheel-load rated structure",
      "Integral interlocking male-female joint design preventing shear key breakdown",
      "Factory-cast EPDM gasket grooves enabling 100% watertight performance"
    ],
    related_slugs: [
      "heavy-duty-precast-box-culverts-engineering",
      "precast-concrete-pipe-installation-astm-c76"
    ],
    published: true
  },
  {
    slug: "precast-concrete-pipe-installation-astm-c76",
    title: "ASTM C76 Reinforced Precast Concrete Pipe (RCP) Installation & Hydraulic Design Guidelines",
    subtitle: "Mastering Bedding Classes, Joint Sealing Protocols, and Microtunneling Jacking Force Limits",
    category: "Piping",
    cover_image: "https://pub-2f3b9c4456934c568f5c9429715562aa.r2.dev/E38_V3_final_blue_bg.mp4",
    featured_video: "https://pub-2f3b9c4456934c568f5c9429715562aa.r2.dev/E38_V3_final_blue_bg.mp4",
    secondary_videos: [],
    published_date: "September 08, 2026",
    read_time: "6 min read",
    author: {
      name: "Marcus Vance, PE",
      role: "Lead Structural Engineer",
      avatar: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/PrecastIndustry_Links/1.jpg"
    },
    excerpt: "Comprehensive technical manual covering ASTM C76 Class I through Class V reinforced concrete pipe (RCP), joint deflection limits, and backfill compaction requirements.",
    technical_specs: [
      { label: "Pipe Standard", value: "ASTM C76 / AASHTO M170" },
      { label: "Class Rating", value: "Class I, II, III, IV, V (D-Load up to 3,000)" },
      { label: "Joint Specification", value: "ASTM C443 Rubber O-Ring Gaskets" },
      { label: "Diameter Range", value: "12 inch to 144 inch Nominal ID" }
    ],
    gallery: [],
    sections: [
      {
        heading: "1. ASTM C76 D-Load Classification and Structural Strength",
        content: [
          "Reinforced Concrete Pipe (RCP) is categorized into five strength classes based on 0.01-inch crack D-Load and ultimate load capacity. Class IV and V pipes are specified for deep trench fills under heavy airport runway and rail embankment loads."
        ]
      }
    ],
    key_takeaways: [
      "Flexible rubber gasket joints accommodate up to 2 degrees of longitudinal angle deflection.",
      "Exceeds 100-year design service life without flexible conduit deflection issues.",
      "Monolithic circular steel reinforcement cage delivers maximum circumferential tensile strength."
    ],
    related_slugs: [
      "heavy-duty-precast-box-culverts-engineering",
      "precast-manhole-systems-astm-c478"
    ],
    published: true
  },
  {
    slug: "precast-manhole-systems-astm-c478",
    title: "ASTM C478 Precast Concrete Manhole Systems: Monolithic Base & Doghouse Installation",
    subtitle: "Infiltration Prevention, Buoyancy Anti-Flotation Calculations, and Drop Structure Design",
    category: "Manhole",
    cover_image: "https://pub-2f3b9c4456934c568f5c9429715562aa.r2.dev/72_precast_manhole_Doghouse.646.mp4",
    featured_video: "https://pub-2f3b9c4456934c568f5c9429715562aa.r2.dev/72_precast_manhole_Doghouse.646.mp4",
    secondary_videos: [],
    published_date: "September 12, 2026",
    read_time: "9 min read",
    author: {
      name: "Marcus Vance, PE",
      role: "Lead Structural Engineer",
      avatar: "https://pub-506b16bcde4f4fa8849e4eb8030acc3b.r2.dev/PrecastIndustry_Links/1.jpg"
    },
    excerpt: "Engineering guide for ASTM C478 circular precast manholes, doghouse base retrofits, resilient boots, and anti-buoyancy extended footings in high groundwater zones.",
    technical_specs: [
      { label: "Manhole Standard", value: "ASTM C478 / AASHTO M199" },
      { label: "Boot Connector", value: "ASTM C923 Flexible Rubber Boot Seals" },
      { label: "Joint Sealant", value: "ASTM C990 Preformed Bituminous Strip" },
      { label: "Compressive Strength", value: "4,000 – 6,000 PSI Minimum" }
    ],
    gallery: [],
    sections: [
      {
        heading: "1. Monolithic Base vs. Field-Invert Casting",
        content: [
          "Precast manhole bases with integral benching cast under factory control eliminate invert displacement, reduce hydraulic turbulence, and ensure zero groundwater infiltration."
        ]
      }
    ],
    key_takeaways: [
      "Doghouse precast bases allow seamless installation over active utility mainlines.",
      "Anti-buoyancy extended base lip eliminates hydrodynamic uplift risk in saturated soils.",
      "ASTM C923 boot seals prevent pipe-to-manhole interface shear failure."
    ],
    related_slugs: [
      "heavy-duty-precast-box-culverts-engineering",
      "precast-trench-drain-system-fea-analysis"
    ],
    published: true
  }
];

async function syncAll() {
  console.log("Pushing all precast blogs to Supabase public.blog_posts...");
  
  for (const post of posts) {
    const payload = {
      slug: post.slug,
      title: post.title,
      subtitle: post.subtitle,
      category: post.category,
      cover_image: post.cover_image,
      featured_video: post.featured_video,
      secondary_videos: post.secondary_videos,
      published_date: post.published_date,
      read_time: post.read_time,
      author: post.author,
      excerpt: post.excerpt,
      technical_specs: post.technical_specs,
      gallery: post.gallery,
      sections: post.sections,
      key_takeaways: post.key_takeaways,
      related_slugs: post.related_slugs,
      published: true,
      updated_at: new Date().toISOString()
    };

    const { error } = await supabase.from('blog_posts').upsert(payload, { onConflict: 'slug' });
    if (error) {
      console.error(`Error upserting ${post.slug}:`, error.message);
    } else {
      console.log(`✓ Successfully synced: ${post.title}`);
    }
  }
  console.log("Done!");
}

syncAll();
