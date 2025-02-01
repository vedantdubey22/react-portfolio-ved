import { HERO_CONTENT } from "../constants";
import me from "../assets/images/me.png";
import {motion} from "framer-motion";

const container = (delay) =>({
  hidden:{x:-100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay},
  }
})


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <div className="text-left">
            <motion.h1 
  variants={container(0)}
  initial="hidden"
  animate="visible"
  className="pb-6 text-3xl font-thin tracking-tight sm:text-5xl md:pb-12 
             lg:mt-50 lg:text-8xl text-center sm:text-left leading-tight">
  Vedant Dubey
</motion.h1>

              <motion.span 
  variants={container(0.5)} // Ensuring the same animation as the others
  initial="hidden"
  animate="visible"
  className="inline-block bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl sm:text-3xl md:text-4xl tracking-tight text-transparent">
  Full Stack Developer
</motion.span>





            </div>

            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
            initial={{x:100, opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{duration : 1, delay: 1.2}}
            src={me} alt="profile" className="w-100 h-auto rounded-2xl mt-30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
