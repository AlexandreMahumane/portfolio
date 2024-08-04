import springboot from '../../../public/spring-boot-icon.png'
import reactjs from '../../../public/reactjs-icon.png'
import nodejs from '../../../public/nodejs-icon.png'
import { motion } from 'framer-motion'

export const Technologies = () => {

    const animation = (duration) =>({
        initial: { y: -10},
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    });
    return(
        <div className="text-white border-b h-60 border-b-neutral-500  mt-72 sm:mt-28">
            <div className="text-center">
                <motion.h2
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity:0, y: -100 }}
                transition={{ duration: 1.5 }} 
                className="text-3xl mb-8">
                    Technologies
                </motion.h2>               
            </div>
            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity:0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex space-x-5 justify-center">

                <motion.div 
                variants={animation(2.5)}
                initial="initial"
                animate="animate"
                className="border border-neutral-800 rounded-lg p-3">
                    <img src={springboot} alt="springboot icon" />
                </motion.div>


                <motion.div 
                variants={animation(3)}
                initial="initial"
                animate="animate"
                className="border border-neutral-800 rounded-lg p-3">
                    <img src={reactjs} alt="react.js icon" />
                </motion.div>


                <motion.div 
                variants={animation(5)}
                initial="initial"
                animate="animate"
                className="border border-neutral-800 rounded-lg p-3">
                    <img src={nodejs} alt="node icon" />
                </motion.div>
            </motion.div>
        </div>
    );
}