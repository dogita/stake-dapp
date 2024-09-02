import React, { useState } from 'react';
import image1 from "../assets/ETH.png"
import image2 from "../assets/bscScan.png"
import { useNetwork, useSwitchNetwork } from 'wagmi';


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// Sample images for the dropdown options
const images = [
  { src: image1, label: 'Ethereum' },
  { src: image2, label: 'BSC' },


];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(images[0]); // Default selected image

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const handleSwitch = (newChainId) => {
    if (switchNetwork) {
      switchNetwork(newChainId);
    } else {
      console.error("Switching network is not supported by the current wallet");
    }
  };


  const handleImageSelect = (image) => {
    setSelectedImage(image); // Update the selected image
    setIsOpen(false); // Close the dropdown after selection
  };
console.log("qqwww" , chain);
  return (
    <div className="relative hidden md:block ">
      {/* Dropdown Button showing the selected image */}
      <button
        className="flex items-center md:text-[14px] lg:text-[16px] gap-2 bg-[#d946ef] text-white font-bold py-1 px-2 rounded-full focus:outline-none "
        onClick={toggleDropdown}
      >
        <img
          src={selectedImage.src}
          alt={selectedImage.label}
          className="w-8 h-8 rounded-full"
        />
        {selectedImage.label}
        <ExpandMoreIcon/>
      </button>

      {/* Dropdown Menu with images */}
      {isOpen && (
        <div
          className="transition-all duration-300 opacity-100 max-h-40 overflow-auto absolute bg-white rounded-xl border-2 border-[#d946ef] shadow-lg mt-2 w-40 z-10"
        >
          <ul>
            {images.map((image) => (
              <li
                key={image.label}
                className="flex text-black items-center gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() =>  {handleImageSelect(image)
                  if(image.label === "Ethereum"){
                   console.log(image.label)
                   handleSwitch(1)

                 }else{
                   handleSwitch(56)
                 }
                  
               }}
              >
                <img
                  src={image.src}
                  alt={image.label}
                  className="w-8 h-8 rounded-full"
                />
                {image.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
