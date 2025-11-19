"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./BusinessPlaylist.module.css";

type PlaylistItem = {
  id: number;
  number: string;
  title: string;
  duration: string;
  isPlaying?: boolean;
};

interface BusinessPlaylistProps {
  mainTitle: string;
  highlightTitle: string;
  subtitle: string;
  videoThumbnail?: string;
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
  videoThumbnail,
  videoUrl,
  playlistTitle,
  playlistInfo,
  playlistItems,
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeItemId, setActiveItemId] = useState<number | null>(
    playlistItems.find((item) => item.isPlaying)?.id || null
  );

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  const handlePlaylistItemClick = (itemId: number) => {
    setActiveItemId(itemId);
    setIsVideoPlaying(true);
  };

  return (
    <section className={`${styles.section} py-16`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className={`${styles.mainHeading} text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4`}>
            {mainTitle}{" "}
            <span className="text-[#0fdac2]">{highlightTitle}</span>{" "}
            Struggle to Stay Visible
          </h2>
          <p className={`${styles.subtitle} text-lg md:text-xl text-white/80 max-w-3xl mx-auto`}>
            {subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Video Section */}
          <div className={styles.videoSection}>
            <div className={styles.videoContainer}>
              {!isVideoPlaying ? (
                <div className={styles.videoThumbnail}>
                  {videoThumbnail && (
                    <Image
                      src={videoThumbnail}
                      alt="Video thumbnail"
                      fill
                      className={styles.thumbnailImage}
                    />
                  )}
                  <div className={styles.playButtonOverlay}>
                    <button
                      onClick={handlePlayClick}
                      className={styles.playButton}
                      aria-label="Play video"
                    >
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="40" cy="40" r="40" fill="#FF0000" />
                        <path
                          d="M32 24L32 56L56 40L32 24Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className={styles.videoTextOverlay}>
                    <p className={styles.overlayText}>
                      Your Smart Marketing AI Team like a behind-the-scenes ent:
                      planning promotions, visuals.
                    </p>
                  </div>
                </div>
              ) : (
                <div className={styles.videoPlayer}>
                  <iframe
                    className={styles.iframe}
                    src={`${videoUrl}?autoplay=1`}
                    title="Video Player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>

          {/* Playlist Section */}
          <div className={styles.playlistSection}>
            <div className={styles.playlistHeader}>
              <h3 className={styles.playlistTitle}>{playlistTitle}</h3>
              <p className={styles.playlistMeta}>
                <span className={styles.lessonCount}>
                  {playlistInfo.totalLessons} lesson
                </span>
                <span className="mx-2">·</span>
                <span>{playlistInfo.totalDuration}</span>
              </p>
            </div>

            {/* Playlist Items */}
            <div className={styles.playlistItems}>
              {playlistItems.map((item) => {
                const isActive = activeItemId === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => handlePlaylistItemClick(item.id)}
                    className={`${styles.playlistItem} ${
                      isActive ? styles.activeItem : ""
                    }`}
                  >
                    <div className={styles.itemLeft}>
                      <div className={styles.playIcon}>
                        {isActive ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect x="6" y="4" width="2" height="12" fill="currentColor" />
                            <rect x="12" y="4" width="2" height="12" fill="currentColor" />
                          </svg>
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="10" cy="10" r="10" fill="currentColor" />
                            <path
                              d="M8 6L8 14L14 10L8 6Z"
                              fill="white"
                            />
                          </svg>
                        )}
                      </div>
                      <div className={styles.itemContent}>
                        <span className={styles.itemNumber}>{item.number}</span>
                        <span className={styles.itemTitle}>{item.title}</span>
                      </div>
                    </div>
                    <span className={styles.itemDuration}>{item.duration}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPlaylist;
