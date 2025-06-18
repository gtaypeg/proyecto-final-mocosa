import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
    Title, 
    Button,
    Subtitle,
    ModernPageContainer
} from '../components/StyledComponents';

const HeaderSection = styled.div`
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg} 0;
    text-align: center;
`;

const ContentSection = styled(motion.div)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius["2xl"]};
    margin: ${props => props.theme.spacing.lg};
    box-shadow: ${props => props.theme.colors.shadow};
    border: 1px solid ${props => props.theme.colors.border};
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

const FlexibilityVisual = styled(motion.div)`
    margin: 0 0 auto 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const FlexibilityFigure = styled(motion.div)`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.theme.borderRadius.full};
    background: ${props => props.theme.colors.primarySolid}15;
    backdrop-filter: blur(10px);
    border: 3px solid ${props => props.theme.colors.primarySolid}30;
    margin-bottom: ${props => props.theme.spacing.md};
    position: relative;
    overflow: hidden;
`;

const FlexibilityImage = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: ${props => props.theme.borderRadius.lg};
`;

const FlexibilityStatusText = styled(motion.div)`
    font-size: ${props => props.theme.fontSizes["2xl"]};
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.heading};
    background: ${props => props.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${props => props.theme.spacing.sm};
`;

const FlexibilityDescription = styled(motion.div)`
    font-size: ${props => props.theme.fontSizes.md};
    color: ${props => props.theme.colors.textLight};
    text-align: center;
    max-width: 380px;
    line-height: 1.6;
    margin-bottom: ${props => props.theme.spacing.xl};
`;

const SliderSection = styled(motion.div)`
    width: 100%;
    max-width: 450px;
    padding: 0 ${props => props.theme.spacing.xl} 35px;
`;

const SliderContainer = styled.div`
    width: 100%;
    position: relative;
    margin: ${props => props.theme.spacing.lg} 0;
`;

const SliderTrack = styled.div`
    width: 100%;
    height: 12px;
    background: ${props => props.theme.colors.backgroundDark};
    border-radius: 6px;
    position: relative;
    overflow: hidden;
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.15);
`;

const SliderFill = styled(motion.div)`
    height: 100%;
    background: ${props => props.theme.colors.primary};
    border-radius: 6px;
    position: relative;
    box-shadow: 0 2px 8px ${props => props.theme.colors.primarySolid}40;
    transition: all 0.3s ease;
`;

const SliderThumb = styled(motion.div)`
    width: 28px;
    height: 28px;
    background: white;
    border: 4px solid ${props => props.theme.colors.primarySolid};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 10;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: translate(-50%, -50%) scale(1.1);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25), 0 0 0 8px ${props => props.theme.colors.primarySolid}20;
    }

    &:active {
        transform: translate(-50%, -50%) scale(1.15);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25), 0 0 0 12px ${props => props.theme.colors.primarySolid}30;
    }
`;

const HiddenSlider = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
    
    -webkit-appearance: none;
    appearance: none;
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 28px;
        height: 28px;
        cursor: pointer;
    }
    
    &::-moz-range-thumb {
        width: 28px;
        height: 28px;
        cursor: pointer;
        border: none;
        background: transparent;
    }
`;

const SliderLabels = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: ${props => props.theme.spacing.lg};
    padding: 0 ${props => props.theme.spacing.sm};
`;

const SliderLabel = styled.span`
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors.textLight};
    font-weight: 500;
    text-align: center;
    min-width: 80px;
`;

const NavigationContainer = styled.div`
    padding: ${props => props.theme.spacing.lg};
    background: ${props => props.theme.colors.surface};
    border-radius: 0 0 ${props => props.theme.borderRadius["2xl"]} ${props => props.theme.borderRadius["2xl"]};
    border-top: 1px solid ${props => props.theme.colors.border};
`;

const NextButton = styled(Button)`
    width: 100%;
    font-size: ${props => props.theme.fontSizes.lg};
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
        );
        transition: left 0.5s;
    }

    &:hover::before {
        left: 100%;
    }
`;

const images = {
  'poor': '/flexibilidad/esta-bien.png',
  'good': '/flexibilidad/genial.png',
  'excellent': '/flexibilidad/excelente.png',
}

const FlexibilityInput = () => {
  const navigate = useNavigate();
  const [flexibility, setFlexibility] = useState(50);

  const handleFlexibilityChange = (e) => {
    setFlexibility(parseInt(e.target.value));
  };

  const getFlexibilityLevel = () => {
    if (flexibility < 30) return 'poor';
    if (flexibility < 70) return 'good';
    return 'excellent';
  };

  const getFlexibilityStatus = () => {
    const level = getFlexibilityLevel();
    switch(level) {
      case 'poor':
        return 'Está bien';
      case 'good':
        return '¡Genial!';
      case 'excellent':
        return '¡Excelente!';
      default:
        return 'Está bien';
    }
  };

  const getFlexibilityImage = () => {
    const level = getFlexibilityLevel();
    return images[level];
  };

  const getFlexibilityMessage = () => {
    const level = getFlexibilityLevel();
    switch(level) {
      case 'poor':
        return 'Nuestro plan fácil de seguir llevará tu flexibilidad al siguiente nivel';
      case 'good':
        return 'Nuestro plan fácil de seguir llevará tu flexibilidad al siguiente nivel';
      case 'excellent':
        return '¡Una buena flexibilidad acelerará significativamente tu objetivo!';
      default:
        return '';
    }
  };

  const handleNext = () => {
    navigate('/aerobic');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <ModernPageContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
      >
        <HeaderSection>
          <motion.div variants={itemVariants}>
            <Title gradient>Tu flexibilidad</Title>
            <Subtitle>¿Cómo de lejos están las manos de los dedos de los pies?</Subtitle>
          </motion.div>
        </HeaderSection>

        <ContentSection variants={itemVariants}>
          <FlexibilityVisual
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <FlexibilityFigure 
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FlexibilityImage 
                src={getFlexibilityImage()} 
                alt="Flexibilidad"
              />
            </FlexibilityFigure>
            <FlexibilityStatusText
              key={getFlexibilityStatus()}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {getFlexibilityStatus()}
            </FlexibilityStatusText>
          </FlexibilityVisual>

          <FlexibilityDescription
            key={getFlexibilityMessage()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {getFlexibilityMessage()}
          </FlexibilityDescription>

          <SliderSection
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <SliderContainer>
              <SliderTrack>
                <SliderFill 
                  style={{ width: `${flexibility}%` }}
                  layout
                />
                <SliderThumb 
                  style={{ left: `${flexibility}%` }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
                <HiddenSlider 
                  type="range"
                  min={0}
                  max={100}
                  value={flexibility}
                  onChange={handleFlexibilityChange}
                />
              </SliderTrack>
              
              <SliderLabels>
                <SliderLabel>Lejos</SliderLabel>
                <SliderLabel>Toque</SliderLabel>
              </SliderLabels>
            </SliderContainer>
          </SliderSection>
        </ContentSection>

        <NavigationContainer>
          <motion.div variants={itemVariants}>
            <NextButton 
              onClick={handleNext}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Continuar
            </NextButton>
          </motion.div>
        </NavigationContainer>
      </motion.div>
    </ModernPageContainer>
  );
};

export default FlexibilityInput; 