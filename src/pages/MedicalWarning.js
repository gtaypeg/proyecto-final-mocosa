import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
    Title,
    Button,
    ModernPageContainer,
} from "../components/StyledComponents";

const CenteredContainer = styled(ModernPageContainer)`
    justify-content: center;
    align-items: center;
    padding: ${props => props.theme.spacing.lg};
`;

const ContentSection = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${props => props.theme.spacing.xl};
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius["2xl"]};
    box-shadow: ${props => props.theme.colors.shadow};
    border: 1px solid ${props => props.theme.colors.border};
    position: relative;
    overflow: hidden;
    max-width: 600px;
    width: 95%;
    text-align: center;

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

const StepTitle = styled(Title)`
    font-size: ${props => props.theme.fontSizes["3xl"]};
    font-weight: 900;
    margin-bottom: ${props => props.theme.spacing.xl};
    position: relative;
    z-index: 1;
    background: linear-gradient(135deg, #ff6b6b, #ffa726);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: ${props => props.theme.fonts.heading};
`;

const WarningCard = styled(motion.div)`
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 107, 107, 0.3);
    border-radius: ${props => props.theme.borderRadius.xl};
    padding: ${props => props.theme.spacing.xl};
    margin: ${props => props.theme.spacing.lg} 0;
    position: relative;
    z-index: 1;
    box-shadow: 0 8px 32px rgba(255, 107, 107, 0.1);

    .warning-icon {
        font-size: ${props => props.theme.fontSizes["4xl"]};
        margin-bottom: ${props => props.theme.spacing.lg};
        display: block;
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;

const WarningText = styled.p`
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.lg};
    line-height: 1.8;
    margin-bottom: ${props => props.theme.spacing.lg};
    font-weight: 500;
    text-align: left;
    text-align: center;
    
    strong {
        color: #ff6b6b;
        font-weight: 700;
    }
    
    em {
        font-style: italic;
        color: ${props => props.theme.colors.textLight};
    }
`;

const NextButton = styled(Button)`
    font-size: ${props => props.theme.fontSizes.lg};
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing["2xl"]};
    position: relative;
    z-index: 1;
    overflow: hidden;
    margin-top: ${props => props.theme.spacing.lg};
    min-width: 200px;
    background: linear-gradient(135deg, #4CAF50, #45a049);

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

    &::after {
        content: '→';
        position: absolute;
        right: ${props => props.theme.spacing.lg};
        top: 50%;
        transform: translateY(-50%);
        font-size: ${props => props.theme.fontSizes.lg};
        opacity: 0;
        transition: all ${props => props.theme.transitions.base};
    }

    &:hover::after {
        opacity: 1;
        transform: translateY(-50%) translateX(5px);
    }
`;

const BackgroundDecoration = styled(motion.div)`
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: ${props => props.theme.borderRadius.full};
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 167, 38, 0.1));
    top: -150px;
    right: -150px;
    z-index: 0;
`;

const MedicalWarning = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/height");
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
        <CenteredContainer>
            <BackgroundDecoration
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
            >
                <ContentSection variants={itemVariants}>
                    <motion.div variants={itemVariants}>
                        <StepTitle>Advertencia Médica</StepTitle>
                    </motion.div>

                    <WarningCard
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <WarningText>
                            <strong>Advertencia:</strong> Se le advierte que nunca se deben descontinuar o alterar las dosis de sus 
                            medicamentos recetados, ni cambiar su régimen nutricional, ni utilizar suplementos 
                            naturales, sin que antes haya consultado con su médico.
                        </WarningText>
                    </WarningCard>

                    <NextButton 
                        onClick={handleNext}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Entendido
                    </NextButton>
                </ContentSection>
            </motion.div>
        </CenteredContainer>
    );
};

export default MedicalWarning; 