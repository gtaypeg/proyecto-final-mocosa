import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import recipesData from "../data/recipesData.json";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 480px;
    margin: 0 auto;
    background: linear-gradient(
        135deg,
        ${props => props.theme.colors.background} 0%,
        ${props => props.theme.colors.backgroundDark} 100%
    );
    border-radius: ${props => props.theme.borderRadius["2xl"]};
    box-shadow: ${props => props.theme.colors.shadow};
    overflow: hidden;
`;

const Header = styled.div`
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
    background: ${props => props.theme.colors.surface};
    position: relative;
    border-radius: ${props => props.theme.borderRadius["2xl"]} ${props => props.theme.borderRadius["2xl"]} 0 0;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, ${props => props.theme.colors.border}, transparent);
    }
`;

const BackButton = styled(motion.button)`
    position: absolute;
    left: ${props => props.theme.spacing.lg};
    top: ${props => props.theme.spacing.xl};
    background: ${props => props.theme.colors.surface};
    border: 2px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.lg};
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.fontSizes.lg};
    cursor: pointer;
    color: ${props => props.theme.colors.text};
    transition: ${props => props.theme.transitions.base};
    box-shadow: ${props => props.theme.colors.shadow};

    &:hover {
        color: ${props => props.theme.colors.primarySolid};
        border-color: ${props => props.theme.colors.primarySolid};
        background: ${props => props.theme.colors.primarySolid}10;
        transform: translateX(-2px);
    }
`;

const HeaderContent = styled.div`
    text-align: center;
    margin-top: ${props => props.theme.spacing.lg};
`;

const Title = styled.h1`
    font-size: ${props => props.theme.fontSizes["3xl"]};
    font-weight: 700;
    background: ${props => props.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 ${props => props.theme.spacing.sm} 0;
    font-family: ${props => props.theme.fonts.display};
    letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
    color: ${props => props.theme.colors.textLight};
    font-size: ${props => props.theme.fontSizes.base};
    margin: 0;
    font-weight: 400;
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
    background: ${(props) => (props.active ? props.theme.colors.primary : "white")};
    color: ${(props) => (props.active ? "white" : "#666")};
    border: 2px solid ${(props) => (props.active ? props.theme.colors.primarySolid : "#e0e0e0")};
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
    padding: ${props => props.theme.spacing.lg};
    flex: 1;
    background: ${props => props.theme.colors.background};
`;

const RecipesGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${props => props.theme.spacing.lg};
    margin-bottom: ${props => props.theme.spacing.xl};
`;

const RecipeCard = styled(motion.div)`
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius["2xl"]};
    overflow: hidden;
    cursor: pointer;
    transition: ${props => props.theme.transitions.slow};
    box-shadow: ${props => props.theme.colors.shadow};
    border: 1px solid ${props => props.theme.colors.border};
    position: relative;

    &:hover {
        transform: translateY(-8px);
        box-shadow: ${props => props.theme.colors.shadowHover};
    }
`;

const RecipeImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 160px;
    overflow: hidden;
`;

const RecipeImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    transition: ${props => props.theme.transitions.slow};
    position: relative;

    ${RecipeCard}:hover & {
        transform: scale(1.1);
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            135deg,
            rgba(45, 90, 61, 0.1) 0%,
            rgba(74, 124, 89, 0.1) 100%
        );
        opacity: 0;
        transition: ${props => props.theme.transitions.base};
    }

    ${RecipeCard}:hover &::after {
        opacity: 1;
    }
`;

const RecipeOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        transparent 0%,
        rgba(0, 0, 0, 0.1) 50%,
        rgba(0, 0, 0, 0.6) 100%
    );
    display: flex;
    align-items: flex-end;
    padding: ${props => props.theme.spacing.md};
`;

const QuickInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.sm};
`;

const InfoChip = styled.div`
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
    border-radius: ${props => props.theme.borderRadius.md};
    font-size: 10px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 4px;
    width: fit-content;
`;

const RecipeInfo = styled.div`
    padding: ${props => props.theme.spacing.lg};
`;

const RecipeName = styled.h3`
    font-size: ${props => props.theme.fontSizes.base};
    font-weight: 600;
    color: ${props => props.theme.colors.text};
    margin: 0 0 ${props => props.theme.spacing.sm} 0;
    line-height: 1.3;
    font-family: ${props => props.theme.fonts.display};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const RecipeDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors.textLight};
`;

const CaloriesInfo = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.xs};
    font-weight: 600;
    color: ${props => props.theme.colors.successSolid};
`;

const TimeInfo = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.xs};
    font-weight: 500;

    svg {
        width: 14px;
        height: 14px;
        opacity: 0.7;
    }
`;

const EmptyState = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${props => props.theme.spacing["3xl"]} ${props => props.theme.spacing.lg};
    text-align: center;
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius["2xl"]};
    box-shadow: ${props => props.theme.colors.shadow};
    border: 1px solid ${props => props.theme.colors.border};

    .icon {
        font-size: ${props => props.theme.fontSizes["4xl"]};
        margin-bottom: ${props => props.theme.spacing.lg};
        opacity: 0.5;
    }

    h3 {
        color: ${props => props.theme.colors.text};
        font-size: ${props => props.theme.fontSizes.xl};
        font-weight: 600;
        margin-bottom: ${props => props.theme.spacing.sm};
    }

    p {
        color: ${props => props.theme.colors.textLight};
        font-size: ${props => props.theme.fontSizes.base};
        max-width: 280px;
    }
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
                <BackButton
                    onClick={handleBackClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    ←
                </BackButton>
                <HeaderContent>
                    <Title>Recetas Saludables</Title>
                    <Subtitle>Deliciosas opciones nutritivas para ti</Subtitle>
                </HeaderContent>
            </Header>

            <Main>
                {filteredRecipes.length > 0 ? (
                    <RecipesGrid
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <AnimatePresence>
                            {filteredRecipes.map((recipe, index) => (
                                <RecipeCard
                                    key={recipe.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => handleRecipeClick(recipe.id)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <RecipeImageContainer>
                                        <RecipeImage image={recipe.image} />
                                        <RecipeOverlay>
                                            <QuickInfo>
                                                <InfoChip>
                                                    ⏱ {recipe.preparationTime}m
                                                </InfoChip>
                                                {recipe.difficulty && (
                                                    <InfoChip>
                                                        ⭐ {recipe.difficulty}
                                                    </InfoChip>
                                                )}
                                            </QuickInfo>
                                        </RecipeOverlay>
                                    </RecipeImageContainer>
                                    
                                    <RecipeInfo>
                                        <RecipeName>{recipe.name}</RecipeName>
                                        <RecipeDetails>
                                            {/* {recipe.calories && (
                                                <CaloriesInfo>
                                                    🔥 {recipe.calories}
                                                </CaloriesInfo>
                                            )} */}
                                            <TimeInfo>
                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" fill="none" />
                                                </svg>
                                                {recipe.preparationTime}min
                                            </TimeInfo>
                                        </RecipeDetails>
                                    </RecipeInfo>
                                </RecipeCard>
                            ))}
                        </AnimatePresence>
                    </RecipesGrid>
                ) : (
                    <EmptyState
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <div className="icon">🍽️</div>
                        <h3>No hay recetas disponibles</h3>
                        <p>No se encontraron recetas en esta categoría. Prueba con otra categoría.</p>
                    </EmptyState>
                )}
            </Main>
        </Container>
    );
};

export default RecipesPage;
