"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

interface Video {
  id: number;
  title: string;
  videoUrl: string;
  videoLink?: string;
}

interface SearchContextType {
  videos: Video[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredVideos: Video[];
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  {/*useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:3000/get_all_video");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      }
    };
    fetchVideos();
  }, []);*/}

   useEffect(() => {
      const hardcodedVideos = [
        {
          id: 44,
          title: "Vector Field",
          videoUrl: "/img1.png",
          videoLink: "https://player.vimeo.com/video/1149780772?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", // Use embed link
          createdAt: "2025-12-28T07:09:21.965Z",
        },
        {
          id: 45,
          title: "The Chaos Game",
          videoUrl:
            "/img2.png",
          videoLink: "https://player.vimeo.com/video/1149781359?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
          createdAt: "2025-12-28T07:10:00.000Z",
        },
        {
          id: 46,
          title: "Cylinder Surface",
          videoUrl:
            "/img3.png",
          videoLink: "https://player.vimeo.com/video/1149780656?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
          createdAt: "2025-12-28T07:12:00.000Z",
        },
       {
              id: 47,
              title: "Velocity Problem",
              videoUrl:
                "/img4.png",
              videoLink: "https://player.vimeo.com/video/1149781476?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
              createdAt: "2025-12-28T07:12:00.000Z",
            },
        {
                      id: 48,
                      title: "Velocity Problem",
                      videoUrl:
                        "/img5.png",
                      videoLink: "https://player.vimeo.com/video/1149781263?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
                      createdAt: "2025-12-28T07:12:00.000Z",
                    },
      ];

      setVideos(hardcodedVideos);
    }, []);


  const filteredVideos = useMemo(() => {
    if (!searchQuery) {
      return videos; // Show all videos if query is empty
    }
    return videos.filter(video =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, videos]);

  return (
    <SearchContext.Provider value={{ videos, searchQuery, setSearchQuery, filteredVideos }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}