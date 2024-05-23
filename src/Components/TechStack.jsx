import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiNodejsLine} from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiMongodb} from "react-icons/si";
import { SiPostman} from "react-icons/si";
import { SiJavascript} from "react-icons/si";
import { TbBrandNextjs} from "react-icons/tb";
import { motion } from "framer-motion";

const iconsVariants = (duration)=>({

  initial : { y : -10 },
  animate : {
    y : [10 , -10 ],
    transition: {
    duration : duration ,
    ease : "linear" ,
    repeat : Infinity,
    repeatType: "reverse", 
    }
  },
  

})

function TechStack() {
  return (
    <motion.div initial={{opacity:0 , x : -100}}  whileInView={{opacity:1 , x:0}} transition={{duration:2 }} className="border-b border-neutral-900 pb-24 ">
      <h1 className="text-center text-4xl my-20">Technologies</h1>
      <div 
       className="flex flex-wrap items-center justify-center gap-4 ">
        <motion.div variants={iconsVariants(1)} 
      initial="initial"
      animate= "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconsVariants(1.6)} 
      initial="initial"
      animate= "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNodejsLine className="text-7xl text-green-400" />
        </motion.div>
        <motion.div variants={iconsVariants(1.3)} 
      initial="initial"
      animate= "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssLine className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div variants={iconsVariants(1.5)} 
      initial="initial"
      animate= "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-400" />
        </motion.div>
        <motion.div variants={iconsVariants(1)} 
      initial="initial"
      animate= "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostman className="text-7xl text-orange-700" />
        </motion.div>
        <motion.div variants={iconsVariants(1.3)} 
      initial="initial"
      animate= "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div variants={iconsVariants(1.6)} 
      initial="initial"
      animate= "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl text-slate-50" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default TechStack;
