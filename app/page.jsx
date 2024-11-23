"use client";
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDownToLine } from "lucide-react";
import { motion } from "framer-motion";

// Components
import Photo from '@/components/Photo';
import Socials from '@/components/Socials';
import Stats from '@/components/Stats';

const Home = () => {
  // Download CV
  const handleDownloadCV = () => {
    const pdfUrl = '/assets/curriculum/CV - Javier Pineda.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV - Javier Pineda.pdf';
    link.click();
  }

  // Animation for the text
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-full lg:mt-[-20px]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">

          {/* Presentacion */}
          <div className="text-center lg:text-left grid grid-cols-1 order-2 lg:order-none">
            <span className="text-xl lg:text-left mb-1">Software Developer</span>
            <h1 className="h1 mb-6">Hello, I&apos;m <br /><span className="text-accent lg:tracking-[-4px]">
                {startAnimation && (
                  <TypeAnimation
                    sequence={[
                      'Javier_Pineda',
                      1000,
                      'FullStack_Dev', 
                      1000,
                      'UI/UX_Design',
                      1000,
                      'JS_Expert',
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                )}
              </span>
            </h1>
            <p className='max-w-[500px] mb-9 text-black/80'>I excel at creating elegant digital experiences and advanced applications.</p>

            {/* Download CV and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
                onClick={handleDownloadCV}
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition duration-500 ease-out border-2 border-accent rounded-[8px] shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-accent group-hover:translate-x-0 ease">
                  <ArrowDownToLine className="w-6 h-6" />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-accent transition-all duration-500 transform group-hover:translate-x-full ease">Download CV</span>
                <span className="relative invisible">Download CV</span>
              </motion.button>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
                className="mb-8 xl:mb-0"
              >
                <Socials 
                  containerStyles="flex gap-6 mb-8 xl:mb-0" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" 
                />
              </motion.div>
            </div>
          </div>

          {/* Foto */}
          <div className='order-1 lg:order-none mb-8 lg:mb-0'>
            <Photo />
          </div>
        </div>
      </div>

      {/* Estadisticas sobre mi */}
      <Stats />
    </section>
  );
};

export default Home;