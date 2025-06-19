import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Title, Button, Subtitle, ModernPageContainer } from "../components/StyledComponents";

const HeaderSection = styled.div`
    padding: ${(props) => props.theme.spacing.xl} ${(props) => props.theme.spacing.lg} 0;
    text-align: center;
`;

const ContentSection = styled(motion.div)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${(props) => props.theme.spacing.xl} ${(props) => props.theme.spacing.lg};
    background: ${(props) => props.theme.colors.surface};
    border-radius: ${(props) => props.theme.borderRadius["2xl"]};
    margin: ${(props) => props.theme.spacing.lg};
    box-shadow: ${(props) => props.theme.colors.shadow};
    border: 1px solid ${(props) => props.theme.colors.border};
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    }
`;

const ActivityVisual = styled(motion.div)`
    margin: 0 0 auto 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const ActivityFigure = styled(motion.div)`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 70px;
    border-radius: ${(props) => props.theme.borderRadius.full};
    background: ${(props) => props.theme.colors.primarySolid}15;
    backdrop-filter: blur(10px);
    border: 3px solid ${(props) => props.theme.colors.primarySolid}30;
    margin-bottom: ${(props) => props.theme.spacing.md};
    position: relative;

    &::after {
        content: ${(props) => {
            switch (props.level) {
                case "sedentary":
                    return '"🛋️"';
                case "light":
                    return '"🚶‍♀️"';
                case "moderate":
                    return '"🏃‍♀️"';
                case "very_active":
                    return '"💪"';
                default:
                    return '"👤"';
            }
        }};
    }
`;

const ActivityStatusText = styled(motion.div)`
    font-size: ${(props) => props.theme.fontSizes["2xl"]};
    font-weight: 700;
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.heading};
    background: ${(props) => props.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${(props) => props.theme.spacing.sm};
`;

const ActivityDescription = styled(motion.div)`
    font-size: ${(props) => props.theme.fontSizes.md};
    color: ${(props) => props.theme.colors.textLight};
    text-align: center;
    max-width: 380px;
    line-height: 1.6;
    margin-bottom: ${(props) => props.theme.spacing.xl};
`;

const SliderSection = styled(motion.div)`
    width: 100%;
    max-width: 450px;
    padding: 0 ${(props) => props.theme.spacing.xl} 35px;
`;

