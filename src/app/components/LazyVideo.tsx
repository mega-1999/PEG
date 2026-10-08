"use client";

import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';

export interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src?: string;
  sources?: Array<{ src: string; type?: string }>;
  poster?: string;
  rootMargin?: string;
  threshold?: number | number[];
  autoPlayWhenInView?: boolean;
  pauseWhenOutOfView?: boolean;
  wrapperClassName?: string;
  placeholderBg?: string;
  aspectRatioClass?: string;
}

/**
 * LazyVideo - Production-grade viewport-aware video player.
 * 
 * Directives implemented:
 * 1. IntersectionObserver with custom rootMargin (default 200px) delays network requests until near viewport.
 * 2. Injects real video source only upon scroll proximity.
 * 3. Plays strictly when in view and pauses when scrolled out of view or tab is hidden to conserve CPU/battery.
 * 4. Provides placeholder poster and background skeleton to eliminate layout shifts and black frames.
 */
export const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(function LazyVideo(
  {
    src,
    sources,
    poster,
    rootMargin = '200px',
    threshold = 0.15,
    autoPlayWhenInView = true,
    pauseWhenOutOfView = true,
    wrapperClassName = 'relative w-full h-full overflow-hidden',
    placeholderBg = 'bg-[#001c4b]',
    aspectRatioClass = '',
    className = 'w-full h-full object-cover',
    muted = true,
    loop = true,
    playsInline = true,
    preload = 'none',
    onLoadedData,
    onEnded,
    ...restVideoProps
  },
  forwardedRef
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  
  // Forwarded ref compatibility
  useImperativeHandle(forwardedRef, () => localVideoRef.current as HTMLVideoElement);

  const [isInProximity, setIsInProximity] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // 1. Proximity & Visibility Observer
  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof IntersectionObserver === 'undefined') {
      setIsInProximity(true);
      setIsVisible(true);
      return;
    }

    // Proximity observer (triggers loading before entering viewport)
    const proximityObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInProximity(true);
          // Once proximity is triggered, we can disconnect this observer
          proximityObserver.disconnect();
        }
      },
      { rootMargin }
    );

    // Active visibility observer (triggers play / pause)
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    proximityObserver.observe(container);
    visibilityObserver.observe(container);

    return () => {
      proximityObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, [rootMargin, threshold]);

  // 2. Play / Pause Control based on Visibility & Document State
  useEffect(() => {
    const video = localVideoRef.current;
    if (!video || !isInProximity) return;

    const syncPlayback = () => {
      if (!autoPlayWhenInView) return;

      if (isVisible && document.visibilityState === 'visible') {
        video.muted = muted;
        video.defaultMuted = muted;
        video.playsInline = playsInline;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay catch handler without logging noisy DOM exceptions
          });
        }
      } else if (pauseWhenOutOfView) {
        video.pause();
      }
    };

    syncPlayback();

    const handleDocVisibility = () => {
      syncPlayback();
    };

    document.addEventListener('visibilitychange', handleDocVisibility);
    return () => {
      document.removeEventListener('visibilitychange', handleDocVisibility);
    };
  }, [isInProximity, isVisible, autoPlayWhenInView, pauseWhenOutOfView, muted, playsInline]);

  // 3. Loop handler to avoid end-of-stream freeze
  const handleEnded = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    if (loop) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
    if (onEnded) {
      onEnded(e);
    }
  };

  const handleDataLoaded = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setIsVideoLoaded(true);
    if (onLoadedData) {
      onLoadedData(e);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`${wrapperClassName} ${aspectRatioClass} ${placeholderBg}`}
    >
      {/* Visual Placeholder / Poster Backdrop */}
      {!isVideoLoaded && poster && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-500"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}

      {/* Lightweight subtle blueprint skeleton shimmer before video load */}
      {!isVideoLoaded && !poster && (
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse" />
      )}

      {/* Video Element - Stream URL injected upon proximity */}
      <video
        ref={localVideoRef}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        poster={poster}
        preload={isInProximity ? (preload === 'none' ? 'metadata' : preload) : 'none'}
        onLoadedData={handleDataLoaded}
        onEnded={handleEnded}
        suppressHydrationWarning
        className={`${className} transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...restVideoProps}
      >
        {isInProximity && (
          <>
            {src && <source src={src} type="video/mp4" />}
            {sources?.map((s, idx) => (
              <source key={idx} src={s.src} type={s.type || 'video/mp4'} />
            ))}
          </>
        )}
      </video>
    </div>
  );
});

export default LazyVideo;
