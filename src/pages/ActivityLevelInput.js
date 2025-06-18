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
  SliderContainer,
  Slider
} from '../components/StyledComponents';

const ActivityVisual = styled.div`
  margin: 40px 0;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ActivityFigure = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  
  &:after {
    content: ${props => {
      switch(props.level) {
        case 'sedentary':
          return '"🪑"';
        case 'light':
          return '"🚶‍♀️"';
        case 'moderate':
          return '"🏋️‍♀️"';
        case 'very_active':
          return '"🏃‍♀️"';
        default:
          return '"👤"';
      }
    }};
  }
`;

const ActivityStatusText = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin: 20px 0 10px 0;
  color: ${props => props.theme.colors.text};
`;

const ActivityDescription = styled.div`
  font-size: 16px;
  color: ${props => props.theme.colors.darkGray};
  margin: 0 0 30px 0;
  text-align: center;
  max-width: 280px;
`;

const ActivityLabels = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const ActivityLabel = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.darkGray};
`;

const ActivityLevelInput = () => {
  const navigate = useNavigate();
  const [activityLevel, setActivityLevel] = useState(25);
  const [step] = useState(5);
  const totalSteps = 7;

  const renderProgressSteps = () => {
    const steps = [];
    for (let i = 0; i < totalSteps; i++) {
      steps.push(<ProgressStep key={i} active={i < step} />);
    }
    return steps;
  };

  const handleActivityChange = (e) => {
    setActivityLevel(parseInt(e.target.value));
  };

  const getActivityLevel = () => {
    if (activityLevel <= 25) return 'sedentary';
    if (activityLevel <= 50) return 'light';
    if (activityLevel <= 75) return 'moderate';
    return 'very_active';
  };

  const getActivityStatus = () => {
    const level = getActivityLevel();
    switch(level) {
      case 'sedentary':
        return 'Sedentario';
      case 'light':
        return 'Actividad ligera';
      case 'moderate':
        return 'Moderadamente activa';
      case 'very_active':
        return 'Muy activo';
      default:
        return 'Sedentario';
    }
  };

  const getActivityDescription = () => {
    const level = getActivityLevel();
    switch(level) {
      case 'sedentary':
        return 'Rara vez hago ejercicio y paso la mayor parte del tiempo sentada';
      case 'light':
        return 'Realizo caminatas ocasionales o ejercicios ligeros para mantenerme activa';
      case 'moderate':
        return 'Hago ejercicios moderados varias veces a la semana para mi salud en general';
      case 'very_active':
        return 'Participo en actividad física durante varias horas todos los días';
      default:
        return '';
    }
  };

  const handleNext = () => {
    navigate('/flexibility');
  };

  return (
    <Container>
      {/* <Header>
        <BackButton to="/injuries">←</BackButton>
        <Progress>{renderProgressSteps()}</Progress>
      </Header> */}
      
      <Main>
        <Title>¿Cuál es tu nivel de actividad?</Title>
        
        <ActivityVisual>
          <ActivityFigure level={getActivityLevel()} />
        </ActivityVisual>
        
        <ActivityStatusText>{getActivityStatus()}</ActivityStatusText>
        <ActivityDescription>{getActivityDescription()}</ActivityDescription>
        
        <SliderContainer>
          <Slider 
            min={0}
            max={100}
            value={activityLevel}
            onChange={handleActivityChange}
          />
          <ActivityLabels>
            <ActivityLabel>Inactivo</ActivityLabel>
            <ActivityLabel>Muy activo</ActivityLabel>
          </ActivityLabels>
        </SliderContainer>
        
        <Button onClick={handleNext}>Siguiente</Button>
      </Main>
    </Container>
  );
};

export default ActivityLevelInput; 