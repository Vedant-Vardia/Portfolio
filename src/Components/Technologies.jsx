import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import react from '../../public/assets/react.svg'

const technologies = [
  { id: 'react', src: react, alt: 'React' },
  { id: 'python', src: 'path/to/python-icon.png', alt: 'Python' },
  { id: 'flutter', src: 'path/to/flutter-icon.png', alt: 'Flutter' },
  { id: 'pytorch', src: 'path/to/pytorch-icon.png', alt: 'PyTorch' },
  { id: 'tensorflow', src: 'path/to/tensorflow-icon.png', alt: 'TensorFlow' },
  { id: 'github', src: 'path/to/github-icon.png', alt: 'GitHub' },
];

const Technologies = () => {
  const iconsRef = useRef([]);

  useEffect(() => {
    iconsRef.current.forEach((icon, index) => {
      gsap.fromTo(icon, 
        { y: 0 }, 
        { 
          y: -10, 
          duration: 2, 
          repeat: -1, 
          yoyo: true, 
          ease: 'power1.inOut', 
          delay: Math.random() * 2 
        });
    });
  }, []);

  return (
    <div className='bg-[#0E1630] ' style={{ textAlign: 'center', padding: '20px' }}>
      <h2 className='raleway-600 text-[#01D293] text-[4vw]'>My Technologies</h2>
      <div className='mt-10' style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {technologies.map((tech, index) => (
          <div 
            key={tech.id} 
            ref={el => iconsRef.current[index] = el}
            style={{ width: '70px', height: '70px' }}
            className='border-[1.5px] border-gray-200 m-2 rounded-lg'
          >
            <img 
              src={tech.src} 
              alt={tech.alt} 
              style={{ width: '100%', height: '100%', cursor: 'pointer' }}
              className='p-2'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
