import React from 'react'
import {motion} from "framer-motion"

const GradientCard = ({gradient, icon, title, text, textcolor}) => {
  return (
    <motion.div initial={{x:100, opacity:0}} whileInView={{x:0, opacity:100}} transition={{duration:1.5}}   viewport={{ once: false }} className={` ${gradient } p-6 rounded  block  space-y-3`}>
            <img src={icon} alt="" className=' rounded-full' />
            <p className={`${textcolor} mb-2 text-xl font-bold text-18 leading-19`}>{title}</p>
            <p className=' text-gray-500  text-lg font-medium leading-21'>{text}</p>
    </motion.div>
  )
}

export default GradientCard