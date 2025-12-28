"use client"

import React from 'react';
import Image from 'next/image';

interface VideoCardProps {
  title: string;
  thumbnailUrl: string;
  delay: number;
}

export const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnailUrl, delay }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg border-gray-600 border-1" style={{ animationDelay: `${delay}s` }}>
      <Image src={thumbnailUrl} alt={title} width={400} height={240} className="w-full h-48 object-cover border-amber-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <h3 className="absolute bottom-0 left-0 p-4 text-white text-lg font-semibold">{title}</h3>
    </div>
  );
};