"use client";

import { useEffect, useRef } from "react";

export default function VideoPlayer({ src, poster, className, playbackRate = 1 }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const applyRate = () => {
      try {
        video.defaultPlaybackRate = playbackRate;
        video.playbackRate = playbackRate;
      } catch {}
    };

    applyRate();
    video.addEventListener("loadedmetadata", applyRate);
    video.addEventListener("play", applyRate);

    return () => {
      video.removeEventListener("loadedmetadata", applyRate);
      video.removeEventListener("play", applyRate);
    };
  }, [playbackRate]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      crossOrigin="anonymous"
      playsInline
      muted
      loop
      autoPlay
    >
      <source src={src} type="video/webm" />
    </video>
  );
}
