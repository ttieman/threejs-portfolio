import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => {
    return (
        function HOC() {
            return (
                <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{once:true, amount:0.25}}
                className={`px-4 md:px-8 lg:px-20 ${styles.padding} mx-auto relative z-0 align-items-center`}
                style={{ maxWidth: '110rem' }}
                >
                    <span className='hash-span' id={idName}></span>
                
                    <Component />
                </motion.section>
            )
        }
    )
}

export default SectionWrapper