import React from 'react';
import { FaCopyright } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";




function Footer() {
  return (
    <div> 
      {/* Footer - Inside the scrollable area */}
      <div className="bg-[#121212] mt-3 p-8">
        {/* Footer Groups Container */}
        <div className="flex space-x-28">
          {/* Group 1 */}
          <div className="flex flex-col space-y-2">
            <span className="text-gray-400 font-semibold">Company</span>
            <span className="text-gray-400">Company</span>
            <span className="text-gray-400">Jobs</span>
            <span className="text-gray-400">For the Record</span>
          </div>

          {/* Group 2 */}
          <div className="flex flex-col space-y-2">
            <span className="text-gray-400 font-semibold">Company</span>
            <span className="text-gray-400">For Artists</span>
            <span className="text-gray-400">Developers</span>
            <span className="text-gray-400">Advertising</span>
            <span className="text-gray-400">Investors</span>
            <span className="text-gray-400">Vendors</span>
          </div>

          {/* Group 3 */}
          <div className="flex flex-col space-y-2">
            <span className="text-gray-400 font-semibold">Useful links</span>
            <span className="text-gray-400">Support</span>
            <span className="text-gray-400">Free Mobile App</span>
          </div>

          {/* Group 4 */}
          <div className="flex flex-col space-y-2">
            <span className="text-gray-400 font-semibold">Useful links</span>
            <span className="text-gray-400">Premium Individual</span>
            <span className="text-gray-400">Premium Duo</span>
            <span className="text-gray-400">Premium Family</span>
            <span className="text-gray-400">Premium Students</span>
            <span className="text-gray-400">Spotify Free</span>
          </div>
        </div>

        {/* White Border Line */}
        <div className="border-t border-white mt-6 flex justify-center items-center space-x-2">
        </div>

{/* Social medias and Copyright */}
<div className="flex justify-between items-center text-white mt-3">
  {/* Group 1: Copyright and Text */}
  <div className="flex items-center">
    <FaCopyright className="mr-2" />
    <h2>2025 Spotify AB</h2>
  </div>

  {/* Group 2: Social Media Icons */}
  <div className="flex space-x-4">
    <RiInstagramFill className="text-3xl" />
    <FaFacebookSquare className="text-3xl" />
    <FaSquareXTwitter className="text-3xl" />
  </div>
</div>





      </div>
    </div>
  );
}

export default Footer;
