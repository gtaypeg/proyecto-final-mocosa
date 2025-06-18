import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
    Title,
    Button,
    Subtitle,
    ModernPageContainer,
} from "../components/StyledComponents";

const HeaderSection = styled.div`
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg} 0;
    text-align: center;
`;

const WeightSection = styled(motion.div)`
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

const WeightValueDisplay = styled(motion.div)`
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

const WheelPickerContainer = styled.div`
    width: 200px;
    height: 300px;
    position: relative;
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius.xl};
    border: 2px solid ${props => props.theme.colors.border};
    overflow: hidden;
    box-shadow: 
        inset 0 2px 10px rgba(0, 0, 0, 0.1),
        0 4px 20px rgba(0, 0, 0, 0.1);
`;

const WheelPicker = styled.div`
    height: 100%;
    overflow: hidden;
    position: relative;
    cursor: grab;
    user-select: none;

    &:active {
        cursor: grabbing;
    }

    /* Selection indicator */
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 50px;
        transform: translateY(-50%);
        background: ${props => props.theme.colors.primarySolid}10;
        border-top: 2px solid ${props => props.theme.colors.primarySolid};
        border-bottom: 2px solid ${props => props.theme.colors.primarySolid};
        z-index: 2;
        pointer-events: none;
    }

    /* Fade gradients */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            to bottom,
            ${props => props.theme.colors.surface} 0%,
            transparent 25%,
            transparent 75%,
            ${props => props.theme.colors.surface} 100%
        );
        pointer-events: none;
        z-index: 1;
    }
`;

const PickerContent = styled.div`
    padding: 125px 0;
    transform: translateY(${props => props.offset}px);
    transition: transform ${props => props.isAnimating ? '0.3s ease-out' : '0s'};
`;

const PickerItem = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => {
        if (props.isSelected) return props.theme.fontSizes["2xl"];
        if (props.isAdjacent) return props.theme.fontSizes.xl;
        return props.theme.fontSizes.lg;
    }};
    font-weight: ${props => props.isSelected ? 700 : (props.isAdjacent ? 600 : 400)};
    color: ${props => {
        if (props.isSelected) return props.theme.colors.primarySolid;
        if (props.isAdjacent) return props.theme.colors.text;
        return props.theme.colors.textLight;
    }};
    font-family: ${props => props.theme.fonts.display};
    opacity: ${props => {
        if (props.isSelected) return 1;
        if (props.isAdjacent) return 0.8;
        return 0.4;
    }};
    transition: all 0.2s ease;
    transform: scale(${props => props.isSelected ? 1.1 : 1});
    position: relative;
    z-index: 3;
