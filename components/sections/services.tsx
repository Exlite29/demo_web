import Image from 'next/image';
import type { Metadata } from 'next';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
    title: 'Our Services',
    description: 'Discover our professional real estate services',
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

const Services = () => {
    const soldItems = [
        {
            id: 1,
            title: 'Real Estate Done Right',
            description: `Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!`,
            imageUrl: 'https://img1.wsimg.com/isteam/stock/12792/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730',
        },
        {
            id: 2,
            title: 'Commercial & Residential',
            description: `Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.`,
            imageUrl: 'https://img1.wsimg.com/isteam/stock/43920/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730',
        },
        {
            id: 3,
            title: 'Rely on Expertise',
            description: `If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.`,
            imageUrl: 'https://img1.wsimg.com/isteam/stock/kayaJdA/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730',
        },
    ];

    return (
        <div id='about' className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Services
                </motion.h1>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {soldItems.map((item) => (
                        <motion.div
                            key={item.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl group"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                </h2>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {item.description}
                                </p>
                                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
                                    Learn more
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Services;