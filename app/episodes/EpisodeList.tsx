"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Episode } from "../types/episode";

// Dynamically import ReactPlayer with SSR disabled
const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

interface EpisodeListProps {
  episodes: Episode[];
}

export default function EpisodeList({ episodes }: EpisodeListProps) {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  // Modal backdrop variants for animation
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Modal content variants for animation
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <>
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 sm:px-6 lg:px-8">
        {episodes.map((episode) => (
          <motion.div
            key={episode.id}
            className="group relative bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:border-white transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedEpisode(episode)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 relative z-10 truncate">
              {episode.title}
            </h2>
            {episode.description && (
              <p className="text-gray-400 mb-4 relative z-10 text-sm sm:text-base line-clamp-2">
                {episode.description}
              </p>
            )}
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <ReactPlayer
                url={episode.youtube_url}
                controls
                width="100%"
                height="100%"
                className="absolute top-0 left-0"
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()} // Typed event
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEpisode && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setSelectedEpisode(null)}
          >
            <motion.div
              className="relative bg-gray-900 rounded-xl p-4 sm:p-6 w-full max-w-3xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()} // Typed event
            >
              <button
                className="absolute top-2 right-2 text-white hover:text-yellow-400 transition-colors"
                onClick={() => setSelectedEpisode(null)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {selectedEpisode.title}
              </h2>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <ReactPlayer
                  url={selectedEpisode.youtube_url}
                  controls
                  width="100%"
                  height="100%"
                  playing
                  className="absolute top-0 left-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}