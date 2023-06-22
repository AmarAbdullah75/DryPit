import React from 'react'
import fb from '../assets/fb.svg'
import wa from '../assets/wa.svg'
import ig from '../assets/ig.svg'
import gmail from '../assets/gmail.svg'

const Contact = () => {
  return (
    <main className='w-full h-screen hidden lg:flex justify-center items-center gap-16'>
        <div className='w-[200px] h-[200px] bg-[#EBFFEA] border-[3px] border-[#20B038] flex justify-center rounded-md'>
            <img src={wa} alt="" className='w-[50%]'/>
        </div>
        <div className='w-[200px] h-[200px] bg-[#FFEAFD] border-[3px] border-[#D82D7E] flex justify-center rounded-md'>
            <img src={ig} alt="" className='w-[50%]'/>
        </div>
        <div className='w-[200px] h-[200px] bg-[#EAECFF] border-[3px] border-[#1877F2] flex justify-center rounded-md'>
            <img src={fb} alt="" className='w-[50%]'/>
        </div>
        <div className='w-[200px] h-[200px] bg-[#FFFFEA] border-[3px] border-[#FFBA00] flex justify-center rounded-md'>
            <img src={gmail} alt="" className='w-[50%]'/>
        </div>
    </main>
  )
}

export default Contact