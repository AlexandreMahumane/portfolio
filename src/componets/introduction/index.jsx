import { motion } from "framer-motion";
import pic1 from "../../../public/pic1.jpg"
import { myInfo } from "../../database/data";
export const Introduction = () =>{

    const animation = (delay) =>({
        hidden: { x: -100, opacity: 0},
        visible: {
            x:0,
            opacity: 1,
            transition: { duration: 0.5, delay: delay}
        }
    });

    return(
        <div className="flex text-white sm:space-y-5 p-7 mt-28 h-72
                        sm:flex-col sm:h-full  sm:flex">
            <div className="flex flex-col w-fit justify-between">
            <motion.h1
            variants={animation(0)}
            initial="hidden"
            animate="visible"
                 className="text-6xl sm:text-4xl">
                Alexandre Mahumane
            </motion.h1>

            <motion.h3 
            variants={animation(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 
                        via-slate-500 to-purple-500 bg-clip-text tracking-tight text-3xl text-transparent">
                  Full Stack Developer
            </motion.h3>

            <motion.p 
            variants={animation(1)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap w-2/3 sm:w-full">
             {
                    myInfo.map(
                        e => e.introduction
                   )}
            </motion.p>
            </div>

            <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x:0, opacity:1 }}
            transition={{ duration: 1, delay: 1.2}}
            className=" mt-4 mr-44 w-[500px] sm:w-full h-72">
                        <img src={pic1} alt="about me pic"
                    className="rounded-lg w-full h-full"
                     />
            </motion.div>
        </div>
    );
}