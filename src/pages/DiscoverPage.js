import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 480px;
    margin: 0 auto;
    background-color: #f8f9fa;
    position: relative;
`;

const Header = styled.div`
    padding: 20px;
    background-color: white;
    position: relative;
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
    background: linear-gradient(135deg, #4ade80, #a855f7);
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
        border-color: #4ade80;
    }
`;

const Main = styled.div`
    padding: 24px 20px;
    flex: 1;
`;

const CardGrid = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr;
`;

const LargeCard = styled.div`
    position: relative;
    height: 240px;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
`;

const SmallCardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 16px;
`;

const SmallCard = styled.div`
    position: relative;
    height: 140px;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const DiabeticsCard = styled(SmallCard)`
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
`;

const BothCard = styled(SmallCard)`
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
`;

const CardOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: flex-end;
    padding: 20px;
`;

const CardTitle = styled.h2`
    color: white;
    font-size: 24px;
    font-weight: 700;
    margin: 0;
`;

const SmallCardTitle = styled.h3`
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    text-align: center;
`;

const HeaderContent = styled.div`
    text-align: center;
    margin-top: 20px;
`;


const PlanTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin: 15px 0 5px 0;
`;

const DiscoverPage = () => {
    const navigate = useNavigate();

      const handleCardClick = (type) => {
    console.log(`Selected: ${type}`);
    if (type === "Hipertenso") {
      navigate("/category/hipertenso");
    } else if (type === "Diabeticos") {
      navigate("/category/diabeticos");
    } else if (type === "Ambas") {
      navigate("/category/ambas");
    }
  };

    return (
        <Container>
            {/* <Header>
                <Title>Descubrir</Title>
                <SearchContainer>
                    <SearchBar>
                        <SearchIcon>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z" />
                            </svg>
                        </SearchIcon>
                        <SearchInput placeholder="Buscar" />
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
            </Header> */}

            <Header>
                <HeaderContent>
                    <PlanTitle>Inicio</PlanTitle>
                    {/* <PlanLevel>Selecciona tu ejercicio</PlanLevel> */}
                </HeaderContent>
            </Header>

            <Main>
                <CardGrid>
                    {/* <LargeCard onClick={() => handleCardClick("Hipertenso")}>
                        <CardOverlay>
                            <CardTitle>Hipertenso</CardTitle>
                        </CardOverlay>
                    </LargeCard>
                    <LargeCard onClick={() => handleCardClick("Diabeticos")}>
                        <CardOverlay>
                            <CardTitle>Diabeticos</CardTitle>
                        </CardOverlay>
                    </LargeCard> */}
                    <LargeCard onClick={() => handleCardClick("Ambas")} src="/ejercicios.webp">
                        <CardOverlay>
                            <CardTitle>Ejercicios</CardTitle>
                        </CardOverlay>
                    </LargeCard>
                    <LargeCard onClick={() => navigate("/recipes")} src="/comidas.jpeg">
                        <CardOverlay>
                            <CardTitle>Recetas</CardTitle>
                        </CardOverlay>
                    </LargeCard>
                </CardGrid>
            </Main>
        </Container>
    );
};

export default DiscoverPage;
