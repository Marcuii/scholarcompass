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
                    <a href=''>Home</a>
                </div>
                <div tabIndex={0} role="button" className="btn border-none rounded-2xl bg-transparent text-primary-content hover:bg-primary-content/70 hover:text-primary">
                    <a href=''>Services</a>
                </div>
                <div tabIndex={0} role="button" className="btn border-none rounded-2xl bg-transparent text-primary-content hover:bg-primary-content/70 hover:text-primary">
                    <a href=''>Courses</a>
                </div>
                <div tabIndex={0} role="button" className="btn border-none rounded-2xl bg-transparent text-primary-content hover:bg-primary-content/70 hover:text-primary">
                    <a href=''>Team</a>
                </div>
                <div tabIndex={0} role="button" className="btn border-none rounded-2xl bg-transparent text-primary-content hover:bg-primary-content/70 hover:text-primary">
                    <a href=''>Events</a>
                </div>
                <div tabIndex={0} role="button" className="btn border-none rounded-2xl bg-transparent text-primary-content hover:bg-primary-content/70 hover:text-primary">
                    <a href=''>Register Now!</a>
                </div>
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
                            <a href=''>Home</a>
                        </li>
                        <li>
                            <a href=''>Services</a>
                        </li>
                        <li>
                            <a href=''>Courses</a>
                        </li>
                        <li>
                            <a href=''>Team</a>
                        </li>
                        <li>
                            <a href=''>Events</a>
                        </li>
                        <li>
                            <a href=''>Register Now!</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar