"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoModalProps {
  videoUrl: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && videoUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-black"
          >
            <iframe
              src={videoUrl}
              width="100%"
              height="500"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Video Modal"
              allowFullScreen
            />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-white text-xl font-bold"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};