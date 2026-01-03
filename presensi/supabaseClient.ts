
import { createClient } from '@supabase/supabase-js';

// Netlify akan membaca variabel ini jika Anda mengaturnya di Dashboard Netlify.
// Jika tidak diatur, aplikasi akan menggunakan fallback (kunci yang Anda berikan).
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://gxlaurnrleqyguzludmo.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'sb_publishable_f1c7SdnEsbrB4XGh3bPZjA_zOz5Ys5g';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
