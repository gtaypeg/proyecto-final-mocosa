import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    box-shadow: ${props => props.theme.colors.shadow};
    overflow: hidden;
    position: relative;
`;

const HeaderImage = styled(motion.div)`
    width: 100%;
    height: 320px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
`;

const HeaderOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        135deg,
                    rgba(45, 90, 61, 0.4) 0%,
                        rgba(74, 124, 89, 0.3) 50%,
            rgba(30, 61, 40, 0.6) 100%
    );
    backdrop-filter: blur(2px);
`;

const TopBar = styled.div`
    position: absolute;
    top: ${props => props.theme.spacing.lg};
    left: ${props => props.theme.spacing.lg};
    right: ${props => props.theme.spacing.lg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
`;

const ActionButton = styled(motion.button)`
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

const FavoriteButton = styled(ActionButton)`
    svg {
        color: ${props => props.isFavorite ? '#ff6b6b' : 'currentColor'};
        fill: ${props => props.isFavorite ? '#ff6b6b' : 'none'};
        width: 16px;
        height: 16px;
    }
`;

const RecipeTitle = styled(motion.h1)`
    position: absolute;
    bottom: ${props => props.theme.spacing["2xl"]};
    left: ${props => props.theme.spacing.lg};
    right: ${props => props.theme.spacing.lg};
    color: white;
    font-size: ${props => props.theme.fontSizes["4xl"]};
    font-weight: 700;
    margin: 0;
    font-family: ${props => props.theme.fonts.display};
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    letter-spacing: -0.02em;
    line-height: 1.1;
`;

const Content = styled(motion.div)`
    flex: 1;
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius["2xl"]} ${props => props.theme.borderRadius["2xl"]} 0 0;
    margin-top: -${props => props.theme.spacing.xl};
    position: relative;
    z-index: 5;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    }
`;

const ContentHeader = styled.div`
    padding: ${props => props.theme.spacing["2xl"]} ${props => props.theme.spacing.lg} ${props => props.theme.spacing.lg};
    border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const QuickInfoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${props => props.theme.spacing.lg};
    margin-bottom: ${props => props.theme.spacing.xl};
`;

const InfoCard = styled(motion.div)`
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${props => props.theme.borderRadius.xl};
    padding: ${props => props.theme.spacing.lg};
    text-align: center;
    box-shadow: ${props => props.theme.colors.shadow};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: ${props => props.theme.colors.primary};
    }
`;

const InfoValue = styled.div`
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: 700;
    background: ${props => props.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${props => props.theme.spacing.xs};
    font-family: ${props => props.theme.fonts.display};
`;

const InfoLabel = styled.div`
    font-size: ${props => props.theme.fontSizes.xs};
    color: ${props => props.theme.colors.textLight};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
`;

const Description = styled.p`
    font-size: ${props => props.theme.fontSizes.base};
    color: ${props => props.theme.colors.textLight};
    line-height: 1.6;
    margin: 0;
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
`;

const TabContainer = styled.div`
    display: flex;
    background: ${props => props.theme.colors.surface};
    border-bottom: 1px solid ${props => props.theme.colors.border};
    position: sticky;
    top: 0;
    z-index: 10;
    backdrop-filter: blur(20px);
`;

const Tab = styled(motion.button)`
    flex: 1;
    background: none;
    border: none;
    font-size: ${props => props.theme.fontSizes.base};
    font-weight: ${props => props.active ? '600' : '400'};
    color: ${props => props.active ? props.theme.colors.primarySolid : props.theme.colors.textLight};
    border-bottom: 3px solid ${props => props.active ? props.theme.colors.primarySolid : 'transparent'};
    cursor: pointer;
    transition: ${props => props.theme.transitions.base};
    position: relative;
    font-family: ${props => props.theme.fonts.main};

    &:hover {
        color: ${props => props.theme.colors.primarySolid};
        background: ${props => props.theme.colors.primarySolid}10;
    }

    ${props => props.active ? `
        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: ${props.theme.colors.primary};
            animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
        }
    ` : ''}
`;

const TabContent = styled(motion.div)`
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
    background: ${props => props.theme.colors.background};
    min-height: 400px;
`;

const SectionTitle = styled.h3`
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: 600;
    color: ${props => props.theme.colors.text};
    margin: 0 0 ${props => props.theme.spacing.lg} 0;
    font-family: ${props => props.theme.fonts.display};
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.sm};

    &::before {
        content: '';
        width: 4px;
        height: 20px;
        background: ${props => props.theme.colors.primary};
        border-radius: ${props => props.theme.borderRadius.full};
    }
`;

const IngredientsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.sm};
`;

