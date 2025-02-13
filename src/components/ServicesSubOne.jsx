import React from 'react'

const ServicesSubOne = () => {
  return (
    <div id='services' className='w-full min-h-[calc(3*100vh/4)] grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 md:gap-4 gap-30 justify-center items-center p-12 mt-20 lg:mt-10'>
        <div className='relative group min-h-1/3 lg:col-start-2'>
            <div className='absolute z-10 -top-25 right-0  rounded-full bg-primary justify-items-center p-12'>
                <img src="/images/service-01.png" alt="" className='group-hover:-translate-y-2' />
            </div>
            <div className=' bottom-0 left-0 w-3/4 rounded-2xl bg-secondary flex-col flex justify-items-start gap-8 p-4 pt-20 pb-10'>
                <h1 className='text-2xl text-start'>Online Degrees</h1>
                <p className='text-start'>
                    Whenever you need free templates in HTML CSS, you just remember TemplateMo website.
                </p>
                <button className='btn bg-base-100 text-primary hover:bg-primary hover:text-base-100 w-2/3 rounded-3xl'>
                    Read More
                </button>
            </div>
        </div>
        <div className='relative group min-h-1/3'>
            <div className='absolute z-10 -top-25 right-0  rounded-full bg-primary justify-items-center p-12'>
                <img src="/images/service-02.png" alt="" className='group-hover:-translate-y-2' />
            </div>
            <div className=' bottom-0 left-0 w-3/4 rounded-2xl bg-secondary flex-col flex justify-items-start gap-8 p-4 pt-20 pb-10'>
                <h1 className='text-2xl text-start'>Short Courses</h1>
                <p className='text-start'>
                    You can browse free templates based on different tags such as digital marketing, etc.
                </p>
                <button className='btn bg-base-100 text-primary hover:bg-primary hover:text-base-100 w-2/3 rounded-3xl'>
                    Read More
                </button>
            </div>
        </div>
        <div className='relative group min-h-1/3 md:mt-0 lg:mt-0'>
            <div className='absolute z-10 -top-25 right-0  rounded-full bg-primary justify-items-center p-12'>
                <img src="/images/service-03.png" alt="" className='group-hover:-translate-y-2' />
            </div>
            <div className=' bottom-0 left-0 w-3/4 rounded-2xl bg-secondary flex-col flex justify-items-start gap-8 p-4 pt-20 pb-10'>
                <h1 className='text-2xl text-start'>Web Experts</h1>
                <p className='text-start'>
                You can start learning HTML CSS by modifying free templates from our website too.
                </p>
                <button className='btn bg-base-100 text-primary hover:bg-primary hover:text-base-100 w-2/3 rounded-3xl'>
                    Read More
                </button>
            </div>
        </div>
    </div>
  )
}

export default ServicesSubOne