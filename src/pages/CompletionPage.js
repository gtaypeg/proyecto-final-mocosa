import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useProgress } from '../contexts/ProgressContext';

const bounce = keyframes`
  0%, 20%, 60%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(-5px);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 2.125rem);
  background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
  color: white;
  text-align: center;
  padding: 20px;
`;

const BackButton = styled.button`
    position: absolute;
    left: ${(props) => props.theme.spacing.lg};
    top: ${(props) => props.theme.spacing.xl};
    background: ${(props) => props.theme.colors.surface};
    border: 2px solid ${(props) => props.theme.colors.border};
    border-radius: ${(props) => props.theme.borderRadius.lg};
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.theme.fontSizes.lg};
    cursor: pointer;
    color: ${(props) => props.theme.colors.text};
    transition: ${(props) => props.theme.transitions.base};
    box-shadow: ${(props) => props.theme.colors.shadow};

    &:hover {
        color: ${(props) => props.theme.colors.primarySolid};
        border-color: ${(props) => props.theme.colors.primarySolid};
        transform: translateX(-2px);
    }
`;


const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

const AchievementBadge = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 40px;
  animation: ${bounce} 2s infinite;
`;

const BadgeOuter = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    background: linear-gradient(135deg, #fde68a 0%, #fbbf24 100%);
    border-radius: 50%;
    z-index: -1;
  }
  
  &::after {
    content: '✦ ✦ ✦';
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: #fbbf24;
    letter-spacing: 8px;
  }
`;

const BadgeInner = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  color: white;
  animation: ${pulse} 2s infinite;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #d1d5db;
  margin-bottom: 40px;
  max-width: 300px;
  line-height: 1.5;
`;

const DateDisplay = styled.div`
  font-size: 16px;
  color: #9ca3af;
  margin-bottom: 40px;
`;

const ActionsContainer = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PrimaryButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(236, 72, 153, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled.button`
  width: 100%;
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ShareIcon = styled.span`
  font-size: 18px;
`;

const StatsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 30px;
  color: #9ca3af;
  font-size: 14px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const StatValue = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

const StatLabel = styled.div`
  font-size: 12px;
`;

const CompletionPage = () => {
  const { category, exercise, day } = useParams();
  const navigate = useNavigate();
  const { totalDaysCompleted, streakDays } = useProgress();
  
  const currentDate = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  const handleContinue = () => {
    navigate(`/category/${category}/exercise/${exercise}`);
  };

  const handleShare = () => {
    // Implement sharing functionality
    if (navigator.share) {
      navigator.share({
        title: '¡Completé mi entrenamiento!',
        text: `¡Acabo de completar el ${day} día de ${exercise}! 💪`,
        url: window.location.origin
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`¡Acabo de completar el ${day} día de ${exercise}! 💪`);
      alert('¡Enlace copiado al portapapeles!');
    }
  };

  const handleBack = () => {
    navigate(`/category/${category}/exercise/${exercise}`);
  };

  return (
    <Container>
      <BackButton onClick={handleBack}>←</BackButton>
      
      <Content>
        <AchievementBadge>
          <BadgeOuter>
            <BadgeInner>
              {totalDaysCompleted}
            </BadgeInner>
          </BadgeOuter>
        </AchievementBadge>

        <Title>{totalDaysCompleted} Días en Total</Title>
        <Subtitle>
          Acumula {totalDaysCompleted} días de ejercicio
        </Subtitle>

        <DateDisplay>{currentDate}</DateDisplay>

        <ActionsContainer>
          <PrimaryButton onClick={handleContinue}>
            CONTINUAR
          </PrimaryButton>
          
          <SecondaryButton onClick={handleShare}>
            <ShareIcon>📤</ShareIcon>
            COMPARTIR
          </SecondaryButton>
        </ActionsContainer>
      </Content>

      <StatsContainer>
        <StatItem>
          <StatValue>{streakDays}</StatValue>
          <StatLabel>Racha</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>{totalDaysCompleted}</StatValue>
          <StatLabel>Total</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>85%</StatValue>
          <StatLabel>Progreso</StatLabel>
        </StatItem>
      </StatsContainer>
    </Container>
  );
};

export default CompletionPage; 