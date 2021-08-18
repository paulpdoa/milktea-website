import {motion} from 'framer-motion';

const buttonVariants = {
    hover: {
        scale: 1.1,
        transition: {
            yoyo: Infinity
        }
    }
}

const Header = () => {
    return (
        <motion.header 
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:0.5 }}
        className="px-16 milkteaBanner bg-fixed bg-cover bg-no-repeat flex justify-around items-center">
            <div className="w-full flex justify-center p-12 rounded-full overflow-hidden">
                <img className="w-full" src="/image/milktea.png" alt="milktea" />
            </div>
            <div className="text-gray-200 flex justify-center w-full">
                <div>
                    <h1 className="text-6xl font-extrabold">Lorem ipsum dolor<br/> sit amet.</h1>
                    <p className="">Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Assumenda, aspernatur!</p>
                    <motion.button
                    variants={buttonVariants}
                    whileHover="hover" 
                    className="text-4xl font-bold text-gray-800 bg-yellow-300 mt-12 p-5 rounded-md">Order Now!</motion.button>
                </div>
            </div>
        </motion.header>
    )
}

export default Header
