import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../app/Find.module.css';

const Find: React.FC = () => {
    const [filters, setFilters] = useState({
        location: '',
        type: '',
        sortBy: '',
        bedrooms: 'Any Number',
        baths: 'Any Number',
        minPrice: '',
        maxPrice: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSearch = () => {
        // Implement search functionality here
        console.log('Search filters:', filters);
        // Add your search logic or API call here
    };

    return (
        <div className={styles.searchContainer}>
            <motion.h1
                className={styles.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Find Your Dream Home
            </motion.h1>

            <motion.div
                className={styles.filterGrid}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                {/* First row */}
                <div className={styles.filterRow}>
                    <motion.div
                        className={styles.filterItem}
                        whileHover={{ scale: 1.02 }}
                    >
                        <label>Location</label>
                        <input
                            type="text"
                            name="location"
                            value={filters.location}
                            onChange={handleInputChange}
                            placeholder="Any"
                            className={styles.inputField}
                        />
                    </motion.div>

                    <motion.div
                        className={styles.filterItem}
                        whileHover={{ scale: 1.02 }}
                    >
                        <label>Type</label>
                        <select
                            name="type"
                            value={filters.type}
                            onChange={handleInputChange}
                            className={styles.selectField}
                        >
                            <option value="">Any</option>
                            <option value="house">House</option>
                            <option value="apartment">Apartment</option>
                            <option value="condo">Condo</option>
                        </select>
                    </motion.div>

                    <motion.div
                        className={styles.filterItem}
                        whileHover={{ scale: 1.02 }}
                    >
                        <label>Sort By</label>
                        <select
                            name="sortBy"
                            value={filters.sortBy}
                            onChange={handleInputChange}
                            className={styles.selectField}
                        >
                            <option value="">Default</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="newest">Newest First</option>
                        </select>
                    </motion.div>
                </div>

                {/* Second row */}
                <div className={styles.filterRow}>
                    <motion.div
                        className={styles.filterItem}
                        whileHover={{ scale: 1.02 }}
                    >
                        <label>Bedrooms</label>
                        <select
                            name="bedrooms"
                            value={filters.bedrooms}
                            onChange={handleInputChange}
                            className={styles.selectField}
                        >
                            <option value="Any Number">Any Number</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4+">4+</option>
                        </select>
                    </motion.div>

                    <motion.div
                        className={styles.filterItem}
                        whileHover={{ scale: 1.02 }}
                    >
                        <label>Baths</label>
                        <select
                            name="baths"
                            value={filters.baths}
                            onChange={handleInputChange}
                            className={styles.selectField}
                        >
                            <option value="Any Number">Any Number</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4+">4+</option>
                        </select>
                    </motion.div>

                    <motion.div
                        className={styles.filterItem}
                        whileHover={{ scale: 1.02 }}
                    >
                        <label>Min Price</label>
                        <input
                            type="number"
                            name="minPrice"
                            value={filters.minPrice}
                            onChange={handleInputChange}
                            placeholder="Min"
                            className={styles.inputField}
                        />
                    </motion.div>

                    <motion.div
                        className={styles.filterItem}
                        whileHover={{ scale: 1.02 }}
                    >
                        <label>Max Price</label>
                        <input
                            type="number"
                            name="maxPrice"
                            value={filters.maxPrice}
                            onChange={handleInputChange}
                            placeholder="Max"
                            className={styles.inputField}
                        />
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className={styles.searchButtonContainer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                <motion.button
                    className={styles.searchButton}
                    onClick={handleSearch}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                    Search Now

                </motion.button>
            </motion.div>
        </div>
    );
};

export default Find;