import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fcvhjgkuaixshelphpna.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjdmhqZ2t1YWl4c2hlbHBocG5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MDU3ODUsImV4cCI6MjA3MjI4MTc4NX0.Km71gsulrKPu1JVwMqdPqX6Qk8sC1Ka9c1YFhiOpIVw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
