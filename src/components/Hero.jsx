import React from 'react';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] max-w-7x1 mx-auto flex
      flex-row items-start gap-5`}>
        <div className='flex flex-col 
        justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 
          violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}
          text-white`}>Hi, I'm &nbsp;
            <span className='text-[#915eff]'>Tanner</span></h1>
          <p className={`${styles.heroSubText} mt-2
          text-white-100`}>I am the &nbsp;
            <span className='text-[#915eff]'>Full Stack Developer</span> <br className='sm:block hidden'/> behind &nbsp; 
            <span className='text-[#915eff]'>ODD ONE DESIGNS</span> Where I use technology to infuse
            whimsy, and eccentricity to create indelible digital solutions. With a focus on transforming
            the tech landscape, I blend innovation, expertise, and a touch of absurdity to create standout
            experiences that defy convention and captivate audiences.</p>
        </div>
      </div>
        <ComputersCanvas />

        <div className='absolute bottom-20 xs:bottom-15 sm:bottom-0 md:bottom-0 
          lg:bottom-0 xl:bottom-0 w-full flex 
          justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 
            border-secondary flex justify-center items-start p-2 '>  
              <motion.div //this is the animation for the arrow
              animate={{ 
                    y: [0, 24, 0],// this is the animation for the arrow
                  }}
                  transition={{ //this transition is for the animation
                      duration: 1.5,
                      repeat: "infinity",
                      repeatType: "reverse",
                  }}
              className='w-3 h-3 rounded-full bg-[#915eff] mb-1' 
              />
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero