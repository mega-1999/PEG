import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://kdhqhocqudzwwreoebjd.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_kfU-eUvQl3jyXOv0spRBuA_S4Strrq_";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
