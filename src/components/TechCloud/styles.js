import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%   { transform: translateY(0px) rotate(0deg); }
  50%  { transform: translateY(-12px) rotate(3deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

export const TechWrapper = styled.section`
  padding: 100px 0;
  text-align: center;

  h2 {
    font-size: clamp(40px, 8vw, 60px);
    color: ${(props) => props.theme.text.primary};
    margin-bottom: 50px;
  }
`;

export const TechCloudContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
  gap: 18px;
`;

export const TechItem = styled.div`
  padding: 12px 22px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-family: ${(props) => props.theme.fontFamily.fontMono};
  color: ${(props) => props.theme.text.primary};
  font-size: 16px;
  letter-spacing: 0.5px;
  animation: ${float} 4s ease-in-out infinite;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.07);
    box-shadow: 0 6px 22px rgba(0,0,0,0.25);
  }
`;
