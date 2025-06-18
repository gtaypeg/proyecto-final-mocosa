import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 480px;
    margin: 0 auto;
    background: linear-gradient(
        135deg,
        ${props => props.theme.colors.background} 0%,
        ${props => props.theme.colors.backgroundDark} 100%
    );
    position: relative;
    border-radius: ${props => props.theme.borderRadius["2xl"]};
    box-shadow: ${props => props.theme.colors.shadow};
    overflow: hidden;
`;

const Header = styled.div`
    padding: ${props => props.theme.spacing["2xl"]} ${props => props.theme.spacing.lg} ${props => props.theme.spacing.lg};
    background: ${props => props.theme.colors.surface};
    position: relative;
    border-radius: ${props => props.theme.borderRadius["2xl"]} ${props => props.theme.borderRadius["2xl"]} 0 0;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, ${props => props.theme.colors.border}, transparent);
    }
`;

const HeaderContent = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    font-size: ${props => props.theme.fontSizes["3xl"]};
    font-weight: 700;
    background: ${props => props.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    font-family: ${props => props.theme.fonts.display};
    letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
    color: ${props => props.theme.colors.textLight};
    font-size: ${props => props.theme.fontSizes.base};
    margin: ${props => props.theme.spacing.sm} 0 0 0;
    font-weight: 400;
`;

const Main = styled.div`
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
    flex: 1;
    background: ${props => props.theme.colors.background};
`;

const CardGrid = styled.div`
    display: grid;
    gap: ${props => props.theme.spacing.lg};
    grid-template-columns: 1fr;
`;

const Card = styled(motion.div)`
    position: relative;
    height: 280px;
    border-radius: ${props => props.theme.borderRadius["2xl"]};
    overflow: hidden;
    cursor: pointer;
    background: ${props => props.theme.colors.surface};
    box-shadow: ${props => props.theme.colors.shadow};
    border: 1px solid ${props => props.theme.colors.border};
    transition: ${props => props.theme.transitions.slow};

    &:hover {
        transform: translateY(-8px);
        box-shadow: ${props => props.theme.colors.shadowHover};
    }
`;

const CardBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    transition: ${props => props.theme.transitions.slow};

    ${Card}:hover & {
        transform: scale(1.05);
    }
`;

const CardOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        135deg,
        rgba(102, 126, 234, 0.8) 0%,
        rgba(118, 75, 162, 0.6) 50%,
        rgba(76, 99, 210, 0.8) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${props => props.theme.spacing.xl};
    backdrop-filter: blur(2px);
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.md};
`;

const CardIcon = styled.div`
    width: 60px;
    height: 60px;
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: ${props => props.theme.borderRadius.xl};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    svg {
        width: 28px;
        height: 28px;
    }
`;

const CardContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const CardTitle = styled.h2`
    color: white;
    font-size: ${props => props.theme.fontSizes["3xl"]};
    font-weight: 700;
    margin: 0 0 ${props => props.theme.spacing.sm} 0;
    font-family: ${props => props.theme.fonts.display};
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    letter-spacing: -0.02em;
`;

const CardDescription = styled.p`
    color: rgba(255, 255, 255, 0.9);
    font-size: ${props => props.theme.fontSizes.base};
    margin: 0;
    line-height: 1.5;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
`;

const StatsContainer = styled.div`
    display: flex;
    gap: ${props => props.theme.spacing.md};
    margin-top: ${props => props.theme.spacing.md};
`;

const StatItem = styled.div`
    background: ${props => props.theme.colors.glassDark};
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius.md};
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    color: white;
    font-size: ${props => props.theme.fontSizes.sm};
    font-weight: 500;
    text-align: center;
    min-width: 60px;

    .number {
        display: block;
        font-size: ${props => props.theme.fontSizes.lg};
        font-weight: 700;
        margin-bottom: ${props => props.theme.spacing.xs};
    }
`;

const FloatingElements = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    overflow: hidden;
`;

const FloatingShape = styled(motion.div)`
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    backdrop-filter: blur(10px);
`;

const DiscoverPage = () => {
    const navigate = useNavigate();

    const handleCardClick = (type) => {
        console.log(`Selected: ${type}`);
        if (type === "Hipertenso") {
            navigate("/category/hipertenso");
        } else if (type === "Diabeticos") {
            navigate("/category/diabeticos");
        } else if (type === "Ambas") {
            navigate("/category/ambas");
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    const floatingVariants = {
        animate: {
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
            }
        }
    };

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <Title>Bienvenido</Title>
                    <Subtitle>Elige tu camino hacia una vida más saludable</Subtitle>
                </HeaderContent>
            </Header>

            <Main>
                <CardGrid>
                    <Card
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        onClick={() => handleCardClick("Ambas")}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <CardBackground src="/ejercicios.webp" />
                        <CardOverlay>
                            <CardHeader>
                                <CardIcon>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>
                                </CardIcon>
                            </CardHeader>
                            <CardContent>
                                <CardTitle>Ejercicios</CardTitle>
                                <CardDescription>
                                    Rutinas personalizadas adaptadas a tu condición física y objetivos de salud
                                </CardDescription>
                                <StatsContainer>
                                    <StatItem>
                                        <span className="number">50+</span>
                                        <span>Rutinas</span>
                                    </StatItem>
                                    <StatItem>
                                        <span className="number">4</span>
                                        <span>Niveles</span>
                                    </StatItem>
                                    <StatItem>
                                        <span className="number">24/7</span>
                                        <span>Acceso</span>
                                    </StatItem>
                                </StatsContainer>
                            </CardContent>
                        </CardOverlay>
                        <FloatingElements>
                            <FloatingShape
                                style={{ width: 60, height: 60, top: '20%', left: '80%' }}
                                variants={floatingVariants}
                                animate="animate"
                            />
                            <FloatingShape
                                style={{ width: 40, height: 40, top: '70%', left: '10%' }}
                                variants={floatingVariants}
                                animate="animate"
                            />
                        </FloatingElements>
                    </Card>

                    <Card
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        onClick={() => navigate("/recipes")}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <CardBackground src="/comidas.jpeg" />
                        <CardOverlay>
                            <CardHeader>
                                <CardIcon>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </CardIcon>
                            </CardHeader>
                            <CardContent>
                                <CardTitle>Recetas</CardTitle>
                                <CardDescription>
                                    Deliciosas recetas saludables diseñadas por nutricionistas especializados
                                </CardDescription>
                                <StatsContainer>
                                    <StatItem>
                                        <span className="number">100+</span>
                                        <span>Recetas</span>
                                    </StatItem>
                                    <StatItem>
                                        <span className="number">5</span>
                                        <span>Categorías</span>
                                    </StatItem>
                                    <StatItem>
                                        <span className="number">★4.9</span>
                                        <span>Rating</span>
                                    </StatItem>
                                </StatsContainer>
                            </CardContent>
                        </CardOverlay>
                        <FloatingElements>
                            <FloatingShape
                                style={{ width: 50, height: 50, top: '30%', left: '85%' }}
                                variants={floatingVariants}
                                animate="animate"
                            />
                            <FloatingShape
                                style={{ width: 35, height: 35, top: '60%', left: '5%' }}
                                variants={floatingVariants}
                                animate="animate"
                            />
                        </FloatingElements>
                    </Card>
                </CardGrid>
            </Main>
        </Container>
    );
};

export default DiscoverPage;
