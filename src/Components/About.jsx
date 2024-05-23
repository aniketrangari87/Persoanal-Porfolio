import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 initial={{opacity: 0 , y:-100}} whileInView={{opacity:1 , y:0}} transition={{duration:1.5}} className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500 "> Me </span>{" "}
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
        whileInView={{opacity:1 ,x : 0}} 
        initial={{opacity:0 , x  : -100}}
        transition={{duration : 0.5 }}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <div className="w-[600px] h-[500px] bg-neutral-900"></div>
          </div>
        </motion.div>
        <motion.div
        whileInView={{opacity:1 ,x : 0}} 
        initial={{opacity:0 , x  : 100}}
        transition={{duration : 2}}
         className="w-full lg:w-1/2 ">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 maxwxl py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ad
              alias assumenda voluptas qui et dolore omnis reiciendis nihil
              repellendus. Iure architecto, reprehenderit quis tempora deleniti
              obcaecati velit porro itaque incidunt! Iure modi quam delectus
              expedita excepturi accusamus culpa aut! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Beatae vitae hic cumque aspernatur
              minima. Labore explicabo placeat enim nisi laboriosam? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Magni quo ipsum et
              ipsa optio nihil placeat aperiam cumque. Repellat cumque
              asperiores voluptate ut dolorum mollitia error ad odio fugiat
              doloribus sunt laboriosam officia est, qui vitae corporis numquam
              recusandae temporibus? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dignissimos facere, quam iste itaque consectetur
              fugiat nam hic vel iure pariatur, neque voluptate dolores nesciunt
              recusandae architecto iusto dolorum animi numquam doloribus
              voluptatum in rem officiis molestiae excepturi. Ipsa, voluptas
              hic.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
