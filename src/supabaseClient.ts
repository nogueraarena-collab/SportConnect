import { createClient } from '@supabase/supabase-js'

// 🚨 Sustituye los valores por los de tu proyecto en Supabase
export const supabase = createClient(
  'https://ezkifoxqbdnotdojfdos.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6a2lmb3hxYmRub3Rkb2pmZG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2OTQ3MzMsImV4cCI6MjA3NzI3MDczM30.15GHgbdu_qWXDp4cASsUdejA-YvyzbIuw8HpgdL09ys'
)