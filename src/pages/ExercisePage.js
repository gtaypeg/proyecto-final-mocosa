import React, { useState, useEffect } from "react";
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
    background-color: white;
`;

const Header = styled.div`
    padding: 15px 20px;
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: white;
    border-bottom: 1px solid #f0f0f0;
`;

const HeaderIcon = styled.div`
    width: 32px;
    height: 32px;
    background-color: #f0f0f0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
`;

const HeaderActions = styled.div`
    display: flex;
    gap: 10px;
    margin-left: auto;
`;

const ExerciseImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    /* background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); */
    background-color: #fff;
`;

const ExerciseImage = styled.div`
    width: 200px;
    height: 300px;
    background-color: #f0f0f0;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-size: 14px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const PrepareText = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

const PrepareTitle = styled.h1`
    font-size: 28px;
    font-weight: 700;
    color: #333;
    margin: 0 0 10px 0;
`;

const SoundIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    font-size: 24px;
    color: #666;
`;

const Footer = styled.div`
    padding: 20px;
    background-color: white;
`;

const ExerciseInfo = styled.div`
    margin-bottom: 20px;
`;

const ExerciseName = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin: 0 0 8px 0;
`;

const ExerciseProgress = styled.div`
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
`;

const Timer = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

const TimerDisplay = styled.div`
    font-size: 48px;
    font-weight: 300;
    color: #333;
    font-family: "Courier New", monospace;
    margin-bottom: 8px;
`;

const CaloriesDisplay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 20px 0;
    background-color: #f8f9fa;
    border-radius: 20px;
`;

const ControlButton = styled.button`
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;
    background-color: ${(props) => (props.primary ? "#333" : "#e5e7eb")};
    color: ${(props) => (props.primary ? "white" : "#666")};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.05);
        background-color: ${(props) => (props.primary ? "#1f2937" : "#d1d5db")};
    }

    &:active {
        transform: scale(0.95);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const PlayButton = styled(ControlButton)`
    width: 60px;
    height: 60px;
    font-size: 20px;
`;

const NextButton = styled.button`
    width: 100%;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 20px;
    transition: all 0.2s ease;

    &:hover {
        background-color: #1f2937;
    }

    &:disabled {
        background-color: #d1d5db;
        cursor: not-allowed;
    }
`;

const ExercisePage = () => {
    const { category, exercise, day, exerciseIndex } = useParams();
    const navigate = useNavigate();
    const { completeExercise, completeDay, isExerciseCompleted } = useProgress();

    const [timeLeft, setTimeLeft] = useState(30);
    const [isRunning, setIsRunning] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [calories, setCalories] = useState(0);
    const [preparing, setPreparing] = useState(true);

    const categoryData = exerciseData?.categories?.[category];
    const exerciseDataForCategory = categoryData?.exercises[exercise];
    const dayData = exerciseDataForCategory?.days[day];
    const currentExercise = dayData?.exercises?.[parseInt(exerciseIndex)];
    const totalExercises = dayData?.exercises?.length || 0;
    const currentIndex = parseInt(exerciseIndex);

    useEffect(() => {
        if (currentExercise) {
            // Parse duration (e.g., "25s" -> 25, "5m" -> 300)
            const duration = currentExercise.duration;
            if (duration.includes("s")) {
                setTimeLeft(parseInt(duration));
            } else if (duration.includes("m")) {
                setTimeLeft(parseInt(duration) * 60);
            }
        }
    }, [currentExercise]);

    useEffect(() => {
        let interval;
        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((time) => {
                    if (time <= 1) {
                        setIsRunning(false);
                        setIsCompleted(true);
                        setPreparing(false);
                        completeExercise(`${category}-${exercise}`, day, currentIndex);
                        return 0;
                    }
                    return time - 1;
                });

                // Simulate calorie burn
                setCalories((prev) => prev + 0.1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, timeLeft, completeExercise, category, exercise, day, currentIndex]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const handlePlayPause = () => {
        setIsRunning(!isRunning);
        setPreparing(false);
    };

    const handleNext = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < totalExercises) {
            navigate(`/category/${category}/exercise/${exercise}/day/${day}/exercise/${nextIndex}`);
        } else {
            // All exercises completed
            completeDay(`${category}-${exercise}`, day);
            navigate(`/category/${category}/exercise/${exercise}/day/${day}/completed`);
        }
    };

    const handlePrevious = () => {
        const previousIndex = currentIndex - 1;
        if (previousIndex >= 0) {
            navigate(`/category/${category}/exercise/${exercise}/day/${day}/exercise/${previousIndex}`);
        }
    };

    const handleSkip = () => {
        completeExercise(`${category}-${exercise}`, day, currentIndex);
        handleNext();
    };

    const handleBack = () => {
        navigate(`/category/${category}/exercise/${exercise}/day/${day}`);
    };

    if (!currentExercise) {
        return <div>Ejercicio no encontrado</div>;
    }

    return (
        <Container>
            <Header>
                {/* <HeaderIcon onClick={handleBack}>🔊</HeaderIcon> */}
                {/* <HeaderIcon>⚠️</HeaderIcon>
        <HeaderIcon>ℹ️</HeaderIcon> */}
                <HeaderActions>
                    {/* <HeaderIcon>✚</HeaderIcon> */}
                    <HeaderIcon onClick={handleBack}>✕</HeaderIcon>
                </HeaderActions>
            </Header>

            <ExerciseImageContainer>
                {preparing && (
                    <div>
                        <PrepareText>
                            <PrepareTitle>¡Prepárate ahora!</PrepareTitle>
                        </PrepareText>
                        <SoundIcon>🔊</SoundIcon>
                    </div>
                )}

                {!preparing && (
                    <ExerciseImage>
                        <img src={currentExercise.image} alt={currentExercise.name} />
                        {/* Ejercicio: {currentExercise.name} */}
                    </ExerciseImage>
                )}
            </ExerciseImageContainer>

            <Footer>
                <ExerciseInfo>
                    <ExerciseName>{currentExercise.name}</ExerciseName>
                    <ExerciseProgress>
                        Saltar {currentIndex + 1}/{totalExercises}
                    </ExerciseProgress>
                </ExerciseInfo>

                <Timer>
                    <TimerDisplay>{formatTime(timeLeft)}</TimerDisplay>
                    {/* <CaloriesDisplay> */}
                    {/* <span>🔥 {calories.toFixed(1)} kcal</span> */}
                    {/* <span>⏱ {formatTime(timeLeft)}</span> */}
                    {/* </CaloriesDisplay> */}
                </Timer>

                <Controls>
                    <ControlButton onClick={handlePrevious} disabled={currentIndex === 0}>
                        ⏮
                    </ControlButton>
                    <ControlButton style={{ opacity: 0, pointerEvents: "none" }}></ControlButton>
                    <PlayButton primary onClick={handlePlayPause}>
                        {isRunning ? "⏸" : "▶"}
                    </PlayButton>
                    <ControlButton style={{ opacity: 0, pointerEvents: "none" }}></ControlButton>
                    <ControlButton onClick={handleNext} disabled={currentIndex === 0 && !isRunning}>
                        ⏭
                    </ControlButton>
                </Controls>

                {isCompleted && (
                    <NextButton onClick={handleNext}>
                        {currentIndex + 1 < totalExercises ? "Siguiente Ejercicio" : "Finalizar Día"}
                    </NextButton>
                )}
            </Footer>
        </Container>
    );
};

export default ExercisePage;
