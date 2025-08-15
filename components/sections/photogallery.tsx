'use client';

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function GalleryPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

    // Sample gallery images (replace with your actual images)
    const galleryImages = [
        { id: 1, src: 'https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-50.jpg-SMALL.JPG/:/rs=w:984,h:655', alt: 'Property exterior', width: 984, height: 655 },
        { id: 2, src: 'https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-14.jpg-SMALL.JPG/:/cr=t:0%25,l:0.05%25,w:99.9%25,h:99.9%25/rs=w:984,h:655', alt: 'Living room', width: 984, height: 655 },
        { id: 3, src: 'https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-45.jpg-SMALL.JPG/:/rs=w:984,h:655', alt: 'Modern kitchen', width: 984, height: 655 },
        { id: 4, src: 'https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg-SMALL.JPG/:/rs=w:984,h:655', alt: 'Master bedroom', width: 984, height: 655 },
        { id: 5, src: 'https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-54.jpg-SMALL.JPG/:/rs=w:984,h:655', alt: 'Bathroom', width: 984, height: 655 },
        { id: 6, src: 'https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-41.jpg-SMALL.JPG/:/rs=w:984,h:656', alt: 'Backyard', width: 984, height: 656 },
        { id: 7, src: 'https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-53.jpg-SMALL.JPG/:/rs=w:984,h:656', alt: 'Swimming pool', width: 984, height: 656 },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
        );
    };

    const openModal = (id: number) => setSelectedImage(id);
    const closeModal = () => setSelectedImage(null);

    const handleImageError = (imageId: number) => {
        setImageErrors(prev => new Set([...prev, imageId]));
        console.log(`Failed to load image with ID: ${imageId}`);
    };

    // Component for handling image with fallback
    const ImageWithFallback = ({ image, className, fill = false, sizes, onClick }: {
        image: typeof galleryImages[0];
        className?: string;
        fill?: boolean;
        sizes?: string;
        onClick?: () => void;
    }) => {
        if (imageErrors.has(image.id)) {
            return (
                <div className={`bg-gray-200 flex items-center justify-center ${className}`} onClick={onClick}>
                    <div className="text-gray-500 text-center p-4">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">Image not available</p>
                    </div>
                </div>
            );
        }

        return (
            <Image
                src={image.src}
                alt={image.alt}
                fill={fill}
                width={!fill ? image.width : undefined}
                height={!fill ? image.height : undefined}
                className={className}
                sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                unoptimized
                onError={() => handleImageError(image.id)}
                onClick={onClick}
                priority={image.id <= 2} // Prioritize first 2 images
            />
        );
    };

    return (
        <section id='listings' className='w-full'>
            <Head>
                <title>Photo Gallery | Marci Metzger Homes</title>
                <meta name="description" content="View our beautiful property gallery" />
            </Head>

            <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Page Header - Centered */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Photo Gallery
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Explore our beautiful properties
                        </p>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative w-full h-96 sm:h-[500px] overflow-hidden rounded-lg shadow-xl bg-gray-100">
                        {/* Carousel Slides */}
                        <div
                            className="flex transition-transform duration-500 ease-in-out h-full"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {galleryImages.map((image) => (
                                <div
                                    key={image.id}
                                    className="w-full flex-shrink-0 h-full relative"
                                    onClick={() => openModal(image.id)}
                                >
                                    <ImageWithFallback
                                        image={image}
                                        fill
                                        className="object-cover cursor-pointer"
                                        onClick={() => openModal(image.id)}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors z-10"
                            aria-label="Previous image"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors z-10"
                            aria-label="Next image"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Indicators */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                            {galleryImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/50'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Thumbnail Grid */}
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mt-6">
                        {galleryImages.map((image, index) => (
                            <div
                                key={image.id}
                                className={`cursor-pointer border-2 transition-all rounded-lg overflow-hidden ${index === currentIndex ? 'border-blue-500' : 'border-transparent'
                                    }`}
                                onClick={() => setCurrentIndex(index)}
                            >
                                <div className="relative w-full h-20 bg-gray-100">
                                    <ImageWithFallback
                                        image={image}
                                        fill
                                        className="object-cover"
                                        sizes="100px"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Image Modal */}
                    {selectedImage && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                            onClick={closeModal}
                        >
                            <div className="relative w-full h-full max-w-6xl max-h-screen">
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none z-10 bg-black/50 rounded-full p-2"
                                    aria-label="Close modal"
                                >
                                    <svg
                                        className="w-8 h-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className="flex justify-center items-center w-full h-full p-4"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
                                        {(() => {
                                            const modalImage = galleryImages.find(img => img.id === selectedImage);
                                            return modalImage ? (
                                                <ImageWithFallback
                                                    image={modalImage}
                                                    fill
                                                    className="object-contain"
                                                    sizes="100vw"
                                                />
                                            ) : null;
                                        })()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}