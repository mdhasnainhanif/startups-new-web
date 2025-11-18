"use client";

import React from "react";
import styles from "./BusinessPlaylist.module.css";

type PlaylistItem = {
  id: number;
  title: string;
  duration: string;
  isPlaying?: boolean;
};

interface BusinessPlaylistProps {
  mainTitle: string;
  highlightTitle: string;
  subtitle: string;
  videoUrl: string;
  playlistTitle: string;
  playlistInfo: {
    totalLessons: number;
    totalDuration: string;
  };
  playlistItems: PlaylistItem[];
}

const BusinessPlaylist: React.FC<BusinessPlaylistProps> = ({
  mainTitle,
  highlightTitle,
  subtitle,
  videoUrl,
  playlistTitle,
  playlistInfo,
  playlistItems,
}) => {
  return (
    <section className="py-12 bg-[#0B0B2D] text-white">
      {/* Main Heading */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          {mainTitle} <span className="text-[#00d8b6]">{highlightTitle}</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        {/* Video Section */}
        <div className="w-full">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title="Video Player"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>

        {/* Playlist Section */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-semibold">{playlistTitle}</h3>
            <p className="text-gray-400">
              {playlistInfo.totalLessons} lesson · {playlistInfo.totalDuration}
            </p>
          </div>

          {/* Playlist Items */}
          <div
            className={`flex flex-col gap-3 overflow-y-auto max-h-[350px] ${styles.scrollbar}`}
          >
            {playlistItems.map((item) => (
              <div
                key={item.id}
                className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition ${
                  item.isPlaying
                    ? "bg-[#1a1a40] border border-[#00d8b6]"
                    : "hover:bg-[#111133]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">
                    {item.isPlaying ? "⏸" : "▶️"}
                  </span>
                  <p
                    className={`text-sm ${
                      item.isPlaying ? "text-[#00d8b6] font-medium" : "text-white"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
                <span className="text-sm text-gray-400">{item.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPlaylist;
