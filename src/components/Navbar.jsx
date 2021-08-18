import React from 'react'

const Navbar = () => {
    return (
        <nav className="grid grid-cols-6 py-12 shadow-xl max-w-full">
            <div className="col-span-1 flex justify-center">
                <h1 className="text-xl text-gray-700 font-bold">Milktea</h1>
            </div>
            <ul className="col-span-4 flex justify-around text-gray-800">
                <li className="text-green-300">Home</li>
                <li>Menu</li>
                <li>Blog</li>
                <li>Franchising</li>
                <li>Career</li>
                <li>Locations</li>
                <li>Contact Us</li>
                <li>Order Now!</li>
            </ul>
            <div className="col-span-1 flex justify-evenly items-center">
                <a href="#" className="fa fa-facebook text-blue-700"></a>
                <a href="#" className="fa fa-twitter text-blue-500"></a>
                <a href="#" className="fa fa-instagram text-blue-500"></a>
            </div>
        </nav>
    )
}

export default Navbar
