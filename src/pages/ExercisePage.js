import React, { useState, useEffect } from "react";
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
        ${(props) => props.theme.colors.background} 0%,
        ${(props) => props.theme.colors.backgroundDark} 100%
    );
    position: relative;
    border-radius: ${(props) => props.theme.borderRadius["2xl"]};
    box-shadow: ${(props) => props.theme.colors.shadow};
    overflow: hidden;
`;

const Header = styled.div`
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.lg};
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius["2xl"]} ${props => props.theme.borderRadius["2xl"]} 0 0;
    border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const CloseButton = styled(motion.button)`
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
    }
`;

const HeaderTitle = styled.h1`
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: 600;
    color: ${props => props.theme.colors.text};
    margin: 0;
    font-family: ${props => props.theme.fonts.display};
`;

const ExerciseSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
    background: ${props => props.theme.colors.background};
`;

const ExerciseImageContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${props => props.theme.spacing.xl};
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius["2xl"]};
    padding: ${props => props.theme.spacing["2xl"]};
    box-shadow: ${props => props.theme.colors.shadow};
    border: 1px solid ${props => props.theme.colors.border};
    position: relative;
    overflow: hidden;
    min-height: 300px;

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

const ExerciseImage = styled.div`
    width: 220px;
    height: 280px;
    background: ${props => props.theme.colors.backgroundDark};
    border-radius: ${props => props.theme.borderRadius["2xl"]};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.textLight};
    font-size: ${props => props.theme.fontSizes.base};
    position: relative;
    overflow: hidden;
    box-shadow: ${props => props.theme.colors.shadow};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: ${props => props.theme.borderRadius["2xl"]};
    }
`;

const PrepareScreen = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
`;

const PrepareTitle = styled.h2`
    font-size: ${props => props.theme.fontSizes["4xl"]};
    font-weight: 700;
    background: ${props => props.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 ${props => props.theme.spacing.lg} 0;
    font-family: ${props => props.theme.fonts.display};
    letter-spacing: -0.02em;
`;

const PrepareSubtitle = styled.p`
    color: ${props => props.theme.colors.textLight};
    font-size: ${props => props.theme.fontSizes.lg};
    margin: 0 0 ${props => props.theme.spacing.xl} 0;
`;

const SoundIcon = styled(motion.div)`
    width: 80px;
    height: 80px;
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.fontSizes["2xl"]};
    color: ${props => props.theme.colors.primarySolid};
    box-shadow: ${props => props.theme.colors.shadowHover};
`;

const Footer = styled.div`
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
    background: ${props => props.theme.colors.surface};
    border-radius: 0 0 ${props => props.theme.borderRadius["2xl"]} ${props => props.theme.borderRadius["2xl"]};
    border-top: 1px solid ${props => props.theme.colors.border};
`;

const ExerciseInfo = styled.div`
    margin-bottom: ${props => props.theme.spacing.xl};
    text-align: center;
`;

const ExerciseName = styled.h3`
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: 600;
    color: ${props => props.theme.colors.text};
    margin: 0 0 ${props => props.theme.spacing.sm} 0;
    font-family: ${props => props.theme.fonts.display};
`;

const ExerciseProgress = styled.div`
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${props => props.theme.borderRadius.full};
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
    display: inline-block;
    font-size: ${props => props.theme.fontSizes.sm};
    font-weight: 500;
    color: ${props => props.theme.colors.textLight};
`;

const TimerSection = styled.div`
    text-align: center;
    margin-bottom: ${props => props.theme.spacing.xl};
`;

const TimerDisplay = styled.div`
    font-size: ${props => props.theme.fontSizes["5xl"]};
    font-weight: 300;
    font-family: 'Courier New', monospace;
    margin-bottom: ${props => props.theme.spacing.lg};
    background: ${props => props.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: ${props => props.theme.colors.primary};
        border-radius: ${props => props.theme.borderRadius.full};
    }
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${props => props.theme.spacing.xl};
    padding: ${props => props.theme.spacing.xl} 0;
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${props => props.theme.borderRadius["2xl"]};
    box-shadow: ${props => props.theme.colors.shadow};
`;

