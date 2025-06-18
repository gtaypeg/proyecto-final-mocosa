import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import recipesData from "../data/recipesData.json";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 480px;
    margin: 0 auto;
    background-color: #f8f9fa;
`;

const Header = styled.div`
    padding: 20px;
    background-color: white;
    position: relative;
`;

const BackButton = styled.button`
    position: absolute;
    left: 20px;
    top: 20px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #333;
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

const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin: 0;
`;

const FilterContainer = styled.div`
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 4px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const FilterButton = styled.button`
    background: ${(props) => (props.active ? "linear-gradient(135deg, #4ade80, #a855f7)" : "white")};
    color: ${(props) => (props.active ? "white" : "#666")};
    border: 2px solid ${(props) => (props.active ? "#4ade80" : "#e0e0e0")};
    border-radius: 20px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
`;

const Main = styled.div`
    padding: 20px;
    flex: 1;
`;

const RecipesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 20px;
`;

const RecipeCard = styled.div`
    background: white;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
`;

const RecipeImage = styled.div`
    width: 100%;
    height: 100px;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    position: relative;
`;

const DifficultyBadge = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 10px;
    font-weight: 500;
`;

const RecipeInfo = styled.div`
    padding: 12px;
`;

const RecipeName = styled.h3`
    font-size: 12px;
    font-weight: 600;
    color: #333;
    margin: 0 0 4px 0;
    line-height: 1.2;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const RecipeDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
    color: #666;
    margin-top: 4px;
`;

const CaloriesInfo = styled.span`
    font-weight: 500;
    color: #4ade80;
`;

const TimeInfo = styled.span`
    display: flex;
    align-items: center;
    gap: 2px;
`;

const EmptyState = styled.div`
    text-align: center;
    padding: 40px 20px;
    color: #666;
`;

const RecipesPage = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("Todas");

    // Obtener categorías únicas
    const categories = ["Todas", ...new Set(recipesData.map((recipe) => recipe.category))];

    // Filtrar recetas según la categoría seleccionada
    const filteredRecipes =
        selectedCategory === "Todas"
            ? recipesData
            : recipesData.filter((recipe) => recipe.category === selectedCategory);

    const handleRecipeClick = (recipeId) => {
        navigate(`/recipes/${recipeId}`);
    };

    const handleBackClick = () => {
        navigate("/discover");
    };

    return (
        <Container>
            <Header>
                <BackButton onClick={handleBackClick}>←</BackButton>
                <HeaderContent>
                    <PlanTitle>Comidas</PlanTitle>
                </HeaderContent>
            </Header>

            <Main>
                {filteredRecipes.length > 0 ? (
                    <RecipesGrid>
                        {filteredRecipes.map((recipe) => (
                            <RecipeCard key={recipe.id} onClick={() => handleRecipeClick(recipe.id)}>
                                <RecipeImage image={recipe.image}>
                                    {/* <DifficultyBadge>
                                        {recipe.difficulty}
                                    </DifficultyBadge> */}
                                </RecipeImage>
                                <RecipeInfo>
                                    <RecipeName>{recipe.name}</RecipeName>
                                    <RecipeDetails>
                                        {/* <CaloriesInfo>{recipe.calories} cal</CaloriesInfo> */}
                                        <TimeInfo>
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12,6 12,12 16,14" />
                                            </svg>
                                            {recipe.preparationTime}min
                                        </TimeInfo>
                                    </RecipeDetails>
                                </RecipeInfo>
                            </RecipeCard>
                        ))}
                    </RecipesGrid>
                ) : (
                    <EmptyState>
                        <p>No se encontraron recetas en esta categoría</p>
                    </EmptyState>
                )}
            </Main>
        </Container>
    );
};

export default RecipesPage;
