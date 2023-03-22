import React from 'react'
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index,title,icon }) => {
  return (
    <Tilt className="w-full md:w-3/4 px-4">
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-xl mb-8 md:mb-0"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
  )}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p
      className={styles.sectionSubText}
      >Introduction</p>
      <h2
      className={styles.sectionHeadText}
      >Overview</h2>
    </motion.div>
    <motion.p variants={fadeIn('','',.1,1)}
    className='mt-4 ml-10 text-secondary text-[17px] 
    max-w-3xl leading-[30px]'
    >
    As a devoted Full Stack Developer, my mission is to provide exceptional digital 
    solutions that masterfully combine functionality and visual appeal. Upon completing 
    the University of Arizona's Coding Bootcamp, I have refined my expertise in currently 
    used technologies, including React, Express, SQL, Node.js, JavaScript, Bootstrap, 
    Tailwind, and Git. Additionally, I have collaborated with fellow student developers 
    to create comprehensive full-stack applications in a team-oriented setting.
    </motion.p>
  <br></br>
    
    <motion.p variants={fadeIn('','',.1,1)}
    className='mt-4 ml-10 text-secondary text-[17px] 
    max-w-3xl leading-[30px]'>
    Currently seeking a challenging opportunity as a Junior Full Stack Developer,
     I am eager to contribute to your esteemed organization by 
     leveraging my technical acumen and collaborative mindset. 
     With a strong work ethic and a constant drive for learning, 
     I am prepared to tackle new projects both independently and as part of a dynamic team. 
     I am confident that my unique skill set and unwavering passion for development 
     will add significant value to any industry-leading enterprise.
    </motion.p>

    <div
    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-4 md:gap-y-10">
      {services.map((service, index) => (
        <ServiceCard  key={service.title} index={index} {...service}/>
        ))}
    </div>
    
</>
  )
}
export default SectionWrapper(About,'about')