const IngredientCard = styled(motion.div)`
    background: ${props => props.theme.colors.surface};
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.xl};
    padding: ${props => props.theme.spacing.lg};
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.md};
    transition: ${props => props.theme.transitions.base};
    box-shadow: ${props => props.theme.colors.shadow};

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.colors.shadowHover};
        border-color: ${props => props.theme.colors.primarySolid};
    }
`;

const IngredientIcon = styled.div`
    width: 40px;
    height: 40px;
    background: ${props => props.theme.colors.primary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.fontSizes.lg};
    color: white;
    flex-shrink: 0;
    box-shadow: ${props => props.theme.colors.shadow};
`;

const IngredientText = styled.div`
    font-size: ${props => props.theme.fontSizes.base};
    color: ${props => props.theme.colors.text};
    font-weight: 500;
    line-height: 1.4;
`;

const InstructionsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.lg};
`;

const InstructionCard = styled(motion.div)`
    background: ${props => props.theme.colors.surface};
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.xl};
    padding: ${props => props.theme.spacing.lg};
    display: flex;
    gap: ${props => props.theme.spacing.lg};
    transition: ${props => props.theme.transitions.base};
    box-shadow: ${props => props.theme.colors.shadow};
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.colors.shadowHover};
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background: ${props => props.theme.colors.primary};
    }
`;

const StepNumber = styled.div`
    width: 48px;
    height: 48px;
    background: ${props => props.theme.colors.primary};
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.fontSizes.lg};
    font-weight: 700;
    flex-shrink: 0;
    box-shadow: ${props => props.theme.colors.shadow};
    font-family: ${props => props.theme.fonts.display};
`;

const StepText = styled.div`
    font-size: ${props => props.theme.fontSizes.base};
    line-height: 1.6;
    color: ${props => props.theme.colors.text};
    font-weight: 400;
`;

const NutritionGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${props => props.theme.spacing.lg};
`;

const NutritionCard = styled(motion.div)`
    background: ${props => props.theme.colors.surface};
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.xl};
    padding: ${props => props.theme.spacing.lg};
    text-align: center;
    box-shadow: ${props => props.theme.colors.shadow};
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-4px);
        box-shadow: ${props => props.theme.colors.shadowHover};
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: ${props => props.theme.colors.success};
    }
`;

const NutritionValue = styled.div`
    font-size: ${props => props.theme.fontSizes["2xl"]};
    font-weight: 700;
    background: ${props => props.theme.colors.success};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${props => props.theme.spacing.sm};
    font-family: ${props => props.theme.fonts.display};
`;

const NutritionLabel = styled.div`
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors.textLight};
    text-transform: capitalize;
    font-weight: 500;
`;

const NutritionDetailsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.lg};
    margin-top: ${props => props.theme.spacing.xl};
`;

const NutritionDetailCard = styled(motion.div)`
    background: ${props => props.theme.colors.surface};
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.xl};
    padding: ${props => props.theme.spacing.lg};
    display: flex;
    gap: ${props => props.theme.spacing.lg};
    transition: ${props => props.theme.transitions.base};
    box-shadow: ${props => props.theme.colors.shadow};
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.colors.shadowHover};
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background: ${props => props.theme.colors.success};
    }
`;

const NutritionIcon = styled.div`
    width: 48px;
    height: 48px;
    background: ${props => props.theme.colors.success};
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.fontSizes.lg};
    flex-shrink: 0;
    box-shadow: ${props => props.theme.colors.shadow};
    font-family: ${props => props.theme.fonts.display};
`;

const NutritionDetailText = styled.div`
    font-size: ${props => props.theme.fontSizes.base};
    line-height: 1.6;
    color: ${props => props.theme.colors.text};
    font-weight: 400;
`;

const NotFoundContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    padding: ${props => props.theme.spacing.xl};
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius["2xl"]};
    box-shadow: ${props => props.theme.colors.shadow};
    margin: ${props => props.theme.spacing.lg};
`;

const NotFoundIcon = styled.div`
    font-size: ${props => props.theme.fontSizes["5xl"]};
    margin-bottom: ${props => props.theme.spacing.xl};
    opacity: 0.5;
`;

const NotFoundTitle = styled.h2`
    font-size: ${props => props.theme.fontSizes["2xl"]};
    color: ${props => props.theme.colors.text};
    margin-bottom: ${props => props.theme.spacing.md};
    font-family: ${props => props.theme.fonts.display};
`;

