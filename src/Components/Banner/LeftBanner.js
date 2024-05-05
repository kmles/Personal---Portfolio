import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaInstagram,FaLinkedinIn,FaReact,FaTwitter,FaPython } from 'react-icons/fa';
import { SiReact,SiTailwindcss } from 'react-icons/si';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Frontend Developer.", "Python Developer.", "Problem-Solver."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
  return (
    <div className='w-1/2 flex flex-col gap-10'>
        <div className='flex flex-col gap-5'>
          <h4 className='text-lg font-normal'>WELCOME TO MY PORTFOLIO</h4>
          <h1 className='text-5xl font-bold text-white'>
            {" "}
            Hi, I'm {" "}
            <span className='text-red-500 capitalize'>Kamlesh Kumar</span>
          </h1>
          <h2 className='text-4xl font-bold text-white'>
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor='#ff014f'
            />
          </h2>
          <p className='text-base font-bodyFont leading-6 tracking-wide'>
          As a fresher, I'm developer with a solid foundation and dedicated to continuous learning, excellence problem-solving and seek to contribute towards the growth of a renowned organization, enhancing both the team and my own capabilities through exposure to new challenges.
          </p>
        </div>

        <div className='flex justify-between'>
          <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>Find in me</h2>
            <div className='flex gap-4'>
              <span className='bannerIcon'>
                <FaInstagram />
              </span>
              <span className='bannerIcon'>
                <FaLinkedinIn />
              </span>
              <span className='bannerIcon'>
                <FaTwitter />
              </span>
            </div>
          </div>
          <div>
          <h2 className='text-base uppercase font-titleFont mb-4'>Best Skill on</h2>
            <div className='flex gap-4'>
              <span className='bannerIcon'>
                <SiReact />
              </span>
              <span className='bannerIcon'>
                <SiTailwindcss />
              </span>
              <span className='bannerIcon'>
                <FaPython />
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LeftBanner