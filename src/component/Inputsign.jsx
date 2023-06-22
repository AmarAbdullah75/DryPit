import React from 'react'

const Inputsign = ({type, placeholder}) => {
  return (
    <input type={type} placeholder={placeholder} className='w-[220px] h-[40px] px-2 rounded-md border-[2px] border-[#0038FF] outline-none placeholder:text-[12px]'/>

  )
}

export default Inputsign