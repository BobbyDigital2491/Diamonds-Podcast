/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@supabase/supabase-js';
import { Episode } from '../types/episode';
import ResizableNavbar from '../components/ResizableNavbar';
import Footer from '../components/Footer';
import AHero from '../components/AHero';
import TextGenerate from '../components/TextGenerate';


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
      <div className='mx-auto p-6'>
      <AHero/>
      </div>
      <TextGenerate 
      duration={1}
      className=' text-center text-gray-500 dark:text-gray-400' 
      words='"Diamonds are Forever" has taken the podcasting world by storm as a hot new series, 
      captivating listeners with its fresh take on resilience, creativity, and cultural impact, 
      hosted by the electrifying Dizzy Spadez. Launched just a few months ago, the show has quickly 
      gained traction for its raw, unfiltered storytelling, diving into the untold stories of 
      trailblazers and visionaries who’ve shaped history, art, and music. With Dizzy’s magnetic 
      energy and knack for drawing out powerful narratives, the podcast has already sparked buzz 
      across platforms, earning praise as a must-listen for anyone craving authentic, 
      thought-provoking content.

      Behind the scenes, the Brooklyn-based team is a powerhouse of talent, fueling the podcast’s meteoric rise. Producer Llama Lo3 (D-Lo) and editor Charles Milles work tirelessly to deliver episodes that are both sonically pristine and emotionally gripping, while creative director F.Classic crafts a bold visual identity that’s as striking as the stories themselves. Drawing from Brooklyn’s vibrant cultural pulse, the team amplifies diverse voices, weaving narratives that resonate deeply with a growing global audience—each episode a testament to their seamless collaboration and innovative approach.

      The buzz around "Diamonds are Forever" shows no signs of slowing down, with listeners hailing it as a game-changer in the podcasting landscape. Fans on social media rave about the show’s ability to blend history and modernity, featuring gripping interviews with artists, activists, and historians that illuminate the enduring power of human perseverance. As this hot new podcast continues to climb the charts, it’s clear that "Diamonds are Forever" is not just a fleeting trend but a cultural force, proving that true stories of brilliance—like diamonds—shine brightest under pressure.'/>
      <Footer/>
    </div>
  );
}