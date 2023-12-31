import React, { useEffect, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { IoIosCloudDownload } from "react-icons/io";

const LibraryImageUpload = ({label, name, setValue, errors, register}) => {
    const [selectedFlie, setselectedFlie] = useState(null)
    const [previewSource, setpreviewSource] = useState("")
    const inputRef = useRef(null)
    const onDrop = (acceptedFile)=>{
        const file = acceptedFile[0]
        if(file){
            previewFile(file)
            setselectedFlie(file)
        }
    }

    const {getRootProps, getInputProps, isDragActive} = useDropzone({  accept: {
        'image/png': ['.png'], 
        'image/jpeg': ['.jpg', '.jpeg'] 
      }, onDrop})
    const previewFile = (file)=>{
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = ()=>{
                setpreviewSource(reader.result)
            }
    }

    useEffect(() => {
        register(name, {required:false})
    }, [register])

    useEffect(() => {
        setValue(name, selectedFlie)
    }, [setValue, selectedFlie])
    
  return (
    <div className=' flex flex-col gap-2 mt-2'>
    <label className=' text-orange-500 font-semibold'>{label}<sup className=' text-red-500 text-sm'>*</sup></label>
     <div>
         {
             previewSource ? (<div className="flex w-full flex-col p-6  min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-orange-600">
                 <img src={previewSource} alt='Preview'  className="h-full w-full rounded-md max-h-[300px] object-cover" />
                 <button
                 type="button"
                 onClick={() => {
                 setpreviewSource("")
                   setselectedFlie(null)
                   setValue(name, null)
                 }}
                 className="mt-3 text-black underline"
               >
                 Cancel
               </button>
             </div>) : (<div
             {...getRootProps()}  className="flex w-full flex-col items-center p-6 border border-orange-500 rounded-xl"
             >
                 <input {...getInputProps()} ref={inputRef} />
                 <div className="grid aspect-square w-20 place-items-center rounded-full cursor-pointer border border-black">
                 <IoIosCloudDownload />
             </div>
                 <ul className="mt-10 flex list-disc justify-between space-x-12 text-center  text-xs text-black">
               <li>Aspect ratio 16:9</li>
               <li>Recommended size 1024x576</li>
             </ul>
             </div> )
         }
       
     </div>
     
 
     </div>
  )
}

export default LibraryImageUpload