/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
export const email = 'patrickschonewolf@hotmail.com';
import { srConfig } from '@config/sr';
import { NumberedHeading } from '@common/styles';
import { StyledContactSection } from './styles';

const Contact = () => {
  const revealContainer = useRef(null);
  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <NumberedHeading overline>¡Gracias por dedicarme tu tiempo!</NumberedHeading>

      <h2 className="title">Sección de Contacto</h2>

      <p>
      Actualmente, estoy buscando nuevas oportunidades y mi bandeja de entrada siempre está abierta. Ya sea que tengas alguna pregunta o simplemente quieras saludar, ¡haré todo lo posible por responderte!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Enviar Email
      </a>
    </StyledContactSection>
  );
};

export default Contact;
