import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Container, 
  Title, 
  Button, 
  Subtitle
} from '../components/StyledComponents';

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

const AgeListContainer = styled.div`
    width: 100%;
    max-width: 300px;
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

const AgeListWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    padding-top: 180px;
    padding-bottom: 180px;
    position: relative;
    scroll-behavior: smooth;

    /* Hide scrollbar */
    ::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;

    /* Center indicator */
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

const AgeList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${props => props.theme.spacing.lg};
`;

const AgeItem = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: 600;
    font-family: ${props => props.theme.fonts.display};
    color: ${props => props.theme.colors.text};
    position: relative;
    transition: all ${props => props.theme.transitions.base};
    cursor: pointer;
    margin: 2px 0;
    border-radius: ${props => props.theme.borderRadius.lg};

    /* Special styling for milestone ages */
    ${props => ([18, 21, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80].includes(props.age)) && `
        &::before {
            content: '';
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            width: 8px;
            height: 8px;
            background: ${props.theme.colors.primarySolid};
            border-radius: 50%;
            box-shadow: 0 0 10px ${props.theme.colors.primarySolid}50;
        }
        
        font-weight: 700;
        color: ${props.theme.colors.primarySolid};
    `}

    &:hover {
        background: ${props => props.theme.colors.glass};
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        transform: scale(1.05);
        color: ${props => props.theme.colors.primarySolid};
    }

    /* Fade effect for distant items */
    ${props => props.distance > 5 && `
        opacity: ${Math.max(0.3, 1 - (props.distance - 5) * 0.1)};
        transform: scale(${Math.max(0.8, 1 - (props.distance - 5) * 0.02)});
    `}
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
    const [centerAge, setCenterAge] = useState(25);
    const ageListRef = useRef(null);

    // Generate ages from 13 to 100
    const ageOptions = Array.from({ length: 88 }, (_, i) => i + 13);

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

    useEffect(() => {
        const targetElement = ageListRef.current;
        if (!targetElement) return;

        const children = targetElement.querySelectorAll(".age-item");
        let currentAgeElement = null;

        const setValueOnScroll = (e) => {
            const scroll = e.target.scrollTop + 180;
            const closestChild = [...children].reduce((prev, curr) => {
                return Math.abs(curr.offsetTop - scroll) < Math.abs(prev.offsetTop - scroll) ? curr : prev;
            }, children[0]);

            const newAge = parseInt(closestChild.getAttribute("data-age"));
            setSelectedAge(newAge);
            setCenterAge(newAge);
            currentAgeElement = closestChild;
        };

        const handleScrollEnd = () => {
            if (currentAgeElement) {
                targetElement.scrollTo({
                    top: currentAgeElement.offsetTop - 180,
                    behavior: 'smooth'
                });
            }
        };

        targetElement.addEventListener("scroll", setValueOnScroll);
        targetElement.addEventListener("scrollend", handleScrollEnd);

        // Initialize scroll position
        setTimeout(() => {
            const initialElement = targetElement.querySelector(`[data-age="${selectedAge}"]`);
            if (initialElement) {
                targetElement.scrollTo({
                    top: initialElement.offsetTop - 180,
                    behavior: 'smooth'
                });
            }
        }, 100);

        return () => {
            targetElement.removeEventListener("scroll", setValueOnScroll);
            targetElement.removeEventListener("scrollend", handleScrollEnd);
        };
    }, [selectedAge]);

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
        <ModernContainer>
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

                    <AgeListContainer>
                        <AgeListWrapper ref={ageListRef}>
                            <AgeList>
                                {ageOptions.map((age) => {
                                    const distance = Math.abs(age - centerAge);
                                    return (
                                        <AgeItem
                                            key={age}
                                            className="age-item"
                                            data-age={age}
                                            age={age}
                                            distance={distance}
                                        >
                                            {age}
                                        </AgeItem>
                                    );
                                })}
                            </AgeList>
                        </AgeListWrapper>
                    </AgeListContainer>

                    <PersonVisualization>
                        <PersonIcon
                            animate={{ 
                                scale: [1, 1.05, 1],
                                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            <span className="emoji">{getPersonEmoji()}</span>
                        </PersonIcon>
                        <AgeLabel>{getAgeDescription()}</AgeLabel>
                    </PersonVisualization>
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
        </ModernContainer>
    );
};

export default AgeInput; 