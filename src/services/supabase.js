import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ghmlxidticyjldrjqqer.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdobWx4aWR0aWN5amxkcmpxcWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5MDgyMzQsImV4cCI6MjAyNDQ4NDIzNH0.1UXURqaZDemw7WodqY7yBQKxhg79hV-e8I4oi2eA9PM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
