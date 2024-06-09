import React from 'react'
import instaImage from '../images/instagram.png'
const Header = () => {
  return (
      <div className="flex justify-between container items-center border-b">
          <div>
          <img src={instaImage} alt="instaImage" className='h-14' />
          </div>
          <div className='flex space-x-3'>
                  <input type="text"
                      placeholder='Search'
                  className='px-4 h-9 w-64 rounded-lg bg-gray-200 text-slate-400 font-extralight cursor-text 
                      focus:ring-none'
                  />
    
              <div>heart</div>
          </div>
      </div>
  )
}

export default Header