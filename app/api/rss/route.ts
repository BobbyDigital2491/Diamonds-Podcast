/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@supabase/supabase-js';
import { Episode } from '@/app/types/episode';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  const { data: episodes, error } = await supabase
    .from('episodes')
    .select('*') as { data: Episode[] | null; error: any };

  if (error || !episodes) {
    return NextResponse.json({ error: 'Failed to fetch episodes' }, { status: 500 });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>My Podcast</title>
      <link>https://your-site.vercel.app</link>
      <description>Podcast Description</description>
      ${episodes
        .map(
          (e) => `
        <item>
          <title>${e.title}</title>
          <description>${e.description || ''}</description>
          <enclosure url="${e.youtube_url}" type="video/mp4" />
          <pubDate>${new Date(e.release_date).toUTCString()}</pubDate>
          <link>${e.youtube_url}</link>
        </item>`
        )
        .join('')}
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}