import { useState, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@config';
import { LOADER_DELAY } from '@lib/constants';
import { useScrollDirection } from '@hooks';
import { Menu } from '@components';
import { IconLogo } from '@components/Icons';
import { StyledHeader, StyledNav, StyledLinks } from './styles';

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const variantsFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const variantsFadeDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>
        <AnimatePresence>
          {isMounted && (
            <motion.div
              className="logo"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variantsFade}
              transition={{ duration: 0.5 }}
            >
              {isHome ? (
                <a href="/" aria-label="home">
                  <IconLogo width={36.581} height={50.186} />
                </a>
              ) : (
                <Link href="/" aria-label="home">
                  <IconLogo />
                </Link>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <StyledLinks>
          <ol>
            <AnimatePresence>
              {isMounted &&
                navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <motion.li
                    key={url}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variantsFadeDown}
                    transition={{ duration: 0.5, delay: isHome ? i * 0.1 : 0 }}
                  >
                    <a data-scroll href={url}>
                      {name}
                    </a>
                  </motion.li>
                ))}
            </AnimatePresence>
          </ol>
        </StyledLinks>

        <AnimatePresence>
          {isMounted && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variantsFade}
              transition={{ duration: 0.5 }}
            >
              <Menu />
            </motion.div>
          )}
        </AnimatePresence>
      </StyledNav>
    </StyledHeader>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export default Nav;