const CustomSliderContainer = styled.div`
    width: 100%;

    .rc-slider {
        background-color: transparent;
        border-radius: 6px;
        position: relative;
        height: 12px;
        padding: 5px 0;
        width: 100%;
        border-radius: 6px;
        touch-action: none;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .rc-slider * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .rc-slider-rail {
        position: absolute;
        width: 100%;
        background: ${(props) => props.theme.colors.backgroundDark};
        height: 12px;
        border-radius: 6px;
        box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.15);
    }

    .rc-slider-track {
        position: absolute;
        left: 0;
        height: 12px;
        border-radius: 6px;
        background: ${(props) => props.theme.colors.primary};
        z-index: 1;
        box-shadow: 0 2px 8px ${(props) => props.theme.colors.primarySolid}40;
    }

    .rc-slider-handle {
        position: absolute;
        width: 28px;
        height: 28px;
        cursor: pointer;
        cursor: -webkit-grab;
        margin-top: -8px;
        border-radius: 50%;
        border: 4px solid ${(props) => props.theme.colors.primarySolid};
        background: white;
        touch-action: pan-x;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 0 ${(props) => props.theme.colors.primarySolid}00;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 2;
    }

    .rc-slider-handle:hover {
        border-color: ${(props) => props.theme.colors.primarySolid};
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25), 0 0 0 8px ${(props) => props.theme.colors.primarySolid}20;
    }

    .rc-slider-handle:active {
        border-color: ${(props) => props.theme.colors.primarySolid};
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25), 0 0 0 12px ${(props) => props.theme.colors.primarySolid}30;
        cursor: -webkit-grabbing;
        transform: scale(1.15);
    }

    .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
        border-color: ${(props) => props.theme.colors.primarySolid};
        box-shadow: 0 0 0 5px ${(props) => props.theme.colors.primarySolid}30;
    }

    .rc-slider-mark {
        position: absolute;
        top: 22px;
        left: 0;
        width: 100%;
        font-size: 12px;
    }

    .rc-slider-mark-text {
        position: absolute;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        cursor: pointer;
        color: ${(props) => props.theme.colors.textLight};
        font-weight: 600;
        font-size: ${(props) => props.theme.fontSizes.sm};
        transform: translateX(-50%);
        white-space: nowrap;
        user-select: none;
    }

    .rc-slider-mark-text-active {
        color: ${(props) => props.theme.colors.primarySolid};
        font-weight: 700;
    }

    .rc-slider-step {
        display: none !important;
    }

    .rc-slider-dot {
        position: absolute;
        bottom: -6px;
        margin-left: -4px;
        width: 8px;
        height: 8px;
        border: 2px solid ${(props) => props.theme.colors.backgroundDark};
        background: ${(props) => props.theme.colors.surface};
        cursor: pointer;
        border-radius: 50%;
        vertical-align: middle;
        transition: all 0.2s ease;
    }

    .rc-slider-dot-active {
        border-color: ${(props) => props.theme.colors.primarySolid};
        background: ${(props) => props.theme.colors.primarySolid};
        transform: scale(1.2);
    }

    .rc-slider-dot-reverse {
        margin-right: -4px;
        margin-left: auto;
    }

    .rc-slider:hover .rc-slider-track {
        background: ${(props) => props.theme.colors.primary};
        box-shadow: 0 2px 12px ${(props) => props.theme.colors.primarySolid}50;
    }

    .rc-slider-tooltip-zoom-down-enter,
    .rc-slider-tooltip-zoom-down-appear {
        animation-duration: 0.3s;
        animation-fill-mode: both;
        display: block !important;
        animation-play-state: paused;
    }

    .rc-slider-tooltip-zoom-down-leave {
        animation-duration: 0.3s;
        animation-fill-mode: both;
        display: block !important;
        animation-play-state: paused;
    }

    .rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,
    .rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {
        animation-name: rcSliderTooltipZoomDownIn;
        animation-play-state: running;
    }

    .rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {
        animation-name: rcSliderTooltipZoomDownOut;
        animation-play-state: running;
    }

    .rc-slider-tooltip {
        position: absolute;
        left: -9999px;
        top: -9999px;
        visibility: visible;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .rc-slider-tooltip-hidden {
        display: none;
    }

    .rc-slider-tooltip-placement-top {
        padding: 4px 0 8px 0;
    }

    .rc-slider-tooltip-inner {
        padding: 6px 10px;
        min-width: 24px;
        height: 24px;
        font-size: 12px;
        line-height: 1;
        color: #fff;
        text-align: center;
        text-decoration: none;
        background: ${(props) => props.theme.colors.primarySolid};
        border-radius: 6px;
        box-shadow: 0 0 4px #d9d9d9;
        white-space: nowrap;
    }

    .rc-slider-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
        bottom: 4px;
        left: 50%;
        margin-left: -4px;
        border-width: 4px 4px 0;
        border-top-color: ${(props) => props.theme.colors.primarySolid};
    }
`;

const ProgressIndicators = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: ${(props) => props.theme.spacing.lg};
    position: relative;
`;

const ProgressDot = styled(motion.div)`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${(props) => (props.active ? props.theme.colors.primarySolid : props.theme.colors.backgroundDark)};
    border: 2px solid ${(props) => (props.active ? props.theme.colors.primarySolid : props.theme.colors.border)};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
        box-shadow: 0 0 0 4px ${(props) => props.theme.colors.primarySolid}20;
    }
`;

const LevelLabels = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: ${(props) => props.theme.spacing.lg};
    padding: 0 ${(props) => props.theme.spacing.sm};
`;

const LevelLabel = styled(motion.span)`
    font-size: ${(props) => props.theme.fontSizes.sm};
    color: ${(props) => (props.active ? props.theme.colors.primarySolid : props.theme.colors.textLight)};
    font-weight: ${(props) => (props.active ? "700" : "500")};
    text-align: center;
    min-width: 80px;
    transition: all 0.3s ease;

    ${(props) =>
        props.active &&
        `
        transform: scale(1.05);
    `}
`;

const NavigationContainer = styled.div`
    padding: ${(props) => props.theme.spacing.lg};
    background: ${(props) => props.theme.colors.surface};
    border-radius: 0 0 ${(props) => props.theme.borderRadius["2xl"]} ${(props) => props.theme.borderRadius["2xl"]};
    border-top: 1px solid ${(props) => props.theme.colors.border};
`;

