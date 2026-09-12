import { getAssetUrl } from "@/lib/utils";

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface BlogGalleryItem {
  type: "image" | "video";
  url: string;
  caption: string;
}

export interface ContentSection {
  heading: string;
  subheading?: string;
  content: string[];
  callout?: string;
  specHighlight?: {
    title: string;
    items: string[];
  };
  image?: {
    url: string;
    caption: string;
  };
}

export interface PrecastBlogPost {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  coverImage: string;
  featuredVideo?: string;
  secondaryVideos?: string[];
  publishedDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  technicalSpecs: TechnicalSpec[];
  gallery: BlogGalleryItem[];
  sections: ContentSection[];
  keyTakeaways: string[];
  relatedSlugs: string[];
}

const RAW_PRECAST_BLOG_POSTS: PrecastBlogPost[] = [
  {
    slug: "heavy-duty-precast-box-culverts-engineering",
    title: "Structural Superiority of Heavy-Duty Precast Box_Culverts",
    subtitle: "High-Load Underground Drainage Solutions Engineered for Highway HS-20 & Railway E-80 Standards",
    category: "Box_Culverts",
    coverImage: "/assets/images/Box_Culvert/13.jpeg",
    featuredVideo: "/assets/video/E20_V1_final.mp4",
    secondaryVideos: [
      "/assets/video/72_precast_manhole_Doghouse.646.mp4",
      "/assets/video/E24_v3_final_blue_bg.mp4"
    ],
    publishedDate: "August 28, 2026",
    readTime: "7 min read",
    author: {
      name: "Marcus Vance, PE",
      role: "Lead Structural Engineer",
      avatar: "/PrecastIndustry_Links/1.jpg"
    },
    excerpt: "Discover how monolithically poured precast box culverts accelerate underground infrastructure projects while exceeding ASTM C1577 structural requirements under extreme axle loads.",
    technicalSpecs: [
      { label: "ASTM Standard", value: "ASTM C1577 / C1433" },
      { label: "Design Load", value: "AASHTO HS-20 / HL-93 & Cooper E-80" },
      { label: "Concrete Strength", value: "6,000 – 8,500 PSI @ 28 Days" },
      { label: "Joint Protocol", value: "Flexible Butyl Rubber Gasket + External Wrap" },
      { label: "Lifespan Rating", value: "100+ Years Corrosion Resistant" }
    ],
    gallery: [
      {
        type: "image",
        url: "/assets/images/Box_Culvert/11.jpeg",
        caption: "Precast Single-Cell Box_Culvert Section ready for crane delivery"
      },
      {
        type: "video",
        url: "/assets/video/E24_v3_final_blue_bg.mp4",
        caption: "Finite Element Stress Simulation of Box_Culvert Top Slab"
      },
      {
        type: "image",
        url: "/assets/images/Box_Culvert/14.jpeg",
        caption: "Multi-cell precast culvert installation for storm runoff detention"
      },
      {
        type: "image",
        url: "/assets/images/Box_Culvert/15.jpeg",
        caption: "Tongue and Groove Joint Seal Assembly Inspection"
      }
    ],
    sections: [
      {
        heading: "1. The Precast Advantage Over Cast-in-Place Concrete",
        subheading: "Precision Plant Manufacturing Eliminates Field Weather Delays",
        content: [
          "Traditional cast-in-place culvert construction often succumbs to unpredictable weather conditions, formwork shifting, and extended cure times that hold up vital road construction.",
          "Monolithic precast box culverts are manufactured under strict NPCA certified plant environments. Automated batching systems control water-cement ratios down to ±1%, delivering concrete compressive strengths exceeding 7,000 PSI prior to jobsite placement.",
          "Contractors achieve up to 80% faster installation cycles, setting up to 200 linear feet of culvert per day using single-crane pick operations."
        ],
        callout: "Engineered Fact: Precast box culverts can be backfilled and subjected to full traffic loads within 24 hours of placement.",
        specHighlight: {
          title: "Design Parameters",
          items: [
            "Span dimensions from 4' to 16' width",
            "Rise configurations from 3' to 12' height",
            "Custom skewed ends & headwall integrated units",
            "Built-in lifting anchors engineered for safe crane rigging"
          ]
        }
      },
      {
        heading: "2. Advanced Finite Element Analysis & Load Distribution",
        subheading: "Resisting Dynamic Impact Loads and Extreme Earth Overburden",
        content: [
          "Underground precast structures must withstand both dead loads from deep soil cover and heavy live loads from passing freight trucks and locomotives.",
          "Our engineering team uses advanced structural modeling to optimize rebar placement, minimizing slab thickness while maximizing shear resistance at corner haunches.",
          "Integral corner haunches redistribute bending moments from top slabs into sidewalls, preventing localized stress cracking over decades of thermal expansion and contraction."
        ],
        image: {
          url: "/assets/images/Box_Culvert/12.jpeg",
          caption: "Precision Engineered Corner Haunch Rebar Configuration"
        }
      },
      {
        heading: "3. Watertight Joint Engineering & Environmental Compliance",
        subheading: "Zero Exfiltration and Infiltration Guarantees",
        content: [
          "Subsurface stormwater networks demand complete joint integrity to prevent sinkholes and groundwater contamination.",
          "Our box culvert sections utilize tongue-and-groove joint profiles engineered with pre-formed flexible butyl rubber sealant complying with ASTM C990. For severe hydraulic heads, external elastomeric wraps (ASTM C877) are applied around outer perimeters."
        ]
      }
    ],
    keyTakeaways: [
      "ASTM C1577 compliant precast box culverts deliver immediate structural capacity upon installation.",
      "Controlled curing environments guarantee 100+ year service life in aggressive soil chemistries.",
      "Reduces road closure timelines by 75% compared to on-site cast concrete."
    ],
    relatedSlugs: [
      "modular-precast-utility-trenching-systems",
      "precast-retaining-wall-systems-soil-stabilization",
      "ultra-high-performance-precast-concrete-structures"
    ]
  },
  {
    slug: "modular-precast-utility-trenching-systems",
    title: "Modular Precast Utility Trenching Systems for Subsurface Networks",
    subtitle: "Heavy-Duty Cable & Pipeline Protection with Removable Cover Slabs for Rapid Access",
    category: "Utility Trenches",
    coverImage: "/assets/images/trench-forms-01-5001.JPG",
    featuredVideo: "/assets/video/E25_V2_final.mp4",
    secondaryVideos: [
      "/assets/video/E34_V2_final.mp4"
    ],
    publishedDate: "August 22, 2026",
    readTime: "6 min read",
    author: {
      name: "Elena Rostova, PE",
      role: "Infrastructure Systems Specialist",
      avatar: "/PrecastIndustry_Links/3.jpg"
    },
    excerpt: "Explore how precast utility trenches safeguard high-voltage electrical, fiber optic, and industrial piping networks with H-20 loading capabilities and instant accessibility.",
    technicalSpecs: [
      { label: "Load Classification", value: "AASHTO H-20 / HS-20 Traffic Rated" },
      { label: "Channel Depth", value: "12\" to 72\" Interior Depth Options" },
      { label: "Cover Types", value: "Precast Concrete, Galvanized Steel Grates, Cast Iron" },
      { label: "Concrete Mix", value: "Self-Consolidating Concrete (SCC) 7,500 PSI" },
      { label: "Drainage Feature", value: "Sloped Inverts & Knockouts for Sump Connection" }
    ],
    gallery: [
      {
        type: "image",
        url: "/assets/images/trench-forms-01-5001.JPG",
        caption: "Precast Utility Trench Formwork Assembly"
      },
      {
        type: "video",
        url: "/assets/video/E34_V2_final.mp4",
        caption: "Modular Trench Interlocking Connection & Lid Removal Video Showcase"
      },
      {
        type: "image",
        url: "/assets/images/a04.JPG",
        caption: "Substation Electrical Cable Raceway Trenching Installation"
      }
    ],
    sections: [
      {
        heading: "1. Protecting Mission-Critical Utility Conduits",
        subheading: "Eliminating Direct Burial Hazards for Power & Telecom",
        content: [
          "Direct burial of electrical lines and industrial fluid pipes leaves infrastructure vulnerable to accidental excavator strikes, soil settling, and rodent infestation.",
          "Precast utility trenching creates a permanent armored subterranean corridor. Removable traffic-rated cover slabs allow maintenance crews to inspect, upgrade, or add cables without damaging surrounding pavement."
        ],
        callout: "Utility Protection Standard: Manufactured to meet NEMA and IEEE standards for power distribution substations and data center campuses."
      },
      {
        heading: "2. Precision Interlocking & Water Management Integration",
        subheading: "Preventing Water Stagnation in Underground Cable Runs",
        content: [
          "Water accumulation inside utility trenches reduces cable lifespan and presents electrical hazard risks. Precast channels incorporate integral sloped invert channels and factory cast knockouts for sumps and oil-water separators.",
          "Male-female interlocking end joints align perfectly during placement, forming tight runs that resist differential settlement across soft subgrades."
        ]
      }
    ],
    keyTakeaways: [
      "Provides accessible, future-proof utility corridors for substations, industrial plants, and transit hubs.",
      "Traffic-rated cover options accommodate forklift, heavy truck, and aircraft ground loads.",
      "Factory-installed divider walls enable power and communications separation in a single trench."
    ],
    relatedSlugs: [
      "heavy-duty-precast-box-culverts-engineering",
      "precast-mold-formwork-design-engineering",
      "ultra-high-performance-precast-concrete-structures"
    ]
  },
  {
    slug: "precast-retaining-wall-systems-soil-stabilization",
    title: "Engineered Precast Retaining Wall Systems & Soil Stabilization",
    subtitle: "Mechanically Stabilized Earth (MSE) & Cantilever Wall Panels for Extreme Topography",
    category: "Retaining Walls",
    coverImage: "/assets/images/PAIPING.2_-_Copy.png",
    featuredVideo: "/assets/video/E38_V3_final_blue_bg.mp4",
    publishedDate: "August 15, 2026",
    readTime: "8 min read",
    author: {
      name: "David Chen, SE",
      role: "Principal Geotechnical & Structural Engineer",
      avatar: "/PrecastIndustry_Links/5.jpg"
    },
    excerpt: "An architectural and structural deep dive into precast MSE retaining walls, gravity block systems, and soil-nail facing panels designed for highway corridors and steep grades.",
    technicalSpecs: [
      { label: "Wall System Type", value: "MSE, Modular Block, Cantilever & Segmental" },
      { label: "Max Heights", value: "Up to 50 ft with Geogrid Reinforcement" },
      { label: "Finish Options", value: "Custom Form Liner Textures, Ashlar, Granite Finish" },
      { label: "Freeze-Thaw Durability", value: "Air Entrained Concrete 4.5% – 7.5%" },
      { label: "Seismic Design", value: "Category D, E, & F Compliant" }
    ],
    gallery: [
      {
        type: "image",
        url: "/assets/images/PAIPING.2_-_Copy.png",
        caption: "Precast Retaining Wall Infrastructure Section Analysis"
      },
      {
        type: "video",
        url: "/assets/video/E38_V3_final_blue_bg.mp4",
        caption: "Structural Wall Panel Lifting & Placement Demonstration"
      },
      {
        type: "image",
        url: "/assets/csd8.1_-_Copy.png",
        caption: "Precast Facing Panels with Geogrid Mechanical Connection"
      }
    ],
    sections: [
      {
        heading: "1. Mechanics of Mechanically Stabilized Earth (MSE) Walls",
        subheading: "Harmonizing Soil Mechanics and Precast Facing Panels",
        content: [
          "MSE walls combine precast concrete facing panels with high-tensile geogrid or metallic soil reinforcement strips to retain massive soil fills along highway embankments.",
          "Precast facing panels act as a durable, aesthetic protective skin while transferring lateral earth pressures into compacted structural backfill zones."
        ],
        callout: "Seismic Resilience: Modular precast wall panels absorb seismic vibrations without brittle cracking, making them ideal for high-risk earthquake zones."
      },
      {
        heading: "2. Architectural Form Liners & Long-Term Weathering Resistance",
        subheading: "Combining Structural Integrity with Visual Appeal",
        content: [
          "Infrastructure projects no longer have to compromise on aesthetic beauty. Precision precast manufacturing utilizes custom polyurethane form liners to replicate natural cut stone, fractured fin, or modern geometric patterns.",
          "Air-entrained 6,500 PSI concrete mixes protect wall surfaces from deicing salts, freeze-thaw degradation, and acid rain."
        ]
      }
    ],
    keyTakeaways: [
      "MSE precast panels provide rapid construction along tight transportation corridors.",
      "Flexible soil-reinforcement design handles severe surcharge loads and high seismic accelerations.",
      "Custom architectural finishes enhance public infrastructure visual appeal."
    ],
    relatedSlugs: [
      "marine-grade-precast-concrete-docks-seawalls",
      "heavy-duty-precast-box-culverts-engineering",
      "ultra-high-performance-precast-concrete-structures"
    ]
  },
  {
    slug: "marine-grade-precast-concrete-docks-seawalls",
    title: "Marine-Grade Precast Concrete Docks & Coastal Infrastructure",
    subtitle: "Sulfate-Resistant Concrete Formulations for High-Salinity Environments and Wave Impact",
    category: "Marine Systems",
    coverImage: "/assets/images/10_FT_LOW_DOME.117.png",
    featuredVideo: "/assets/video/6029794_Lofoten_Drone_Ocean_Sea_By_Kristian_Ozer_Kettner_Artlist_HD.mp4",
    publishedDate: "August 10, 2026",
    readTime: "7 min read",
    author: {
      name: "Captain Sarah Jenkins, PE",
      role: "Marine Infrastructure Engineer",
      avatar: "/PrecastIndustry_Links/7.jpg"
    },
    excerpt: "Explore marine-grade precast concrete seawall panels, floating dock pontoons, and pile caps engineered with silica fume and epoxy-coated rebar to withstand harsh ocean environments.",
    technicalSpecs: [
      { label: "Exposure Class", value: "ACI 318 C2 Severe Chloride Environment" },
      { label: "Concrete Admixtures", value: "Silica Fume, Fly Ash, Corrosion Inhibitor" },
      { label: "Reinforcement", value: "Epoxy-Coated, Stainless Steel, or GFRP Rebar" },
      { label: "Wave Impact Loading", value: "Engineered for 100-Year Storm Wave Surge" },
      { label: "Water Permeability", value: "< 1,000 Coulombs (ASTM C1202)" }
    ],
    gallery: [
      {
        type: "image",
        url: "/assets/images/10_FT_LOW_DOME.117.png",
        caption: "Marine Heavy Precast Structure Section Rendering"
      },
      {
        type: "video",
        url: "/assets/video/6029794_Lofoten_Drone_Ocean_Sea_By_Kristian_Ozer_Kettner_Artlist_HD.mp4",
        caption: "Coastal Precast Marine Structure Drone Site Inspection Video"
      }
    ],
    sections: [
      {
        heading: "1. Conquering Corrosion in Marine Environments",
        subheading: "High-Density Concrete Formulations Resist Salt Penetration",
        content: [
          "Saltwater intrusion poses the ultimate threat to reinforced concrete structures. Chlorides penetrate porous concrete, rusting internal steel rebar and causing catastrophic spalling.",
          "Marine-grade precast concrete utilizes low water-cement ratios (w/c < 0.35) combined with silica fume and calcium nitrite corrosion inhibitors. This dense micro-structure blocks chloride ion migration, protecting internal reinforcement for over a century."
        ],
        callout: "Marine Grade Spec: Permeability tests consistently measure under 800 Coulombs according to ASTM C1202 standards."
      },
      {
        heading: "2. Precast Seawalls, Pier Caps & Floating Pontoon Systems",
        subheading: "Precision Engineering for Tidal Fluctuations and Extreme Surge",
        content: [
          "Precast marina systems and sea defense walls are engineered to absorb wave energy without displacement. Precast pile caps and tongue-and-groove seawall sheet piles are rapidly driven into place from barge cranes, drastically reducing underwater diving labor and marine habitat disruption."
        ]
      }
    ],
    keyTakeaways: [
      "Silica fume enhanced low-permeability concrete blocks salt intrusion in splash zones.",
      "GFRP and stainless steel rebar options eliminate steel oxidation risk.",
      "Precast marine modules reduce underwater construction timelines and barge rental costs."
    ],
    relatedSlugs: [
      "precast-retaining-wall-systems-soil-stabilization",
      "ultra-high-performance-precast-concrete-structures",
      "heavy-duty-precast-box-culverts-engineering"
    ]
  },
  {
    slug: "precast-mold-formwork-design-engineering",
    title: "Precast Mold & Formwork Design Engineering for Concrete Manufacturers",
    subtitle: "Custom Heavy-Duty Steel Mold Design, Modular Formwork Systems & Hydraulic Shuttering Solutions",
    category: "Mold & Form Design",
    coverImage: "/assets/images/2440_MANHOLE_CUT_VIEW.png",
    featuredVideo: "/assets/video/E20_V1_final.mp4",
    publishedDate: "August 04, 2026",
    readTime: "9 min read",
    author: {
      name: "Julian Thorne",
      role: "Director of Precast Formwork Engineering",
      avatar: "/PrecastIndustry_Links/10.jpg"
    },
    excerpt: "Discover how custom steel mold engineering, modular formwork assemblies, and precision shuttering design optimize casting turnaround and structural tolerances for precast plants.",
    technicalSpecs: [
      { label: "Mold Material", value: "Heavy-Duty Structural Steel & Modular Aluminum" },
      { label: "Form Tolerance", value: "AASHTO & NPCA Precision Formwork (±1/16\")" },
      { label: "Shuttering System", value: "Hydraulic & Magnetic Modular Side Forms" },
      { label: "Stripping Protocol", value: "Rapid-Release Tapered Core & Hinged Forms" },
      { label: "Durability Rating", value: "1,000+ Pour Reusability Guarantee" }
    ],
    gallery: [
      {
        type: "image",
        url: "/assets/images/2440_MANHOLE_CUT_VIEW.png",
        caption: "Heavy-Duty Precast Steel Formwork & Mold Assembly Blueprint"
      },
      {
        type: "image",
        url: "/assets/images/72_precast_manhole_Double_Internal_Drop.657.png",
        caption: "Custom Internal Core Mold Shuttering & Stripping Mechanism"
      }
    ],
    sections: [
      {
        heading: "1. Heavy-Duty Steel Mold Engineering for High-Cycle Casting",
        subheading: "Custom Modular Formwork Eliminates Casting Deflections",
        content: [
          "Precision precast manufacturing begins with custom-engineered steel molds designed to withstand hydrostatic concrete pressure without deflection.",
          "Hydraulic shuttering systems and magnetic side forms allow rapid setup, reducing form changeover timelines from hours to minutes while guaranteeing NPCA dimensional tolerances."
        ],
        callout: "Zero Leakage Guarantee: Precision machining on mold sealing edges prevents slurry loss and honeycomb defects.",
        specHighlight: {
          title: "Formwork Design Parameters",
          items: [
            "Reinforced steel faceplates for 1,000+ pour durability",
            "Hydraulic collapsing core molds for box culverts & manholes",
            "Self-locating magnetic side shutters for slab production",
            "Integrated high-frequency pneumatic vibrator mounting brackets"
          ]
        }
      },
      {
        heading: "2. Modular Form Systems & Rapid Stripping Mechanisms",
        subheading: "Accelerating Daily Bed Turnover in Precast Plants",
        content: [
          "Engineered tapered draft angles and hinged side walls allow overhead cranes to strip cured precast units effortlessly without edge chipping.",
          "Custom modular extension panels enable single mold assemblies to produce multiple product sizes with minimal re-tooling."
        ]
      }
    ],
    keyTakeaways: [
      "Custom heavy-duty steel molds guarantee precise dimensional tolerances over 1,000+ pours.",
      "Hydraulic collapsible cores accelerate internal form stripping for culverts and vaults.",
      "Modular formwork designs enable versatile product sizing with fast plant changeover."
    ],
    relatedSlugs: [
      "modular-precast-utility-trenching-systems",
      "ultra-high-performance-precast-concrete-structures",
      "heavy-duty-precast-box-culverts-engineering"
    ]
  },
  {
    slug: "ultra-high-performance-precast-concrete-structures",
    title: "Ultra-High-Performance Concrete (UHPC) Precast Structural Innovations",
    subtitle: "Pushing Limits with 25,000 PSI Compressive Strength & Steel Fiber Reinforced Matrix",
    category: "UHPC Engineering",
    coverImage: "/assets/images/Manhole_Type_1.2.674.png",
    featuredVideo: "/assets/video/E25_V2_final.mp4",
    publishedDate: "July 28, 2026",
    readTime: "8 min read",
    author: {
      name: "Dr. Aris Thorne, PhD",
      role: "Advanced Materials Scientist",
      avatar: "/PrecastIndustry_Links/12.jpg"
    },
    excerpt: "An in-depth analysis of UHPC precast components—delivering unprecedented compressive strength, ductile flexural performance, and ultra-thin slender structural profiles.",
    technicalSpecs: [
      { label: "Compressive Strength", value: "18,000 – 30,000 PSI (120–200 MPa)" },
      { label: "Flexural Strength", value: "2,000 – 4,500 PSI (15–30 MPa)" },
      { label: "Fiber Content", value: "2% by Volume High-Tensile Steel Micro-Fibers" },
      { label: "Chloride Ion Permeability", value: "< 250 Coulombs (Virtually Impermeable)" },
      { label: "Weight Reduction", value: "Up to 60% Weight Savings vs Standard Precast" }
    ],
    gallery: [
      {
        type: "image",
        url: "/assets/images/Manhole_Type_1.2.674.png",
        caption: "UHPC High-Strength Precast Component Cutaway Analysis"
      },
      {
        type: "video",
        url: "/assets/video/E20_V1_final.mp4",
        caption: "UHPC Structural Load Testing & Flexural Ductility Video Showcase"
      }
    ],
    sections: [
      {
        heading: "1. The Nanotechnology Behind UHPC Strength",
        subheading: "Particle Packing Density and Micro-Steel Fiber Matrix",
        content: [
          "UHPC represents a monumental evolution in cementitious material science. By eliminating coarse aggregates and optimizing particle packing density down to the nanometer scale, UHPC achieves compressive strengths up to 30,000 PSI.",
          "High-tensile steel micro-fibers distributed throughout the matrix provide strain-hardening ductile flexural behavior, eliminating traditional stirrup reinforcement requirements in thin sections."
        ],
        callout: "Ductile Performance: Unlike conventional concrete which breaks brittly, UHPC exhibits structural ductility similar to structural steel under extreme overloads."
      },
      {
        heading: "2. Slender Bridges, Heavy Industrial Connections & Long-Span Slabs",
        subheading: "Lighter Shipping Weights and Unmatched Corrosion Resistance",
        content: [
          "Because UHPC provides extreme strength in slim cross-sections, precast elements weigh up to 60% less than conventional concrete equivalents. This allows longer spans, reduced crane sizing, and dramatically lower freight costs across interstate transport."
        ]
      }
    ],
    keyTakeaways: [
      "UHPC delivers compressive strengths exceeding 25,000 PSI with steel micro-fiber ductility.",
      "Enables ultra-slender precast structural profiles with 60% reduced dead load.",
      "Near-zero porosity provides immune defense against deicing salts and chemical exposure."
    ],
    relatedSlugs: [
      "heavy-duty-precast-box-culverts-engineering",
      "marine-grade-precast-concrete-docks-seawalls",
      "precast-mold-formwork-design-engineering"
    ]
  }
];

export const PRECAST_BLOG_POSTS: PrecastBlogPost[] = RAW_PRECAST_BLOG_POSTS.map(post => ({
  ...post,
  coverImage: getAssetUrl(post.coverImage),
  featuredVideo: post.featuredVideo ? getAssetUrl(post.featuredVideo) : undefined,
  secondaryVideos: post.secondaryVideos?.map(getAssetUrl),
  author: {
    ...post.author,
    avatar: getAssetUrl(post.author.avatar),
  },
  gallery: post.gallery.map(g => ({
    ...g,
    url: getAssetUrl(g.url),
  })),
  sections: post.sections.map(s => ({
    ...s,
    image: s.image ? { ...s.image, url: getAssetUrl(s.image.url) } : undefined,
  }))
}));

export function getBlogPostBySlug(slug: string): PrecastBlogPost | undefined {
  return PRECAST_BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slugs: string[]): PrecastBlogPost[] {
  return PRECAST_BLOG_POSTS.filter((post) => slugs.includes(post.slug));
}