const ControlButton = styled(motion.button)`
    width: 56px;
    height: 56px;
    border: none;
    border-radius: 50%;
    background: ${props => 
        props.primary 
            ? props.theme.colors.primary
            : props.theme.colors.surface
    };
    color: ${props => 
        props.primary 
            ? 'white' 
            : props.theme.colors.text
    };
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.fontSizes.lg};
    transition: ${props => props.theme.transitions.bounce};
    box-shadow: ${props => 
        props.primary 
            ? props.theme.colors.shadowHover
            : props.theme.colors.shadow
    };
    border: 2px solid ${props => 
        props.primary 
            ? 'transparent'
            : props.theme.colors.border
    };

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.95);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }
`;

const PlayButton = styled(ControlButton)`
    width: 72px;
    height: 72px;
    font-size: ${props => props.theme.fontSizes.xl};
`;

const NextButton = styled(motion.button)`
    width: 100%;
    background: ${props => props.theme.colors.primary};
    color: white;
    border: none;
    border-radius: ${props => props.theme.borderRadius.xl};
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
    font-size: ${props => props.theme.fontSizes.base};
    font-weight: 600;
    font-family: ${props => props.theme.fonts.main};
    cursor: pointer;
    margin-top: ${props => props.theme.spacing.lg};
    transition: ${props => props.theme.transitions.base};
    box-shadow: ${props => props.theme.colors.shadow};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
        );
        transition: left 0.5s;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.colors.shadowHover};

        &::before {
            left: 100%;
        }
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }
`;

const ProgressIndicator = styled(motion.div)`
    width: 100%;
    height: 6px;
    background: ${props => props.theme.colors.backgroundDark};
    border-radius: ${props => props.theme.borderRadius.full};
    overflow: hidden;
    margin-bottom: ${props => props.theme.spacing.lg};
`;

const ProgressFill = styled(motion.div)`
    height: 100%;
    background: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.borderRadius.full};
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
                <CloseButton 
                    onClick={handleBack}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    ✕
                </CloseButton>
            </Header>

            <ExerciseSection>
                <ExerciseImageContainer>
                    <AnimatePresence>
                        {preparing && (
                            <PrepareScreen
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                            >
                                <PrepareTitle>¡Prepárate ahora!</PrepareTitle>
                                <PrepareSubtitle>Prepárate para comenzar el ejercicio</PrepareSubtitle>
                                <SoundIcon
                                    animate={{ 
                                        scale: [1, 1.1, 1],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{ 
                                        duration: 2, 
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    🔊
                                </SoundIcon>
                            </PrepareScreen>
                        )}
                    </AnimatePresence>

                    {!preparing && (
                        <ExerciseImage>
                            <img src={currentExercise.image} alt={currentExercise.name} />
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

                    <TimerSection>
                        <TimerDisplay>
                            {formatTime(timeLeft)}
                        </TimerDisplay>
                    </TimerSection>

                    <Controls>
                        <ControlButton 
                            onClick={handlePrevious} 
                            disabled={currentIndex === 0}
                            whileHover={{ scale: currentIndex === 0 ? 1 : 1.1 }}
                            whileTap={{ scale: currentIndex === 0 ? 1 : 0.95 }}
                        >
                            ⏮
                        </ControlButton>
                        <PlayButton 
                            primary 
                            onClick={handlePlayPause}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isRunning ? "⏸" : "▶"}
                        </PlayButton>
                        <ControlButton 
                            onClick={handleNext} 
                            disabled={currentIndex === 0 && !isRunning}
                            whileHover={{ scale: (currentIndex === 0 && !isRunning) ? 1 : 1.1 }}
                            whileTap={{ scale: (currentIndex === 0 && !isRunning) ? 1 : 0.95 }}
                        >
                            ⏭
                        </ControlButton>
                    </Controls>

                                    <AnimatePresence>
                    {isCompleted && (
                        <NextButton 
                            onClick={handleNext}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {currentIndex + 1 < totalExercises ? "Siguiente Ejercicio" : "Finalizar Día"}
                        </NextButton>
                    )}
                </AnimatePresence>
                </Footer>
            </ExerciseSection>
        </Container>
    );
};

export default ExercisePage;
