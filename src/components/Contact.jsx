import React from 'react'

const Contact = () => {
    return (
        <div className="bg-gray-50">
            <div className="px-24 py-24 grid grid-cols-2 text-gray-900">
                <div className="flex justify-center">
                    <img src="/image/milktea2.png" alt="milktea" />
                </div>
                <div>
                    <h1 className="text-6xl font-extrabold">Contact Us</h1>
                    <span className="font-bold">Lorem ipsum dolor sit.</span>
                    <form className="relative p-12">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="grid grid-row-3 gap-2 h-1/2">
                                <input className="border rounded-sm outline-none border-gray-500 p-1" type="text" placeholder="Name*" />
                                <input className="border rounded-sm outline-none border-gray-500 p-1" type="email" placeholder="Email*" />
                                <input className="border rounded-sm outline-none border-gray-500 p-1" type="text" placeholder="Subject" />
                            </div>
                            <div className="flex justify-center items-center">
                                <textarea className="border rounded-md outline-none border-gray-500 h-full p-1" placeholder="Message" cols="30" rows="3"></textarea>
                            </div>
                            <button className="absolute p-2 bg-green-500 rounded-lg w-32 text-gray-100 font-bold bottom-0">Send</button>
                        </div>
                            
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
