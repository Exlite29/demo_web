import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const imageVariants: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10
            }
        }
    };

    const textVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeOut',
                duration: 0.6
            }
        }
    };

    const buttonVariants: Variants = {
        hover: {
            scale: 1.05,
            boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.4)",
            transition: {
                duration: 0.3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.98
        }
    };

    const floatingVariants: Variants = {
        float: {
            y: [-10, 10],
            transition: {
                y: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }
            }
        }
    };

    return (
        <section ref={ref} className="relative flex items-center py-20 md:py-2 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-40 items-center"
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                >
                    {/* Left Column - Circular Image with floating effect */}
                    <motion.div
                        className="flex justify-center order-1 md:order-none mb-8 md:mb-0"
                        variants={imageVariants}
                    >
                        <motion.div
                            className="relative w-64 h-64 md:w-96 md:h-96"
                            variants={floatingVariants}
                            animate="float"
                        >
                            <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-xl">
                                <motion.img
                                    src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/photo-5db79f9.jpg/:/cr=t:14.65%25,l:0%25,w:100%25,h:66.64%25/rs=w:730,h:730,cg:true"
                                    alt="Hero"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.02 }}
                                />
                            </div>
                            {/* Animated decorative circles */}
                            <motion.div
                                className="absolute -bottom-2 -left-2 w-16 h-16 md:-bottom-4 md:-left-4 md:w-24 md:h-24 rounded-full bg-blue-100 opacity-70"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.7, 0.9, 0.7]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                            />
                            <motion.div
                                className="absolute -top-2 -right-2 w-12 h-12 md:-top-4 md:-right-4 md:w-16 md:h-16 rounded-full bg-blue-200 opacity-70"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.7, 0.5, 0.7]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 1
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Contact Info with staggered animations */}
                    <motion.div
                        className="flex justify-center order-2 md:order-none"
                        variants={textVariants}
                    >
                        <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md space-y-4 md:space-y-6 backdrop-blur-sm bg-opacity-90">
                            <motion.h2
                                className="text-2xl md:text-3xl font-bold text-gray-800"
                                variants={textVariants}
                            >
                                MARCI METZGER
                            </motion.h2>

                            <motion.p
                                className="text-gray-600 md:text-lg"
                                variants={textVariants}
                            >
                                Realtor for 3 decades!
                            </motion.p>

                            <motion.div
                                className="text-3xl text-center md:text-4xl font-bold text-blue-600 py-2 md:py-4"
                                variants={textVariants}
                            >
                                206-919-6886
                            </motion.div>

                            <motion.button
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 md:px-6 md:py-4 rounded-lg font-semibold text-base md:text-lg"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => window.location.href = 'tel:18001234567'}
                            >
                                Call Now
                            </motion.button>

                            <motion.p
                                className="text-xs md:text-sm text-gray-500 mt-2 md:mt-4"
                                variants={textVariants}
                            >
                                Or send us an email at: contact@example.com
                            </motion.p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating background elements */}
            <motion.div
                className="absolute top-20 left-10 w-8 h-8 rounded-full bg-blue-100 opacity-40"
                animate={{
                    y: [0, 30, 0],
                    x: [0, 20, 0]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-12 h-12 rounded-full bg-blue-200 opacity-30"
                animate={{
                    y: [0, -40, 0],
                    x: [0, -30, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2
                }}
            />
        </section>
    );
};

export default Hero;