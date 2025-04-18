export interface Episode {
    id: number;
    title: string;
    description: string | null;
    youtube_url: string; // e.g., "https://www.youtube.com/watch?v=dQw4w9WgXcQ" or "dQw4w9WgXcQ"
    release_date: string; // ISO string from Supabase
  }