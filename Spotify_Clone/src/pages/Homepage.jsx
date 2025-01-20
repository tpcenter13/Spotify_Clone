import React from 'react';
import Sidebar from '../components/Sidebar';
import { CgMenuRound } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Homepage() {
  const imageArray = [
    "Img1.png", "image2.jpg", "image3.jpg", "image4.jpg", 
    "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg",
    "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg", 
    "image13.jpg", "image14.jpg", "image15.jpg", "image16.jpg", 
    "image17.jpg", "image18.jpg", "image19.jpg", "image20.jpg"
  ];

  return (
    <div className="flex h-screen bg-[#121212]">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col h-full">
        {/* Header */}
        <header className="bg-black p-8 flex flex-wrap justify-between items-center">
          {/* Search Bar Container */}
          <div className="flex-1 flex justify-center order-2 md:order-1">
            <div className="flex items-center bg-[#1f1f1f] text-gray-400 px-5 py-2 rounded-md w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search your favorite music & artist here"
                className="bg-transparent flex-grow text-gray-400 outline-none placeholder-gray-500"
              />
              <button className="bg-green-500 p-2 rounded-md flex items-center justify-center w-28 h-9 hover:bg-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.61 0 7.5 7.5 0 0 0 10.61 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Sign In and Login Buttons Container */}
          <div className="flex gap-4 text-base md:text-lg order-1 md:order-2">
            <button className="text-white px-3 py-2 rounded-md font-semibold">
              Sign In
            </button>
            <button className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600 font-semibold w-28 md:w-36">
              Login
            </button>
          </div>
        </header>

        {/* Content area with library and main content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Library Section */}
          <div className="w-[390px] p-4 border-r border-[#282828] overflow-y-auto flex flex-col">
            {/* Library Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">Your library</span>
                <CgMenuRound className="text-2xl text-white" />
              </div>
              <div className="flex items-center gap-4">
                <button className="hover:bg-[#282828] p-2 rounded-full">
                  <IoIosArrowForward className="text-2xl text-white" />
                </button>
                <button className="hover:bg-[#282828] p-2 rounded-full">
                  <IoMdAdd className="text-2xl text-white" />
                </button>
              </div>
            </div>

            {/* Create Playlist Card */}
            <div className="bg-[#242424] rounded-lg p-6 mb-4">
              <h2 className="text-xl font-bold text-white mb-2">Create your first playlist</h2>
              <p className="text-gray-400 mb-4">It's easy we will help you</p>
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
                Create Playlist
              </button>
            </div>

            {/* Browse Podcast Card */}
            <div className="bg-[#242424] rounded-lg p-6 mb-auto">
              <h2 className="text-xl font-bold text-white mb-2">Let's find some podcast to follow</h2>
              <p className="text-gray-400 mb-4">We'll keep you updated on new episodes</p>
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
                Browse Podcast
              </button>
            </div>

            {/* Bottom Text */}
            <div className="text-gray-400 text-xs mt-4 px-2">
              {/* Group 1 */}
              <div className="mb-2">
                <span className="mr-4">Legal</span>
                <span className="mr-4">Safety & Privacy Center</span>
                <span className="mr-4">Privacy Policy</span>
                <span className="mr-4">Cookies</span>
              </div>
              
              {/* Group 2 */}
              <div className="mb-2">
                <span className="mr-4">About Ads</span>
                <span className="mr-4">Accessibility</span>
              </div>

              {/* Group 3 */}
              <div>
                <span className="mr-2 font-bold">Cookies</span>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 h-[845px] overflow-y-auto scrollbar-hide bg-[#121212]">
            {/* Cards container with scrolling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {imageArray.map((image, index) => (
                <div
                  key={index}
                  className={`bg-[#121212] rounded-lg p-6 ${index === 0 ? 'col-span-2 md:col-span-3 lg:col-span-4' : ''}`}
                >
                  <Link to={`/somepath/${index + 1}`}> {/* Link with route */}
                    <img 
                      src={`/assets/${image}`} 
                      alt={`Card ${index + 1}`} 
                      className="w-full h-full object-cover rounded-lg" 
                    />
                  </Link>
                </div>
              ))}
            </div>
            <Footer/>
          </div>

          {/* Newsection inside the cards */}
          <div className="bg-[#121212] p-6 mt-6">
            <h2 className="text-xl font-bold text-white mb-2">Newsection inside the cards</h2>
            <p className="text-gray-400 mb-4">Newsection inside the cards.</p>
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
              Newsection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
