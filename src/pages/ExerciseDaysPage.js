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
    left: 20px;
    top: 20px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #fff;
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
    color: white;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
`;

const ExerciseBadge = styled.div`
    display: inline-block;
    background: #e5e7eb;
    color: #374151;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
`;

const Main = styled.div`
    padding: 20px;
    flex: 1;
    border-radius: 25px 25px 0 0;
    margin-top: -20px;
    background-color: white;
    z-index: 5;
`;

const DaysList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const DayCard = styled.div`
    background: white;
    border-radius: 16px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

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

    &::after {
        content: "${(props) => (props.completed ? "✓" : "")}";
    }
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
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin: 0;
`;

const ArrowIcon = styled.div`
    color: #999;
    font-size: 18px;
`;

const DayStats = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: #666;
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

const ExerciseDaysPage = () => {
    const { category, exercise } = useParams();
    const navigate = useNavigate();
    const { isDayCompleted, getDayProgress } = useProgress();

    const categoryData = exerciseData.categories[category];
    const exerciseData2 = categoryData?.exercises[exercise];

    if (!categoryData || !exerciseData2) {
        return <div>Ejercicio no encontrado</div>;
    }

    const handleDayClick = (dayNumber) => {
        navigate(`/category/${category}/exercise/${exercise}/day/${dayNumber}`);
    };

    const handleBackClick = () => {
        navigate(`/category/${category}`);
    };

    const duration = exerciseData2.days[1].exercises.reduce((acc, exercise) => {
        return acc + parseInt(exercise.duration.split("m")[0]);
    }, 0);

    return (
        <Container>
            <Header src={`/fondos/${exercise}.png`}>
                <BackButton onClick={handleBackClick}>←</BackButton>
                <HeaderContent>
                    <CategoryBadge color={categoryData.color}>{exerciseData2.name}</CategoryBadge>
                </HeaderContent>
            </Header>

            <Main>
                <DaysList>
                    {Object.entries(exerciseData2.days).map(([dayNumber, dayData]) => {
                        const isCompleted = isDayCompleted(`${category}-${exercise}`, dayNumber);
                        const progress = getDayProgress(
                            `${category}-${exercise}`,
                            dayNumber,
                            dayData.exercises?.length || 0
                        );

                        if (dayData.restDay) {
                            return (
                                <RestDayCard key={dayNumber}>
                                    <RestDayIcon>🌙</RestDayIcon>
                                    <DayContent>
                                        <DayHeader>
                                            <DayName>{dayData.name}</DayName>
                                        </DayHeader>
                                        <RestDayText>{dayData.message}</RestDayText>
                                    </DayContent>
                                </RestDayCard>
                            );
                        }

                        return (
                            <DayCard key={dayNumber} onClick={() => handleDayClick(dayNumber)}>
                                <DayIcon completed={isCompleted} />
                                <DayContent>
                                    <DayHeader>
                                        <DayName>Día {dayNumber}</DayName>
                                        <ArrowIcon>›</ArrowIcon>
                                    </DayHeader>
                                    <DayStats>
                                        <span>⏱ {duration}m</span>
                                        {/* <span>🔥 {dayData.calories} kcal</span> */}
                                    </DayStats>
                                    <ProgressBar>
                                        <ProgressFill progress={progress.percentage} />
                                    </ProgressBar>
                                </DayContent>
                            </DayCard>
                        );
                    })}
                </DaysList>
            </Main>
        </Container>
    );
};

export default ExerciseDaysPage;
