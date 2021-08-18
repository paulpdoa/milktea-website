import React from 'react'
import { motion } from 'framer-motion';

const leftVariant = {
    hidden: { 
        scale:0
    },
    visible: {
        scale:1,
        transition: {
            type: 'spring',
            stiffness:900,
            delay: 0.9,
            duration:2
        }
    }
}

const Products = () => {
    return (
        <div className="bg-gray-100 px-24 py-16 text-gray-800 relative z-10">
            <div className="grid grid-cols-3 justify-items-center gap-10">
                <motion.div 
                variants={leftVariant}
                initial="hidden"
                animate="visible"
                className="col-span-1">
                    <h1 className="text-6xl font-extrabold">Featured Products</h1>
                    <p className="font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, cupiditate.</p>
                    <div className="relative">
                        <img className="mt-5 rounded h-64 w-full object-cover" src="/image/product1.jpg" alt="product1" />
                        <svg className="w-6 h-full absolute top-0 left-0 text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <svg className="w-6 h-full absolute top-0 right-0 text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                    </div>
                </motion.div>
                <div className="col-span-2 self-center">
                   <div className="flex justify-center">
                       <img className="object-cover rounded-full w-1/2" src="/image/product.png" alt="product" />
                   </div>
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

        </div>
    )
}

export default Products
