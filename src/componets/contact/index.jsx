import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
export const Contact = () =>{
    return (
        <div className="text-white sm:p-2 mb-10 mt-72 sm:mt-28">
            <div className="text-center text-3xl mb-8 border-b h-16 border-b-neutral-500 sm:w-full">
                <motion.h2 
               whileInView={{ opacity: 1, y: 0}}
               initial={{ opacity: 0, y: -100}}
               transition={{duration: 0.5}} >
                    Contact
                </motion.h2>               
            </div>
         
            <div className="flex flex-col items-center justify-center">
                <motion.a 
               whileInView={{ opacity: 1, x: 0}}
               initial={{ opacity: 0, x: -100}}
               transition={{duration: 1}} 
                href="mailto:alexandremahumane69@gmail.com">
                    alexandremahumane69@gmail.com
                </motion.a>
                <motion.a 
               whileInView={{ opacity: 1, x: 0}}
               initial={{ opacity: 0, x: 100}}
               transition={{duration: 1}} 
                href="tel:+258845290817">
                    tel:+258 84 529 0817
                </motion.a>
                <motion.a 
               whileInView={{ opacity: 1, x: 0}}
               initial={{ opacity: 0, x: 100}}
               transition={{duration: 1}} 
                href="https://wa.link/wd5z83">

                    <FaWhatsapp size={20}/>
                </motion.a>
            </div>
        </div>
    );
}