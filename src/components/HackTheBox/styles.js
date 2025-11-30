// styles.js (add or update this in the file for this component)
import styled, { keyframes } from 'styled-components';

const fadeZoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledHTBSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 100px 0;

  h2 {
    font-size: clamp(40px, 8vw, 60px);
    font-weight: ${(props) => props.theme.fontw.semibold};
    margin-bottom: 50px;
    color: ${(props) => props.theme.text.primary};
    text-align: center;
  }

  // Animations for entry
  &.fadezoom-enter {
    animation: ${fadeZoomIn} 0.8s ease-out;
  }

  &.slideup-enter {
    animation: ${slideUp} 0.6s ease-out;
  }
`;

export const StyledProfileCard = styled.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.8)); // Darkened gradient for darker container
  color: ${(props) => props.theme.text.primary}; // Light text to stand out
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 123, 255, 0.5); // Added blue glow effect
  text-align: center;
  margin-bottom: 60px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 123, 255, 0.7); // Enhanced blue glow on hover
  }

  h3 {
    font-size: ${(props) => props.theme.fontSize.xxxl};
    margin-bottom: 10px;
    color: ${(props) => props.theme.text.primary}; // Ensure standout
  }

  p {
    font-size: ${(props) => props.theme.fontSize.lg};
    margin-bottom: 20px;
    color: ${(props) => props.theme.text.accent}; // Accent for visibility
  }
`;

export const StyledStatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
`;

export const StyledStatItem = styled.div`
  background: rgba(0, 0, 0, 0.3); // Darker background
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.3); // Subtle blue glow

  span {
    display: block;
    font-size: ${(props) => props.theme.fontSize.sm};
    margin-bottom: 5px;
    color: ${(props) => props.theme.text.accent};
  }

  strong {
    font-size: ${(props) => props.theme.fontSize.xl};
    color: ${(props) => props.theme.text.primary};
  }
`;

export const StyledWriteupsTitle = styled.h3`
  font-size: clamp(30px, 6vw, 50px);
  font-weight: ${(props) => props.theme.fontw.semibold};
  margin-bottom: 40px;
  color: ${(props) => props.theme.text.primary};
  text-align: center;
`;

export const StyledWriteupsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

export const StyledWriteupCard = styled.div`
  background: rgba(30, 30, 30, 0.9); // Darker container background
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 123, 255, 0.4); // Blue glow effect
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.4), 0 0 25px rgba(0, 123, 255, 0.6); // Enhanced glow on hover
  }

  h4 {
    font-size: ${(props) => props.theme.fontSize.xl};
    margin-bottom: 10px;
    color: ${(props) => props.theme.text.primary}; // Standout text
  }

  p {
    font-size: ${(props) => props.theme.fontSize.md};
    margin-bottom: 10px;
    color: ${(props) => props.theme.text.accent};
  }

  a {
    display: inline-block;
    background: rgba(50, 50, 50, 0.8); // Darker, less blue background
    color: ${(props) => props.theme.text.primary}; // Light text to stand out
    padding: 10px 20px;
    border-radius: 6px;
    text-decoration: none;
    transition: background 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.3); // Subtle blue glow

    &:hover {
      background: rgba(80, 80, 80, 0.8); // Slightly lighter dark on hover
      box-shadow: 0 0 15px rgba(0, 123, 255, 0.5); // Enhanced blue glow
    }
  }
`;