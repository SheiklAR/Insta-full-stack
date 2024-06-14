import React from 'react'

const image = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
function SideBar() {
  return (
    <div className='hidden lg:flex flex-col space-y-1'>
        <Profile />
        <ul className='py-2'>
            <li className='text-sm text-gray-400 font-semibold'>suggested for you</li>
            <li><button className='text-sm text-black font-semibold hover:text-gray-400' type='text'>See All</button></li> 
        </ul>
        <Profile />
        <Profile />
        <Profile />
    </div>
  )
}

{/*Profile*/ }
const Profile = () => {
    return (
        <ul className='flex items-center justify-between space-y-2'>
        <li>   
            <li><a href="#"><img src={image} alt="" className='h-24 w-24 rounded-full' /></a></li>
            <li className='flex-col items-center justify-between space-y-2'>
                <li><a href="#"><span className='text-sm text-black font-semibold'>user name</span></a></li>
                <li><span className='text-sm text-gray-400 font-semibold'>about</span></li>  
            </li>      
        </li>
        <li>
            <button className='text-sm font-semibold text-sky-400 hover:text-black' type='text'>Switch</button>
        </li>
    </ul>      
    )
}

const About = () => {
    return (
        <div className='flex'>
            <ul>
                <li><button className='text-sm text-gray-400 hover:underline'>About</button></li>
                <li>.</li>
                {/*copy the above tage and change the content*/}
                <li className='text-sm text-gray-400 hover:underline'>© 2024 INSTAGRAM FROM SHEIK</li>
            </ul>
        </div>
    )
}
export default SideBar