import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import recipesData from "../data/recipesData.json";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 480px;
    margin: 0 auto;
    background-color: #f8f9fa;
    position: relative;
`;

const HeaderImage = styled.div`
    width: 100%;
    height: 250px;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    position: relative;
`;

const HeaderOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.7) 100%);
`;

const TopBar = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
`;

const BackButton = styled.button`
    background: rgba(255, 255, 255, 0.9);
    border: none;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
        background: white;
        transform: scale(1.05);
    }

    svg {
        width: 20px;
        height: 20px;
        color: #333;
    }
`;

const FavoriteButton = styled.button`
    background: rgba(255, 255, 255, 0.9);
    border: none;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
        background: white;
        transform: scale(1.05);
    }

    svg {
        width: 20px;
        height: 20px;
        color: ${(props) => (props.isFavorite ? "#ff6b6b" : "#666")};
        fill: ${(props) => (props.isFavorite ? "#ff6b6b" : "none")};
    }
`;

const RecipeTitle = styled.h1`
    position: absolute;
    bottom: 36px;
    left: 20px;
    right: 20px;
    color: white;
    font-size: 28px;
    font-weight: 700;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
    flex: 1;
    background: white;
    border-radius: 20px 20px 0 0;
    margin-top: -20px;
    position: relative;
    z-index: 5;
`;

const ContentHeader = styled.div`
    padding: 30px 20px 20px;
    border-bottom: 1px solid #f0f0f0;
`;

const QuickInfo = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`;

const InfoItem = styled.div`
    text-align: center;
`;

const InfoValue = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: #4ade80;
    margin-bottom: 4px;
`;

const InfoLabel = styled.div`
    font-size: 12px;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

const Description = styled.p`
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    margin: 0;
`;

const TabContainer = styled.div`
    display: flex;
    padding: 0 20px;
    background: white;
    border-bottom: 1px solid #f0f0f0;
`;

const Tab = styled.button`
    flex: 1;
    padding: 16px;
    background: none;
    border: none;
    font-size: 16px;
    font-weight: ${(props) => (props.active ? "600" : "400")};
    color: ${(props) => (props.active ? "#4ade80" : "#666")};
    border-bottom: 3px solid ${(props) => (props.active ? "#4ade80" : "transparent")};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        color: #4ade80;
    }
`;

const TabContent = styled.div`
    padding: 20px;
    background: white;
`;

const SectionTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin: 0 0 16px 0;
`;

const IngredientsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const IngredientItem = styled.li`
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #f5f5f5;
    font-size: 15px;
    color: #333;

    &:last-child {
        border-bottom: none;
    }

    &::before {
        content: "•";
        color: #4ade80;
        font-size: 20px;
        margin-right: 12px;
    }
`;

const InstructionsList = styled.ol`
    padding: 0;
    margin: 0;
    counter-reset: step-counter;
`;

const InstructionItem = styled.li`
    display: flex;
    align-items: flex-start;
    padding: 16px 0;
    border-bottom: 1px solid #f5f5f5;
    font-size: 15px;
    line-height: 1.6;
    color: #333;
    counter-increment: step-counter;

    &:last-child {
        border-bottom: none;
    }

    &::before {
        content: counter(step-counter);
        background: #4ade80;
        color: white;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 600;
        margin-right: 16px;
        flex-shrink: 0;
        margin-top: 2px;
    }
`;

const NutritionGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
`;

const NutritionCard = styled.div`
    background: #f8f9ff;
    padding: 16px;
    border-radius: 12px;
    text-align: center;
`;

const NutritionValue = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: #4ade80;
    margin-bottom: 4px;
`;

const NutritionLabel = styled.div`
    font-size: 14px;
    color: #666;
    text-transform: capitalize;
`;

const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    padding: 20px;
`;

const NotFoundTitle = styled.h2`
    font-size: 24px;
    color: #333;
    margin-bottom: 16px;
`;

const NotFoundText = styled.p`
    font-size: 16px;
    color: #666;
    margin-bottom: 24px;
`;

