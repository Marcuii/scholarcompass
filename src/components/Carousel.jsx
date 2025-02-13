import React from 'react'
import { BsFillPlayCircleFill } from "react-icons/bs";

const Carousel = () => {
    return (
        <div className="carousel flex rounded-2xl h-fit w-full sm:h-2/3 lg:w-2/3">
            <div id="slide1" className="carousel-item relative w-full bg-[url('/images/banner-item-01.jpg')] bg-cover bg-center flex flex-col justify-evenly items-center pt-2 pb-2">
                <p className='badge badge-primary'>
                    OUR Courses
                </p>
                <h2 className='text-3xl font-bold text-primary-content text-center p-4'>
                    With Scholar Teachers, Everything Is Easier
                </h2>
                <p className='text-primary-content text-center p-4'>
                    Scholar is free CSS template designed by TemplateMo for online educational related websites. This layout is based on the famous Bootstrap v5.3.0 framework.
                </p>
                <div className='flex flex-wrap gap-2 justify-center'>
                    <button className='btn bg-primary-content text-primary rounded-2xl'>
                        Request Demo
                    </button>
                    <button className='btn btn-ghost hover:bg-transparent hover:border-none flex flex-row gap-1 text-primary-content text-2xl'>
                        <BsFillPlayCircleFill />
                        <span>
                        What's Scholar
                        </span>
                    </button>
                </div>
                <div className='gap-2 flex flex-row'>
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full bg-[url('/images/banner-item-02.jpg')] bg-cover bg-center flex flex-col justify-evenly items-center pt-2 pb-2">
                <p className='badge badge-primary'>
                    OUR Courses
                </p>
                <h2 className='text-3xl font-bold text-primary-content text-center p-4'>
                    With Scholar Teachers, Everything Is Easier
                </h2>
                <p className='text-primary-content text-center p-4'>
                    Scholar is free CSS template designed by TemplateMo for online educational related websites. This layout is based on the famous Bootstrap v5.3.0 framework.
                </p>
                <div className='flex flex-wrap gap-2 justify-center'>
                    <button className='btn bg-primary-content text-primary rounded-2xl'>
                        Request Demo
                    </button>
                    <button className='btn btn-ghost hover:bg-transparent hover:border-none flex flex-row gap-1 text-primary-content text-2xl'>
                        <BsFillPlayCircleFill />
                        <span>
                        What's Scholar
                        </span>
                    </button>
                </div>
                <div className='gap-2 flex flex-row'>
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full bg-[url('/images/banner-item-03.jpg')] bg-cover bg-center flex flex-col justify-evenly items-center pt-2 pb-2">
                <p className='badge badge-primary'>
                    OUR Courses
                </p>
                <h2 className='text-3xl font-bold text-primary-content text-center p-4'>
                    With Scholar Teachers, Everything Is Easier
                </h2>
                <p className='text-primary-content text-center p-4'>
                    Scholar is free CSS template designed by TemplateMo for online educational related websites. This layout is based on the famous Bootstrap v5.3.0 framework.
                </p>
                <div className='flex flex-wrap gap-2 justify-center'>
                    <button className='btn bg-primary-content text-primary rounded-2xl'>
                        Request Demo
                    </button>
                    <button className='btn btn-ghost hover:bg-transparent hover:border-none flex flex-row gap-1 text-primary-content text-2xl'>
                        <BsFillPlayCircleFill />
                        <span>
                        What's Scholar
                        </span>
                    </button>
                </div>
                <div className='gap-2 flex flex-row'>
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}

export default Carousel