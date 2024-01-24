import { twMerge } from 'tailwind-merge';

const VideoBackground: React.FC = () => {

  return (
    <div
      className={
        twMerge(
          "fixed top-0 left-0 z-[1] w-full h-full bg-black",
        )
      }
    >
      <video
        className="absolute w-full h-full object-cover"
        loop
        muted
        preload="metadata"
        autoPlay
        playsInline
      >
        <source src="./video/video-bg-4.mp4" type="video/mp4"/>
      </video>
    </div>
  );
}

export default VideoBackground;