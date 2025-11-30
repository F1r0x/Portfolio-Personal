// styles.js (añade o actualiza esto en el archivo existente)
import styled, { keyframes } from 'styled-components';

const scaleIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
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

export const StyledExperienceSection = styled.section`
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
  align-items: flex-start;
`;

export const StyledTimelineItem = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;

  // Definir las animaciones para slidein (reemplaza fadeup para más movimiento)
  &.slidein-enter {
    opacity: 0;
    transform: translateX(-50px);
  }
  &.slidein-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms ease-out, transform 500ms ease-out;
  }
  &.slidein-enter-done {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const StyledTimelineDot = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.theme.brand.primary};
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 10px;
  z-index: 2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transform: scale(0);
  animation: ${scaleIn} 0.4s ease-out forwards;
  animation-delay: ${(props) => props.delay || 0}ms;
`;

export const StyledTimelineContent = styled.div`
  margin-left: 40px;
  background: ${(props) => props.theme.bg.variant};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;

  h3 {
    margin: 0 0 5px;
    font-size: ${(props) => props.theme.fontSize.xl};
    color: ${(props) => props.theme.text.primary};
  }

  h4 {
    margin: 0 0 5px;
    font-size: ${(props) => props.theme.fontSize.lg};
    color: ${(props) => props.theme.brand.secondary};
  }

  span {
    display: block;
    margin: 0 0 10px;
    font-size: ${(props) => props.theme.fontSize.sm};
    color: ${(props) => props.theme.text.accent};
    font-family: ${(props) => props.theme.fontFamily.fontMono};
  }

  p {
    margin: 0;
    color: ${(props) => props.theme.text.default};
  }
`;

export const StyledTimelineLine = styled.div`
  position: absolute;
  left: 10px;
  top: 30px;
  bottom: -50px;
  width: 2px;
  background-color: ${(props) => props.theme.brand.primary};
  z-index: 1;
  transform: scaleY(0);
  transform-origin: top;
  animation: ${grow} 0.6s ease-in-out forwards;
  animation-delay: ${(props) => props.delay || 0}ms;
`;