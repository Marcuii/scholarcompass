import React from 'react'

const Events = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-5 my-25 p-15">
        <p className='text-xl font-bold text-center text-primary'>
        Schedule
        </p>
        <h2 className='text-3xl font-bold text-center'>
        Upcoming Events
        </h2>
        <div className='relative w-fit flex lg:flex-row flex-col justify-center items-center gap-20 px-20'>
            <div className='absolute lg:top-1/12 bottom-0 lg:bottom-auto right-0 bg-secondary h-5/6 w-full z-0 rounded-3xl'></div>
            <div className='absolute top-1/3 right-0 h-1/3 w-15 bg-primary z-1 rounded-l-full text-center content-center text-base-100 hover:cursor-pointer'>❯</div>
            <img src="/images/event-01.jpg" alt="" className='z-10 rounded-2xl' />
            <div className='flex flex-col justify-center items-start gap-5 z-10'>
                <p className='badge bg-base-100 text-primary p-2 rounded-2xl'>
                    WEB DESIGN
                </p>
                <h3 className='text-xl font-bold'>
                    UI Best Practices
                </h3>
            </div>
            <div className='flex flex-row justify-center items-center gap-10 z-10 mb-10 lg:mb-0'>
                <div className='flex flex-col justify-start gap-3'>
                    <p className='text-sm font-bold'>
                        Date
                    </p>
                    <p className='text-lg text-primary'>
                    16 Feb 2036
                    </p>
                </div>
                <div className='flex flex-col justify-start gap-3'>
                <p className='text-sm font-bold'>
                        Duration
                    </p>
                    <p className='text-lg text-primary'>
                    22 Hours
                    </p>
                </div>
                <div className='flex flex-col justify-start gap-3'>
                <p className='text-sm font-bold'>
                        Price
                    </p>
                    <p className='text-lg text-primary'>
                        $120
                    </p>
                </div>
            </div>
        </div>
        <div className='relative w-fit flex lg:flex-row flex-col justify-center items-center gap-20 px-20'>
            <div className='absolute lg:top-1/12 bottom-0 lg:bottom-auto right-0 bg-secondary h-5/6 w-full z-0 rounded-3xl'></div>
            <div className='absolute top-1/3 right-0 h-1/3 w-15 bg-primary z-1 rounded-l-full text-center content-center text-base-100 hover:cursor-pointer'>❯</div>
            <img src="/images/event-02.jpg" alt="" className='z-10 rounded-2xl' />
            <div className='flex flex-col justify-center items-start gap-5 z-10'>
                <p className='badge bg-base-100 text-primary p-2 rounded-2xl'>
                    FRONT END
                </p>
                <h3 className='text-xl font-bold'>
                New Design Trend
                </h3>
            </div>
            <div className='flex flex-row justify-center items-center gap-10 z-10 mb-10 lg:mb-0'>
                <div className='flex flex-col justify-start gap-3'>
                    <p className='text-sm font-bold'>
                        Date
                    </p>
                    <p className='text-lg text-primary'>
                    24 Feb 2036
                    </p>
                </div>
                <div className='flex flex-col justify-start gap-3'>
                <p className='text-sm font-bold'>
                        Duration
                    </p>
                    <p className='text-lg text-primary'>
                    30 Hours
                    </p>
                </div>
                <div className='flex flex-col justify-start gap-3'>
                <p className='text-sm font-bold'>
                        Price
                    </p>
                    <p className='text-lg text-primary'>
                        $320
                    </p>
                </div>
            </div>
        </div>
        <div className='relative w-fit flex lg:flex-row flex-col justify-center items-center gap-20 px-20'>
            <div className='absolute lg:top-1/12 bottom-0 lg:bottom-auto right-0 bg-secondary h-5/6 w-full z-0 rounded-3xl'></div>
            <div className='absolute top-1/3 right-0 h-1/3 w-15 bg-primary z-1 rounded-l-full text-center content-center text-base-100 hover:cursor-pointer'>❯</div>
            <img src="/images/event-03.jpg" alt="" className='z-10 rounded-2xl' />
            <div className='flex flex-col justify-center items-start gap-5 z-10'>
                <p className='badge bg-base-100 text-primary p-2 rounded-2xl'>
                Full Stack
                </p>
                <h3 className='text-xl font-bold'>
                Web Programming
                </h3>
            </div>
            <div className='flex flex-row justify-center items-center gap-10 z-10 mb-10 lg:mb-0'>
                <div className='flex flex-col justify-start gap-3'>
                    <p className='text-sm font-bold'>
                        Date
                    </p>
                    <p className='text-lg text-primary'>
                    12 Mar 2036
                    </p>
                </div>
                <div className='flex flex-col justify-start gap-3'>
                <p className='text-sm font-bold'>
                        Duration
                    </p>
                    <p className='text-lg text-primary'>
                    48 Hours
                    </p>
                </div>
                <div className='flex flex-col justify-start gap-3'>
                <p className='text-sm font-bold'>
                        Price
                    </p>
                    <p className='text-lg text-primary'>
                        $440
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events