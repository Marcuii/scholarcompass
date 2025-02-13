import React from 'react'
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Members = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4'>
        <div className='lg:col-start-2 relative bg-transparent flex flex-col items-center justify-center gap-3 p-4 group'>
            <img src="/images/member-01.jpg" alt="" className='z-10 rounded-full group-hover:-translate-y-2' />
            <h4 className='z-10 text-primary mt-7'>UX Teacher</h4>
            <h3 className='z-10 text-xl font-bold'>Sophia Rose</h3>
            <div className='z-10 flex flex-row gap-2'>
                <button className='btn bg-base-100 rounded-full p-3 text-primary hover:bg-primary hover:text-base-100'>
                    <BsFacebook />
                </button>
                <button className='btn bg-base-100 rounded-full p-3 text-primary hover:bg-primary hover:text-base-100'>
                    <BsTwitter />
                </button>
                <button className='btn bg-base-100 rounded-full p-3 text-primary hover:bg-primary hover:text-base-100'>
                    <BsLinkedin />
                </button>
            </div>
            <div className='absolute z-0 bottom-0 left-0 right-0 bg-secondary rounded-3xl w-full h-2/3'>
            </div>
        </div>
        <div className='relative bg-transparent flex flex-col items-center justify-center gap-3 p-4 group'>
            <img src="/images/member-02.jpg" alt="" className='z-10 rounded-full group-hover:-translate-y-2' />
            <h4 className='z-10 text-primary mt-7'>Graphic Teacher</h4>
            <h3 className='z-10 text-xl font-bold'>Cindy Walker</h3>
            <div className='z-10 flex flex-row gap-2'>
                <button className='btn bg-base-100 rounded-full p-3 text-primary hover:bg-primary hover:text-base-100'>
                    <BsFacebook />
                </button>
                <button className='btn bg-base-100 rounded-full p-3 text-primary hover:bg-primary hover:text-base-100'>
                    <BsTwitter />
                </button>
                <button className='btn bg-base-100 rounded-full p-3 text-primary hover:bg-primary hover:text-base-100'>
                    <BsLinkedin />
                </button>
            </div>
            <div className='absolute z-0 bottom-0 left-0 right-0 bg-secondary rounded-3xl w-full h-2/3'>
            </div>
        </div>
        <div className='relative bg-transparent flex flex-col items-center justify-center gap-3 p-4 group'>
            <img src="/images/member-03.jpg" alt="" className='z-10 rounded-full group-hover:-translate-y-2' />
            <h4 className='z-10 text-primary mt-7'>Full Stack Master</h4>
            <h3 className='z-10 text-xl font-bold'>David Hutson</h3>
            <div className='z-10 flex flex-row gap-2'>
                <button className='btn bg-base-100 rounded-full p-3 text-primary hover:bg-primary hover:text-base-100'>
                    <BsFacebook />
                </button>
                <button className='btn bg-base-100 rounded-full p-3 text-primary hover:bg-primary hover:text-base-100'>
                    <BsTwitter />
                </button>
                <button className='btn bg-base-100 rounded-full p-3 text-primary hover:bg-primary hover:text-base-100'>
                    <BsLinkedin />
                </button>
            </div>
            <div className='absolute z-0 bottom-0 left-0 right-0 bg-secondary rounded-3xl w-full h-2/3'>
            </div>
        </div>
        <div className='relative bg-transparent flex flex-col items-center justify-center gap-3 p-4 group'>
            <img src="/images/member-04.jpg" alt="" className='z-10 rounded-full group-hover:-translate-y-2' />
            <h4 className='z-10 text-primary mt-7'>Digital Animator</h4>
            <h3 className='z-10 text-xl font-bold'>Stella Blair</h3>
            <div className='z-10 flex flex-row gap-2'>
                <button className='btn bg-base-100 rounded-full p-3 text-primary hover:bg-primary hover:text-base-100'>
                    <BsFacebook />
                </button>
                <button className='btn bg-base-100 rounded-full p-3 text-primary hover:bg-primary hover:text-base-100'>
                    <BsTwitter />
                </button>
                <button className='btn bg-base-100 rounded-full p-3 text-primary hover:bg-primary hover:text-base-100'>
                    <BsLinkedin />
                </button>
            </div>
            <div className='absolute z-0 bottom-0 left-0 right-0 bg-secondary rounded-3xl w-full h-2/3'>
            </div>
        </div>
    </div>
  )
}

export default Members