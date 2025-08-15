'use client';

import { useState } from 'react';
import { FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.email) newErrors.email = 'Please enter a valid email address.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            setTimeout(() => {
                setIsSubmitting(false);
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            }, 1000);
        }
    };

    // Google Maps embed URL for the address
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.692944932576!2d-116.0036824!3d36.2088493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8a1a6b3c4b1b5%3A0x9e5e3a9b3c4b1b5!2s3190%20NV-160%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s";

    return (
        <section id='contact' className="relative min-h-screen max-w-9xl mx-auto px-4">
            {/* Full-page Google Map Background */}
            <div className="absolute inset-0 z-0">
                <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute inset-0 bg-black/30"></div> {/* Overlay for better readability */}
            </div>

            {/* Content Container */}
            <div className="relative z-10">
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <h1 className="text-3xl text-center font-bold mb-8 text-white">CALL OR VISIT</h1>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4">Send Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Marci Metzger - THE RIDGE REALTY GROUP"
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1">Email*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="sample@email.com"
                                        className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block mb-1">Message</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-400"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>

                            <div className="mt-6 text-sm text-gray-600">
                                <p>This site is protected by reCAPTCHA and the Google <a href="#" className="text-blue-600">Privacy Policy</a> and <a href="#" className="text-blue-600">Terms of Service</a> apply.</p>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4">Office Hours</h2>
                                <div className="flex items-start gap-3 mb-2">
                                    <FaClock className="mt-1 text-gray-600" />
                                    <div>
                                        <p className="font-medium">Open today 08:00 am - 07:00 pm <span className="text-green-600">✔</span></p>
                                        <p>Open daily 8:00 am - 7:00 pm</p>
                                    </div>
                                </div>
                                <p className="text-sm italic mt-4">Appointments outside office hours available upon request. Just call!</p>
                            </div>

                            <div className="border-t pt-6">
                                <div className="flex items-start gap-3 mb-4">
                                    <FaPhone className="mt-1 text-gray-600" />
                                    <div>
                                        <p className="font-medium">Phone</p>
                                        <p>(206) 919-6886</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="mt-1 text-gray-600" />
                                    <div>
                                        <p className="font-medium">Address</p>
                                        <p>3190 HW-160, Suite F</p>
                                        <p>Pahrump, Nevada 89048, United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}