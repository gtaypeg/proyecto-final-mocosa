import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
    Container,
    Header,
    Main,
    Title,
    Button,
    Progress,
    ProgressStep,
    BackButton,
} from "../components/StyledComponents";

const StepTitle = styled(Title)`
    font-size: 40px;
    margin-top: 30px;
    margin-bottom: 50px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const NumberOne = styled.div`
    position: absolute;
    font-size: 180px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
    opacity: 0.1;
    z-index: -1;
    right: 0;
    top: 80px;
`;

const GoalSelection = () => {
    const navigate = useNavigate();
    const [step] = useState(1);
    const totalSteps = 7;

    const renderProgressSteps = () => {
        const steps = [];
        for (let i = 0; i < totalSteps; i++) {
            steps.push(<ProgressStep key={i} active={i < step} />);
        }
        return steps;
    };

    const handleNext = () => {
        navigate("/height");
    };

    return (
        <Container style={{ height: "100vh" }}>
            {/* <Header> 
        <BackButton to="/">←</BackButton>
        <Progress>
          {renderProgressSteps()}
        </Progress>flexión de rodilla de pie
        
      </Header>
       */}
            <Main style={{ position: "relative" }}>
                <StepTitle>Objetivo</StepTitle>
                <Button onClick={handleNext}>Siguiente</Button>
            </Main>
        </Container>
    );
};

export default GoalSelection;
