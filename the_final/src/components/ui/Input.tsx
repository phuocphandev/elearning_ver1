import {HTMLInputTypeAttribute} from 'react'
import { UseFormRegister } from 'react-hook-form'


type InputProps={
    register?:UseFormRegister<any>
    error?: string
    name?: string
    type?: HTMLInputTypeAttribute
    placeholder?:string
    //custom
    label?:string 
    className?:string
    disabled?:boolean
    value?:string
}

export const Input = ({register,error,name,type,placeholder,label,disabled,value}:InputProps) => {
  return (
    <div className='w-full'>
      {label && <p className="-mb-5 mt-3">{label}</p> }
      <input
      className="bg-[#eee] border-none px-[15px] py-[12px] my-[8px] w-[100%] rounded-[20px]"
      value={value}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      {...register(name)}
      />
        <p className="text-red-700">{error}</p>
    </div>
    
  )
}

export default Input