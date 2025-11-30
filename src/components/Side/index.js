import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { LOADER_DELAY } from '@lib/constants';
import { StyledSideElement } from './styles';

const Side = ({ children, isHome, orientation }) => {
  const [isMounted, setIsMounted] = useState(!isHome);

  useEffect(() => {
    if (!isHome) return;
    const timeout = setTimeout(() => setIsMounted(true), LOADER_DELAY);
    return () => clearTimeout(timeout);
  }, [isHome]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <StyledSideElement orientation={orientation}>
      <AnimatePresence>
        {isMounted && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </StyledSideElement>
  );
};

Side.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  orientation: PropTypes.string,
};

export default Side;
