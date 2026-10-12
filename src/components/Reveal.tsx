import React from 'react';
import { motion } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  y = 40,
}) => (
  <motion.div
    className={className}
    // No filter here: a filtered ancestor breaks backdrop-filter on glass children
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '0px 0px -10% 0px' }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default Reveal;
