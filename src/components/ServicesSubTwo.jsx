import React from 'react'

const ServicesSubTwo = () => {
    return (
        <div className='w-full relative grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 justify-center items-center p-12'>
            <div className='opacity-0 md:opacity-100 absolute z-0 top-[16.65%] right-0 w-3/4 rounded-l-full bg-secondary h-2/3'>
            </div>
            <div className='z-10 lg:col-start-2 bg-primary rounded-2xl p-4 flex flex-col gap-4'>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold text-primary">Where shall we begin?</div>
                    <div className="collapse-content text-sm">
                        Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold text-primary">How do we work together?</div>
                    <div className="collapse-content text-sm">
                        Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold text-primary">How do I update my profile information?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold text-primary">How do I update my profile information?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
            </div>
            <div className='z-10 lg:col-start-3 rounded-2xl p-4 flex flex-col gap-5 md:justify-start md:items-start justify-center items-center'>
                <p className='text-primary font-semibold'>
                    ABOUT US
                </p>
                <h2 className='text-2xl font-semibold'>
                    What make us the best academy online?
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravid risus commodo.
                </p>
                <button className='btn bg-base-100 text-primary hover:bg-primary hover:text-base-100 w-1/3 rounded-3xl'>
                    Discover More
                </button>
            </div>
        </div>
    )
}

export default ServicesSubTwo