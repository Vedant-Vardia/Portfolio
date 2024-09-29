import gsap from 'gsap';
import React, { useState, useEffect } from 'react';

const AboutMe = () => {
  useEffect(() => {
    gsap.fromTo('#an',{opacity:0},{opacity:1})
    gsap.fromTo('.an1', { x: -150, opacity: 0},{x:0,opacity:1,delay:.5});
    gsap.fromTo('.an2', { x: 150, opacity: 0 },{x:0,opacity:1,delay:.5});
    gsap.fromTo('.an3', { x: -150, opacity: 0 },{x:0,opacity:1,delay:1});
    gsap.fromTo('.an4', { x: 150, opacity: 0 },{x:0,opacity:1,delay:1});
    gsap.fromTo('.an5', { y: -150, opacity: 0 },{y:0,opacity:1,delay:1.5});
    gsap.fromTo('.an6', { y: 150, opacity: 0 },{y:0,opacity:1,delay:1.5});

    
  }, []);

  return (
    <div className='flex bg-[#0E1630] h-screen w-full items-center justify-center pt-20 pb-20'>
      <div className='grid h-full w-[60%] grid-cols-6 grid-rows-6 gap-4'>
        <div className='an1 col-span-4 row-span-2 bg-[#b6b6f6] rounded-3xl flex justify-center items-center'>
          <h1>I am a professional</h1>
        </div>
        <div className='an5 col-span-2 row-span-3 bg-[#b6b6f6] rounded-3xl flex justify-center items-center'>2</div>
        <div className='an3 col-span-2 row-span-1 bg-[#dfdfff] rounded-3xl flex text-center justify-center items-center'>
          <h1 className='text-lg raleway-600'>"Coding like poetry should be<br></br> short and concise"</h1>
        </div>
        <div id='an' className=' col-span-2 row-span-2 bg-[#b6b6f6] rounded-3xl flex justify-center items-center'>
          <img alt="" />
          <h1>Vedant Vardia</h1>
        </div>
        <div className='an6 col-span-2 row-span-3 bg-[#b6b6f6] rounded-3xl flex justify-center items-center'>
          <h1>Technologies I have Worked On</h1>
        </div>
        <div className='an4 col-span-2 row-span-1 bg-[#dfdfff] rounded-3xl flex justify-center items-center text-center'>
          <h1 className='text-lg raleway-600'>"The best error message is the one that never shows up."</h1>
        </div>
        <div className='an2 col-span-4 row-span-2 bg-[#b6b6f6] rounded-3xl flex justify-center items-center'>6</div>
      </div>
    </div>
  );
};

export default AboutMe;
