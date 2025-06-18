import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
    Container,
    Header,
    Main,
    Title,
    Button,
    Progress,
    ProgressStep,
    BackButton,
    Subtitle,
} from "../components/StyledComponents";

const ModernContainer = styled(Container)`
    background: linear-gradient(
        135deg,
        ${props => props.theme.colors.background} 0%,
        ${props => props.theme.colors.backgroundDark} 100%
    );
    backdrop-filter: blur(20px);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const HeightSection = styled(motion.div)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius["2xl"]};
    margin: ${props => props.theme.spacing.lg};
    box-shadow: ${props => props.theme.colors.shadow};
    border: 1px solid ${props => props.theme.colors.border};
    position: relative;
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

const HeightValueDisplay = styled(motion.div)`
    font-size: ${props => props.theme.fontSizes["5xl"]};
    font-weight: 800;
    font-family: ${props => props.theme.fonts.display};
    background: ${props => props.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${props => props.theme.spacing.xl};
    letter-spacing: -0.03em;
    text-align: center;
    position: relative;
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: ${props => props.theme.spacing.sm};

    .unit {
        font-size: ${props => props.theme.fontSizes.xl};
        color: ${props => props.theme.colors.textLight};
        font-weight: 500;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: ${props => props.theme.colors.primary};
        border-radius: ${props => props.theme.borderRadius.full};
    }
`;

const RulerContainer = styled.div`
    width: 120px;
    height: 400px;
    position: relative;
    background: linear-gradient(
        135deg,
        ${props => props.theme.colors.backgroundDark} 0%,
        ${props => props.theme.colors.background} 100%
    );
    border-radius: ${props => props.theme.borderRadius["2xl"]};
    overflow: hidden;
    box-shadow: inset 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 2px solid ${props => props.theme.colors.border};
    margin: 0 auto;
`;

const MeasurementRulerWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    padding-top: 200px;
    padding-bottom: 200px;
    position: relative;
    scroll-behavior: smooth;

    /* Hide scrollbar */
    ::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;

    /* Center indicator line */
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 20px;
        right: 20px;
        height: 4px;
        background: ${props => props.theme.colors.primary};
        z-index: 10;
        transform: translateY(-50%);
        border-radius: ${props => props.theme.borderRadius.full};
        box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
    }

    /* Pointer arrow */
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 15px;
        width: 0;
        height: 0;
        border-left: 10px solid ${props => props.theme.colors.primarySolid};
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        z-index: 11;
        transform: translateY(-50%);
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    }
`;

const MeasurementRuler = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: ${props => props.theme.spacing.lg};
`;

const MeasurementRulerLine = styled.div`
    height: 2px;
    background: ${props => 
        props.major 
            ? props.theme.colors.text
            : props.theme.colors.textLighter
    };
    position: relative;
    width: ${props => props.major ? '60px' : (props.medium ? '40px' : '25px')};
    margin: 4px 0;
    transition: ${props => props.theme.transitions.fast};
    border-radius: ${props => props.theme.borderRadius.full};

    ${props => props.major && `
        background: ${props.theme.colors.primarySolid};
        height: 3px;
    `}

    span {
        position: absolute;
        left: 70px;
        font-size: ${props => props.theme.fontSizes.sm};
        top: 50%;
        transform: translateY(-50%);
        color: ${props => props.theme.colors.text};
        font-weight: 700;
        font-family: ${props => props.theme.fonts.display};
        display: ${props => props.major ? 'block' : 'none'};
        background: ${props => props.theme.colors.surface};
        padding: 4px 8px;
        border-radius: ${props => props.theme.borderRadius.md};
        box-shadow: ${props => props.theme.colors.shadow};
        border: 1px solid ${props => props.theme.colors.border};
        white-space: nowrap;
        letter-spacing: -0.02em;
    }
`;

const PersonVisualization = styled.div`
    margin-top: ${props => props.theme.spacing.xl};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props => props.theme.spacing.md};
`;

const PersonIcon = styled(motion.div)`
    width: 80px;
    height: ${props => Math.max(80, (props.height / 200) * 120)}px;
    background: linear-gradient(
        135deg,
        ${props => props.theme.colors.primarySolid}20 0%,
        ${props => props.theme.colors.primarySolid}10 100%
    );
    border: 3px solid ${props => props.theme.colors.primarySolid};
    border-radius: ${props => props.theme.borderRadius.xl};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-shadow: ${props => props.theme.colors.shadow};

    &::before {
        content: '👤';
        font-size: 32px;
        position: absolute;
        bottom: 8px;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: ${props => props.theme.colors.primary};
        border-radius: ${props => props.theme.borderRadius.full};
    }
