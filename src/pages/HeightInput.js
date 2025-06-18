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

const HeightInput = () => {
    const navigate = useNavigate();
    const [height, setHeight] = useState(170);
    const [unit] = useState("cm");
    const [offset, setOffset] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const [startOffset, setStartOffset] = useState(0);
    const [velocity, setVelocity] = useState(0);
    const [lastMoveTime, setLastMoveTime] = useState(0);
    const [lastMoveY, setLastMoveY] = useState(0);

    const wheelRef = useRef(null);
    const animationRef = useRef(null);

    // Generate height values from 100 to 230 cm
    const heights = Array.from({ length: 131 }, (_, i) => i + 100);
    const itemHeight = 50;

    const getHeightFromOffset = useCallback((currentOffset) => {
        const index = Math.round(-currentOffset / itemHeight);
        const clampedIndex = Math.max(0, Math.min(heights.length - 1, index));
        return heights[clampedIndex];
    }, [heights]);

    const getOffsetFromHeight = useCallback((targetHeight) => {
        const index = heights.indexOf(targetHeight);
        return -index * itemHeight;
    }, [heights]);

    const snapToNearest = useCallback(() => {
        const targetHeight = getHeightFromOffset(offset);
        const targetOffset = getOffsetFromHeight(targetHeight);
        
        setIsAnimating(true);
        setOffset(targetOffset);
        setHeight(targetHeight);
        
        setTimeout(() => setIsAnimating(false), 300);
    }, [offset, getHeightFromOffset, getOffsetFromHeight]);

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
        const minOffset = -(heights.length - 1) * itemHeight;
        const maxOffset = 0;
        const constrainedOffset = Math.max(minOffset, Math.min(maxOffset, newOffset));
        
        setOffset(constrainedOffset);
        setHeight(getHeightFromOffset(constrainedOffset));
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
            const momentumOffset = offset + velocity * 100; // Adjust multiplier for momentum strength
            const targetHeight = getHeightFromOffset(momentumOffset);
            const finalOffset = getOffsetFromHeight(targetHeight);
            
            setIsAnimating(true);
            setOffset(finalOffset);
            setHeight(targetHeight);
            setTimeout(() => setIsAnimating(false), 300);
        } else {
            snapToNearest();
        }
    };

    const handleWheel = (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 1 : -1;
        const currentIndex = heights.indexOf(height);
        const newIndex = Math.max(0, Math.min(heights.length - 1, currentIndex + delta));
        const newHeight = heights[newIndex];
        const newOffset = getOffsetFromHeight(newHeight);
        
        setIsAnimating(true);
        setOffset(newOffset);
        setHeight(newHeight);
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
        setOffset(getOffsetFromHeight(height));
    }, []);

    const handleNext = () => {
        navigate("/weight");
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
                        <Title gradient>¿Cuál es tu altura?</Title>
                        <Subtitle>Desliza o usa la rueda para seleccionar tu altura</Subtitle>
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
                                {heights.map((value, index) => {
                                    const currentIndex = heights.indexOf(height);
                                    const isSelected = index === currentIndex;
                                    const isAdjacent = Math.abs(index - currentIndex) === 1;
                                    
                                    return (
                                        <PickerItem
                                            key={value}
                                            isSelected={isSelected}
                                            isAdjacent={isAdjacent}
                                        >
                                            {value}
                                        </PickerItem>
                                    );
                                })}
                            </PickerContent>
                        </WheelPicker>
                    </WheelPickerContainer>
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
        </ModernPageContainer>
    );
};

export default HeightInput;
