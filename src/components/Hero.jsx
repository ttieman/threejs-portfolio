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
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 
          violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}
          text-white`}>Hi, I'm &nbsp;
          <span className='text-[#915eff]'>Tanner</span></h1>
          <p className={`${styles.heroSubText} mt-2
          text-white-100`}>I am the &nbsp;
          <span className='text-[#915eff]'>Full Stack Developer</span> behind &nbsp;
          <span className='text-[#915eff]'>ODD ONE DESIGNS</span> Where I use technology to infuse
          whimsy, and eccentricity to create indelible digital solutions. With a focus on transforming 
          the tech landscape, I blend innovation, expertise, and a touch of absurdity to create standout 
          experiences that defy convention and captivate audiences.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero