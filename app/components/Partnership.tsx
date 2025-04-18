"use client";

import Image from "next/image";
import React from "react";

type Partnership = {
  name: string;
  description: string;
  logo: string;
  link: string;
};

const partnerships: Partnership[] = [
  {
    name: "Spotify",
    description: "Stream all episodes of Diamonds are Forever exclusively on Spotify.",
    logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
    link: "https://spotify.com/diamondsareforever",
  },
  {
    name: "Brooklyn Arts Collective",
    description: "Collaborating to amplify local artists and storytellers.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQ1BZhLELqKblm_egKUymyEKXBXoOHocWQQ&s",
    link: "https://brooklynartscollective.org",
  },
  {
    name: "Audible",
    description: "Supporting immersive storytelling with exclusive audio content.",
    logo: "https://dhjhkxawhe8q4.cloudfront.net/thomasnelson-wp/wp-content/uploads/sites/5/2023/06/27165328/AUDIBLE.png",
    link: "https://audible.com/diamondsareforever",
  },
  {
    name: "Barstool Sports",
    description: "Supporting immersive storytelling with exclusive audio content.",
    logo: "https://1000logos.net/wp-content/uploads/2022/03/Barstool-Sports-Logo.png",
    link: "https://audible.com/diamondsareforever",
  },
];

const Partnership = () => {
  return (
    <div className="w-full py-10 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">In Partnership with</h2>
        <div className="flex flex-row flex-wrap justify-center gap-6 md:flex-nowrap">
          {partnerships.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-neutral-800 rounded-lg p-4 w-full max-w-xs transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <h3 className="text-xl text-center font-semibold text-white mb-2">{partner.name}</h3>
              <p className="text-neutral-400 text-center text-sm">{partner.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partnership;