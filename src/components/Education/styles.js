// styles.js (añade o actualiza esto en el archivo existente)
import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

const gradientLine = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const grow = keyframes`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`;

export const StyledEducationSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 0;

  h2 {
    font-size: clamp(40px, 8vw, 60px);
    font-weight: ${(props) => props.theme.fontw.semibold};
    margin-bottom: 50px;
    color: ${(props) => props.theme.text.primary};
  }
`;

export const StyledTimeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end; // Alinea todo al lado derecho
`;

export const StyledTimelineItem = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center; // Centra los items horizontalmente
  margin-bottom: 60px;

  // Animación zoomfade (diferente a la anterior)
  &.zoomfade-enter {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }
  &.zoomfade-enter-active {
    opacity: 1;
    transform: scale(1) translateY(0);
    transition: opacity 600ms ease-in-out, transform 600ms ease-in-out;
  }
  &.zoomfade-enter-done {
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  &:hover {
    ${'' /* Efecto hover para modernidad */}
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
`;

export const StyledTimelineDot = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, ${(props) => props.theme.brand.primary}, ${(props) => props.theme.brand.secondary});
  border-radius: 50%;
  position: absolute;
  right: calc(-50px); // Posicionado para timeline en derecha
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ${zoomIn} 0.5s ease-out forwards, ${pulse} 2s infinite;
  animation-delay: ${(props) => props.delay || 0}ms;

  &:hover {
    animation: ${pulse} 1s infinite;
  }
`;

export const StyledIcon = styled.span`
  font-size: 20px;
  color: white;
`;

export const StyledTimelineContent = styled.div`
  max-width: 800px;       // ancho cómodo
  width: 100%;
  padding: 40px 50px;     // espacio interno suficiente
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.bg.variant},
    ${(props) => props.theme.bg.default}
  );
  box-shadow: 0 6px 25px rgba(0,0,0,0.15);
  opacity: 0;
  animation: ${zoomIn} 0.6s ease-out forwards;
  animation-delay: ${(props) => props.delay || 0}ms;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin: 0 0 12px;
    font-size: ${(props) => props.theme.fontSize.xxl};
    color: ${(props) => props.theme.text.primary};
  }

  h4 {
    margin: 0 0 12px;
    font-size: ${(props) => props.theme.fontSize.xl};
    color: ${(props) => props.theme.brand.primary};
  }

  span {
    display: block;
    margin: 0 0 16px;
    font-size: ${(props) => props.theme.fontSize.md};
    color: ${(props) => props.theme.text.accent};
    font-family: ${(props) => props.theme.fontFamily.fontMono};
  }

  p {
    margin: 0;
    color: ${(props) => props.theme.text.default};
  }

  /* Estilos para el certificado */
  .cert-wrapper {
    position: relative;
    margin-left: 10px;
    transform: translateY(-20px); 
  }

  .cert-wrapper img {
    width: 180px;
    border-radius: 10px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .cert-wrapper img:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.35);
  }
`;


export const StyledTimelineLine = styled.div`
  position: absolute;
  right: calc(-30px); // Línea en el lado derecho
  top: 40px;
  bottom: -70px;
  width: 4px;
  background: linear-gradient(90deg, ${(props) => props.theme.brand.primary}, ${(props) => props.theme.brand.secondary});
  background-size: 200% 200%;
  z-index: 1;
  transform: scaleY(0);
  transform-origin: top;
  animation: ${gradientLine} 3s ease infinite, ${grow} 0.8s ease-in-out forwards;
  animation-delay: ${(props) => props.delay || 0}ms;
`;
  