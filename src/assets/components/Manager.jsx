import React from 'react'
import { useRef } from 'react'

const Manager = () => {
    const ref=useRef()
    const showPassword = () => {
         
        ref.current.classList.toggle('fa-eye-slash');  // This will toggle the eye icon to eye-slash
    }
    
    return (
        <div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-green-200 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
            <div className="   max-w-4xl   mycontainer justify-center">
                <h1 className='text-black mx-3 font-bold text-3xl' > <span className='text-green-500'> &lt;</span>

                    Pass <span className='text-green-500'> op/&gt;</span></h1>
                <p className='text-green-700 mx-4 '>Your Own Password Manager</p>
                <div className='text-white flex flex-col  '>
                    <input className='rounded-full border border-green-400 p-2 m-3' type='text' name='' id='' placeholder='Enter Website URL' />
                    <div className='flex mt-3 mx-3 border-green-400 gap-4 '>
                        <input type='text' className='w-full border rounded-full border-green-400 p-1 ' placeholder='Enter UserName' />
                        <div className="relative w-full flex justify-between">
                            <input type="text" className="w-full border rounded-full border-green-400 p-1 pr-10" placeholder="Enter Password" />
                            <i className="ref={ref} fa fa-eye absolute right-3 top-2 text-black  cursor-pointer" onClick={showPassword} aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className=' flex justify-center text-black mt-5 bg-green-400 rounded-full w-fit px-3 py-1 pr-5 pt-2 border-2 border-green-600 hover:bg-green-300 p gap-3'>  <lord-icon
                            src="https://cdn.lordicon.com/hqymfzvj.json"
                            trigger="hover">

                        </lord-icon>Add Password</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manager