`;

const HeightLabel = styled.div`
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${props => props.theme.borderRadius.lg};
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.sm};
    font-weight: 600;
    text-align: center;
`;

const NavigationContainer = styled.div`
    padding: ${props => props.theme.spacing.lg};
    background: ${props => props.theme.colors.surface};
    border-radius: 0 0 ${props => props.theme.borderRadius["2xl"]} ${props => props.theme.borderRadius["2xl"]};
    border-top: 1px solid ${props => props.theme.colors.border};
`;

const NextButton = styled(Button)`
    width: 100%;
    font-size: ${props => props.theme.fontSizes.lg};
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
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

    &:hover::before {
        left: 100%;
    }
`;

const HeaderSection = styled.div`
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg} 0;
    text-align: center;
`;

const HeightInput = () => {
    const navigate = useNavigate();
    const [height, setHeight] = useState(170);
    const [unit] = useState("cm");

    const measurementRulerRef = useRef(null);

    const handleNext = () => {
        navigate("/weight");
    };

    useEffect(() => {
        const targetElement = measurementRulerRef.current;
        if (!targetElement) return;

        const children = targetElement.querySelectorAll(".line");
        let currentHeightElement = null;

        const setValueOnScroll = (e) => {
            const scroll = e.target.scrollTop + 200;
            const closestChild = [...children].reduce((prev, curr) => {
                return Math.abs(curr.offsetTop - scroll) < Math.abs(prev.offsetTop - scroll) ? curr : prev;
            }, children[0]);

            const newHeight = parseInt(closestChild.getAttribute("data-value"));
            setHeight(newHeight);
            currentHeightElement = closestChild;
        };

        const handleScrollEnd = () => {
            if (currentHeightElement) {
                targetElement.scrollTo({
                    top: currentHeightElement.offsetTop - 200,
                    behavior: 'smooth'
                });
            }
        };

        targetElement.addEventListener("scroll", setValueOnScroll);
        targetElement.addEventListener("scrollend", handleScrollEnd);

        // Initialize scroll position
        setTimeout(() => {
            const initialElement = targetElement.querySelector(`[data-value="${height}"]`);
            if (initialElement) {
                targetElement.scrollTo({
                    top: initialElement.offsetTop - 200,
                    behavior: 'smooth'
                });
            }
        }, 100);

        return () => {
            targetElement.removeEventListener("scroll", setValueOnScroll);
            targetElement.removeEventListener("scrollend", handleScrollEnd);
        };
    }, [height]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <ModernContainer>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
            >
                <HeaderSection>
                    <motion.div variants={itemVariants}>
                        <Title gradient>¿Cuál es tu altura?</Title>
                        <Subtitle>Desliza en la regla para ajustar tu altura</Subtitle>
                    </motion.div>
                </HeaderSection>

                <HeightSection variants={itemVariants}>
                    <HeightValueDisplay
                        key={height}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        {height}
                        <span className="unit">{unit}</span>
                    </HeightValueDisplay>

                    <RulerContainer>
                        <MeasurementRulerWrapper ref={measurementRulerRef}>
                            <MeasurementRuler>
                                {Array.from({ length: 130 }).map((_, i) => {
                                    const value = 230 - i;
                                    if (value < 100) return null;

                                    const isMajor = value % 10 === 0;
                                    const isMedium = value % 5 === 0;

                                    return (
                                        <MeasurementRulerLine 
                                            className="line" 
                                            key={i} 
                                            data-value={value}
                                            major={isMajor}
                                            medium={isMedium}
                                        >
                                            {isMajor && <span>{value}</span>}
                                        </MeasurementRulerLine>
                                    );
                                })}
                            </MeasurementRuler>
                        </MeasurementRulerWrapper>
                    </RulerContainer>

                    <PersonVisualization>
                        <PersonIcon 
                            height={height}
                            animate={{ 
                                scale: [1, 1.02, 1],
                                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />
                        <HeightLabel>Tu altura: {height} {unit}</HeightLabel>
                    </PersonVisualization>
                </HeightSection>

                <NavigationContainer>
                    <motion.div variants={itemVariants}>
                        <NextButton 
                            onClick={handleNext}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Continuar
                        </NextButton>
                    </motion.div>
                </NavigationContainer>
            </motion.div>
        </ModernContainer>
    );
};

export default HeightInput;
