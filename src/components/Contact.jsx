import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='flex flex-wrap w-full relative justify-center items-center p-20 gap-5'>
            <div className='opacity-0 md:opacity-100 absolute z-0 top-0 left-0 w-2/3 rounded-r-full bg-secondary h-full'>
            </div>
            <div className='w-full lg:w-1/3 z-10 rounded-2xl p-4 flex flex-col gap-5 lg:justify-start lg:items-start justify-center items-center'>
                <p className='text-primary font-semibold'>
                    CONTACT US
                </p>
                <h2 className='text-3xl font-bold pb-5'>
                    Feel free to contact us anytime
                </h2>
                <p>
                    Thank you for choosing our templates. We provide you best CSS templates at absolutely 100% free of charge. You may support us by sharing our website to your friends.
                </p>
                <div className='relative p-10 pl-30 bg-base-100 rounded-3xl flex flex-row gap-5 items-center overflow-hidden'>
                    <div className='absolute h-full top-0 left-0 p-5 bg-primary rounded-r-full content-center'>
                        <h2 className='text-xl text-base-100'>OFF</h2>
                        <h1 className='text-4xl font-bold text-base-100'>50%</h1>
                    </div>
                    <div>
                        <p>
                        Valide: <span className='text-primary'>24 April 2036</span>
                        </p>
                        <h3 className='text-2xl font-bold pt-5'>
                        Special Offer <span className='text-primary'>50%</span> OFF!
                        </h3>
                    </div>
                    <button className='btn rounded-full bg-primary text-base-100'>
                    ❯
                    </button>
                </div>
            </div>
            <div className='w-full lg:w-1/3 z-10 bg-primary rounded-2xl flex flex-col items-start p-6 gap-8'>
                <input type="text" placeholder="Your name" className="input input-md w-full bg-secondary/50 rounded-3xl" />
                <input type="text" placeholder="Your email" className="input input-md w-full bg-secondary/50 rounded-3xl" />
                <input type="text" placeholder="Your message" className="input input-md w-full bg-secondary/50 rounded-3xl" />
                <button className='btn bg-base-100 text-primary hover:bg-primary-content rounded-3xl w-fit'>
                    Send Message Now
                </button>
            </div>

        </div>
    )
}

export default Contact