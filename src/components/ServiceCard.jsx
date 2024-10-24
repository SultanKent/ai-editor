// components/ServiceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Service.scss';

export const ServiceCard = ({ service }) => {
  return (
    <motion.div
      className="service-card"
      whileHover={{
        scale: 1.1,
        rotate: 2,
        boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <div className="service-card-content">
        <motion.h2 className="service-card-title">{service.title}</motion.h2>
        <motion.p className="service-card-description">{service.description}</motion.p>
        <Link to={`/${service.component}`} className="service-card-link">
          <motion.button
            whileHover={{ backgroundColor: "#ff6b6b", color: "#fff", border: "none" }}
            className="service-card-button"
          >
            Начать
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};
