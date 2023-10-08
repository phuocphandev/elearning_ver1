import {HTMLInputTypeAttribute} from 'react'
import { UseFormRegister } from "react-hook-form"

type InputProps={
    register?: UseFormRegister<any>,
    error?: string
    name?: string
    type?: HTMLInputTypeAttribute
    placeholder?:string
    //custom
    label?:string 
    className?:string
    disabled?:boolean
}

export const Input = ({register,error,name,type,placeholder,label,disabled}:InputProps) => {
  return (
    <div className='w-full'>
      {label && <p className="-mb-5 mt-3">{label}</p> }
      <input
      className="bg-[#eee] border-none px-[15px] py-[12px] my-[8px] w-[100%] rounded-[20px]"
      
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      />
        <p className="text-red-500">{error}</p>
    </div>
    
  )
}

export default Input