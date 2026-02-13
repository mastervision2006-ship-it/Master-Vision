import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', glow = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`
        relative backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] 
        rounded-2xl p-6 sm:p-8 
        ${glow ? 'hover:shadow-glow border-brand-red/20' : 'hover:bg-white/[0.05]'}
        transition-all duration-500 group
        ${className}
      `}
    >
      {/* Subtle Shine Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {children}
    </motion.div>
  );
};

export default GlassCard;