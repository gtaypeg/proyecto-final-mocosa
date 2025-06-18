import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container, Main, Title, Button } from "../components/StyledComponents";

const WelcomeContainer = styled(Container)`
    background-image: url("/imagen-final.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-size: auto 150%;
    animation: zoom-in-image 60s linear;
    height: 100vh !important;

    & > * {
        position: relative;
        z-index: 2;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
        z-index: 1;
    }

    @keyframes zoom-in-image {
        0% {
            background-size: auto 100%;
        }
        100% {
            background-size: auto 150%;
        }
    }
`;

// Styled components specific to this page
const WelcomeImage = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-radius: 20px;
    margin-bottom: 30px;
    position: relative;
    overflow: hidden;
`;

const StartMessage = styled.div`
    color: white;
    font-size: 16px;
    margin-bottom: 20px;
    text-align: center;
    z-index: 2;
`;

const WelcomeText = styled(Title)`
    color: white;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 36px;
    letter-spacing: 1px;
    z-index: 2;
`;

const Onboarding = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/goal");
    };

    return (
        <WelcomeContainer>
            <Main>
                <WelcomeImage>
                    <WelcomeText>HEALTHY</WelcomeText>
                    <StartMessage>Entrenamientos y recetas saludables</StartMessage>
                </WelcomeImage>

                <Button onClick={handleStart}>Empecemos</Button>
            </Main>
        </WelcomeContainer>
    );
};

export default Onboarding;
