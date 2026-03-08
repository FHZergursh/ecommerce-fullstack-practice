import React from 'react'
import { FaStoreAlt, FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className='flex bg-green-500 h-[10vh]'>
        <div className=' w-[20vw] flex items-center gap-5'>
          <FaStoreAlt size={50} className='ml-10'/>
          <h1 className='text-1xl font-semibold text-white'>Ecommerce Website</h1>

        </div>

        <div className='w-[70vw] ml-[5vw] flex justify-end items-center'>
          <input className='w-full border border-slate-500 bg-white h-[50%]'></input>


          <button className='bg-blue-500 h-[50%]'>
            button
            </button>

        </div>

        <div className=' w-[15vw] flex justify-end items-center mr-10 gap-5'>
          <div>Orders</div>
          <FaCartArrowDown size={25}/>
          <div>Cart</div>
        </div>

      </div>
      


    </div>
  )
}

export default Header