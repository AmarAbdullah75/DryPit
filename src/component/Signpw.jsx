import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const Signpw = ({placeholder}) => {
    const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className='w-[220px] h-[40px] bg-white rounded-md border-[2px] border-[#0038FF] px-2 flex justify-between items-center'>
        <input type={show? 'text' : 'password'} placeholder={placeholder} className='outline-none placeholder:text-[12px]'/>
        <label onClick={handleShow}>{show ? <AiFillEyeInvisible/> : <AiFillEye />}</label>
    </div>
  )
}

export default Signpw