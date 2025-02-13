import React from 'react'
import { BsList } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className="navbar z-20 fixed top-0  bg-primary rounded-b-4xl flex flex-row md:flex-wrap md:gap-3 lg:gap-0 p-2 w-[99%] justify-evenly shadow-2xl">
            <div className="flex flex-row sm:basis-1/2 gap-2 justify-center">
                <a className="btn btn-ghost text-3xl text-primary-content md:border-r-primary-content mr-1 hover:text-primary">SCHOLAR COMPASS</a>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="hidden input input-bordered rounded-2xl w-auto bg-secondary text-primary md:inline-flex" />
                </div>
            </div>
            <div className="hidden md:flex-row md:flex sm:basis-1/2 gap-2 justify-center">
                <div tabIndex={0} role="button" className="btn border-none rounded-2xl bg-transparent text-primary-content hover:bg-primary-content/70 hover:text-primary">
                    <a href='#header'>Home</a>
                </div>
                <div tabIndex={0} role="button" className="btn border-none rounded-2xl bg-transparent text-primary-content hover:bg-primary-content/70 hover:text-primary">
                    <a href='#services'>Services</a>
                </div>
                <div tabIndex={0} role="button" className="btn border-none rounded-2xl bg-transparent text-primary-content hover:bg-primary-content/70 hover:text-primary">
                    <a href='#courses'>Courses</a>
                </div>
                <div tabIndex={0} role="button" className="btn border-none rounded-2xl bg-transparent text-primary-content hover:bg-primary-content/70 hover:text-primary">
                    <a href='#team'>Team</a>
                </div>
                <div tabIndex={0} role="button" className="btn border-none rounded-2xl bg-transparent text-primary-content hover:bg-primary-content/70 hover:text-primary">
                    <a href='#events'>Events</a>
                </div>
                <div tabIndex={0} role="button" className="btn border-none rounded-2xl bg-transparent text-primary-content hover:bg-primary-content/70 hover:text-primary">
                    <a href='#contact'>Register Now!</a>
                </div>
                <label className="swap swap-rotate">
                    <input type="checkbox" className="theme-controller" value="dark" />

                    <svg
                        class="swap-off  fill-base-100"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    <svg
                        class="swap-on h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
            </div>
            <div className="flex sm:basis-1/2 pr-2 justify-end md:hidden">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-primary-content active:bg-primary-content/20 focus:text-primary">
                        <BsList />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow text-primary">
                        <li>
                            <input type="text" placeholder="Search" className="input input-bordered rounded-2xl w-auto bg-secondary text-primary" />
                        </li>
                        <li>
                            <a href='#header'>Home</a>
                        </li>
                        <li>
                            <a href='#services'>Services</a>
                        </li>
                        <li>
                            <a href='#courses'>Courses</a>
                        </li>
                        <li>
                            <a href='#team'>Team</a>
                        </li>
                        <li>
                            <a href='#events'>Events</a>
                        </li>
                        <li>
                            <a href='#contact'>Register Now!</a>
                        </li>
                        <li>
                            <label className="swap swap-rotate">
                                <input type="checkbox" className="theme-controller" value="dark" />

                                <svg
                                    class="swap-off  fill-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>

                                <svg
                                    class="swap-on h-10 w-10 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar