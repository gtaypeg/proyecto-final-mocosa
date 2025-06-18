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
  Option
} from '../components/StyledComponents';

const AgeOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px 0;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.lightGray};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 4px;
  }
`;

const AgeOption = styled(Option)`
  padding: 15px;
  font-size: 18px;
  border-radius: 12px;
  margin: 4px 0;
`;

const InfoText = styled(Subtitle)`
  font-size: 14px;
  margin-top: 10px;
  color: ${props => props.theme.colors.darkGray};
`;

const AgeInput = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState(null);
  const [step] = useState(4);
  const totalSteps = 7;
  
  // Create array of ages from 1 to 100
  const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1);

  const renderProgressSteps = () => {
    const steps = [];
    for (let i = 0; i < totalSteps; i++) {
      steps.push(<ProgressStep key={i} active={i < step} />);
    }
    return steps;
  };

  const handleAgeSelect = (selectedAge) => {
    setAge(selectedAge);
  };

  const handleNext = () => {
    navigate('/injuries');
  };

  return (
    <Container>
      {/* <Header>
        <BackButton to="/weight">←</BackButton>
        <Progress>{renderProgressSteps()}</Progress>
        
      </Header> */}
      
      <Main>
        <Title>¿Cuántos años tienes?</Title>
        <InfoText>Esto nos ayudará a ajustar los entrenamientos para tu edad.</InfoText>
        
        <AgeOptions>
          {ageOptions.map(option => (
            <AgeOption 
              key={option}
              selected={age === option}
              onClick={() => handleAgeSelect(option)}
            >
              {option}
            </AgeOption>
          ))}
        </AgeOptions>
        
        <Button 
          onClick={handleNext}
          disabled={!age}
        >
          Siguiente
        </Button>
      </Main>
    </Container>
  );
};

export default AgeInput; 