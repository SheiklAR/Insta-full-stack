import React from 'react'
import instaImage from '../images/instagram.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart';

const Header = () => {
    return (
        <div>
            <div className='hidden md:inline lg:inline'>
                <a href="#">
                <img src={instaImage} alt="instaImage" className='mx-4 h-14 cursor-pointer' />
                </a>
            </div>
            <div className="md:hidden lg:hidden flex justify-between  items-center border-b">
                <a href="#">
                    <img src={instaImage} alt="instaImage" className='mx-4 h-14 cursor-text' />
                </a>
                <div className='flex space-x-3 relative items-center'>
                    <input type="text"
                        placeholder='Search'
                        className='px-4 h-9 w-64 rounded-lg bg-gray-200 text-slate-400 font-extralight cursor-text 
                        focus:ring-none pl-9'
                    />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute text-gray-500 cursor-text' />
                    <div>
                        <FontAwesomeIcon icon={faHeart} className='text-2xl cursor-pointer mx-4'/>
                    </div>
                </div>
            </div>
                <Stories/>
        </div>
  )
}

const Stories = () => {
    return (
        <div className="m-3">

  <ul className="flex space-x-6 w-2/3 overflow-x-auto">
    <li className="flex-none">
      <div className="relative bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 p-1 rounded-full">
      <a href="#" className="block rounded-full transition hover:-rotate-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="" className="h-24 w-24 bg- p-1 bg-white rounded-full"/>
      </a>
      <button className="absolute bottom-0 right-1 bg-blue-500 text-white font-semibold h-7 w-7 flex items-center border-4 border-white  text-2xl font-mono justify-center rounded-full hover:bg-blue-700">+</button>
      </div>
      <p className="text-center mt-2">Cute cat</p>
    </li>
    <li className="flex-none">
      <a href="#" className="bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 p-1 block rounded-full transition hover:-rotate-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="" className="h-24 w-24 bg- p-1 bg-white rounded-full"/>
      </a>
      <p className="text-center mt-2">Cute cat</p>
    </li>
    <li className="flex-none">
      <a href="#" className="bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 p-1 block rounded-full transition hover:-rotate-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="" className="h-24 w-24 bg- p-1 bg-white rounded-full"/>
      </a>
      <p className="text-center mt-2">Cute cat</p>
    </li>
    <li className="flex-none">
      <a href="#" className="bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 p-1 block rounded-full transition hover:-rotate-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="" className="h-24 w-24 bg- p-1 bg-white rounded-full"/>
      </a>
      <p className="text-center mt-2">Cute cat</p>
    </li>
    <li className="flex-none">
      <a href="#" className="bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 p-1 block rounded-full transition hover:-rotate-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="" className="h-24 w-24 bg- p-1 bg-white rounded-full"/>
      </a>
      <p className="text-center mt-2">Cute cat</p>
    </li>
    <li className="flex-none">
      <a href="#" className="bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 p-1 block rounded-full transition hover:-rotate-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="" className="h-24 w-24 bg- p-1 bg-white rounded-full"/>
      </a>
      <p className="text-center mt-2">Cute cat</p>
    </li>
    <li className="flex-none">
      <a href="#" className="bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 p-1 block rounded-full transition hover:-rotate-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="" className="h-24 w-24 bg- p-1 bg-white rounded-full"/>
      </a>
      <p className="text-center mt-2">Cute cat</p>
    </li>
    <li className="flex-none">
      <a href="#" className="bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 p-1 block rounded-full transition hover:-rotate-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="" className="h-24 w-24 bg- p-1 bg-white rounded-full"/>
      </a>
      <p className="text-center mt-2">Cute cat</p>
    </li>
    <li className="flex-none">
      <a href="#" className="bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 p-1 block rounded-full transition hover:-rotate-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="" className="h-24 w-24 bg- p-1 bg-white rounded-full"/>
      </a>
      <p className="text-center mt-2">Cute cat</p>
    </li>
    <li className="flex-none">
      <a href="#" className="bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 p-1 block rounded-full transition hover:-rotate-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="" className="h-24 w-24 bg- p-1 bg-white rounded-full"/>
      </a>
      <p className="text-center mt-2">Cute cat</p>
    </li>
    <li className="flex-none">
      <a href="#" className="bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 p-1 block rounded-full transition hover:-rotate-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="" className="h-24 w-24 bg- p-1 bg-white rounded-full"/>
      </a>
      <p className="text-center mt-2">Cute cat</p>
    </li>
    
  </ul>
</div>
    )
}

export default Header