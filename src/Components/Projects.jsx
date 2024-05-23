import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="border-b border-neutral-800 pb-4"> 
    <motion.h2 initial={{opacity: 0 , y:-100}} whileInView={{opacity:1 , y:0}} transition={{duration:1.5}} className="py-20 text-center text-4xl">Projects</motion.h2>
     
     <div>
        {
            PROJECTS.map((project , index)=>(
                <div key={index} className=" mb-8 flex flex-wrap lg:justify-center" >
                    <div className="w-full lg:w-1/4 "> 
                    <img src={project.image} width={150} className="mb-6 rounded" height={150} alt={project.title} />
                    </div>
                    <div className=" w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{     project.title  }</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {
                            project.technologies.map((tech , ind)=>(
                                <span key={ind} className="mr-2 font-medium text-purple-600 ronded bg-neutral-900 p-2" >{tech}</span>
                            ))
                        }
                    </div>
                </div>
            ))
        }
     </div>
    </div>
  );
}

export default Projects;
