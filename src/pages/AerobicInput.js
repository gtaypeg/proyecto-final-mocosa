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
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg} 0;
    text-align: center;
`;

const ContentSection = styled(motion.div)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const AerobicVisual = styled(motion.div)`
    margin: ${props => props.theme.spacing.xl} 0;
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(20px);
    border-radius: ${props => props.theme.borderRadius.xl};
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: ${props => props.theme.colors.shadow};
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            135deg,
            ${props => props.theme.colors.primarySolid}10 0%,
            transparent 50%,
            ${props => props.theme.colors.primarySolid}05 100%
        );
    }
`;

const AerobicImage = styled(motion.img)`
    width: 12rem;
    height: 12rem;
    object-fit: cover;
    border-radius: ${props => props.theme.borderRadius.xl};
    position: relative;
    z-index: 1;
    box-shadow: ${props => props.theme.colors.shadow};
    border: 2px solid rgba(255, 255, 255, 0.2);
`;

const StatusCard = styled(motion.div)`
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${props => props.theme.borderRadius.xl};
    padding: ${props => props.theme.spacing.lg};
    text-align: center;
    box-shadow: ${props => props.theme.colors.shadow};
    max-width: 400px;
    margin: ${props => props.theme.spacing.lg} 0;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${props => {
            const level = props.level;
            if (level === 'high') return `linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, transparent 100%)`;
            if (level === 'medium') return `linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, transparent 100%)`;
            return `linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, transparent 100%)`;
        }};
    }
`;

const AerobicStatusText = styled.div`
    font-size: ${props => props.theme.fontSizes["2xl"]};
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.heading};
    background: ${props => {
        const level = props.level;
        if (level === 'high') return 'linear-gradient(135deg, #22c55e, #16a34a)';
        if (level === 'medium') return 'linear-gradient(135deg, #f59e0b, #d97706)';
        return 'linear-gradient(135deg, #ef4444, #dc2626)';
    }};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${props => props.theme.spacing.sm};
    position: relative;
    z-index: 1;
`;

const AerobicMessage = styled.div`
    font-size: ${props => props.theme.fontSizes.md};
    color: ${props => props.theme.colors.textLight};
    line-height: 1.5;
    position: relative;
    z-index: 1;
`;

const SliderSection = styled(motion.div)`
    width: 100%;
    max-width: 400px;
    padding: ${props => props.theme.spacing.xl};
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(20px);
    border-radius: ${props => props.theme.borderRadius.xl};
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: ${props => props.theme.colors.shadow};
    margin-bottom: ${props => props.theme.spacing.xl};
`;

const SliderContainer = styled.div`
    width: 100%;
    position: relative;
    margin: ${props => props.theme.spacing.lg} 0;
`;

const SliderTrack = styled.div`
    width: 100%;
    height: 8px;
    background: ${props => props.theme.colors.backgroundDark};
    border-radius: ${props => props.theme.borderRadius.full};
    position: relative;
    overflow: hidden;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SliderFill = styled(motion.div)`
    height: 100%;
    background: ${props => {
        const level = props.level;
        if (level === 'high') return 'linear-gradient(90deg, #22c55e, #16a34a)';
        if (level === 'medium') return 'linear-gradient(90deg, #f59e0b, #d97706)';
        return 'linear-gradient(90deg, #ef4444, #dc2626)';
    }};
    border-radius: ${props => props.theme.borderRadius.full};
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        border-radius: ${props => props.theme.borderRadius.full};
        animation: shimmer 2s infinite;
    }

    @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
`;

const SliderThumb = styled(motion.div)`
    width: 24px;
    height: 24px;
    background: white;
    border: 3px solid ${props => {
        const level = props.level;
        if (level === 'high') return '#22c55e';
        if (level === 'medium') return '#f59e0b';
        return '#ef4444';
    }};
    border-radius: ${props => props.theme.borderRadius.full};
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    box-shadow: ${props => props.theme.colors.shadow};
    z-index: 10;

    &::before {
        content: '';
        position: absolute;
        inset: -8px;
        border-radius: ${props => props.theme.borderRadius.full};
        background: ${props => {
            const level = props.level;
            if (level === 'high') return 'rgba(34, 197, 94, 0.2)';
            if (level === 'medium') return 'rgba(251, 191, 36, 0.2)';
            return 'rgba(239, 68, 68, 0.2)';
        }};
        opacity: 0;
        transition: opacity ${props => props.theme.transitions.base};
    }

    &:hover::before {
        opacity: 1;
    }
`;

const HiddenSlider = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
    
    -webkit-appearance: none;
    appearance: none;
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
    
    &::-moz-range-thumb {
        width: 24px;
        height: 24px;
        cursor: pointer;
        border: none;
        background: transparent;
    }
