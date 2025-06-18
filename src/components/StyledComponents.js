import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 54px);
  padding: ${props => props.theme.spacing.lg};
  max-width: 480px;
  margin: 0 auto;
  position: relative;
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius["2xl"]};
  box-shadow: ${props => props.theme.colors.shadow};
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.colors.border};
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.lg} ${props => props.theme.spacing.md};
  gap: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.xl} ${props => props.theme.borderRadius.xl} 0 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderLight};
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  padding: ${props => props.theme.spacing.xl} 0;

  & > button:last-child {
    margin-top: auto;
  }
`;

export const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes["4xl"]};
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.display};
  letter-spacing: -0.02em;
  
  /* Optional gradient text effect */
  ${props => props.gradient && `
    background: ${props.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`;

export const Subtitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.textLight};
  line-height: 1.5;
`;

export const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: 600;
  font-family: ${props => props.theme.fonts.main};
  margin: ${props => props.theme.spacing.sm} 0;
  transition: ${props => props.theme.transitions.bounce};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: ${props => props.theme.colors.shadow};
  
  /* Enhanced hover effects */
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.colors.shadowHover};
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${props => props.theme.colors.shadowActive};
  }

  /* Ripple effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:active::before {
    width: 300px;
    height: 300px;
  }

  /* Secondary variant */
  ${props => props.variant === 'secondary' && `
    background: ${props.theme.colors.surface};
    color: ${props.theme.colors.text};
    border: 2px solid ${props.theme.colors.border};
    
    &:hover {
      border-color: ${props.theme.colors.primarySolid};
      color: ${props.theme.colors.primarySolid};
    }
  `}

  /* Outline variant */
  ${props => props.variant === 'outline' && `
    background: transparent;
    color: ${props.theme.colors.primarySolid};
    border: 2px solid ${props.theme.colors.primarySolid};
    
    &:hover {
      background: ${props.theme.colors.primarySolid};
      color: white;
    }
  `}

  /* Large size */
  ${props => props.size === 'large' && `
    padding: ${props.theme.spacing.lg} ${props.theme.spacing["2xl"]};
    font-size: ${props.theme.fontSizes.lg};
    border-radius: ${props.theme.borderRadius["2xl"]};
  `}

  /* Small size */
  ${props => props.size === 'small' && `
    padding: ${props.theme.spacing.sm} ${props.theme.spacing.md};
    font-size: ${props.theme.fontSizes.sm};
  `}
`;

export const BackButton = styled(Link)`
  color: ${props => props.theme.colors.textLight};
  text-decoration: none;
  font-size: ${props => props.theme.fontSizes.xl};
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.md};
  transition: ${props => props.theme.transitions.base};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  width: 44px;
  height: 44px;

  &:hover {
    color: ${props => props.theme.colors.primarySolid};
    background: ${props => props.theme.colors.primarySolid}15;
    border-color: ${props => props.theme.colors.primarySolid};
    transform: translateX(-2px);
  }

  svg {
    transition: ${props => props.theme.transitions.base};
  }
`;

export const Progress = styled.div`
  flex: 1;
  height: 8px;
  background: ${props => props.theme.colors.backgroundDark};
  border-radius: ${props => props.theme.borderRadius.full};
  display: flex;
  overflow: hidden;
  margin-left: ${props => props.theme.spacing.md};
`;

export const ProgressStep = styled.div`
  height: 100%;
  background: ${props => 
    props.active 
      ? `linear-gradient(90deg, ${props.theme.colors.primarySolid}, ${props.theme.colors.primaryLight})`
      : props.theme.colors.backgroundDark
  };
  flex: 1;
  margin: 0 1px;
  border-radius: ${props => props.theme.borderRadius.full};
  transition: ${props => props.theme.transitions.slow};
  position: relative;
  
  &:first-child {
    margin-left: 0;
  }
  
  &:last-child {
    margin-right: 0;
  }

  /* Add shimmer effect for active step */
  ${props => props.active && `
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
      );
      animation: shimmer 2s infinite;
    }

    @keyframes shimmer {
      0% { left: -100%; }
      100% { left: 100%; }
    }
  `}
