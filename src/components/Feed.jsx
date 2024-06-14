import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons';

const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn15hFzZD4sYio3pstWlgQ0tFxAvmyM6Vl5A&s";

const Feed = () => {
  return (
    <div className='mx-2 w-md flex-col space-y-2'>
          <Top />
          <Image />
          <Like />
          <Bottom />
    </div>
  )
}

{/* Top Section */ }
const Top = () => {
    return (
        <div className="flex items-center text-xs justify-between">
        <div className='h-8 flex items-center justify-between text-xs'>
            <ProfilePhoto image={image} />
            <Name />
            <Time />
        </div>  
        <div>
            <Ellipsis />
        </div>
    </div>
    )
}
{/* profile photo */}
const ProfilePhoto = ({ image }) => {
    return (
        <div>
            <a href="#">
                <img src={image} alt="profile-pic" className="h-8 w-8 rounded-full" />
            </a>
        </div>
    );
};

{/* Profile name */}
const Name = () => {
    return (
        <div>
            <a href="">
                <div className='font-semibold m-2'>
                    profile.name
                </div>
            </a>
        </div>
    );
};

{/* Posted time */ }
const Time = () => {
    return (
        <div>
            <div className='hidden md:flex space-x-1 items-center text-gray-300 m-1'>
                <span>.</span>
                <span>time</span>
            </div>
        </div>
    );
};

{/* Ellipsis Icon */ }
const Ellipsis = () => {
    return (
        <div>
            <a href="#"><FontAwesomeIcon icon={ faEllipsis } className='text-xl' /></a>
        </div>
    )
}

{/* Image Section */ }
const Image = () => {
    return (
        <div>
            <img src={image} alt="image" className='w-md rounded-md ' />
        </div>
    )
}

{/* Like and comment button */ }
const Like = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='mx-2 flex items-center justify-center space-x-3'>
                <FontAwesomeIcon icon={faHeart} className='text-2xl hover:text-gray-400 transition'/>
                <FontAwesomeIcon icon={faComment} className='text-2xl hover:text-gray-400 transition transform scale-x-[-1]'/>
                <FontAwesomeIcon icon={faPaperPlane} className='text-2xl hover:text-gray-400 transition md:hidden'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBookmark} className='text-2xl hover:text-gray-400 transition'/>
            </div>
        </div>
    )
}

{/* Bottom */ }
const Bottom = () => {
    return (
        <div className="flex flex-col ">
            <div className='font-semibold text-sm'>Likes</div>
            <div className='font-semibold text-sm py-1'>user.name</div>
            <button className='font-semibold text-sm text-gray-300 py-2' type="button">View all comments</button>
            <CommentForm className="hidden md:block" />
        </div>
    )
}

const CommentForm = () => {
    return (
        <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-teal-500 py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 py-1  leading-tight focus:outline-none placeholder:text-sm" type="text" placeholder="Add a comment"  aria-label="Add a comment"/>
                <button className="flex-shrink-0 text-sm text-sky-400 hover:text-black py-1 px-2 rounded" type="button">
                    Post
                </button>           
            </div>
        </form>
    )
}
export default Feed


