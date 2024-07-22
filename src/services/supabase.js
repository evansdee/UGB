
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://nertagzwaxhrttjlfdbr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcnRhZ3p3YXhocnR0amxmZGJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5MDQ5MzIsImV4cCI6MjAzNjQ4MDkzMn0.Bdte3GljiHF3RvDmq-TBNkjywzSAOdj8RUq7Uj6rDqA'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase