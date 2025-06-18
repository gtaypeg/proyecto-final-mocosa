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

const AerobicVisual = styled.div`
  margin: 40px 0;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const AerobicFigure = styled.div`
  position: relative;
  width: 200px;
  height: 120px;
`;

const StairsVisual = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 120px;
  height: 80px;
  
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30px;
    height: 20px;
    background-color: ${props => props.theme.colors.lightGray};
  }
  
  &:after {
    content: "";
    position: absolute;
    left: 30px;
    bottom: 20px;
    width: 30px;
    height: 20px;
    background-color: ${props => props.theme.colors.lightGray};
  }
`;

const ThirdStair = styled.div`
  position: absolute;
  left: 60px;
  bottom: 40px;
  width: 30px;
  height: 20px;
  background-color: ${props => props.theme.colors.lightGray};
`;

const FourthStair = styled.div`
  position: absolute;
  left: 90px;
  bottom: 60px;
  width: 30px;
  height: 20px;
  background-color: ${props => props.theme.colors.lightGray};
`;

const PersonFigure = styled.div`
  position: absolute;
  width: 30px;
  height: 50px;
  
  /* Body */
  &:before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};
    top: 0;
  }
  
  /* Legs */
  &:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 15px;
    border-radius: 0 0 10px 10px;
    background-color: ${props => props.theme.colors.primary};
    top: 30px;
  }
  
  /* Put person at the right position depending on exertion level */
  left: ${props => props.position <= 30 ? '0' : props.position <= 50 ? '30px' : props.position <= 70 ? '60px' : '90px'};
  bottom: ${props => props.position <= 30 ? '0' : props.position <= 50 ? '20px' : props.position <= 70 ? '40px' : '60px'};
  transform: ${props => props.position > 50 ? 'rotate(-10deg)' : 'none'};
`;

const AerobicStatusText = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin: 20px 0;
  color: ${props => props.theme.colors.text};
`;

const AerobicMessage = styled.div`
  font-size: 16px;
  color: ${props => props.theme.colors.darkGray};
  margin: 10px 0 30px 0;
  text-align: center;
  max-width: 280px;
  min-height: 57px;
`;

const AerobicLabels = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const AerobicLabel = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.darkGray};
`;

const AerobicImage = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  object-fit: cover;
  mix-blend-mode: multiply;
`;


const AerobicInput = () => {
  const navigate = useNavigate();
  const [aerobicLevel, setAerobicLevel] = useState(30);
  const [step] = useState(7);
  const totalSteps = 7;

  const renderProgressSteps = () => {
    const steps = [];
    for (let i = 0; i < totalSteps; i++) {
      steps.push(<ProgressStep key={i} active={i < step} />);
    }
    return steps;
  };

  const handleAerobicChange = (e) => {
    setAerobicLevel(parseInt(e.target.value));
  };

  const getAerobicStatus = () => {
    if (aerobicLevel < 30) return 'Sin aliento';
    if (aerobicLevel < 70) return 'Un poco cansado pero bien';
    return 'Con facilidad, habla normalmente';
  };

  const getAerobicImage = () => {
    if (aerobicLevel < 30) return '/aerobico/sin-aliento.png';
    if (aerobicLevel < 70) return '/aerobico/cansado-pero-bien.png';
    return '/aerobico/facilidad.png';
  };

  const areobicDescription = () => {
    if (aerobicLevel < 30) return '¡Entendido! Nuestros entrenamientos personalizados aumentarán gradualmente tu resistencia.';
    if (aerobicLevel < 70) return '¡Buen trabajo! Te ayudaremos a seguir progresando y a volverte más fuerte.';
    return '¡Genial! Tenemos más desafíos esperándote.';
  };

  const handleFinish = () => {
    // Navigate to the discover page after completing the form
    navigate('/discover');
  };

  return (
    <Container>
      {/* <Header>
        <BackButton to="/flexibility">←</BackButton>
        <Progress>{renderProgressSteps()}</Progress>
        
      </Header> */}
      
      <Main>
        <Title>Tu nivel aeróbico</Title>
        <Subtitle>¿Cómo te encuentras después de subir 5 pisos?</Subtitle>
        
        <AerobicVisual>
          <AerobicImage src={getAerobicImage()} alt="Aerobic" />  
          {/* <AerobicFigure>
            <StairsVisual />
            <ThirdStair />
            <FourthStair />
            <PersonFigure position={aerobicLevel} />
          </AerobicFigure> */}
        </AerobicVisual>
        
        <AerobicStatusText>{getAerobicStatus()}</AerobicStatusText>
        <AerobicMessage>{areobicDescription()}</AerobicMessage>
        
        <SliderContainer>
          <Slider 
            min={0}
            max={100}
            value={aerobicLevel}
            onChange={handleAerobicChange}
          />
          <AerobicLabels>
            <AerobicLabel>Muy difícil</AerobicLabel>
            <AerobicLabel>Calmado</AerobicLabel>
          </AerobicLabels>
        </SliderContainer>
        
        <Button onClick={handleFinish}>Finalizar</Button>
      </Main>
    </Container>
  );
};

export default AerobicInput;