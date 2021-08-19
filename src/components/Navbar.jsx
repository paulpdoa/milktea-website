import React from 'react'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const dropDownVariants = {
    hidden: {
        y: '-100vw',
        opacity:0
    },
    visible: {
        y:0,
        opacity:1,
        transition: {
            duration: 1.5
        }
    }
}

const Navbar = () => {

    return (
        <nav className="grid grid-cols-6 py-6 shadow-xl w-full fixed bg-gray-50 z-50">
            <div className="col-span-1 flex justify-center">
                <h1 className="text-xl text-gray-700 font-bold">Milktea</h1>
            </div>
            <ul className="col-span-4 flex justify-around text-gray-800">
                <li className="group relative">
                    <a className="text-green-300 cursor-pointer">Home</a>
                    <div className="group-hover:block hidden pb-5 -mb-5">
                        <ul className="top-0 py-8 w-72 mt-9 grid grid-rows-5 justify-items-start p-5 gap-5 bg-gray-50 absolute rounded-xl">
                            <li>Sample 1</li>
                            <li>Sample 2</li>
                            <li>Sample 3</li>
                            <li>Sample 4</li>
                            <li>Sample 5</li>
                        </ul>
                    </div>
                </li>
                <li className="group relative">
                    <a className="hover:text-green-300 cursor-pointer">Menu</a>
                    <div className="group-hover:block hidden pb-5 -mb-5">
                        <ul className="top-0 py-8 w-72 mt-9 grid grid-rows-5 justify-items-start p-5 gap-5 bg-gray-50 absolute rounded-xl">
                            <li>Sample 1</li>
                            <li>Sample 2</li>
                            <li>Sample 3</li>
                            <li>Sample 4</li>
                            <li>Sample 5</li>
                        </ul>
                    </div>
                </li>
                <li className="group relative">
                    <a className="hover:text-green-300 cursor-pointer">Blog</a>
                    <div className="group-hover:block hidden pb-5 -mb-5">
                        <ul className="top-0 py-8 w-72 mt-9 grid grid-rows-5 justify-items-start p-5 gap-5 bg-gray-50 absolute rounded-xl">
                            <li>Sample 1</li>
                            <li>Sample 2</li>
                            <li>Sample 3</li>
                            <li>Sample 4</li>
                            <li>Sample 5</li>
                        </ul>
                    </div>
                </li>
                <li className="group relative">
                    <a className="hover:text-green-300 cursor-pointer">Franchising</a>
                    <div className="group-hover:block hidden pb-5 -mb-5">
                        <ul className="top-0 py-8 w-72 mt-9 grid grid-rows-5 justify-items-start p-5 gap-5 bg-gray-50 absolute rounded-xl">
                            <li>Sample 1</li>
                            <li>Sample 2</li>
                            <li>Sample 3</li>
                            <li>Sample 4</li>
                            <li>Sample 5</li>
                        </ul>
                    </div>
                </li>
                <li className="group relative">
                    <a className="hover:text-green-300 cursor-pointer">Career</a>
                    <div className="group-hover:block hidden pb-5 -mb-5">
                        <ul className="top-0 py-8 w-72 mt-9 grid grid-rows-5 justify-items-start p-5 gap-5 bg-gray-50 absolute rounded-xl">
                            <li>Sample 1</li>
                            <li>Sample 2</li>
                            <li>Sample 3</li>
                            <li>Sample 4</li>
                            <li>Sample 5</li>
                        </ul>
                    </div>
                </li>
                <li className="group relative">
                    <a className="hover:text-green-300 cursor-pointer">Locations</a>
                    <div className="group-hover:block hidden pb-5 -mb-5">
                        <ul className="top-0 py-8 w-72 mt-9 grid grid-rows-5 justify-items-start p-5 gap-5 bg-gray-50 absolute rounded-xl">
                            <li>Sample 1</li>
                            <li>Sample 2</li>
                            <li>Sample 3</li>
                            <li>Sample 4</li>
                            <li>Sample 5</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a className="hover:text-green-300 cursor-pointer">Contact Us</a>
                </li>
                <li>
                    <a className="hover:text-green-300 cursor-pointer">Order Now!</a>
                </li>
            </ul>
            <div className="col-span-1 flex justify-evenly items-center">
                <Link to="#" className="fa fa-facebook text-blue-700"></Link>
                <Link to="#" className="fa fa-twitter text-blue-500"></Link>
                <Link to="#" className="fa fa-instagram text-blue-500"></Link>
            </div>
        </nav>
    )
}

export default Navbar
