import React from 'react'
import Bottombar from '../../component/Bottombar'
import {BsArrowLeft} from 'react-icons/bs'
import people from '../../assets/people.png'
import Navbar from '../../component/Navbar'

const Notif = () => {
  return (
    <>
    <main className='w-full h-screen '>
      <Navbar/>
        <aside className='w-full h-[122px] bg-[#0DB1F5] flex'>
        <article className='w-[30%] h-[122px] flex items-start pt-3 pl-3 gap-2'>
            <BsArrowLeft className='text-[20px]'/>
            <h3 className='text-[14px] font-medium'>Notifikasi</h3>
        </article>
        <article className='w-[70%] h-[122px] flex justify-center items-center relative'>
            <img src={people} alt="" className='w-[70px] absolute left-[7%] top-[13%]'/>
            <p className='text-[12px] font-semibold'>Di sini kamu bisa<br/> mengecek kabar terbaru<br/> dari layanan kami</p>
        </article>
        </aside>
    {/* <Bottombar/> */}
    </main>
    </>
  )
}

export default Notif