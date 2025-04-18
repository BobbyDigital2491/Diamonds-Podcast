/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@supabase/supabase-js';
import { Episode } from '../types/episode';
import EpisodeList from './EpisodeList';
import ProductHero from '../components/EHero';
import ResizableNavbar from '../components/ResizableNavbar';
import Footer from '../components/Footer';


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function Episodes() {
  const { data: episodes, error } = await supabase
    .from('episodes')
    .select('*')
    .order('release_date', { ascending: false }) as { data: Episode[] | null; error: any };

  if (error || !episodes) {
    return <div className="text-red-500">Error loading episodes: {error?.message}</div>;
  }

  return (
    <div>
      
      <ResizableNavbar/>
      <ProductHero/>
      <div className='mx-auto  '>
      <EpisodeList episodes={episodes} />
      </div>
      <Footer/>
    </div>
  );
}