`;

const AerobicLabels = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: ${props => props.theme.spacing.md};
`;

const AerobicLabel = styled.span`
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors.textLight};
    font-weight: 500;
`;

const NavigationContainer = styled.div`
    padding: ${props => props.theme.spacing.lg};
    background: ${props => props.theme.colors.surface};
    border-radius: 0 0 ${props => props.theme.borderRadius["2xl"]} ${props => props.theme.borderRadius["2xl"]};
    border-top: 1px solid ${props => props.theme.colors.border};
`;

const FinishButton = styled(Button)`
    width: 100%;
    font-size: ${props => props.theme.fontSizes.lg};
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
    position: relative;
    overflow: hidden;
    background: ${props => props.theme.colors.primary};
    
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
            rgba(255, 255, 255, 0.3),
            transparent
        );
        transition: left 0.5s;
    }

    &:hover::before {
        left: 100%;
    }

    &::after {
        content: '🎉';
        position: absolute;
        right: ${props => props.theme.spacing.lg};
        top: 50%;
        transform: translateY(-50%);
        font-size: ${props => props.theme.fontSizes.lg};
        opacity: 0;
        transition: opacity ${props => props.theme.transitions.base};
    }

    &:hover::after {
        opacity: 1;
    }
`;


const AerobicInput = () => {
    const navigate = useNavigate();
    const [aerobicLevel, setAerobicLevel] = useState(30);

    const handleAerobicChange = (e) => {
        setAerobicLevel(parseInt(e.target.value));
    };

    const getAerobicLevel = () => {
        if (aerobicLevel < 30) return 'low';
        if (aerobicLevel < 70) return 'medium';
        return 'high';
    };

    const getAerobicStatus = () => {
        if (aerobicLevel < 30) return 'Sin aliento';
        if (aerobicLevel < 70) return 'Un poco cansado pero bien';
        return 'Con facilidad, habla normalmente';
    };

    const getAerobicImage = () => {
        if (aerobicLevel < 30) return '/aerobico/sin-aliento.png';
        if (aerobicLevel < 70) return '/aerobico/cansado-pero-bien.png';
        return '/aerobico/facilidad.png';
    };

    const aerobicDescription = () => {
        if (aerobicLevel < 30) return '¡Entendido! Nuestros entrenamientos personalizados aumentarán gradualmente tu resistencia.';
        if (aerobicLevel < 70) return '¡Buen trabajo! Te ayudaremos a seguir progresando y a volverte más fuerte.';
        return '¡Genial! Tenemos más desafíos esperándote.';
    };

    const handleFinish = () => {
        navigate('/discover');
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
                        <Title gradient>Tu nivel aeróbico</Title>
                        <Subtitle>¿Cómo te encuentras después de subir 5 pisos?</Subtitle>
                    </motion.div>
                </HeaderSection>

                <ContentSection variants={itemVariants}>
                    <AerobicVisual
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <AerobicImage 
                            src={getAerobicImage()} 
                            alt="Aerobic"
                            key={getAerobicLevel()}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                        />
                    </AerobicVisual>

                    <StatusCard
                        level={getAerobicLevel()}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <AerobicStatusText
                            level={getAerobicLevel()}
                            key={getAerobicStatus()}
                        >
                            {getAerobicStatus()}
                        </AerobicStatusText>
                        <AerobicMessage
                            key={aerobicDescription()}
                        >
                            {aerobicDescription()}
                        </AerobicMessage>
                    </StatusCard>

                    <SliderSection
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <SliderContainer>
                            <SliderTrack>
                                <SliderFill 
                                    level={getAerobicLevel()}
                                    style={{ width: `${aerobicLevel}%` }}
                                    layout
                                />
                                <SliderThumb 
                                    level={getAerobicLevel()}
                                    style={{ left: `${aerobicLevel}%` }}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                                <HiddenSlider 
                                    type="range"
                                    min={0}
                                    max={100}
                                    value={aerobicLevel}
                                    onChange={handleAerobicChange}
                                />
                            </SliderTrack>
                            
                            <AerobicLabels>
                                <AerobicLabel>Muy difícil</AerobicLabel>
                                <AerobicLabel>Calmado</AerobicLabel>
                            </AerobicLabels>
                        </SliderContainer>
                    </SliderSection>
                </ContentSection>

                <NavigationContainer>
                    <motion.div variants={itemVariants}>
                        <FinishButton 
                            onClick={handleFinish}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Finalizar
                        </FinishButton>
                    </motion.div>
                </NavigationContainer>
            </motion.div>
        </ModernPageContainer>
    );
};

export default AerobicInput;