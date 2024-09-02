import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import logo from "../assets/logo1.png";
import { motion } from 'framer-motion';

import Languageoption from './Languageoption';

import i18next from 'i18next'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import MobileDropdown from './MobileDropdown';
import { useNetwork, useSwitchNetwork } from 'wagmi';

const handleClick=(e)=>{
  i18next.changeLanguage(e.target.value)
}

const MobNav = ({ setisOpen }) => {
  const { t } = useTranslation();
 const address = "" ;
   
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

    let isConnect = false
    

    return (
        <div className='block md:hidden'>

            <div className='fixed inset-0 bg-black px-[20px] py-[20px]'>
                <div className='relative h-full'>
                    <div className='flex justify-between items-center'>
                    <div className='flex justify-center  items-center'>
                    <Link to='/'>    <img src={logo} className=' max-w-[35%]' alt="pic" />

                  
                  
                   </Link>
                   </div>

                        <XMarkIcon
                            // onClick={() => setisOpen(false)} className='w-[35px] text-[#00ACD2]'
                            onClick={() => setisOpen(false)} className='w-[35px] text-white'

                        />
                    </div>
                    
                        


                    <div className='flex justify-center pt-20 '>
                        <motion.div
                            whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
                            transition={{ duration: 1.2, ease: 'easeInOut' }}
                            initial='hidden'
                            style={{ opacity: 0 }}
                            viewport={{ once: true }}
                        >

                            <div
                                className='flex flex-col gap-[20px]'
                            >
                              <MobileDropdown/>
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

                        </motion.div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default MobNav