import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Typewriter } from 'react-simple-typewriter'
import { ComputersCanvas } from './canvas';
const Hero = () => {

  return (
    <div className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
          {/* <div className="w-20 h-20 relative top-24 left-96 rounded-full bg-[#fcff5e]"/> */}
        </div>
        <div>
          {/* <h3 className={`${styles.heroSubText} text-white`}>Welcome , I'm <span className='text-[#915eff]'>{' '}
            <Typical
              steps={['Developer 💻', 1500, 'Designer ', 1500, 'YouTuber 📸', 1500, 'Freelancer', 1500, 'App Developer', 1500]}
              loop={Infinity}
              wrapper="b"
            />
          </span></h3> */}
          <h1 className={`${styles.heroHeadText} text-white`}>Hey👋, I'm <span className='text-[#915eff]'>{' '} 
          <Typewriter
            words={['Yash Sharma 👨‍💻', 'Web Developer 💻', 'Mobile Developer 📱', 'Youtuber 📸']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            cursorColor='white'
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1000}
            
          /></span> </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3d visuals, user, <br className="sm:block hidden" /> interfaces , mobile and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-12  w-full flex justify-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-secondary mb-1" />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Hero