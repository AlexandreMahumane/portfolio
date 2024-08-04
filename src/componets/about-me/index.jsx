import { motion } from "framer-motion"
import pic2 from "../../../public/pic2.jpg"
import { myInfo } from "../../database/data";
export const AboutMe = () =>{
    return(
        <div className="text-white mt-72 sm:mt-28">
            <div className="text-center">
             <h2 className="text-3xl">
                About <span className="text-neutral-500">Me</span>
            </h2>               
            </div>


            <div className="flex sm:flex-col justify-center sm:h-full sm:space-x-0 sm:space-y-5 space-x-14 p-7 h-72">

                <motion.div 
                whileInView={{ opacity: 1, x:0 }}
                initial={{ opacity:0, x: -100}}
                transition={{ duration: 0.5}}
                className="rounded mt-2  w-96 sm:w-full h-60">
                    <img src={pic2} alt="about me pic"
                    className="rounded-lg"
                     />

                </motion.div>


                <motion.p 
                whileInView={{ opacity: 1, x:0 }}
                initial={{ opacity:0, x: 100}}
                transition={{ duration: 0.5}}
                className="flex flex-wrap w-96 sm:w-full">
                   {
                    myInfo.map(
                        e => e.aboutMe
                   )}
                </motion.p>
                      
             </div>
        </div>
    );
}