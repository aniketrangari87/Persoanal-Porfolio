import React from "react";
import { motion } from "framer-motion";
import  hero from "../assets/hero.jpg"


const container = (delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration : 0.5 , delay :delay }
    }

})
function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
             variants={container(0 )}
             initial="hidden"
             animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Aniket Rangari
            </motion.h1>
            <motion.span
             variants={container(0.5)}
             initial="hidden"
             animate="visible" 
            className="bg-gradient-to-r text-4xl from-cyan-200  to-slate-800 bg-clip-text text-transparent">
              Full Stack Developer{" "}
            </motion.span>
            <motion.p 
             variants={container(1)}
             initial="hidden"
             animate="visible"
             className="my-2 max-w-xl py-6 font-light tracking-tighter">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              explicabo officiis sint, dicta iusto exercitationem adipisci quae
              soluta assumenda non nemo eaque consequuntur expedita dolorum
              voluptate inventore eum. Esse tenetur, libero impedit iure
              doloremque ut? Repellat odit nemo vel assumenda!
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
            
        <motion.img src={hero} alt=""  nitial={{x:1000, opacity:0}} animate={{x:0 , opacity:1 }} transition={{duration:1 , delay:1 }} className=" rounded-full border border-black shadow-sm shadow-white"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
