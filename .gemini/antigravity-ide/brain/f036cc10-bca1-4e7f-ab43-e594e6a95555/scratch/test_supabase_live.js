const { createClient } = require('@supabase/supabase-js');

const url = 'https://kdhqhocqudzwwreoebjd.supabase.co';
const key = 'sb_publishable_kfU-eUvQl3jyXOv0spRBuA_S4Strrq_';

const supabase = createClient(url, key);

async function test() {
  console.log("Testing Supabase fetch...");
  const { data, error } = await supabase.from('blog_posts').select('*');
  console.log("Data count:", data ? data.length : 0);
  console.log("Data:", data);
  console.log("Error:", error);
}

test();
