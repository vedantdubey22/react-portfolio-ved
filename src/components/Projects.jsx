import PROJECTS from "../constants/index";
import {motion} from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:  0.75}}
      className="my-20 text-center text-4xl">projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                width={project.imageWidth}
                height={project.imageHeight}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{project.title}</h6>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            {project.technologies.map((tech, index)=>(
                <span key = {index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800" >{tech}</span>
            ))}
            {project.liveUrl && (
              <div className="mt-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  View Project
                </a>
              </div>
            )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
