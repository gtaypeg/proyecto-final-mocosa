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
  Option,
  FlexRow,
  Icon
} from '../components/StyledComponents';

const InjuryOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px 0;
`;

const InjuryOption = styled(Option)`
  display: flex;
  align-items: center;
  padding: 16px;
  font-size: 18px;
`;

const IconPlaceholder = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => props.selected ? 'white' : props.theme.colors.darkGray};
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:before {
    content: "${props => props.icon}";
    font-size: 14px;
  }
`;

const InjuriesInput = () => {
  const navigate = useNavigate();
  const [selectedInjury, setSelectedInjury] = useState(null);
  const [step] = useState(5);
  const totalSteps = 7;
  
  const injuries = [
    { id: 'none', label: 'Ninguno', icon: '⊘' },
    { id: 'back', label: 'Lesión de espalda', icon: '🏠' },
    { id: 'arms', label: 'Lesión de brazos', icon: '🔄' },
    { id: 'knees', label: 'Lesión de rodillas', icon: '⚡' },
    { id: 'cardio', label: 'Cardiomiopatía', icon: '♥' },
  ];

  const renderProgressSteps = () => {
    const steps = [];
    for (let i = 0; i < totalSteps; i++) {
      steps.push(<ProgressStep key={i} active={i < step} />);
    }
    return steps;
  };

  const handleInjurySelect = (injury) => {
    setSelectedInjury(injury);
  };

  const handleNext = () => {
    navigate('/activity');
  };

  return (
    <Container>
      {/* <Header>
        <BackButton to="/age">←</BackButton>
        <Progress>{renderProgressSteps()}</Progress>
        
      </Header> */}
      
      <Main>
        <Title>¿Has experimentado alguna molestia?</Title>
        
        <InjuryOptions>
          {injuries.map(injury => (
            <InjuryOption 
              key={injury.id}
              selected={selectedInjury === injury.id}
              onClick={() => handleInjurySelect(injury.id)}
            >
              <IconPlaceholder 
                icon={injury.icon} 
                selected={selectedInjury === injury.id}
              />
              {injury.label}
            </InjuryOption>
          ))}
        </InjuryOptions>
        
        <Button 
          onClick={handleNext}
          disabled={!selectedInjury}
        >
          Siguiente
        </Button>
      </Main>
    </Container>
  );
};

export default InjuriesInput; 