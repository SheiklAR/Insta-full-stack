import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faClapperboard } from '@fortawesome/free-solid-svg-icons'
import { faCompass,  faPlusSquare, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
const NavBar = () => {
  return (
    <div>
      <div className='w-full border-t space-x-2 my-2 py-2 inline-flex items-center justify-between '>
        <NavIcon icon={faHome} />
        <NavIcon icon={faCompass} />
        <NavIcon icon={faClapperboard} />
        <NavIcon icon={faPlusSquare} />
        <NavIcon icon={faPaperPlane} />
        <ProfileIcon image={image} />
      </div>
    </div>
  );
};

const NavIcon = ({ icon }) => {
  return (
    <div className='m-auto transition lg:w-52 lg:h-12 lg:rounded-md lg:hover:bg-gray-300 group'>
      <div className='mx-2 lg:m-2 lg:inline-flex lg:space-x-2'>
        <FontAwesomeIcon icon={icon} className='text-2xl transition hover:scale-105 lg:group-hover:scale-105' />
        <div className='hidden lg:flex'>name</div>
      </div>
    </div>
  );
};


const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn15hFzZD4sYio3pstWlgQ0tFxAvmyM6Vl5A&s";
export const ProfileIcon = ({ image }) => {
  return (
    <div className='w-full transition lg:w-52 lg:h-12 lg:rounded-md lg:hover:bg-gray-300 group'>
      <div className='mx-2 lg:m-2 lg:inline-flex lg:space-x-2'>
        <img src={image} className='rounded-full h-6 w-6 transition hover:scale-105 lg:group-hover:scale-105' />
        <div className='hidden lg:flex'>Profile</div>
      </div>
    </div>
  );
};

export default NavBar