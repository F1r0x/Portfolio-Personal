/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export const email = 'patrickschonewolf@hotmail.com';
export const featuredProjects = featuredProjects;
export const projects = projects;
import { NAV_DELAY, LOADER_DELAY } from '@lib/constants';
import { StyledHeroSection, StyledBigTitle } from './styles';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>¡Bienvenido a mi Porfolio!</h1>;
  const two = <StyledBigTitle>Patrick Schönewolf</StyledBigTitle>;
  const three = <StyledBigTitle slate>Desarrollador de Aplicaciones Web</StyledBigTitle>;
  const four = (
    <p>
      Soy un desarrollador Web orientado a ciberseguridad, automatización y administración de sistemas
      Linux.<br /><br /> Apasionado del aprendizaje continuo, la optimización de procesos, la creación de
      plataformas útiles y los proyectos donde pueda combinar tecnología y creatividad.
    </p>
  );
  const five = (
    <a href={`mailto:${email}`} className="email-link">
      Contactar
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <AnimatePresence>
        {isMounted &&
          items.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={itemVariants}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              style={{ marginBottom: '1rem' }} // Ajusta el espacio si quieres
            >
              {item}
            </motion.div>
          ))}
      </AnimatePresence>
    </StyledHeroSection>
  );
};

export default Hero;
