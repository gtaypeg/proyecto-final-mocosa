import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { 
  Container, 
  Header, 
  Main, 
  Title, 
  Button, 
  Progress,
  ProgressStep,
  BackButton,
  Subtitle,
  SliderContainer,
  Slider,
  FooterText
} from '../components/StyledComponents';

const FlexibilityVisual = styled.div`
  margin: 40px 0;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FlexibilityFigure = styled.div`
  width: 60px;
  height: 40px;
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 50%;
    top: 0;
    left: 20px;
  }
  
  &:after {
    content: "";
    position: absolute;
    width: 60px;
    height: 30px;
    background-color: ${props => props.theme.colors.primary};
    bottom: 0;
    border-radius: ${props => props.level === 'excellent' ? '30px 30px 0 0' : '0'};
    transform-origin: center bottom;
    transform: ${props => {
      switch(props.level) {
        case 'poor':
          return 'rotate(0deg)';
        case 'good':
          return 'rotate(-45deg)';
        case 'excellent':
          return 'rotate(-90deg)';
        default:
          return 'rotate(0deg)';
      }
    }};
  }
`;

const BaseLine = styled.div`
  width: 60px;
  height: 2px;
  background-color: ${props => props.theme.colors.primary};
  margin-top: 10px;
`;

const FlexibilityStatusText = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin: 20px 0;
  color: ${props => props.theme.colors.text};
`;

const FlexibilityMessage = styled.div`
  font-size: 16px;
  color: ${props => props.theme.colors.darkGray};
  margin: 10px 0 30px 0;
  text-align: center;
  max-width: 280px;
  min-height: 57px;
`;

const FlexibilityLabels = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const FlexibilityLabel = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.darkGray};
`;

const FlexibilityImage = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  object-fit: cover;
  mix-blend-mode: multiply;
`;

const images = {
  'poor': '/flexibilidad/esta-bien.png',
  'good': '/flexibilidad/genial.png',
  'excellent': '/flexibilidad/excelente.png',
}

const FlexibilityInput = () => {
  const navigate = useNavigate();
  const [flexibility, setFlexibility] = useState(50);
  const [step] = useState(6);
  const totalSteps = 7;

  const renderProgressSteps = () => {
    const steps = [];
    for (let i = 0; i < totalSteps; i++) {
      steps.push(<ProgressStep key={i} active={i < step} />);
    }
    return steps;
  };

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
        return 'El 70% de nuestros usuarios también lo experimenta. Estamos aquí para ayudarte a mejorar.';
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

  return (
    <Container>
      {/* <Header>
        <BackButton to="/injuries">←</BackButton>
        <Progress>{renderProgressSteps()}</Progress>
        
      </Header> */}
      
      <Main>
        <Title>Tu flexibilidad</Title>
        <Subtitle>¿Cómo de lejos están las manos de los dedos de los pies?</Subtitle>
        
        <FlexibilityVisual>
          <div>
            <FlexibilityImage src={getFlexibilityImage()} alt="Flexibilidad" />
          </div>
        </FlexibilityVisual>
        
        <FlexibilityStatusText>{getFlexibilityStatus()}</FlexibilityStatusText>
        <FlexibilityMessage>{getFlexibilityMessage()}</FlexibilityMessage>
        
        <SliderContainer>
          <Slider 
            min={0}
            max={100}
            value={flexibility}
            onChange={handleFlexibilityChange}
          />
          <FlexibilityLabels>
            <FlexibilityLabel>Lejos</FlexibilityLabel>
            <FlexibilityLabel>Toque</FlexibilityLabel>
          </FlexibilityLabels>
        </SliderContainer>
        
        <Button onClick={handleNext}>Siguiente</Button>
      </Main>
    </Container>
  );
};

export default FlexibilityInput; 