`;

export const Option = styled.div`
  width: 100%;
  padding: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.sm} 0;
  border-radius: ${props => props.theme.borderRadius.xl};
  background: ${props => 
    props.selected 
      ? `linear-gradient(135deg, ${props.theme.colors.primarySolid}, ${props.theme.colors.primaryLight})`
      : props.theme.colors.surface
  };
  color: ${props => 
    props.selected ? 'white' : props.theme.colors.text
  };
  border: 2px solid ${props => 
    props.selected 
      ? 'transparent'
      : props.theme.colors.border
  };
  transition: ${props => props.theme.transitions.bounce};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: ${props => 
    props.selected 
      ? props.theme.colors.shadowHover
      : props.theme.colors.shadow
  };
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.colors.shadowHover};
    border-color: ${props => 
      props.selected 
        ? 'transparent'
        : props.theme.colors.primarySolid
    };
  }

  &:active {
    transform: translateY(-1px);
  }

  /* Add subtle pattern overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => 
      props.selected 
        ? 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)'
        : 'none'
    };
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing["2xl"]};
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: ${props => props.theme.borderRadius.xl};
    box-shadow: ${props => props.theme.colors.shadow};
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  margin: ${props => props.theme.spacing.xl} 0;
  padding: ${props => props.theme.spacing.md} 0;
`;

export const Slider = styled.input.attrs({ type: 'range' })`
  width: 100%;
  height: 12px;
  border-radius: ${props => props.theme.borderRadius.full};
  -webkit-appearance: none;
  appearance: none;
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.primarySolid} 0%,
    ${props => props.theme.colors.primarySolid} ${props => props.value || 50}%,
    ${props => props.theme.colors.backgroundDark} ${props => props.value || 50}%,
    ${props => props.theme.colors.backgroundDark} 100%
  );
  outline: none;
  transition: ${props => props.theme.transitions.base};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${props => props.theme.colors.primarySolid}, ${props => props.theme.colors.primaryLight});
    cursor: pointer;
    box-shadow: ${props => props.theme.colors.shadow};
    border: 3px solid white;
    transition: ${props => props.theme.transitions.bounce};
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.2);
    box-shadow: ${props => props.theme.colors.shadowHover};
  }

  &::-moz-range-thumb {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${props => props.theme.colors.primarySolid}, ${props => props.theme.colors.primaryLight});
    cursor: pointer;
    box-shadow: ${props => props.theme.colors.shadow};
    border: 3px solid white;
    transition: ${props => props.theme.transitions.bounce};
  }
`;

export const ValueDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.fontSizes["5xl"]};
  font-weight: 700;
  margin: ${props => props.theme.spacing.xl} 0;
  font-family: ${props => props.theme.fonts.display};
  background: ${props => props.theme.colors.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
`;

export const UnitToggle = styled.div`
  display: flex;
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  margin: ${props => props.theme.spacing.xl} 0;
  background: ${props => props.theme.colors.backgroundDark};
  padding: 4px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const UnitOption = styled.button`
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border: none;
  background: ${props => 
    props.active 
      ? props.theme.colors.surface 
      : 'transparent'
  };
  color: ${props => 
    props.active 
      ? props.theme.colors.text
      : props.theme.colors.textLight
  };
  font-weight: ${props => props.active ? '600' : '400'};
  border-radius: ${props => props.theme.borderRadius.lg};
  transition: ${props => props.theme.transitions.base};
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.base};
  box-shadow: ${props => 
    props.active 
      ? props.theme.colors.shadow
      : 'none'
  };

  &:hover {
    color: ${props => props.theme.colors.text};
  }
`;

export const HorizontalRule = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, ${props => props.theme.colors.border}, transparent);
  margin: ${props => props.theme.spacing.lg} 0;
`;

export const InfoBox = styled.div`
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.lg} 0;
  width: 100%;
  text-align: left;
  box-shadow: ${props => props.theme.colors.shadow};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  }
`;

export const FooterText = styled.p`
  color: ${props => props.theme.colors.textLighter};
  font-size: ${props => props.theme.fontSizes.sm};
  margin-top: ${props => props.theme.spacing.md};
  text-align: center;
  line-height: 1.5;
`;

export const Icon = styled.div`
  margin-right: ${props => props.theme.spacing.sm};
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.primarySolid};
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: ${props => props.theme.spacing.sm} 0;
  gap: ${props => props.theme.spacing.sm};
`;

export const HealthMetric = styled.div`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.md} 0;
  width: 100%;
  box-shadow: ${props => props.theme.colors.shadow};
  transition: ${props => props.theme.transitions.base};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.colors.shadowHover};
  }

  h3 {
    font-size: ${props => props.theme.fontSizes["2xl"]};
    background: ${props => props.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${props => props.theme.spacing.sm};
  }

  p {
    font-size: ${props => props.theme.fontSizes.base};
    color: ${props => props.theme.colors.textLight};
    line-height: 1.5;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${props => props.theme.colors.primary};
  }
`;

// New modern card component
export const Card = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.colors.shadow};
  border: 1px solid ${props => props.theme.colors.border};
  transition: ${props => props.theme.transitions.base};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.colors.shadowHover};
  }
`;

// Floating Action Button
export const FloatingButton = styled.button`
  position: fixed;
  bottom: ${props => props.theme.spacing.xl};
  right: ${props => props.theme.spacing.xl};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  box-shadow: ${props => props.theme.colors.shadowHover};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes.xl};
  cursor: pointer;
  transition: ${props => props.theme.transitions.bounce};
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`; 