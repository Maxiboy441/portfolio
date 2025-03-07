import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'

const Hero = () => {
  return (
    <div className='pb-20 pt-36 h-screen relative' id='about'>
        {/* IDEA: Check if new spotlight is better */}
        <div className='absolute inset-0'>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>
        
        {/* IDEA: Check if gemini or sparkles effect in the backgoud would be cool and possible*/}

        <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 md:px-12'>
            <img 
                src='/assets/Max.jpeg' 
                alt='Max Portrait'
                className='w-42 h-42 rounded-full border-2 border-purple-500 object-cover'
            />
            <p className='text-xl font-medium opacity-80 mt-6'>Software Development made in Germany</p>
            <h1 className='text-4xl font-bold mt-6 mb-4 md:text-5xl md:leading-tight'>
                Young, Motivated, and Ready to Innovate with Modern Technologies
            </h1>
            <TextGenerateEffect className='text-lg mt-6 opacity-90 max-w-3xl' words=' Hello, I&apos;m Max, a full-stack junior web developer in my 3rd year of apprenticeship in Germany. Eager to learn, take responsibility, and bring fresh ideas to the table.'/>
        </div>
    </div>
  )
}

export default Hero