const RecipeDetailPage = () => {
    const navigate = useNavigate();
    const { recipeId } = useParams();
    const [activeTab, setActiveTab] = useState("ingredients");
    const [isFavorite, setIsFavorite] = useState(false);

    const recipe = recipesData.find((r) => r.id === parseInt(recipeId));

    if (!recipe) {
        return (
            <Container>
                <NotFoundContainer>
                    <NotFoundTitle>Receta no encontrada</NotFoundTitle>
                    <NotFoundText>La receta que buscas no existe o ha sido eliminada.</NotFoundText>
                    <BackButton onClick={() => navigate("/recipes")}>Volver a recetas</BackButton>
                </NotFoundContainer>
            </Container>
        );
    }

    const handleBackClick = () => {
        navigate("/recipes");
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case "ingredients":
                return (
                    <div>
                        <SectionTitle>Ingredientes ({recipe.servings} porciones)</SectionTitle>
                        <IngredientsList>
                            {recipe.ingredients.map((ingredient, index) => (
                                <IngredientItem key={index}>{ingredient}</IngredientItem>
                            ))}
                        </IngredientsList>
                    </div>
                );
            case "instructions":
                return (
                    <div>
                        <SectionTitle>Instrucciones</SectionTitle>
                        <InstructionsList>
                            {recipe.instructions.map((instruction, index) => (
                                <InstructionItem key={index}>{instruction}</InstructionItem>
                            ))}
                        </InstructionsList>
                    </div>
                );
            case "nutrition":
                return (
                    <div>
                        <SectionTitle>Información Nutricional</SectionTitle>
                        <NutritionGrid>
                            {Object.entries(recipe.nutritionalInfo).map(([key, value]) => (
                                <NutritionCard key={key}>
                                    <NutritionValue>{value}</NutritionValue>
                                    <NutritionLabel>
                                        {key === "protein" && "Proteína"}
                                        {key === "carbs" && "Carbohidratos"}
                                        {key === "fat" && "Grasas"}
                                        {key === "fiber" && "Fibra"}
                                    </NutritionLabel>
                                </NutritionCard>
                            ))}
                        </NutritionGrid>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <Container>
            <HeaderImage image={recipe.image}>
                <HeaderOverlay />
                <TopBar>
                    <BackButton onClick={handleBackClick}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                        </svg>
                    </BackButton>
                    <FavoriteButton isFavorite={isFavorite} onClick={toggleFavorite}>
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                    </FavoriteButton>
                </TopBar>
                <RecipeTitle>{recipe.name}</RecipeTitle>
            </HeaderImage>

            <Content>
                <ContentHeader>
                    <QuickInfo>
                        <InfoItem>
                            <InfoValue>{recipe.preparationTime}</InfoValue>
                            <InfoLabel>Minutos</InfoLabel>
                        </InfoItem>
                        {/* <InfoItem>
                            <InfoValue>{recipe.servings}</InfoValue>
                            <InfoLabel>Porciones</InfoLabel>
                        </InfoItem> */}
                        {/* <InfoItem>
                            <InfoValue>{recipe.calories}</InfoValue>
                            <InfoLabel>Calorías</InfoLabel>
                        </InfoItem> */}
                        <InfoItem>
                            <InfoValue>{recipe.difficulty}</InfoValue>
                            <InfoLabel>Dificultad</InfoLabel>
                        </InfoItem>
                    </QuickInfo>
                    <Description>{recipe.description}</Description>
                </ContentHeader>

                <TabContainer>
                    <Tab active={activeTab === "ingredients"} onClick={() => setActiveTab("ingredients")}>
                        Ingredientes
                    </Tab>
                    <Tab active={activeTab === "instructions"} onClick={() => setActiveTab("instructions")}>
                        Preparación
                    </Tab>
                    {/* <Tab 
                        active={activeTab === "nutrition"} 
                        onClick={() => setActiveTab("nutrition")}
                    >
                        Nutrición
                    </Tab> */}
                </TabContainer>

                <TabContent>{renderTabContent()}</TabContent>
            </Content>
        </Container>
    );
};

export default RecipeDetailPage;
