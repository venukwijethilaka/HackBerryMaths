"use client";

import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { SpaceBackground } from "../components/SpaceBackground";
import { VideoCard } from "../components/VideoCard";
import { useSearch } from "../context/SearchContext";
import { VideoModal } from "../components/VideoModal";

const CollectionPage: React.FC = () => {
  const { searchQuery, setSearchQuery, filteredVideos } = useSearch();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const openModal = (videoUrl: string) => setSelectedVideo(videoUrl);
  const closeModal = () => setSelectedVideo(null);

  return (
    <>
      <Navbar />
      <SpaceBackground />

      {/* Video Modal */}
      <VideoModal videoUrl={selectedVideo} isOpen={!!selectedVideo} onClose={closeModal} />

      <section className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-24 pt-[100px] ">
        <div className="mx-auto max-w-7xl">
          {/* Search Bar */}
          <div className="relative mb-8 w-full max-w-xs sm:max-w-sm md:max-w-md">
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full px-4 py-2 text-sm text-white bg-white/5 border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>

          {filteredVideos.length > 0 ? (
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredVideos.map((video, index) => (
                <div
                  key={index}
                  className="transition-transform hover:scale-105 cursor-pointer"
                  onClick={() => openModal(video.videoLink || video.videoUrl)}
                >
                  <VideoCard
                    title={video.title}
                    thumbnailUrl={video.videoUrl}
                    delay={index * 0.1}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center mt-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white">No videos found</h2>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">Try searching for something else.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CollectionPage;