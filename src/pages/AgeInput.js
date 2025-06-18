import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  Title, 
  Button, 
  Subtitle,
  ModernPageContainer
} from '../components/StyledComponents';

const HeaderSection = styled.div`
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg} 0;
    text-align: center;
`;

const AgeSection = styled(motion.div)`
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

const AgeDisplay = styled(motion.div)`
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

    .unit {
        font-size: ${props => props.theme.fontSizes.xl};
        color: ${props => props.theme.colors.textLight};
        font-weight: 500;
        margin-left: ${props => props.theme.spacing.sm};
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

const PersonVisualization = styled(motion.div)`
    margin-top: ${props => props.theme.spacing.xl};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props => props.theme.spacing.md};
`;

const PersonIcon = styled(motion.div)`
    width: 80px;
    height: 80px;
    background: linear-gradient(
        135deg,
        ${props => props.theme.colors.primarySolid}20 0%,
        ${props => props.theme.colors.primarySolid}10 100%
    );
    border: 3px solid ${props => props.theme.colors.primarySolid};
    border-radius: ${props => props.theme.borderRadius.full};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-shadow: ${props => props.theme.colors.shadow};

    .emoji {
        font-size: 2rem;
        position: relative;
        z-index: 1;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${props => props.theme.colors.primary};
        opacity: 0.1;
        border-radius: inherit;
    }
`;

const AgeLabel = styled.div`
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

const AgeInput = () => {
    const navigate = useNavigate();
    const [selectedAge, setSelectedAge] = useState(25);
    const [offset, setOffset] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const [startOffset, setStartOffset] = useState(0);
    const [velocity, setVelocity] = useState(0);
    const [lastMoveTime, setLastMoveTime] = useState(0);
    const [lastMoveY, setLastMoveY] = useState(0);

    const wheelRef = useRef(null);

    // Generate ages from 13 to 100
    const ageOptions = Array.from({ length: 88 }, (_, i) => i + 13);
    const itemHeight = 50;

    const getAgeFromOffset = useCallback((currentOffset) => {
        const index = Math.round(-currentOffset / itemHeight);
        const clampedIndex = Math.max(0, Math.min(ageOptions.length - 1, index));
        return ageOptions[clampedIndex];
    }, [ageOptions]);

    const getOffsetFromAge = useCallback((targetAge) => {
        const index = ageOptions.indexOf(targetAge);
        return -index * itemHeight;
    }, [ageOptions]);

    const snapToNearest = useCallback(() => {
        const targetAge = getAgeFromOffset(offset);
        const targetOffset = getOffsetFromAge(targetAge);
        
        setIsAnimating(true);
        setOffset(targetOffset);
        setSelectedAge(targetAge);
        
        setTimeout(() => setIsAnimating(false), 300);
    }, [offset, getAgeFromOffset, getOffsetFromAge]);

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
        const minOffset = -(ageOptions.length - 1) * itemHeight;
        const maxOffset = 0;
        const constrainedOffset = Math.max(minOffset, Math.min(maxOffset, newOffset));
        
        setOffset(constrainedOffset);
        setSelectedAge(getAgeFromOffset(constrainedOffset));
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
            const targetAge = getAgeFromOffset(momentumOffset);
            const finalOffset = getOffsetFromAge(targetAge);
            
            setIsAnimating(true);
            setOffset(finalOffset);
            setSelectedAge(targetAge);
            setTimeout(() => setIsAnimating(false), 300);
        } else {
            snapToNearest();
        }
    };

    const handleWheel = (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 1 : -1;
        const currentIndex = ageOptions.indexOf(selectedAge);
        const newIndex = Math.max(0, Math.min(ageOptions.length - 1, currentIndex + delta));
        const newAge = ageOptions[newIndex];
        const newOffset = getOffsetFromAge(newAge);
        
        setIsAnimating(true);
        setOffset(newOffset);
        setSelectedAge(newAge);
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
        setOffset(getOffsetFromAge(selectedAge));
    }, []);

    const handleNext = () => {
        navigate('/injuries');
    };

    const getPersonEmoji = () => {
        if (selectedAge < 18) return '🧒';
        if (selectedAge < 26) return '🧑';
        if (selectedAge < 41) return '👨';
        if (selectedAge < 61) return '👨‍🦳';
        return '👴';
    };

    const getAgeDescription = () => {
        if (selectedAge < 18) return 'Adolescente';
        if (selectedAge < 26) return 'Joven adulto';
        if (selectedAge < 41) return 'Adulto';
        if (selectedAge < 61) return 'Adulto maduro';
        return 'Adulto mayor';
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.15
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
                        <Title gradient>¿Cuántos años tienes?</Title>
                        <Subtitle>Desliza en la lista para seleccionar tu edad</Subtitle>
                    </motion.div>
                </HeaderSection>

                <AgeSection variants={itemVariants}>
                    <AgeDisplay
                        key={selectedAge}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        {selectedAge}
                        <span className="unit">años</span>
                    </AgeDisplay>

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
                                {ageOptions.map((age, index) => {
                                    const currentIndex = ageOptions.indexOf(selectedAge);
                                    const isSelected = index === currentIndex;
                                    const isAdjacent = Math.abs(index - currentIndex) === 1;
                                    
                                    return (
                                        <PickerItem
                                            key={age}
                                            isSelected={isSelected}
                                            isAdjacent={isAdjacent}
                                        >
                                            {age}
                                        </PickerItem>
                                    );
                                })}
                            </PickerContent>
                        </WheelPicker>
                    </WheelPickerContainer>
                </AgeSection>

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

export default AgeInput; 