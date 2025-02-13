import React from 'react'

const Stats = () => {
  return (
    <div className='relative my-40 w-full'>
        <div className='absolute z-0 top-0 left-0 w-8/9 h-full rounded-r-full bg-primary'>
        </div>
        <div className='relative z-10 w-full flex flex-wrap justify-center items-center gap-20 my-20'>
            <div className='flex flex-col gap-3 justify-center items-center m-4'>
                <h3 className='text-6xl font-bold text-base-100'>150+</h3>
                <p className='text-lg text-base-100 font-bold'>Happy Students</p>
            </div>
            <div className='flex flex-col gap-3 justify-center items-center m-4'>
                <h3 className='text-6xl font-bold text-base-100'>804+</h3>
                <p className='text-lg text-base-100 font-bold'>Course Hours</p>
            </div>
            <div className='flex flex-col gap-3 justify-center items-center m-4'>
                <h3 className='text-6xl font-bold text-base-100'>50+</h3>
                <p className='text-lg text-base-100 font-bold'>Employed Students</p>
            </div>
            <div className='flex flex-col gap-3 justify-center items-center m-4'>
                <h3 className='text-6xl font-bold text-base-100'>15+</h3>
                <p className='text-lg text-base-100 font-bold'>Years of Experience</p>
            </div>
        </div>

    </div>
  )
}

export default Stats