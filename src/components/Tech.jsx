import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";


import { styles } from "../styles";

const icons = Object.values(technologies).map((technology) => technology.icon);
const Tech = () => {
  return (

    <>
    <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl
        leading-[30px]'>
        The following objects indicate the various software development tools that I have had the privilege to work with throughout my career. These experiences have provided me with a strong foundation in software engineering and have enabled me to deliver cutting-edge solutions to clients across various industries.
      </motion.p>


      <div className="flex flex-row flex-wrap justify-center gap-20">
      <div className='w-full h-[75vh] mx-auto'>
          <BallCanvas icons={icons} />
      </div>
    </div>
    </>

    /*<div className="lex flex-row flex-wrap justify-center gap-20">
      <div className='w-full h-[75vh] mx-auto'>
          <BallCanvas icons={icons} />
      </div>
    </div>*/
  )
}

export default SectionWrapper(Tech, "")