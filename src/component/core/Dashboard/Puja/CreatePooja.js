import React from 'react'
import RenderStep from './RenderStep'

const CreatePooja = () => {
  return (
    <div className=' flex w-full justify-between'>
            <div className='lg:w-[45%] w-full lg:px-0 px-6 h-full'>
                <RenderStep/>
            </div>
            <div className=' w-[45%] h-full mt-32 lg:block hidden'>
                <ul className=' flex flex-col text-lg font-bold gap-3 list-disc'>
                    <li>Fill all feilds carefully</li>
                    <li>Upload image in high quality</li>
                    <li>Aspect ratio 16:9</li>
                    <li>Recommended size 1024x567</li>
                    <li>File extension must be [.png, .jpeg, .jpg]</li>
                    <li>Future date must should be enter</li>
                    <li>Experince should be in number</li>
                </ul>
            </div>
    </div>
  )
}

export default CreatePooja