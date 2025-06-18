import React, { useState } from "react";
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
    max-width: 500px;
    width: 90%;
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

const StepNumber = styled(motion.div)`
    position: absolute;
    font-size: 12rem;
    font-weight: 900;
    background: ${props => props.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    opacity: 0.08;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: ${props => props.theme.fonts.heading};
`;

const StepTitle = styled(Title)`
    font-size: ${props => props.theme.fontSizes["4xl"]};
    font-weight: 900;
    margin-bottom: ${props => props.theme.spacing.xl};
    position: relative;
    z-index: 1;
    background: ${props => props.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: ${props => props.theme.fonts.heading};
`;

const ObjectiveCard = styled(motion.div)`
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${props => props.theme.borderRadius.xl};
    padding: ${props => props.theme.spacing.xl};
    margin: ${props => props.theme.spacing.lg} 0;
    position: relative;
    z-index: 1;
    box-shadow: ${props => props.theme.colors.shadow};

    h3 {
        color: ${props => props.theme.colors.text};
        font-size: ${props => props.theme.fontSizes.xl};
        font-weight: 600;
        margin-bottom: ${props => props.theme.spacing.md};
        font-family: ${props => props.theme.fonts.heading};
    }

    p {
        color: ${props => props.theme.colors.textLight};
        font-size: ${props => props.theme.fontSizes.md};
        line-height: 1.6;
        margin-bottom: ${props => props.theme.spacing.md};
    }

    .emoji {
        font-size: ${props => props.theme.fontSizes["2xl"]};
        margin-bottom: ${props => props.theme.spacing.sm};
        display: block;
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
    background: ${props => props.theme.colors.primarySolid}10;
    top: -150px;
    right: -150px;
    z-index: 0;
`;

const GoalSelection = () => {
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
                    <StepNumber
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        1
                    </StepNumber>
                    
                    <motion.div variants={itemVariants}>
                        <StepTitle>Tu Objetivo</StepTitle>
                    </motion.div>

                    <ObjectiveCard
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <span className="emoji">🎯</span>
                        <h3>Comenzar tu transformación</h3>
                        <p>
                            Vamos a crear un plan personalizado basado en tus características y objetivos específicos. 
                            Cada paso nos acerca más a diseñar la rutina perfecta para ti.
                        </p>
                    </ObjectiveCard>

                    <motion.div variants={itemVariants}>
                        <NextButton 
                            onClick={handleNext}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Comenzar
                        </NextButton>
                    </motion.div>
                </ContentSection>
            </motion.div>
        </CenteredContainer>
    );
};

export default GoalSelection;
