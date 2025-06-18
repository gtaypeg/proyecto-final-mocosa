import React, { useState } from 'react';
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
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.lg} ${props => props.theme.spacing.md};
    text-align: center;
    flex-shrink: 0;
`;

const ContentWrapper = styled(motion.div)`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: ${props => props.theme.spacing.md};
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius["2xl"]};
    margin: 0 ${props => props.theme.spacing.lg} ${props => props.theme.spacing.md};
    box-shadow: ${props => props.theme.colors.shadow};
    border: 1px solid ${props => props.theme.colors.border};
    position: relative;
    overflow: hidden;
    min-height: 0;
    height: calc(100vh - 280px); /* Fixed height to prevent page scroll */

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

const ScrollableOptionsContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow: hidden;
`;

const InjuryOptions = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 380px;
    margin: 0 auto;
    gap: ${props => props.theme.spacing.sm};
    padding: ${props => props.theme.spacing.sm} 0;
    overflow-y: auto;
    flex: 1;
    
    /* Custom scrollbar */
    &::-webkit-scrollbar {
        width: 4px;
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.primarySolid}40;
        border-radius: ${props => props.theme.borderRadius.full};
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.colors.primarySolid}60;
    }
`;

const InjuryOption = styled(motion.div)`
    display: flex;
    align-items: center;
    padding: ${props => props.theme.spacing.md};
    background: ${props => props.selected ? 
        `linear-gradient(135deg, ${props.theme.colors.primarySolid}15 0%, ${props.theme.colors.primarySolid}05 100%)` :
        props.theme.colors.glass
    };
    backdrop-filter: blur(10px);
    border: 1px solid ${props => props.selected ? 
        props.theme.colors.primarySolid : 
        'rgba(255, 255, 255, 0.2)'
    };
    border-radius: ${props => props.theme.borderRadius.lg};
    cursor: pointer;
    transition: all ${props => props.theme.transitions.base};
    position: relative;
    overflow: hidden;
    box-shadow: ${props => props.selected ? 
        `0 4px 16px ${props.theme.colors.primarySolid}20` :
        '0 2px 8px rgba(0, 0, 0, 0.05)'
    };
    flex-shrink: 0;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
        border-color: ${props => props.theme.colors.primarySolid}60;
        background: ${props => props.selected ? 
            `linear-gradient(135deg, ${props.theme.colors.primarySolid}20 0%, ${props.theme.colors.primarySolid}08 100%)` :
            'rgba(255, 255, 255, 0.8)'
        };
    }

    &:active {
        transform: translateY(0);
    }
`;

const InjuryIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: ${props => props.theme.borderRadius.lg};
    background: ${props => props.selected ? 
        props.theme.colors.primarySolid : 
        props.theme.colors.backgroundDark
    };
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${props => props.theme.spacing.md};
    font-size: 18px;
    transition: all ${props => props.theme.transitions.base};
    position: relative;
    z-index: 1;
    box-shadow: ${props => props.selected ? 
        `0 2px 8px ${props.theme.colors.primarySolid}30` :
        '0 1px 3px rgba(0, 0, 0, 0.1)'
    };

    ${props => props.selected && `
        color: white;
        transform: scale(1.05);
    `}
`;

const InjuryLabel = styled.div`
    font-size: ${props => props.theme.fontSizes.base};
    font-weight: 500;
    color: ${props => props.selected ? 
        props.theme.colors.primarySolid : 
        props.theme.colors.text
    };
    font-family: ${props => props.theme.fonts.main};
    position: relative;
    z-index: 1;
    transition: color ${props => props.theme.transitions.base};
`;

const InfoCard = styled(motion.div)`
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${props => props.theme.borderRadius.lg};
    padding: ${props => props.theme.spacing.sm};
    margin: ${props => props.theme.spacing.sm} auto 0;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    max-width: 320px;
    width: 100%;
    flex-shrink: 0;

    h3 {
        color: ${props => props.theme.colors.text};
        font-size: ${props => props.theme.fontSizes.sm};
        font-weight: 600;
        margin-bottom: ${props => props.theme.spacing.xs};
        background: ${props => props.theme.colors.primary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    p {
        color: ${props => props.theme.colors.textLight};
        font-size: ${props => props.theme.fontSizes.xs};
        line-height: 1.3;
    }
`;

const NavigationContainer = styled.div`
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
    background: ${props => props.theme.colors.surface};
    border-radius: 0 0 ${props => props.theme.borderRadius["2xl"]} ${props => props.theme.borderRadius["2xl"]};
    border-top: 1px solid ${props => props.theme.colors.border};
    flex-shrink: 0;
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

const InjuriesInput = () => {
    const navigate = useNavigate();
    const [selectedInjury, setSelectedInjury] = useState(null);
    
    const injuries = [
        { id: 'none', label: 'Ninguna molestia', icon: '✨' },
        { id: 'back', label: 'Lesión de espalda', icon: '🦴' },
        { id: 'arms', label: 'Lesión de brazos', icon: '💪' },
        { id: 'knees', label: 'Lesión de rodillas', icon: '🦵' },
        { id: 'cardio', label: 'Cardiomiopatía', icon: '❤️' },
    ];

    const handleInjurySelect = (injury) => {
        setSelectedInjury(injury);
    };

    const handleNext = () => {
        navigate('/activity');
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1
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

    const optionVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
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
                style={{ 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    minHeight: 0,
                    maxHeight: '100vh',
                    overflow: 'hidden'
                }}
            >
                <HeaderSection>
                    <motion.div variants={itemVariants}>
                        <Title gradient>¿Has experimentado alguna molestia?</Title>
                        <Subtitle>Esto nos ayuda a personalizar tus entrenamientos de forma segura</Subtitle>
                    </motion.div>
                </HeaderSection>

                <ContentWrapper variants={itemVariants}>
                    <ScrollableOptionsContainer>
                        <InjuryOptions>
                            {injuries.map((injury, index) => (
                                <InjuryOption
                                    key={injury.id}
                                    selected={selectedInjury === injury.id}
                                    onClick={() => handleInjurySelect(injury.id)}
                                    variants={optionVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <InjuryIcon selected={selectedInjury === injury.id}>
                                        {injury.icon}
                                    </InjuryIcon>
                                    <InjuryLabel selected={selectedInjury === injury.id}>
                                        {injury.label}
                                    </InjuryLabel>
                                </InjuryOption>
                            ))}
                        </InjuryOptions>
                    </ScrollableOptionsContainer>

                    <InfoCard
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <h3>💡 Información</h3>
                        <p>Esta información nos permite adaptar los ejercicios a tus necesidades específicas y garantizar tu seguridad</p>
                    </InfoCard>
                </ContentWrapper>

                <NavigationContainer>
                    <motion.div variants={itemVariants}>
                        <NextButton 
                            onClick={handleNext}
                            disabled={!selectedInjury}
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

export default InjuriesInput; 