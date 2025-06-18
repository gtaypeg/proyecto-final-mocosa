import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Container, Main, Title, Button } from "../components/StyledComponents";

const WelcomeContainer = styled(Container)`
    background: url("/imagen-final.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh !important;
    min-height: 100vh;
    border-radius: 0;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            135deg,
            rgba(45, 90, 61, 0.92) 0%,
            rgba(74, 124, 89, 0.85) 30%,
            rgba(30, 61, 40, 0.90) 70%,
            rgba(45, 90, 61, 0.95) 100%
        );
        backdrop-filter: blur(2px);
        z-index: 1;
    }

    & > * {
        position: relative;
        z-index: 2;
    }
`;

const WelcomeContent = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;
    padding: ${props => props.theme.spacing["2xl"]} ${props => props.theme.spacing.lg};
`;

const LogoContainer = styled(motion.div)`
    margin-bottom: ${props => props.theme.spacing["2xl"]};
    position: relative;
`;

const AppIcon = styled.div`
    width: 120px;
    height: 120px;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: ${props => props.theme.borderRadius["2xl"]};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${props => props.theme.spacing.xl} auto;
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.15),
            transparent
        );
        animation: shimmer 3s infinite;
    }

    @keyframes shimmer {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    svg {
        width: 60px;
        height: 60px;
        color: #ffffff;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    }
`;

const WelcomeText = styled(motion.h1)`
    font-size: ${props => props.theme.fontSizes["5xl"]};
    font-weight: 800;
    color: #ffffff;
    margin-bottom: ${props => props.theme.spacing.md};
    font-family: ${props => props.theme.fonts.display};
    letter-spacing: -0.03em;
    text-shadow: 
        0 2px 4px rgba(0, 0, 0, 0.8),
        0 4px 20px rgba(0, 0, 0, 0.6),
        0 0 40px rgba(0, 0, 0, 0.4);
    line-height: 1.1;

    @media (max-width: 480px) {
        font-size: ${props => props.theme.fontSizes["4xl"]};
    }
`;

const Tagline = styled(motion.p)`
    font-size: ${props => props.theme.fontSizes.xl};
    color: #ffffff;
    margin-bottom: ${props => props.theme.spacing["2xl"]};
    font-weight: 500;
    letter-spacing: 0.01em;
    text-shadow: 
        0 1px 2px rgba(0, 0, 0, 0.8),
        0 2px 10px rgba(0, 0, 0, 0.5);
    line-height: 1.4;
    max-width: 320px;

    @media (max-width: 480px) {
        font-size: ${props => props.theme.fontSizes.lg};
    }
`;

const StartButton = styled(motion(Button))`
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.8);
    color: ${props => props.theme.colors.primarySolid};
    font-size: ${props => props.theme.fontSizes.lg};
    font-weight: 700;
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing["2xl"]};
    border-radius: ${props => props.theme.borderRadius.full};
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.8);
    position: relative;
    overflow: hidden;
    min-width: 200px;
    text-shadow: none;

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
            rgba(45, 90, 61, 0.1),
            transparent
        );
        transition: left 0.5s;
    }

    &:hover {
        transform: translateY(-4px);
        box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        border-color: rgba(255, 255, 255, 1);
        background: rgba(255, 255, 255, 0.95);

        &::before {
            left: 100%;
        }
    }

    &:active {
        transform: translateY(-1px);
    }
`;

const FeaturesList = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.md};
    margin: ${props => props.theme.spacing["2xl"]} 0;
    max-width: 300px;
`;

const FeatureItem = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.sm};
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: ${props => props.theme.borderRadius.lg};
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    color: #ffffff;
    font-size: ${props => props.theme.fontSizes.sm};
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    box-shadow: 
        0 4px 16px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);

    svg {
        width: 16px;
        height: 16px;
        color: #ffffff;
        flex-shrink: 0;
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
    }
`;

const Onboarding = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/goal");
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

    const logoVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <WelcomeContainer>
            <WelcomeContent
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <LogoContainer variants={logoVariants}>
                    <AppIcon>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </AppIcon>
                </LogoContainer>

                <WelcomeText variants={itemVariants}>
                    HEALTHY
                </WelcomeText>

                <Tagline variants={itemVariants}>
                    Tu compañero inteligente para un estilo de vida saludable
                </Tagline>

                <FeaturesList variants={itemVariants}>
                    <FeatureItem>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                        Entrenamientos personalizados
                    </FeatureItem>
                    <FeatureItem>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c-2 0-3-1-3-3s1-3 3-3 3 1 3 3-1 3-3 3zM3 10c2 0 3-1 3-3s-1-3-3-3-3 1-3 3 1 3 3 3zM12 22c2 0 3-1 3-3s-1-3-3-3-3 1-3 3 1 3 3 3z" />
                        </svg>
                        Recetas nutritivas y deliciosas
                    </FeatureItem>
                    <FeatureItem>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
                        </svg>
                        Seguimiento de progreso
                    </FeatureItem>
                </FeaturesList>

                <StartButton
                    onClick={handleStart}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Empezar mi viaje
                </StartButton>
            </WelcomeContent>
        </WelcomeContainer>
    );
};

export default Onboarding;
