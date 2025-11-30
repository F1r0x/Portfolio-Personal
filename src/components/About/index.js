/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import { NumberedHeading } from '@common/styles';
import Image from 'next/image';
import { srConfig } from '@config/sr';
import { StyledAboutSection, StyledText, StyledPic } from './styles';
import TechCloud from '../TechCloud';

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <NumberedHeading>Sobre mi</NumberedHeading>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              ¡Buenas! Mi nombre es Patrick y soy un desarrollador web de Alicante, España.
             <br />
             <br />
              Desde hace más de 5 años me dedico a crear aplicaciones web y móviles, especializándome en el desarrollo Front-End. 
              También tengo experiencia en laboratorios de ciberseguridad y administración de sistemas Linux.
              <br />
              <br />
              Mi objetivo es encontrar un trabajo donde pueda seguir aprendiendo y creciendo como desarrollador, aportando valor a la empresa y a los usuarios finales.
              <br />
              <br />
              Estas son algunas de las tecnologías que más he utilizado durante estos últimos años:
            </p>
          </div>
          
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Image width={300} height={300} blu src="/avatar.png" alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
      <TechCloud />
    </StyledAboutSection>
  );
};

export default About;
