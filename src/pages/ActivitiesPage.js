import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* max-width: 480px; */
  margin: 0 auto;
  background-color: #f8f9fa;
  position: relative;
`;

const Header = styled.div`
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const SearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 25px;
  padding: 12px 16px;
  gap: 12px;
  border: 2px solid #e0e0e0;
`;

const SearchIcon = styled.div`
  width: 20px;
  height: 20px;
  color: #666;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  color: #333;
  
  &::placeholder {
    color: #999;
  }
`;

const SearchButton = styled.button`
      background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(139, 92, 246, 0.3);
  }
`;

const FilterButton = styled.button`
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.primarySolid};
  }
`;

const Main = styled.div`
  padding: 24px 20px;
  flex: 1;
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const ActivityCard = styled.div`
  position: relative;
  height: 140px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.gradient};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const CardTitle = styled.h3`
  color: white;
  font-size: 16px;
  font-weight: 600;  
  margin: 0;
  text-align: center;
`;

const ActivitiesPage = () => {
  const navigate = useNavigate();

  const activities = [
    { name: "Caminar", gradient: "linear-gradient(135deg, #2d5a3d 0%, #4a7c59 100%)" },
    { name: "Nadar", gradient: "linear-gradient(135deg, #4a7c59 0%, #6b8e6b 100%)" },
    { name: "Meditar", gradient: "linear-gradient(135deg, #7c9885 0%, #9bb99e 100%)" },
    { name: "Montar bici", gradient: "linear-gradient(135deg, #2d5a3d 0%, #4a7c59 100%)" },
    { name: "Bailar", gradient: "linear-gradient(135deg, #6b8e6b 0%, #8ab08a 100%)" },
    { name: "Yoga", gradient: "linear-gradient(135deg, #8ab08a 0%, #7c9885 100%)" },
    { name: "Técnicas de respiración", gradient: "linear-gradient(135deg, #9bb99e 0%, #6b8e6b 100%)" },
    { name: "Pilates", gradient: "linear-gradient(135deg, #5a7a5a 0%, #4a7c59 100%)" },
    { name: "Acuaerobicos", gradient: "linear-gradient(135deg, #4a7c59 0%, #2d5a3d 100%)" }
  ];

  const handleActivityClick = (activityName) => {
    console.log(`Selected activity: ${activityName}`);
    // Navigate back to discover to select category first
    navigate('/discover');
  };

  return (
    <Container>
      <Header>
        <Title>Actividades</Title>
        <SearchContainer>
          <SearchBar>
            <SearchIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z" />
              </svg>
            </SearchIcon>
            <SearchInput placeholder="Buscar actividad" />
          </SearchBar>
          <SearchButton>Buscar</SearchButton>
          <FilterButton>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </FilterButton>
        </SearchContainer>
      </Header>

      <Main>
        <ActivitiesGrid>
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              gradient={activity.gradient}
              onClick={() => handleActivityClick(activity.name)}
            >
              <CardOverlay>
                <CardTitle>{activity.name}</CardTitle>
              </CardOverlay>
            </ActivityCard>
          ))}
        </ActivitiesGrid>
      </Main>
    </Container>
  );
};

export default ActivitiesPage; 