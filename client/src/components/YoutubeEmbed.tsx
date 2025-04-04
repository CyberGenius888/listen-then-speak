import { useEffect, useRef } from "react";

interface YoutubeEmbedProps {
  videoId: string;
}

export default function YoutubeEmbed({ videoId }: YoutubeEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="relative pb-[56.25%] h-0">
      <iframe 
        ref={iframeRef}
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
