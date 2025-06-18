import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import exerciseData from "../data/exerciseData.json";
import { useProgress } from "../contexts/ProgressContext";

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

const Greeting = styled.h1`
    font-size: 18px;
    font-weight: 400;
    color: #666;
    margin: 0;
`;

const AppBrand = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 10px 0;
`;

const BrandText = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #333;
`;

const AiIcon = styled.span`
    background: linear-gradient(135deg, #4ade80, #a855f7);
    color: white;
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: bold;
`;

const PlanTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin: 15px 0 5px 0;
`;

const PlanLevel = styled.div`
    display: inline-block;
    background-color: #f0f0f0;
    color: #666;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 14px;
    margin-bottom: 20px;
`;

const CategoryBadge = styled.div`
    display: inline-block;
    background: ${(props) => props.color};
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
`;

const Main = styled.div`
    padding: 20px;
    flex: 1;
`;

const DaysList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const DayCard = styled.div`
    background: white;
    border-radius: 16px;
    padding: 50px 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
        border-radius: 16px;
    }

    & > * {
        position: relative;
        z-index: 1;
    }

    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
`;

const DayIcon = styled.div`
    width: 24px;
    height: 24px;
    border: 2px solid ${(props) => (props.completed ? "#4ade80" : "#e5e7eb")};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: ${(props) => (props.completed ? "#4ade80" : "transparent")};
    color: ${(props) => (props.completed ? "white" : "#666")};
    font-size: 12px;
    font-weight: bold;
`;

const DayContent = styled.div`
    flex: 1;
`;

const DayHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 8px;
`;

const DayName = styled.h3`
    font-size: 18px;
    font-weight: 700;
    margin: 0;
`;

const ArrowIcon = styled.div`
    font-size: 18px;
`;

const DayStats = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 12px;
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 4px;
    background-color: #e5e7eb;
    border-radius: 2px;
    margin-top: 8px;
    overflow: hidden;
`;

const ProgressFill = styled.div`
    height: 100%;
    background-color: #4ade80;
    width: ${(props) => props.progress}%;
    transition: width 0.3s ease;
`;

const RestDayCard = styled(DayCard)`
    background: linear-gradient(135deg, #fef3c7, #fbbf24);
    border: none;
`;

const RestDayIcon = styled.div`
    width: 32px;
    height: 32px;
    background: rgba(251, 191, 36, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`;

const RestDayText = styled.div`
    color: #92400e;
    font-weight: 600;
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
                <BackButton onClick={handleBackClick}>←</BackButton>
                <HeaderContent>
                    <PlanTitle>Ejercicios</PlanTitle>
                </HeaderContent>
            </Header>

            <Main>
                <DaysList>
                    {Object.entries(categoryData.exercises).map(([exerciseSlug, exerciseData]) => {
                        return (
                            <DayCard key={exerciseSlug} onClick={() => handleExerciseClick(exerciseSlug)} src={`/fondos/${exerciseSlug}.png`}>
                                <DayIcon completed={false}>{getCategoryIcon(exerciseData.category)}</DayIcon>
                                <DayContent>
                                    <DayHeader>
                                        <DayName>{exerciseData.name}</DayName>
                                    </DayHeader>
                                    <DayStats>
                                        <span>{exerciseData.description}</span>
                                    </DayStats>
                                </DayContent>
                            </DayCard>
                        );
                    })}
                </DaysList>
            </Main>
        </Container>
    );
};

export default CategoryPage;
