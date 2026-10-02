import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-8 text-center"
    >
      <h2 className="text-2xl font-bold text-white mb-2">Contact Page</h2>
      <p className="text-slate-400">Contact form module ready.</p>
    </motion.div>
  );
};
