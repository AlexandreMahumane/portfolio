import { data } from "../../database/data";
import { motion } from "framer-motion";
import pic2 from "../../../public/pic2.jpg"

export const Projects = () =>{
    return(
        <div className="text-white mb-10 mt-72 sm:mt-28">
            <div className="text-center">
                <motion.h2 
               whileInView={{ opacity: 1, y: 0}}
               initial={{ opacity: 0, y: -100}}
               transition={{duration: 0.5}} 
                className="text-3xl mb-8">
                    Projects
                </motion.h2>
            </div>

        <div className="flex flex-col sm:p-7 items-center justify-center">
           { 
            data.map(info =><div key={info.id} className="flex mb-5 sm:flex-col">
                <motion.div 
               whileInView={{ opacity: 1, x: 0}}
               initial={{ opacity: 0, x: -100}}
               transition={{duration: 1}} 
                className=" mt-2  sm:w-40 w-52 h-36">
                        <img src={pic2} alt="about me pic"
                    className="rounded-lg"
                     />
                </motion.div>
                <motion.div 
               whileInView={{ opacity: 1, x: 0}}
               initial={{ opacity: 0, x: 100}}
               transition={{duration: 1}} 
                className="ml-24  sm:ml-0">
                    <h4 className="sm:mt-2"><a target="_blank" href={info.link}>{info.name}</a> </h4>
                    <p className="flex w-[450px] sm:w-full text-neutral-400 flex-wrap">
                        {info.description}
                    </p>
                    <div className="flex sm:mt-2 space-x-5">
                        {info.techs.map(tech=> <p className="text-purple-700 bg-neutral-900 px-2 py-1">{tech}</p>)}
                        
                        
                    </div>
                </motion.div>
            </div>)}
        </div>
    </div>
    );
}