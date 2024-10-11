import { Canvas } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { Center, Cylinder, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import Technologies from './Technologies';
gsap.registerPlugin(ScrollTrigger);  



function Model(props) {
  const { nodes, materials } = useGLTF('/model/untitled.glb');
  const group = useRef(null);

   
  useEffect(() => {
    // Create a timeline
    var tl = gsap.timeline({
      defaults: { ease: "power1.out" } // Adding a default ease for smooth animations
    });
  
    // Add animations to the timeline with staggered effects
    tl.fromTo("#hello", { scale: 1.2 }, { y: -100, duration: 0.2 })
      .fromTo("#hello", { scale: 1.2 }, { scale: 0.4, duration: 0.2 }, "+=0.2") // Adding delay for stagger
      .fromTo("#hello", {}, { x: 20, duration: 0.2 }, '+=0.2')
      .to("#shifter", { width: 100, duration: 0.2 }, "-=0.2")
      .to("#iamt, #aboutt, #att", { 
        opacity: 1, 
        stagger: 0.25, 
        duration: 0.5 
      }, '+=0.5'); // Adding delay for stagger
  }, []); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    // Start the rotation animation
    const rotationAnimation = gsap.to(group.current.rotation, {
      y: Math.PI * 2,
      duration: 10, 
      repeat: -1, 
      ease: 'linear', 
    });

    // Cleanup function
    return () => {
      // Stop the rotation animation when the component unmounts
      rotationAnimation.kill();
    };
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.001']}
        position={[0, -0.174, 0.641]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.643, 4.892, 0.643]}
      />
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MY1.geometry}
        material={materials.MY1}
        position={[0.506, -0.486, 1.19]}
        rotation={[Math.PI / 2, 0, -0.005]}
        scale={[6.872, 1, 6.102]}
      />
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MY2.geometry}
        material={materials.MY2}
        position={[0.28, -0.798, 1.29]}
        rotation={[Math.PI / 2, 0, -3.113]}
        scale={[5.229, 1.01, 5.192]}
      />
      </group> 
  );
}
useGLTF.preload('/model/untitled.glb');

const Hero = () => {
  return (
    <div id="comp-cont bg-[#0E1630]">
    <div className='trig bg-[#0E1630] h-[100vh] w-full flex relative overflow-x-hidden'>
    <div id="shifter" className='bg-[#01D293] absolute h-2 left-[19vw] top-[25vh] z-10'><h1></h1></div>
    <div id="iam" className='text absolute  raleway-600 top-[28vh] left-[19vw] z-10'>
      <h1 className='opacity-0 text-4xl text-white' id="iamt">I, am Vedant Vardia</h1>
      <h3 className='text-xl opacity-0 text-gray-400 text-right' id="aboutt">A full stack developer</h3>
      </div>
      <div className='absolute h-[20vh] w-2/5 top-[45vh] left-[12vw] z-9'>
      <p id="att" className=' opacity-0  raleway-600 left-[12vw] text-xl text-gray-200'>My name is Melissa Rodriguez, and I am writing this letter to express my interest in the Software Developer position at Redshore Digital Creations.<br></br>
      <br></br> I believe that I can offer a significant contribution to your team. My passion for developing efficient, creative software has only grown during my career, and I am excited about the opportunity to showcase my skills.</p>
      </div>
      <div className='abc h-[100vh] w-1/2'>
        <h1 id='hello' className='forum-regular absolute text-[#01D293] text-9xl top-[30vh] left-[20vw]'>Hello</h1>  
      </div>
      <div id='rt' className='w-1/2 h-[90vh] absolute left-1/2'>
        <Canvas className='w-full h-full'>
                <pointLight
            castShadow
            intensity={100.413}
            decay={2}
            position={[1.89, 2.814, -0.085]}
            rotation={[0.650327133, 0.055222218, 1.8570303]}
          />
          <ambientLight intensity={1.3} castShadow />
          <Model />
        </Canvas>
      </div>
    </div>
    <Technologies />

    <div id="trig2" className='h-[20vh] bg-[#0E1630]'></div>
    </div>
  );
};

export default Hero;
