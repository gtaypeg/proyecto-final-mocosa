import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import exerciseData from "../data/exerciseData.json";
import { useProgress } from "../contexts/ProgressContext";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 2.125rem);
    background: linear-gradient(
        135deg,
        ${props => props.theme.colors.background} 0%,
        ${props => props.theme.colors.backgroundDark} 100%
    );
    position: relative;
    border-radius: ${props => props.theme.borderRadius["2xl"]};
    box-shadow: ${props => props.theme.colors.shadow};
    overflow: hidden;
`;

const Header = styled.div`
    padding: ${props => props.theme.spacing["2xl"]} ${props => props.theme.spacing.lg} ${props => props.theme.spacing.lg};
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
`;

const Title = styled.h1`
   font-size: ${props => props.theme.fontSizes["3xl"]};
    font-weight: 700;
    background: ${props => props.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    font-family: ${props => props.theme.fonts.display};
    letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
    color: ${props => props.theme.colors.textLight};
    font-size: ${props => props.theme.fontSizes.base};
    margin: ${props => props.theme.spacing.sm} 0 0 0;
    font-weight: 400;
`;

const Main = styled.div`
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
    flex: 1;
`;

const ExercisesList = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.lg};
`;

const ExerciseCard = styled(motion.div)`
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius["2xl"]};
    overflow: hidden;
    cursor: pointer;
    transition: ${props => props.theme.transitions.slow};
    box-shadow: ${props => props.theme.colors.shadow};
    border: 1px solid ${props => props.theme.colors.border};
    position: relative;
    min-height: 120px;

    &:hover {
        transform: translateY(-6px);
        box-shadow: ${props => props.theme.colors.shadowHover};
    }
`;

const ExerciseBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: ${props => props.theme.transitions.slow};

    ${ExerciseCard}:hover & {
        transform: scale(1.05);
    }
`;

const ExerciseOverlay = styled.div`
    background: linear-gradient(
        135deg,
                    rgba(45, 90, 61, 0.8) 0%,
            rgba(74, 124, 89, 0.6) 50%,
            rgba(30, 61, 40, 0.8) 100%
    );
    padding: ${props => props.theme.spacing.xl};
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.lg};
    backdrop-filter: blur(2px);
`;

const ExerciseIcon = styled.div`
    width: 64px;
    height: 64px;
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: ${props => props.theme.borderRadius.xl};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.fontSizes["2xl"]};
    color: white;
    box-shadow: ${props => props.theme.colors.shadowHover};
    flex-shrink: 0;
`;

const ExerciseContent = styled.div`
    flex: 1;
    color: white;
`;

const ExerciseName = styled.h3`
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: 700;
    margin: 0 0 ${props => props.theme.spacing.sm} 0;
    font-family: ${props => props.theme.fonts.display};
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    letter-spacing: -0.01em;
    color: white;
`;

const ExerciseDescription = styled.p`
    font-size: ${props => props.theme.fontSizes.sm};
    margin: 0 0 ${props => props.theme.spacing.md} 0;
    opacity: 0.9;
    line-height: 1.4;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
`;

const ExerciseStats = styled.div`
    display: flex;
    gap: ${props => props.theme.spacing.md};
`;

const StatChip = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.sm};
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: ${props => props.theme.borderRadius.lg};
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
    color: #ffffff;
    font-size: ${props => props.theme.fontSizes.sm};
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    box-shadow: 
        0 4px 16px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);

`;

const FloatingBadge = styled(motion.div)`
    position: absolute;
    top: ${props => props.theme.spacing.md};
    right: ${props => props.theme.spacing.md};
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${props => props.theme.borderRadius.full};
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
    font-size: ${props => props.theme.fontSizes.xs};
    font-weight: 600;
    color: white;
    z-index: 2;
`;

const StatsCard = styled(motion.div)`
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${props => props.theme.borderRadius.xl};
    padding: ${props => props.theme.spacing.lg};
    margin-bottom: ${props => props.theme.spacing.lg};
    box-shadow: ${props => props.theme.colors.shadow};

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: ${props => props.theme.spacing.md};
        text-align: center;
    }

    .stat-item {
        h4 {
            font-size: ${props => props.theme.fontSizes["2xl"]};
            font-weight: 700;
            background: ${props => props.theme.colors.primary};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0 0 ${props => props.theme.spacing.xs} 0;
        }

        p {
            font-size: ${props => props.theme.fontSizes.sm};
            color: ${props => props.theme.colors.textLight};
            margin: 0;
        }
    }
`;

const CategoryPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();

    const categoryData = exerciseData.categories[category];

    if (!categoryData) {
        return <div>Categoría no encontrada</div>;
    }

    const handleExerciseClick = (exerciseSlug) => {
        navigate(`/category/${category}/exercise/${exerciseSlug}`);
    };

    const handleBackClick = () => {
        navigate("/discover");
    };

    const getCategoryIcon = (exerciseCategory) => {
        const iconMap = {
            cardiovascular: "❤️",
            relajacion: "🧘",
            fuerza: "💪",
            respiracion: "🫁",
        };
        return iconMap[exerciseCategory] || "💪";
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
                    <Title>Ejercicios</Title>
                    <Subtitle>Elige tu rutina perfecta</Subtitle>
                </HeaderContent>
            </Header>

            <Main>
                <StatsCard
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h4>{Object.keys(categoryData.exercises).length}</h4>
                            <p>Ejercicios</p>
                        </div>
                        {/* <div className="stat-item">
                            <h4>4</h4>
                            <p>Categorías</p>
                        </div> */}
                        <div className="stat-item">
                            <h4>24/7</h4>
                            <p>Acceso</p>
                        </div>
                    </div>
                </StatsCard>

                <ExercisesList
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    {Object.entries(categoryData.exercises).map(([exerciseSlug, exerciseData], index) => {
                        return (
                            <ExerciseCard 
                                key={exerciseSlug} 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                                onClick={() => handleExerciseClick(exerciseSlug)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <ExerciseBackground src={`/fondos/${exerciseSlug}.png`} />
                                <ExerciseOverlay>
                                    {/* <ExerciseIcon>{getCategoryIcon(exerciseData.category)}</ExerciseIcon> */}
                                    <ExerciseContent>
                                        <ExerciseName>{exerciseData.name}</ExerciseName>
                                        <ExerciseDescription>{exerciseData.description}</ExerciseDescription>
                                        <ExerciseStats>
                                            <StatChip>
                                              {exerciseData.category}
                                            </StatChip>
                                            <StatChip>
                                                Múltiples días
                                            </StatChip>
                                        </ExerciseStats>
                                    </ExerciseContent>
                                </ExerciseOverlay>
                                {/* <FloatingBadge
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2 * index + 0.5, type: "spring" }}
                                >
                                    NUEVO
                                </FloatingBadge> */}
                            </ExerciseCard>
                        );
                    })}
                </ExercisesList>
            </Main>
        </Container>
    );
};

export default CategoryPage;
