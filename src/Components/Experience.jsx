import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { backInOut } from "framer-motion/dom";


function Experience() {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h2 initial={{opacity: 0 , y:-100}} whileInView={{opacity:1 , y:0}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Experience</motion.h2>
      <motion.div initial={{opacity: 0 , x:-100}} whileInView={{opacity:1 , x:0}} transition={{duration:1.5}}>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4
            ">
                <p >{experience.year}</p>
            </div>
            <motion.div initial={{opacity: 0 }} onScroll={{opacity:1 }} className="bg-white w-1 mx-10"></motion.div>
            <div className="w-full max-w-xl lg:w-3/4 ">
                <h6 className="mb-2 font font-semibold">
                {experience.role} -  <span className="text-sm text-purple-200"> 
                    { experience.company }
                     </span>
                </h6>
                <p className="mb-4 text-neutral-400">{experience.description}</p>
                {
                    experience.technologies.map((tech , index )=>(
                        <span key={index} className="mr-3 mt-4 rounded bg-neutral-800 px-2 py-2
                        text-sm font-medium text-cyan-500">{tech}</span>
                    ))
                }
            </div>
          </div>
        ))
        }
      </motion.div>
    </div>
  );
}

export default Experience;
