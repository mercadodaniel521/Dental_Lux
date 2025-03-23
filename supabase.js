// Inicializar el cliente de Supabase
const supabaseUrl = 'https://okdvrezlnfdopzahepls.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rZHZyZXpsbmZkb3B6YWhlcGxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4NDg4MTYsImV4cCI6MjA1MzQyNDgxNn0.NHZq5NSsp0uNZr8KHG-DMwns6nh3PKxo8w6LMox4Og8';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Exportar el cliente para usarlo en otros archivos
window.supabaseClient = supabase;
