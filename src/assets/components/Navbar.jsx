import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-900 flex items-center  justify-between h-12 p-2 text-white'>
       <div className='logo font-bold text-3xl'>
        <span className='text-green-500'> &lt;</span>
        
        Pass <span className='text-green-500'> op/&gt;</span></div>
      <ul>
        

        <li className='flex gap-4 '>
            <a className='hover:font-bold' href='#'>Home</a> 
            <a className='hover:font-bold' href='#'>About</a> 
            <a className='hover:font-bold' href='#'>Contact</a> 
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
