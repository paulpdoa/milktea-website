import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-100 shadow-2xl text-gray-700">
            
            <div className="grid grid-cols-2 py-16 px-32">
                <div>
                    <h1 className="font-extrabold text-2xl">Quick Links</h1>
                    <div className="grid grid-cols-2 py-5 w-1/2">
                        <div className="grid-row-4 grid gap-5">
                            <p>Menu</p>
                            <p>Blog</p>
                            <p>Franchising</p>
                            <p>Merch</p>
                        </div>
                        <div className="grid-row-4 grid gap-5">
                            <p>Career</p>
                            <p>Locations</p>
                            <p>Contact Us</p>
                            <p>Online Ordering</p>
                        </div>
                    </div>           
                </div>
                <div>
                   <h1 className="font-extrabold text-2xl">Our Delivery Partners</h1>
                   <div className="w-1/2 grid grid-cols-3 py-5">
                       <h3>Partner 1</h3>
                       <h3>Partner 2</h3>
                       <h3>Partner 3</h3>
                   </div>
                </div>
            </div>
            <div className="px-5 p-5 flex justify-around">
                <div>
                    <p className="text-xs">Milktea 2021. All Rights reserved</p>
                </div>
                <div>
                    <p className="text-xs">milkteashop@gmail.com</p>
                </div>
                <div className="flex justify-around w-32">
                    <a href="#" className="fa fa-facebook text-blue-700"></a>
                    <a href="#" className="fa fa-twitter text-blue-500"></a>
                    <a href="#" className="fa fa-instagram text-blue-500"></a>
                </div>
            </div>

            <div className="circles"> { /* animation area */ } 
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
