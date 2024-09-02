import React, { useEffect, useState } from 'react'
import logo from "../assets/logo1.png";
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import MobNav from './MobNav'

import Dropdown from './Dropdown';
import Languageoption from './Languageoption';
// import Web3 from 'web3';
// import { useWeb3Modal } from '@web3modal/wagmi/react'
// import { useAccount, useDisconnect } from 'wagmi'

import i18next from 'i18next'
import { useWeb3Modal } from '@web3modal/react';
import { useAccount } from 'wagmi';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const handleClick=(e)=>{
  i18next.changeLanguage(e.target.value)
}

const Navbar = () => {
    const { t } = useTranslation();
    const { open } = useWeb3Modal()
    const { address } = useAccount()
    // const { disconnect } = useDisconnect()
    // const address = "";
    const[wallet , setWallet] = useState("Connect Wallet");
    function extractFirstAndLastFive(address) {
        const firstFive = address.slice(0, 5);
        const lastFive = address.slice(-5);
        return firstFive + "..." + lastFive;
      }

    const links = [
        
        'Staking',
        'About',
         'RoadMap'
    ]

    const [isOpen, setisOpen] = useState(false)
    const [scrolled, setScrolled] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 60) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    // const connectWallet = async () => {
    //     // if (window.ethereum) {
    //       window.web3 = new Web3(window.ethereum);
    //       await window.ethereum.enable();
    //     //  await web3.eth.net.setId(networkid);
    //       const accounts = await window.web3 .eth.getAccounts();
    //       // changeNetwork();
    //       const account = accounts[0];
    //       setWallet(account.slice(0,4) + "..." + account.slice(-4));
    //       // setmyReferral("https://cryptoindexpool.com/?ref=" + account); 
    //       // setRef(account);
      
    //       console.log(account);
          
    // }


    return (
        <div>
            <div className={`static top-0 left-0 right-0 z-40 ${scrolled  ? "bg-transparent" : "bg-transparent"}`}>
                <div className='flex items-center justify-between  md:gap-1 lg:gap-4 max-w-screen-xl mx-auto px-4 md:px-16 lg:px-32 py-4 md:py-4'>
                  <div className='flex justify-center  items-center'>
                  <Link to='/'>    <img src={logo} className='  max-w-[35%] md:max-w-full md:h-[100px]' alt="pic" />

                  
                  
                   </Link>
                   </div>
                   

                        
                    
                    
                    <div className='hidden md:flex gap-4 relative '>
                    <Dropdown/>
                    <button
                onClick={() => open()}
                className=" rounded-[20px] h-[37px] sm:h-[40px] w-[125px] sm:w-[160px] overflow-hidden relative group cursor-pointer border-2 font-medium text-[12px] sm:text-[15px] bg-[#d946ef] border-[#d946ef] hover:border-[#d946ef] text-white duration-[900ms]"
              >
                <span className="absolute w-64 h-0 transition-all duration-[900ms] origin-center rotate-45 -translate-x-20 bg-[white] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-[white] transition duration-[900ms]  group-hover:text-[#d946ef] ease">
                  {address
                    ? `${address.substring(0, 10)}...`
                    : "Connect Wallet"}
                </span>
              </button>
              
            
                
                
            
                
               
                
                    </div>
                    <div className='md:hidden flex'>
                        <div className="cursor-pointer" onClick={() => setisOpen(true)} >
                            <Bars3BottomRightIcon
                                className={`h-[35px] text-[#ffffff] transition-all duration-1000 ease-in-out `}
                            />
                        </div>


                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='fixed inset-0 z-50 h-screen bg-black' >
                    <MobNav setisOpen={setisOpen} />
                </div>
            )}
        </div>
    )
}

export default Navbar