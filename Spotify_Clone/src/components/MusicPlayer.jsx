import React, { useState, useRef, useEffect } from "react";
import { Shuffle, SkipBack, Play, Pause, SkipForward, Repeat } from "lucide-react";

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const nextSongs = [
    { title: "Be Humble", artist: "Kendrick Lamar", duration: "2:58", image: "/assets/kendrick.jpg", src: "/assets/Behumble.mp3" },
    { title: "Location", artist: "Khalid", duration: "3:39", image: "/assets/th.jpg", src: "/assets/location.mp3" },
    { title: "Old School", artist: "Tupac", duration: "4:39", image: "/assets/tupac.jpg", src: "/assets/OldSchool.mp3" },
    { title: "Rockstar", artist: "Post Malone", duration: "4:02", image: "/assets/Postmalone.png", src: "/assets/Rockstar.mp3" },
    { title: "Blinding Lights", artist: "The Weeknd", duration: "3:23", image: "/assets/Weeknd.png", src: "/assets/BlindingLights.mp3" },
  ];

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const nextIndex = (currentSongIndex + 1) % nextSongs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    const prevIndex = (currentSongIndex - 1 + nextSongs.length) % nextSongs.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  };

  const handleSongClick = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;

    // Update the duration of the song
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    // Update the current playback time
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [currentSongIndex]);

  const handleProgressBarClick = (e) => {
    const progressBar = e.target;
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;
    audioRef.current.currentTime = newTime;
  };

  return (
    <div className="w-[350px] min-h-[500px] bg-black rounded-lg">
      {/* Now Playing Header */}
      <div className="p-4">
        <h2 className="text-white text-2xl font-bold mb-4">Now Playing</h2>
        <img
          src={nextSongs[currentSongIndex].image}
          alt={nextSongs[currentSongIndex].title}
          className="w-full h-52 rounded-lg mb-4"
        />

        {/* Current Track Card */}
        <div className="bg-blue-600 p-4 rounded-lg mb-6">
          <h3 className="text-white text-2xl font-bold mb-1">{nextSongs[currentSongIndex].title}</h3>
          <p className="text-white mb-4">{nextSongs[currentSongIndex].artist}</p>

          {/* Progress Bar */}
          <div className="flex items-center gap-2 text-white text-sm">
            <span>{formatTime(currentTime)}</span>
            <div
              className="flex-1 h-1 bg-white/30 rounded-full cursor-pointer"
              onClick={handleProgressBarClick}
            >
              <div
                className="h-full bg-white rounded-full"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              ></div>
            </div>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mt-4 mb-5">
            <Shuffle className="text-white w-5 h-5 cursor-pointer" />
            <SkipBack className="text-white w-5 h-5 cursor-pointer" onClick={handlePrev} />
            <button
              className="bg-white rounded-full p-2 hover:bg-gray-200"
              onClick={handlePlayPause}
            >
              {isPlaying ? <Pause className="w-6 h-6" fill="black" /> : <Play className="w-6 h-6" fill="black" />}
            </button>
            <SkipForward className="text-white w-5 h-5 cursor-pointer" onClick={handleNext} />
            <Repeat className="text-white w-5 h-5 cursor-pointer" />
          </div>
        </div>

        {/* Next Songs */}
        <div className="overflow-y-auto max-h-80">
          <h3 className="text-white text-lg font-bold mb-4">Next Songs</h3>
          <div className="space-y-4">
            {nextSongs.map((song, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 cursor-pointer hover:bg-[#282828] p-2 rounded-md ${
                  index === currentSongIndex ? "bg-[#383838]" : ""
                }`}
                onClick={() => handleSongClick(index)}
              >
                <img
                  src={song.image}
                  alt={song.title}
                  className="w-12 h-12 rounded-md"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate">{song.title}</p>
                  <p className="text-gray-400 text-sm truncate">{song.artist}</p>
                </div>
                <span className="text-gray-400 text-sm shrink-0">{song.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={nextSongs[currentSongIndex].src}
        onEnded={handleNext}
        autoPlay={isPlaying}
      />
    </div>
  );
};

export default MusicPlayer;
