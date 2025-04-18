"use client";

import BentoGrid from "./components/BentoGrid";
import Footer from "./components/Footer";
import HeroSectionOne from "./components/HeroSectionOne";
import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCards";
import Partnership from "./components/Partnership";
import ResizableNavbar from "./components/ResizableNavbar";
import WordCarousel from "./components/WordCarousel";


export default function Home() {
 
  return (
    <div className="">
      <ResizableNavbar/>
      <HeroSectionOne/>
      <WordCarousel/>
      <Partnership/>
      <div className="py-10">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Top Episodes</h2>
     <BentoGrid/>
      </div>
      <InfiniteMovingCardsDemo/>
      <div className="py-10">
      <Footer/>
      </div>

    </div>
  );
}