`;

const BMIContainer = styled(motion.div)`
    margin-top: ${props => props.theme.spacing.xl};
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${props => props.theme.borderRadius.xl};
    padding: ${props => props.theme.spacing.lg};
    text-align: center;
    box-shadow: ${props => props.theme.colors.shadow};
    max-width: 300px;
    width: 100%;

    h3 {
        color: ${props => props.theme.colors.text};
        font-size: ${props => props.theme.fontSizes.lg};
        font-weight: 600;
        margin-bottom: ${props => props.theme.spacing.sm};
        background: ${props => props.theme.colors.primary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .bmi-value {
        font-size: ${props => props.theme.fontSizes["2xl"]};
        font-weight: 700;
        color: ${props => props.theme.colors.primarySolid};
        margin-bottom: ${props => props.theme.spacing.xs};
    }

    p {
        color: ${props => props.theme.colors.textLight};
        font-size: ${props => props.theme.fontSizes.sm};
        line-height: 1.5;
    }
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

const WeightInput = () => {
    const navigate = useNavigate();
    const [weight, setWeight] = useState(70.0);
    const [unit] = useState("kg");
    const [offset, setOffset] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const [startOffset, setStartOffset] = useState(0);
    const [velocity, setVelocity] = useState(0);
    const [lastMoveTime, setLastMoveTime] = useState(0);
    const [lastMoveY, setLastMoveY] = useState(0);

    const wheelRef = useRef(null);

    // Generate weight values from 30.0 to 200.0 kg in 0.5 kg increments
    const weightOptions = Array.from({ length: 341 }, (_, i) => (30.0 + i * 0.5));
    const itemHeight = 50;

    const getWeightFromOffset = useCallback((currentOffset) => {
        const index = Math.round(-currentOffset / itemHeight);
        const clampedIndex = Math.max(0, Math.min(weightOptions.length - 1, index));
        return weightOptions[clampedIndex];
    }, [weightOptions]);

    const getOffsetFromWeight = useCallback((targetWeight) => {
        const index = weightOptions.findIndex(w => Math.abs(w - targetWeight) < 0.01);
        return -index * itemHeight;
    }, [weightOptions]);

    const snapToNearest = useCallback(() => {
        const targetWeight = getWeightFromOffset(offset);
        const targetOffset = getOffsetFromWeight(targetWeight);
        
        setIsAnimating(true);
        setOffset(targetOffset);
        setWeight(targetWeight);
        
        setTimeout(() => setIsAnimating(false), 300);
    }, [offset, getWeightFromOffset, getOffsetFromWeight]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartY(e.clientY);
        setStartOffset(offset);
        setVelocity(0);
        setLastMoveTime(Date.now());
        setLastMoveY(e.clientY);
        setIsAnimating(false);
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartY(e.touches[0].clientY);
        setStartOffset(offset);
        setVelocity(0);
        setLastMoveTime(Date.now());
        setLastMoveY(e.touches[0].clientY);
        setIsAnimating(false);
    };

    const handleMove = (clientY) => {
        if (!isDragging) return;

        const currentTime = Date.now();
        const deltaY = clientY - startY;
        const newOffset = startOffset + deltaY;
        
        // Calculate velocity for momentum
        const timeDiff = currentTime - lastMoveTime;
        if (timeDiff > 0) {
            const positionDiff = clientY - lastMoveY;
            setVelocity(positionDiff / timeDiff);
        }
        
        setLastMoveTime(currentTime);
        setLastMoveY(clientY);

        // Constrain offset
        const minOffset = -(weightOptions.length - 1) * itemHeight;
        const maxOffset = 0;
        const constrainedOffset = Math.max(minOffset, Math.min(maxOffset, newOffset));
        
        setOffset(constrainedOffset);
        setWeight(getWeightFromOffset(constrainedOffset));
    };

    const handleMouseMove = (e) => {
        handleMove(e.clientY);
    };

    const handleTouchMove = (e) => {
        e.preventDefault();
        handleMove(e.touches[0].clientY);
    };

    const handleEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);
        
        // Apply momentum if velocity is significant
        if (Math.abs(velocity) > 0.5) {
            const momentumOffset = offset + velocity * 100;
            const targetWeight = getWeightFromOffset(momentumOffset);
            const finalOffset = getOffsetFromWeight(targetWeight);
            
            setIsAnimating(true);
            setOffset(finalOffset);
            setWeight(targetWeight);
            setTimeout(() => setIsAnimating(false), 300);
        } else {
            snapToNearest();
        }
    };

    const handleWheel = (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 1 : -1;
        const currentIndex = weightOptions.findIndex(w => Math.abs(w - weight) < 0.01);
        const newIndex = Math.max(0, Math.min(weightOptions.length - 1, currentIndex + delta));
        const newWeight = weightOptions[newIndex];
        const newOffset = getOffsetFromWeight(newWeight);
        
        setIsAnimating(true);
        setOffset(newOffset);
        setWeight(newWeight);
        setTimeout(() => setIsAnimating(false), 200);
    };

    useEffect(() => {
        const handleMouseUp = () => handleEnd();
        const handleMouseMoveGlobal = (e) => handleMouseMove(e);
        const handleTouchEnd = () => handleEnd();
        const handleTouchMoveGlobal = (e) => handleTouchMove(e);

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMoveGlobal);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchmove', handleTouchMoveGlobal, { passive: false });
            document.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMoveGlobal);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMoveGlobal);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

    useEffect(() => {
        // Initialize position
        setOffset(getOffsetFromWeight(weight));
    }, []);

    const handleNext = () => {
        navigate("/age");
    };

    // Calculate BMI - using placeholder height of 170cm
    const height = 1.70; // in meters
    const bmi = weight / (height * height);

    const getBMIStatus = () => {
        if (bmi < 18.5) return "Bajo peso";
        if (bmi < 25) return "Peso normal";
        if (bmi < 30) return "Sobrepeso";
        return "Obesidad";
    };

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
        <ModernPageContainer>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
            >
                <HeaderSection>
                    <motion.div variants={itemVariants}>
                        <Title gradient>¿Cuánto pesas?</Title>
                        <Subtitle>Desliza o usa la rueda para seleccionar tu peso</Subtitle>
                    </motion.div>
                </HeaderSection>

                <WeightSection variants={itemVariants}>
                    <WeightValueDisplay
                        key={weight}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        {weight.toFixed(1)}
                        <span className="unit">{unit}</span>
                    </WeightValueDisplay>

                    <WheelPickerContainer>
                        <WheelPicker
                            ref={wheelRef}
                            onMouseDown={handleMouseDown}
                            onTouchStart={handleTouchStart}
                            onWheel={handleWheel}
                        >
                            <PickerContent
                                offset={offset}
                                isAnimating={isAnimating}
                            >
                                {weightOptions.map((weightValue, index) => {
                                    const currentIndex = weightOptions.findIndex(w => Math.abs(w - weight) < 0.01);
                                    const isSelected = index === currentIndex;
                                    const isAdjacent = Math.abs(index - currentIndex) === 1;
                                    
                                    return (
                                        <PickerItem
                                            key={weightValue}
                                            isSelected={isSelected}
                                            isAdjacent={isAdjacent}
                                        >
                                            {weightValue.toFixed(1)}
                                        </PickerItem>
                                    );
                                })}
                            </PickerContent>
                        </WheelPicker>
                    </WheelPickerContainer>

                    {/* <BMIContainer
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h3>IMC Estimado</h3>
                        <div className="bmi-value">{bmi.toFixed(1)}</div>
                        <p>{getBMIStatus()} - Usa esta información como referencia</p>
                    </BMIContainer> */}
                </WeightSection>

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
        </ModernPageContainer>
    );
};

export default WeightInput;
