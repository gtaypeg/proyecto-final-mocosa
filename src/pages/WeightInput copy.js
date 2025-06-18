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
  UnitToggle,
  UnitOption,
  ValueDisplay,
  SliderContainer,
  Slider,
  HealthMetric
} from '../components/StyledComponents';

const WeightScale = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 20px;
  margin: 40px 0;
  position: relative;
`;

const WeightMarker = styled.div`
  position: absolute;
  width: 4px;
  height: 15px;
  background-color: ${props => props.theme.colors.darkGray};
  top: -15px;
  left: ${props => props.position}%;
  
  &:after {
    content: "${props => props.value}";
    position: absolute;
    top: -20px;
    left: -5px;
    font-size: 12px;
    color: ${props => props.theme.colors.darkGray};
  }
`;

const WeightIndicator = styled.div`
  position: absolute;
  width: 3px;
  height: 40px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 2px;
  left: ${props => props.position}%;
  top: 0;
`;

const WeightInput = () => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState(70);
  const [unit, setUnit] = useState('kg'); // 'kg' or 'lbs'
  const [step] = useState(3);
  const totalSteps = 7;

  const handleWeightChange = (e) => {
    setWeight(parseFloat(e.target.value));
  };

  const toggleUnit = (selectedUnit) => {
    if (selectedUnit === unit) return;
    
    if (selectedUnit === 'kg') {
      // Convert lbs to kg
      setWeight(Math.round((weight / 2.205) * 10) / 10);
    } else {
      // Convert kg to lbs
      setWeight(Math.round((weight * 2.205) * 10) / 10);
    }
    
    setUnit(selectedUnit);
  };

  const renderProgressSteps = () => {
    const steps = [];
    for (let i = 0; i < totalSteps; i++) {
      steps.push(<ProgressStep key={i} active={i < step} />);
    }
    return steps;
  };

  const handleNext = () => {
    navigate('/age');
  };

  // Calculate BMI - using placeholder height of 165cm
  const height = 1.65; // in meters
  const bmi = (unit === 'kg' ? weight : weight / 2.205) / (height * height);

  const getWeightPosition = () => {
    const min = unit === 'kg' ? 40 : 88;
    const max = unit === 'kg' ? 120 : 264;
    return ((weight - min) / (max - min)) * 100;
  };

  return (
    <Container>
      <Header>
        <BackButton to="/height">←</BackButton>
        <Progress>{renderProgressSteps()}</Progress>
        
      </Header>
      
      <Main>
        <Title>¿Cuánto pesas actualmente?</Title>
        
        <UnitToggle>
          <UnitOption 
            active={unit === 'lbs'} 
            onClick={() => toggleUnit('lbs')}
          >
            lbs
          </UnitOption>
          <UnitOption 
            active={unit === 'kg'} 
            onClick={() => toggleUnit('kg')}
          >
            kg
          </UnitOption>
        </UnitToggle>
        
        <ValueDisplay>{weight.toFixed(1)} {unit}</ValueDisplay>
        
        <WeightScale>
          <WeightIndicator position={getWeightPosition()} />
          <WeightMarker position={0} value={unit === 'kg' ? '40' : '88'} />
          <WeightMarker position={25} value={unit === 'kg' ? '60' : '132'} />
          <WeightMarker position={50} value={unit === 'kg' ? '80' : '176'} />
          <WeightMarker position={75} value={unit === 'kg' ? '100' : '220'} />
          <WeightMarker position={100} value={unit === 'kg' ? '120' : '264'} />
        </WeightScale>
        
        <SliderContainer>
          <Slider 
            min={unit === 'kg' ? 40 : 88}
            max={unit === 'kg' ? 120 : 264}
            step={0.1}
            value={weight}
            onChange={handleWeightChange}
          />
        </SliderContainer>
        
        <HealthMetric>
          <h3>IMC ACTUAL</h3>
          <p>{bmi.toFixed(1)} Tienes gran potencial para ponerte en forma. ¡Adelante!</p>
        </HealthMetric>
        
        <Button onClick={handleNext}>Siguiente</Button>
      </Main>
    </Container>
  );
};

export default WeightInput; 