"use client";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface Props {
  videoId: string;
  bookingUrl: string;
}

// Glow fires when this fraction of the video has been watched
const THRESHOLD = 0.75;

export default function VideoWithCTA({ videoId, bookingUrl }: Props) {
  const [glowing, setGlowing] = useState(false);
  const playerRef = useRef<any>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const firedRef = useRef(false);

  const hasVideo = videoId && videoId !== "YOUR_YOUTUBE_VIDEO_ID";

  useEffect(() => {
    if (!hasVideo) return;

    function initPlayer() {
      try {
        playerRef.current = new window.YT.Player("yt-player", {
          videoId,
          playerVars: { rel: 0, modestbranding: 1 },
          events: {
            onStateChange: (e: any) => {
              if (firedRef.current) return;
              if (e.data === 1) {
                // Playing — poll progress
                timerRef.current = setInterval(() => {
                  if (!playerRef.current || firedRef.current) return;
                  try {
                    const duration = playerRef.current.getDuration();
                    const current = playerRef.current.getCurrentTime();
                    if (duration > 0 && current / duration >= THRESHOLD) {
                      firedRef.current = true;
                      setGlowing(true);
                      clearInterval(timerRef.current!);
                    }
                  } catch {}
                }, 1500);
              } else {
                // Paused / ended — stop polling
                if (timerRef.current) {
                  clearInterval(timerRef.current);
                  timerRef.current = null;
                }
              }
            }
          }
        });
      } catch (err) {
        // Player init failed silently — button still works
        console.warn("[VideoWithCTA] YouTube player init failed", err);
      }
    }

    if (window.YT?.Player) {
      initPlayer();
    } else {
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      try { playerRef.current?.destroy(); } catch {}
    };
  }, [videoId, hasVideo]);

  return (
    <>
      <div className="video-wrapper">
        {hasVideo ? (
          // YT.Player replaces this div with a fully controlled iframe
          <div id="yt-player" />
        ) : (
          // Placeholder shown until a real video ID is set
          <div className="video-placeholder" aria-label="Demo video coming soon">
            <span>Demo video coming soon</span>
          </div>
        )}
      </div>
      <a
        className={`button button-dark hero-cta${glowing ? " button-glow" : ""}`}
        href={bookingUrl}
      >
        Book Your Walkthrough
      </a>
    </>
  );
}
