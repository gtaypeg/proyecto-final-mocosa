import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
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
    padding: 50px 20px;
    background-color: white;
    position: relative;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;

    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    & > * {
        position: relative;
        z-index: 1;
    }
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

const HeaderContent = styled.div`
    text-align: center;
    margin-top: 20px;
`;

const DayTitle = styled.h1`
    display: inline-block;
    color: white;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
`;

const HeartIcon = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 20px;
    color: #e5e7eb;
    cursor: pointer;

    &:hover {
        color: #ef4444;
    }
`;

const Stats = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 20px;
    font-size: 14px;
    color: #666;
`;

const Main = styled.div`
    padding: 20px;
    flex: 1;
    border-radius: 25px 25px 0 0;
    margin-top: -20px;
    background-color: white;
    z-index: 5;
`;

const Section = styled.div`
    margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin-bottom: 12px;
`;

const TargetAreas = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

const AreaIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: #666;
`;

const IconCircle = styled.div`
    width: 40px;
    height: 40px;
    background-color: #f0f0f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`;

const AreaLabel = styled.span`
    font-size: 12px;
    text-align: center;
`;

const WarmupSection = styled.div`
    background: white;
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 20px;
`;

const WarmupHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

const WarmupTitle = styled.h4`
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin: 0;
`;

const WarmupCount = styled.span`
    color: ${props => props.theme.colors.primarySolid};
    font-size: 14px;
    font-weight: 600;
`;

const ToggleSwitch = styled.div`
    position: relative;
    width: 44px;
    height: 24px;
    background-color: ${(props) => (props.active ? props.theme.colors.primarySolid : "#e5e7eb")};
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.2s;

    &::after {
        content: "";
        position: absolute;
        top: 2px;
        left: ${(props) => (props.active ? "22px" : "2px")};
        width: 20px;
        height: 20px;
        background-color: white;
        border-radius: 50%;
        transition: left 0.2s;
    }
`;

const ExercisesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ExerciseCard = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 0;
`;

const ExerciseImage = styled.div`
    width: 60px;
    height: 60px;
    background-color: #f0f0f0;
    border-radius: 8px;
    flex-shrink: 0;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ExerciseContent = styled.div`
    flex: 1;
`;

const ExerciseName = styled.h5`
    font-size: 14px;
    font-weight: 600;
    color: #333;
    margin: 0 0 4px 0;
`;

const ExerciseType = styled.span`
    font-size: 12px;
    color: #666;
    text-transform: lowercase;
`;

const ExerciseDuration = styled.span`
    font-size: 12px;
    color: ${props => props.theme.colors.primarySolid};
    font-weight: 600;
`;

const ExerciseArrow = styled.div`
    color: #999;
    font-size: 18px;
`;

const StartButton = styled.button`
    width: 100%;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 20px;
    transition: all 0.2s ease;

    &:hover {
        background-color: #1f2937;
        transform: translateY(-1px);
    }
`;

const PlayIcon = styled.div`
    width: 0;
    height: 0;
    border-left: 8px solid white;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    margin-left: 4px;
`;

const DayPage = () => {
    const { category, exercise, day } = useParams();
    const navigate = useNavigate();
    const { getDayProgress, isExerciseCompleted } = useProgress();
    const [warmupEnabled, setWarmupEnabled] = React.useState(true);

    const categoryData = exerciseData.categories[category];
    const exerciseData2 = categoryData?.exercises[exercise];
    const dayData = exerciseData2?.days[day];

    if (!categoryData || !exerciseData2 || !dayData) {
        return <div>Día no encontrado</div>;
    }

    const progress = getDayProgress(`${category}-${exercise}`, day, dayData.exercises?.length || 0);

    const getAreaIcon = (area) => {
        const iconMap = {
            Glúteos: "🍑",
            Pierna: "🦵",
            Espalda: "💪",
            Tronco: "🫁",
            Abdomen: "💪",
            Cardiovascular: "❤️",
            Core: "💪",
            Equilibrio: "⚖️",
            Flexibilidad: "🤸",
            Relajación: "🧘",
            Fuerza: "💪",
            Resistencia: "🏃",
            Recuperación: "😴",
        };
        return iconMap[area] || "💪";
    };

    const handleStartWorkout = () => {
        if (dayData.exercises && dayData.exercises.length > 0) {
            navigate(`/category/${category}/exercise/${exercise}/day/${day}/exercise/0`);
        }
    };

    const handleBackClick = () => {
        navigate(`/category/${category}/exercise/${exercise}`);
    };

    return (
        <Container>
            <Header src={`/fondos/${exercise}.png`}>
                <BackButton onClick={handleBackClick}>←</BackButton>
                {/* <HeartIcon>♡</HeartIcon> */}
                <HeaderContent>
                    <DayTitle>Día {day}</DayTitle>
                    {/* <Stats> */}
                        {/* <span>⏱ {dayData.duration}</span> */}
                        {/* <span>🔥 {dayData.calories} kcal</span> */}
                    {/* </Stats> */}
                </HeaderContent>
            </Header>

            <Main>
                <Section>
                    <SectionTitle>Área Objetivo</SectionTitle>
                    <TargetAreas>
                        {dayData.targetAreas.map((area, index) => (
                            <AreaIcon key={index}>
                                <IconCircle>{getAreaIcon(area)}</IconCircle>
                                <AreaLabel>{area}</AreaLabel>
                            </AreaIcon>
                        ))}
                    </TargetAreas>
                </Section>

                <WarmupSection>
                    {/* <WarmupHeader>
                        <div>
                            <WarmupTitle>Calentamiento</WarmupTitle>
                            <WarmupCount>{dayData.exercises?.length || 0} ejercicios</WarmupCount>
                        </div>
                        <ToggleSwitch active={warmupEnabled} onClick={() => setWarmupEnabled(!warmupEnabled)} />
                    </WarmupHeader> */}

                    {warmupEnabled && (
                        <ExercisesList>
                            {dayData.exercises?.map((exercise, index) => (
                                <ExerciseCard key={index}>
                                    <ExerciseImage>
                                        <img src={exercise.image} alt={exercise.name} />
                                    </ExerciseImage>
                                    <ExerciseContent>
                                        <ExerciseName>{exercise.name}</ExerciseName>
                                        <ExerciseType>{exercise.type}</ExerciseType>
                                    </ExerciseContent>
                                    <ExerciseDuration>{exercise.duration}</ExerciseDuration>
                                    <ExerciseArrow>›</ExerciseArrow>
                                </ExerciseCard>
                            ))}
                        </ExercisesList>
                    )}
                </WarmupSection>

                <StartButton onClick={handleStartWorkout}>
                    COMENZAR
                    <PlayIcon />
                </StartButton>
            </Main>
        </Container>
    );
};

export default DayPage;
