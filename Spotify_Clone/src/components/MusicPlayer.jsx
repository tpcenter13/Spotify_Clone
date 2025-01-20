import React from 'react';
import { Shuffle, SkipBack, Play, SkipForward, Repeat } from 'lucide-react';

const MusicPlayer = () => {
  const nextSongs = [
    { title: "Be Humble", artist: "Kendrick Lamar", duration: "3:53", image: "/assets/Drake.png" },
    { title: "Location", artist: "Khalid", duration: "3:53", image: "/assets/Postmalone.png" },
    { title: "Old School", artist: "Tupac", duration: "3:53", image: "/assets/Weeknd.png" },
    { title: "IM The one", artist: "Dj Khaled", duration: "3:53", image: "/assets/bruno.png" },
    { title: "Rockstar", artist: "Post Malone", duration: "4:02", image: "/assets/rockstar.png" },
    { title: "Blinding Lights", artist: "The Weeknd", duration: "3:20", image: "/assets/blindinglights.png" }
  ];

  return (
    <div className="w-[350px] min-h-[500px] bg-black rounded-lg">
      {/* Now Playing Header */}
      <div className="p-4">
        <h2 className="text-white text-2xl font-bold mb-4">Now Playing</h2>
        <img 
          src="/assets/Img1.png" 
          alt="Now Playing" 
          className="w-full h-52 rounded-lg mb-4"
        />
        
        {/* Current Track Card */}
        <div className="bg-blue-600 p-4 rounded-lg mb-6">
          <h3 className="text-white text-2xl font-bold mb-1">Top 50</h3>
          <p className="text-white mb-4">PHILIPPINES</p>
          
          {/* Progress Bar */}
          <div className="flex items-center gap-2 text-white text-sm">
            <span>0:00</span>
            <div className="flex-1 h-1 bg-white/30 rounded-full">
              <div className="w-0 h-full bg-white rounded-full"></div>
            </div>
            <span>3:54</span>
          </div>
          
          {/* Controls */}
          <div className="flex justify-between items-center mt-4 mb-5">
            <Shuffle className="text-white w-5 h-5 cursor-pointer" />
            <SkipBack className="text-white w-5 h-5 cursor-pointer" />
            <button className="bg-white rounded-full p-2 hover:bg-gray-200">
              <Play className="w-6 h-6" fill="black" />
            </button>
            <SkipForward className="text-white w-5 h-5 cursor-pointer" />
            <Repeat className="text-white w-5 h-5 cursor-pointer" />
          </div>
        </div>
        
        {/* Next Songs */}
        <div className="overflow-y-auto max-h-80 ">
          <h3 className="text-white text-lg font-bold mb-4">Next Songs</h3>
          <div className="space-y-4">
            {nextSongs.map((song, index) => (
              <div key={index} className="flex items-center gap-3 cursor-pointer hover:bg-[#282828] p-2 rounded-md">
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
    </div>
  );
};

export default MusicPlayer;
