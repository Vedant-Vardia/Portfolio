import React from 'react';
import Resai from '../../public/assets/Resai.png';

const projectData = [
  {
    image: Resai,
    title: "ResAiShala Website",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos odio labore impedit soluta amet ullam vel nobis explicabo! Cupiditate odit, nobis adipisci officia delectus odio eligendi consequuntur iste sequi accusamus.",
    tech: ["React", "Tailwind", "JavaScript", "PHP", "MySQL"],
  },
  {
    image: Resai,
    title: "ResAiShala Website",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos odio labore impedit soluta amet ullam vel nobis explicabo! Cupiditate odit, nobis adipisci officia delectus odio eligendi consequuntur iste sequi accusamus.",
    tech: ["React", "Tailwind", "JavaScript", "PHP", "MySQL"],
  },
  {
    image: Resai,
    title: "ResAiShala Website",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos odio labore impedit soluta amet ullam vel nobis explicabo! Cupiditate odit, nobis adipisci officia delectus odio eligendi consequuntur iste sequi accusamus.",
    tech: ["React", "Tailwind", "JavaScript", "PHP", "MySQL"],
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div>
    <div className='w-full h-[1px] bg-gray-500 my-4'></div>
    <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24 '>
      <img src={project.image} alt={project.title} className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]'/>
    
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-3'>
          <div className='text-xl'>{project.title}</div>
          <div className='text-gray-400'>{project.desc}</div>
        </div>
        <div className='flex flex-wrap gap-5'>
          {
            project.tech.map((tech, index) => (
              <span key={index} className='rounded-lg bg-black p-3'>
                {tech}
              </span>
            ))
          }
        </div>
      </div>
    </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id='proj' className='flex min-h-screen w-full flex-col items-center justify-center -mt-10 gap-16 p-4 md:px-14 md:py-4 bg-[#0E1630]'>
      <h2 className='raleway-600 text-[#01D293] text-center text-[4vw]'>My Projects</h2>

      <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
        {
          projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
