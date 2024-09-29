import { useGSAP } from '@gsap/react'
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'
import * as THREE from 'three';


const Navbar = () => {

    useGSAP( ()=>{
        gsap.to('#nav',{y:0,opacity:1 })
    },[]);


  return (
    <div id='nav' z-9 className='fixed z-40 text-[#C1F0FF] p-5 bg-[#0E1630] border-gray-300 border-b-[1px]'>
       <div className='h-full w-[100vw] relative'> 
        <div className='flex justify-between mx-20'>
        <h2 className='forum-regular text-2xl'><span className='text-[#01D293]'>V</span>edant<span className='text-[#01D293]'>V</span>ardia</h2>
        <ul className='flex gap-5'>
            <li className='h-effect relative text-l'><a href="#">Home</a></li>
            <li className='h-effect relative text-l'><a href="#">About Me</a></li>
            <li className='h-effect relative text-l'><a href="#">Projects</a></li>
            <li className='h-effect relative text-l'><a href="#">Contact</a></li>
        </ul>
        </div>
    </div>
    </div>
  )
}
export default Navbar