const NextButton = styled(Button)`
    width: 100%;
    font-size: ${(props) => props.theme.fontSizes.lg};
    padding: ${(props) => props.theme.spacing.lg} ${(props) => props.theme.spacing.xl};
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }

    &:hover::before {
        left: 100%;
    }
`;

const ActivityLevelInput = () => {
    const navigate = useNavigate();
    const [activityLevel, setActivityLevel] = useState(1);

    // Configuración de los niveles de actividad
    const activityLevels = [
        {
            value: 0,
            key: "sedentary",
            label: "Sedentario",
            description: "Trabajo de oficina, rara vez hago ejercicio y paso la mayor parte del tiempo sentado",
            emoji: "🛋️",
            color: "#94a3b8",
        },
        {
            value: 1,
            key: "light",
            label: "Actividad Ligera",
            description: "Ejercicio ligero 1-3 veces por semana, caminatas ocasionales para mantenerme activo",
            emoji: "🚶‍♀️",
            color: "#84cc16",
        },
        {
            value: 2,
            key: "moderate",
            label: "Moderadamente Activo",
            description: "Ejercicio moderado 3-5 veces por semana, rutinas regulares para mantener mi salud",
            emoji: "🏃‍♀️",
            color: "#f59e0b",
        },
        {
            value: 3,
            key: "very_active",
            label: "Muy Activo",
            description: "ejercicio intenso 6-7 veces por semana, entreno fuerte varias horas al día",
            emoji: "💪",
            color: "#dc2626",
        },
    ];

    const getCurrentLevel = () => {
        return activityLevels[activityLevel];
    };

    const marks = activityLevels.reduce((acc, level) => {
        acc[level.value] = {
            style: {
                color: activityLevel === level.value ? "#2d3e2d" : "#94a3b8",
                fontWeight: activityLevel === level.value ? "700" : "500",
                fontSize: "11px",
                marginTop: "10px",
            },
            label: level.label.split(" ")[0], // Solo la primera palabra
        };
        return acc;
    }, {});

    const handleSliderChange = (value) => {
        setActivityLevel(value);
    };

    const handleNext = () => {
        navigate("/flexibility");
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const currentLevel = getCurrentLevel();

    return (
        <ModernPageContainer>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
            >
                <HeaderSection>
                    <motion.div variants={itemVariants}>
                        <Title gradient>¿Cuál es tu nivel de actividad?</Title>
                        {/* <Subtitle>Esto nos ayuda a crear un plan personalizado para ti</Subtitle> */}
                    </motion.div>
                </HeaderSection>

                <ContentSection variants={itemVariants}>
                    <ActivityVisual
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <ActivityFigure
                            level={currentLevel.key}
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 2, -2, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <ActivityStatusText
                            key={currentLevel.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {currentLevel.label}
                        </ActivityStatusText>
                    </ActivityVisual>

                    <ActivityDescription
                        key={currentLevel.description}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        {currentLevel.description}
                    </ActivityDescription>

                    <SliderSection
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <CustomSliderContainer>
                            <Slider
                                min={0}
                                max={3}
                                step={1}
                                value={activityLevel}
                                onChange={handleSliderChange}
                                marks={marks}
                                included={true}
                                trackStyle={{
                                    background: "#2d3e2d",
                                    boxShadow: "0 2px 8px rgba(45, 62, 45, 0.4)",
                                }}
                                handleStyle={{
                                    background: "#2d3e2d",
                                    borderColor: "#2d3e2d",
                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 0 rgba(139, 92, 246, 0)",
                                }}
                                dotStyle={{
                                    borderColor: "#2d3e2d",
                                    background: "#2d3e2d",
                                }}
                                activeDotStyle={{
                                    borderColor: "#2d3e2d",
                                    background: "#2d3e2d",
                                }}
                            />
                        </CustomSliderContainer>
                    </SliderSection>
                </ContentSection>

                <NavigationContainer>
                    <motion.div variants={itemVariants}>
                        <NextButton onClick={handleNext} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            Continuar
                        </NextButton>
                    </motion.div>
                </NavigationContainer>
            </motion.div>
        </ModernPageContainer>
    );
};

export default ActivityLevelInput;
