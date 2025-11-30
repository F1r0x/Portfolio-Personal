/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { email } from '@config';
import { NAV_DELAY, LOADER_DELAY } from '@lib/constants';
import { StyledHeroSection, StyledBigTitle } from './styles';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>¡Bienvenido a mi Porfolio!</h1>;
  const two = <StyledBigTitle>Patrick Schönewolf </StyledBigTitle>;
  const three = <StyledBigTitle slate>Desarrollador de Aplicaciones Web</StyledBigTitle>;
  const four = (
    <p>
      Soy un desarrollador Web orientado a ciberseguridad, automatización y administración de sistemas
      Linux.<br></br><br></br> Apasionado del aprendizaje continuo, la optimización de procesos, la creación de
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
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={LOADER_DELAY}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