const NotFoundText = styled.p`
    font-size: ${props => props.theme.fontSizes.base};
    color: ${props => props.theme.colors.textLight};
    margin-bottom: ${props => props.theme.spacing.xl};
    max-width: 300px;
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
                <NotFoundContainer
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <NotFoundIcon>🍽️</NotFoundIcon>
                    <NotFoundTitle>Receta no encontrada</NotFoundTitle>
                    <NotFoundText>La receta que buscas no existe o ha sido eliminada.</NotFoundText>
                    <ActionButton onClick={() => navigate("/recipes")}>
                        ←
                    </ActionButton>
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

    const tabVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.4, staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case "ingredients":
                return (
                    <motion.div
                        variants={tabVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <SectionTitle>Ingredientes ({recipe.servings} porciones)</SectionTitle>
                        <IngredientsList>
                            {recipe.ingredients.map((ingredient, index) => (
                                <IngredientCard
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <IngredientIcon>🥄</IngredientIcon>
                                    <IngredientText>{ingredient}</IngredientText>
                                </IngredientCard>
                            ))}
                        </IngredientsList>
                    </motion.div>
                );
            case "instructions":
                return (
                    <motion.div
                        variants={tabVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <SectionTitle>Instrucciones de Preparación</SectionTitle>
                        <InstructionsList>
                            {recipe.instructions.map((instruction, index) => (
                                <InstructionCard
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.01 }}
                                >
                                    <StepNumber>{index + 1}</StepNumber>
                                    <StepText>{instruction}</StepText>
                                </InstructionCard>
                            ))}
                        </InstructionsList>
                    </motion.div>
                );
            case "nutrition":
                return (
                    <motion.div
                        variants={tabVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* <SectionTitle>Información Nutricional</SectionTitle>
                        <NutritionGrid>
                            {Object.entries(recipe.nutritionalInfo || {}).map(([key, value]) => (
                                <NutritionCard
                                    key={key}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <NutritionValue>{value}</NutritionValue>
                                    <NutritionLabel>
                                        {key === "protein" && "Proteína"}
                                        {key === "carbs" && "Carbohidratos"}
                                        {key === "fat" && "Grasas"}
                                        {key === "fiber" && "Fibra"}
                                    </NutritionLabel>
                                </NutritionCard>
                            ))}
                        </NutritionGrid> */}
                        
                        {recipe.nutritionalDetails && (
                            <>
                                <SectionTitle>Beneficios Nutricionales</SectionTitle>
                                <NutritionDetailsList>
                                    {recipe.nutritionalDetails.map((detail, index) => (
                                        <NutritionDetailCard
                                            key={index}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.01 }}
                                        >
                                            {/* <NutritionIcon>
                                                {index === 0 && "💪"}
                                                {index === 1 && "🥑"}
                                                {index === 2 && "🌾"}
                                                {index === 3 && "✨"}
                                            </NutritionIcon> */}
                                            <NutritionDetailText>{detail}</NutritionDetailText>
                                        </NutritionDetailCard>
                                    ))}
                                </NutritionDetailsList>
                            </>
                        )}
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <Container>
            <HeaderImage 
                image={recipe.image}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <HeaderOverlay />
                <TopBar>
                    <ActionButton 
                        onClick={handleBackClick}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                     ←
                    </ActionButton>
                    <FavoriteButton 
                        isFavorite={isFavorite} 
                        onClick={toggleFavorite}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                    </FavoriteButton>
                </TopBar>
                <RecipeTitle
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    {recipe.name}
                </RecipeTitle>
            </HeaderImage>

            <Content
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                <ContentHeader>
                    <QuickInfoGrid>
                        <InfoCard
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <InfoValue>{recipe.preparationTime}m</InfoValue>
                            <InfoLabel>Tiempo</InfoLabel>
                        </InfoCard>
                        <InfoCard
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <InfoValue>{recipe.difficulty}</InfoValue>
                            <InfoLabel>Dificultad</InfoLabel>
                        </InfoCard>
                        {/* <InfoCard
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <InfoValue>{recipe.servings}</InfoValue>
                            <InfoLabel>Porciones</InfoLabel>
                        </InfoCard> */}
                    </QuickInfoGrid>
                    <Description>{recipe.description}</Description>
                </ContentHeader>

                <TabContainer>
                    <Tab 
                        active={activeTab === "ingredients"} 
                        onClick={() => setActiveTab("ingredients")}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Ingredientes
                    </Tab>
                    <Tab 
                        active={activeTab === "instructions"} 
                        onClick={() => setActiveTab("instructions")}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Preparación
                    </Tab>
                    {recipe.nutritionalInfo && (
                        <Tab 
                            active={activeTab === "nutrition"} 
                            onClick={() => setActiveTab("nutrition")}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Nutrición
                        </Tab>
                    )}
                </TabContainer>

                <TabContent key={activeTab}>
                    <AnimatePresence mode="wait">
                        {renderTabContent()}
                    </AnimatePresence>
                </TabContent>
            </Content>
        </Container>
    );
};

export default RecipeDetailPage;
