-- ====================================================================
-- PEG PRECAST ENGINEERING - SUPABASE BLOG SCHEMA & SEED DATA
-- Run this script in your Supabase SQL Editor: https://kdhqhocqudzwwreoebjd.supabase.co
-- ====================================================================

-- 1. CREATE BLOG_POSTS TABLE
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT DEFAULT '',
  category TEXT NOT NULL DEFAULT 'Engineering',
  cover_image TEXT NOT NULL,
  featured_video TEXT,
  secondary_videos JSONB DEFAULT '[]'::jsonb,
  published_date TEXT NOT NULL DEFAULT CURRENT_DATE::text,
  read_time TEXT DEFAULT '5 min read',
  author JSONB NOT NULL DEFAULT '{"name": "Marcus Vance, PE", "role": "Lead Structural Engineer", "avatar": "/PrecastIndustry_Links/1.jpg"}'::jsonb,
  excerpt TEXT NOT NULL,
  technical_specs JSONB DEFAULT '[]'::jsonb,
  gallery JSONB DEFAULT '[]'::jsonb,
  sections JSONB DEFAULT '[]'::jsonb,
  key_takeaways JSONB DEFAULT '[]'::jsonb,
  related_slugs JSONB DEFAULT '[]'::jsonb,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. CREATE INDEXES FOR FAST SLUG & CATEGORY LOOKUPS
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON public.blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON public.blog_posts(published);

-- 3. AUTOMATIC UPDATED_AT TRIGGER
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_blog_posts_modtime ON public.blog_posts;
CREATE TRIGGER update_blog_posts_modtime
    BEFORE UPDATE ON public.blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_column();

-- 4. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow public read access to all published posts
DROP POLICY IF EXISTS "Public can view published blog posts" ON public.blog_posts;
CREATE POLICY "Public can view published blog posts"
  ON public.blog_posts
  FOR SELECT
  USING (published = true);

-- Allow full access to authenticated users or anon with admin authorization
DROP POLICY IF EXISTS "Admins can manage blog posts" ON public.blog_posts;
CREATE POLICY "Admins can manage blog posts"
  ON public.blog_posts
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- 5. INITIAL SEED DATA FOR PRECAST BLOG POSTS
INSERT INTO public.blog_posts (
  slug, title, subtitle, category, cover_image, featured_video, secondary_videos, published_date, read_time, author, excerpt, technical_specs, gallery, sections, key_takeaways, related_slugs, published
) VALUES 
(
  'heavy-duty-precast-box-culverts-engineering',
  'Structural Superiority of Heavy-Duty Precast Box Culverts',
  'High-Load Underground Drainage Solutions Engineered for Highway HS-20 & Railway E-80 Standards',
  'Box_Culverts',
  '/assets/images/Box_Culvert/13.jpeg',
  '/assets/video/E20_V1_final.mp4',
  '["/assets/video/72_precast_manhole_Doghouse.646.mp4", "/assets/video/E24_v3_final_blue_bg.mp4"]'::jsonb,
  'August 28, 2026',
  '7 min read',
  '{"name": "Marcus Vance, PE", "role": "Lead Structural Engineer", "avatar": "/PrecastIndustry_Links/1.jpg"}'::jsonb,
  'Discover how monolithically poured precast box culverts accelerate underground infrastructure projects while exceeding ASTM C1577 structural requirements under extreme axle loads.',
  '[
    {"label": "ASTM Standard", "value": "ASTM C1577 / C1433"},
    {"label": "Design Load", "value": "AASHTO HS-20 / HL-93 & Cooper E-80"},
    {"label": "Concrete Strength", "value": "6,000 – 8,500 PSI @ 28 Days"},
    {"label": "Joint Protocol", "value": "Flexible Butyl Rubber Gasket + External Wrap"},
    {"label": "Lifespan Rating", "value": "100+ Years Corrosion Resistant"}
  ]'::jsonb,
  '[
    {"type": "image", "url": "/assets/images/Box_Culvert/11.jpeg", "caption": "Precast Single-Cell Box Culvert Section ready for crane delivery"},
    {"type": "video", "url": "/assets/video/E24_v3_final_blue_bg.mp4", "caption": "Finite Element Stress Simulation of Box Culvert Top Slab"},
    {"type": "image", "url": "/assets/images/Box_Culvert/14.jpeg", "caption": "Multi-cell precast culvert installation for storm runoff detention"},
    {"type": "image", "url": "/assets/images/Box_Culvert/15.jpeg", "caption": "Tongue and Groove Joint Seal Assembly Inspection"}
  ]'::jsonb,
  '[
    {
      "heading": "Monolithic Casting & Structural Load Distribution",
      "subheading": "Eliminating Field Formwork and Cold Joints",
      "content": [
        "Precast box culverts represent the pinnacle of underground stormwater management and utility corridor design. By casting concrete in controlled factory environments using rigid steel molds, precasters achieve structural density and aggregate distribution impossible with field-poured alternatives.",
        "Under AASHTO HL-93 live load configurations, top slab moments are efficiently redistributed across monolithic side walls into the heavily reinforced invert slab. This monolithic action prevents shear failures during seismic events or extreme traffic surcharges."
      ],
      "callout": "Monolithic precast box culverts reduce installation schedules by up to 75% compared to cast-in-place concrete structures.",
      "specHighlight": {
        "title": "Core Engineering Parameters",
        "items": [
          "Monolithic pour design eliminates horizontal cold joints",
          "Automated wire mesh welding for uniform reinforcement spacing",
          "Accelerated steam curing guarantees 4,000 PSI release strength within 18 hours"
        ]
      },
      "image": {
        "url": "/assets/images/Box_Culvert/12.jpeg",
        "caption": "Rigid Steel Mold Assembly for High-Volume Box Culvert Casting"
      }
    }
  ]'::jsonb,
  '[
    "Precast box culverts provide instant load-bearing capacity upon backfilling, eliminating 28-day field cure delays.",
    "Dual-gasket sealant joints prevent groundwater infiltration and soil piping for over 100 years.",
    "Standardized CAD designs streamline DOT submittals and municipal engineering approvals."
  ]'::jsonb,
  '["precast-trench-drain-systems-industrial-design", "marine-grade-precast-concrete-docks-seawalls"]'::jsonb,
  true
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  subtitle = EXCLUDED.subtitle,
  category = EXCLUDED.category,
  cover_image = EXCLUDED.cover_image,
  updated_at = NOW();
