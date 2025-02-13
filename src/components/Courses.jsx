import React from 'react'

const Courses = () => {
  return (
    <div id='courses' className="flex flex-col w-full justify-center items-center gap-5 mt-12">
        <p className='text-xl font-bold text-center text-primary'>
            Latest Courses
        </p>
        <h2 className='text-3xl font-bold text-center'>
            Latest Courses
        </h2>
        <div className='w-fit bg-secondary flex flex-wrap rounded-4xl gap-3 p-5 my-7 font-semibold'>
            <button className='hover:text-primary hover:cursor-pointer'>
                Show All
            </button>
            <button className='hover:text-primary hover:cursor-pointer'>
                Webdesign
            </button>
            <button className='hover:text-primary hover:cursor-pointer'>
                Development
            </button>
            <button className='hover:text-primary hover:cursor-pointer'>
                Wordpress
            </button>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-5'>
            <div className='bg-secondary relative rounded-2xl col-span-2 md:col-start-2 overflow-hidden group hover:cursor-pointer'>
                <div className='absolute -right-2 -top-2 bg-primary/80 pt-6 pr-6 pb-5 pl-8 rounded-bl-full group-hover:scale-115'>
                    <p className='text-base-100 font-bold text-3xl'>
                        $650
                    </p>
                </div>
                <div className='absolute left-5 top-5 rounded-4xl bg-base-100 text-primary p-2'>
                    WEBDESIGN
                </div>
                <img src='/images/course-01.jpg' alt='course' className='w-full rounded-2xl'/>
                <p className='text-sm text-start text-primary px-7 pt-7 pb-3'>
                    Stella Bair
                </p>
                <p className='text-start text-2xl font-bold pb-7 px-7 group-hover:text-primary'>
                    Learn Web Design
                </p>
            </div>
            <div className='bg-secondary relative rounded-2xl col-span-2 overflow-hidden group hover:cursor-pointer'>
                <div className='absolute -right-2 -top-2 bg-primary/80 pt-6 pr-6 pb-5 pl-8 rounded-bl-full group-hover:scale-115'>
                    <p className='text-base-100 font-bold text-3xl'>
                        $340
                    </p>
                </div>
                <div className='absolute left-5 top-5 rounded-4xl bg-base-100 text-primary p-2'>
                    DEVELOPMENT
                </div>
                <img src='/images/course-02.jpg' alt='course' className='w-full rounded-2xl'/>
                <p className='text-sm text-start text-primary px-7 pt-7 pb-3'>
                Cindy Walker
                </p>
                <p className='text-start text-2xl font-bold pb-7 px-7 group-hover:text-primary'>
                    Web Development Tips
                </p>
            </div>
            <div className='bg-secondary relative rounded-2xl col-span-2 md:col-start-2 lg:col-start-auto overflow-hidden group hover:cursor-pointer'>
                <div className='absolute -right-2 -top-2 bg-primary/80 pt-6 pr-6 pb-5 pl-8 rounded-bl-full group-hover:scale-115'>
                    <p className='text-base-100 font-bold text-3xl'>
                        $640
                    </p>
                </div>
                <div className='absolute left-5 top-5 rounded-4xl bg-base-100 text-primary p-2'>
                    WORDPRESS
                </div>
                <img src='/images/course-03.jpg' alt='course' className='w-full rounded-2xl'/>
                <p className='text-sm text-start text-primary px-7 pt-7 pb-3'>
                David Hutson
                </p>
                <p className='text-start text-2xl font-bold pb-7 px-7 group-hover:text-primary'>
                Latest Web Trends
                </p>
            </div>
            <div className='bg-secondary relative rounded-2xl col-span-2 lg:col-start-2 overflow-hidden group hover:cursor-pointer'>
                <div className='absolute -right-2 -top-2 bg-primary/80 pt-6 pr-6 pb-5 pl-8 rounded-bl-full group-hover:scale-115'>
                    <p className='text-base-100 font-bold text-3xl'>
                        $450
                    </p>
                </div>
                <div className='absolute left-5 top-5 rounded-4xl bg-base-100 text-primary p-2'>
                    DEVELOPMENT
                </div>
                <img src='/images/course-04.jpg' alt='course' className='w-full rounded-2xl'/>
                <p className='text-sm text-start text-primary px-7 pt-7 pb-3'>
                    Stella Bair
                </p>
                <p className='text-start text-2xl font-bold pb-7 px-7 group-hover:text-primary'>
                Online Learning Steps
                </p>
            </div>
            <div className='bg-secondary relative rounded-2xl col-span-2 md:col-start-2 lg:col-start-auto overflow-hidden group hover:cursor-pointer'>
                <div className='absolute -right-2 -top-2 bg-primary/80 pt-6 pr-6 pb-5 pl-8 rounded-bl-full group-hover:scale-115'>
                    <p className='text-base-100 font-bold text-3xl'>
                        $320
                    </p>
                </div>
                <div className='absolute left-5 top-5 rounded-4xl bg-base-100 text-primary p-2'>
                    WORDPRESS
                </div>
                <img src='/images/course-05.jpg' alt='course' className='w-full rounded-2xl'/>
                <p className='text-sm text-start text-primary px-7 pt-7 pb-3'>
                Sophia Rose
                </p>
                <p className='text-start text-2xl font-bold pb-7 px-7 group-hover:text-primary'>
                Be a WordPress Master
                </p>
            </div>
            <div className='bg-secondary relative rounded-2xl col-span-2 overflow-hidden group hover:cursor-pointer'>
                <div className='absolute -right-2 -top-2 bg-primary/80 pt-6 pr-6 pb-5 pl-8 rounded-bl-full group-hover:scale-115'>
                    <p className='text-base-100 font-bold text-3xl'>
                        $240
                    </p>
                </div>
                <div className='absolute left-5 top-5 rounded-4xl bg-base-100 text-primary p-2'>
                    WEBDESIGN
                </div>
                <img src='/images/course-06.jpg' alt='course' className='w-full rounded-2xl'/>
                <p className='text-sm text-start text-primary px-7 pt-7 pb-3'>
                David Hutson
                </p>
                <p className='text-start text-2xl font-bold pb-7 px-7 group-hover:text-primary'>
                
                Full Stack Developer
                </p>
            </div>
        </div>
    </div>
  )
}

export default Courses