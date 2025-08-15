import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import styles from '../../app/logo.module.css';

const LogoSection = () => {
    const logos = [
        { src: 'https://img1.wsimg.com/isteam/ip/94db7874-336d-4817-aee0-64bbe73e984c/BIG%20CIRCLE%202.png/:/rs=w:288,h:288,cg:true,m/cr=w:288,h:288/qt=q:95', alt: 'Logo 1', width: 150, height: 50 },
        { src: 'https://toppng.com/uploads/preview/equal-housing-opportunity-logo-vector-11574200813xxobzv0wqt.png', alt: 'Logo 2', width: 150, height: 50 },
        { src: 'https://i.pinimg.com/736x/42/7c/57/427c574340dd9a9cf8339f5f5f6d4707.jpg', alt: 'Logo 3', width: 150, height: 50 },
        { src: 'https://ww1.prweb.com/prfiles/2016/08/12/13614323/PVCC-Logo-Transp%20copy.png?p=publish', alt: 'Logo 4', width: 150, height: 50 },
    ];

    // Properly typed variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            filter: 'brightness(1.1)',
            transition: { duration: 0.2 }
        }
    };

    const titleVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className={`${styles.logoSection} `}>
            <div className="container mx-auto px-4 grayscale-0 " >
                <motion.div
                    className={styles.logoContainer}
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.logoWrapper} flex`}
                            variants={itemVariants}
                            whileHover="hover"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={logo.height}
                                className={`${styles.logo} grayscale hover:grayscale-0 transition-all duration-300`}
                                quality={100}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LogoSection;