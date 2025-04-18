import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-500 h-[70px]'> 
      <ul className='flex list-none gap-10 ml-5 text-[25px]'>
        <li className='mt-4 hover:text-white cursor-pointer'>Home</li>
         <li className='mt-4 hover:text-white cursor-pointer'>Trendings</li>
         <li className='mt-4 hover:text-white cursor-pointer'>National</li>
         <li className='mt-4 hover:text-white  cursor-pointer'>International</li>
      </ul>
    </div>
  )
}

export default Navbar
