import React, { useState, useRef, useEffect } from "react";
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
    Subtitle,
    UnitToggle,
    UnitOption,
    ValueDisplay,
    SliderContainer,
    Slider,
    HealthMetric,
} from "../components/StyledComponents";

const WeightScale = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    background-color: ${(props) => props.theme.colors.lightGray};
    border-radius: 20px;
    margin: 40px 0;
    position: relative;
`;

const WeightMarker = styled.div`
    position: absolute;
    width: 4px;
    height: 15px;
    background-color: ${(props) => props.theme.colors.darkGray};
    top: -15px;
    left: ${(props) => props.position}%;

    &:after {
        content: "${(props) => props.value}";
        position: absolute;
        top: -20px;
        left: -5px;
        font-size: 12px;
        color: ${(props) => props.theme.colors.darkGray};
    }
`;

const WeightIndicator = styled.div`
    position: absolute;
    width: 3px;
    height: 40px;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 2px;
    left: ${(props) => props.position}%;
    top: 0;
`;

const HeightMeasurement = styled.div`
    flex: 1;
    width: 100%;
`;

const MeasurementRulerValue = styled.div`
    position: relative;
    font-size: 36px;
    font-weight: 700;

    &:before {
        content: "";
        position: absolute;
        bottom: -45px;
        left: 50%;
        transform: translateX(-50%);
        width: 1px;
        height: 50px;
        background-color: rgba(255, 0, 0, 0.5);
        z-index: 1;
    }

    span {
        font-size: 20px;
        font-weight: 400;
    }
`;

const MeasurementRuler = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    gap: 10px;
    padding-top: 15px;

    & > div {
        height: 20px;

        span {
            display: none;
        }

        &:nth-child(5n + 1) {
            height: 30px;
        }

        &:nth-child(10n + 1) {
            background-color: rgba(0, 0, 0, 0.9);

            span {
                display: block;
            }
        }
    }
`;

const MeasurementRulerWrapper = styled.div`
    width: 100%;
    max-width: 440px;
    height: 100%;
    overflow: hidden;
    overflow-x: scroll;
    position: relative;
    padding-left: 50%;
    padding-right: 50%;
    // smooth scroll
    // hide scrollbar all browsers
    ::-webkit-scrollbar {
        display: none;
    }

    // hide scrollbar firefox
    scrollbar-width: none;

    // hide scrollbar edge
    -ms-overflow-style: none;

    // hide scrollbar chrome
    ::-webkit-scrollbar-thumb {
        display: none;
    }

    // hide scrollbar safari
    ::-webkit-scrollbar-track {
        display: none;
    }

    // hide scrollbar opera
    scrollbar-color: transparent transparent;

    // hide scrollbar internet explorer
    -ms-overflow-style: none;
`;

const MeasurementRulerLine = styled.div`
    width: 1px;
    flex-shrink: 0;
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;

    span {
        position: absolute;
        top: -15px;
        font-size: 12px;
        left: 0;
        transform: translateX(-50%);
        text-align: center;
        color: ${(props) => props.theme.colors.darkGray};
    }
`;

const WeightInput = () => {
    const navigate = useNavigate();
    const [weight, setWeight] = useState(70);
    const [unit, setUnit] = useState("kg"); // 'kg' or 'lbs'
    const [step] = useState(3);
    const totalSteps = 7;

    const handleWeightChange = (e) => {
        setWeight(parseFloat(e.target.value));
    };

    const toggleUnit = (selectedUnit) => {
        if (selectedUnit === unit) return;

        if (selectedUnit === "kg") {
            // Convert lbs to kg
            setWeight(Math.round((weight / 2.205) * 10) / 10);
        } else {
            // Convert kg to lbs
            setWeight(Math.round(weight * 2.205 * 10) / 10);
        }

        setUnit(selectedUnit);
    };

    const renderProgressSteps = () => {
        const steps = [];
        for (let i = 0; i < totalSteps; i++) {
            steps.push(<ProgressStep key={i} active={i < step} />);
        }
        return steps;
    };

    const handleNext = () => {
        navigate("/age");
    };

    // Calculate BMI - using placeholder height of 165cm
    const height = 1.65; // in meters
    const bmi = (unit === "kg" ? weight : weight / 2.205) / (height * height);

    const getWeightPosition = () => {
        const min = unit === "kg" ? 40 : 88;
        const max = unit === "kg" ? 120 : 264;
        return ((weight - min) / (max - min)) * 100;
    };

    const measurementRulerRef = useRef(null);

    useEffect(() => {
        let isUserEvent = true;

        const targetElement = measurementRulerRef.current;
        // const refLine = document.querySelector(".ref-line");
        const children = targetElement.querySelectorAll(".line");

        let currentHeightElement = null;

        const setValueOnScroll = (e) => {
            const scroll = e.target.scrollLeft + 220;

            let nextScroll = 0;

            const closestChild = [...children].reduce((prev, curr) => {
                return Math.abs(curr.offsetLeft - scroll) < Math.abs(prev.offsetLeft - scroll) ? curr : prev;
            }, children[0]);

            if (nextScroll === 0) {
                nextScroll = closestChild.offsetLeft;
                setWeight(parseFloat(closestChild.getAttribute("data-value")));
                currentHeightElement = closestChild;
            }
        };

        const handleScrollEnd = (e) => {
            targetElement.scrollTo({
                left: currentHeightElement.offsetLeft - 220
            });
        };

        const handleWheel = (e) => {
            e.preventDefault();
            isUserEvent = true;
            
            // Calculate the scroll increment based on wheel delta
            const scrollIncrement = e.deltaY > 0 ? 30 : -30;
            const currentScroll = targetElement.scrollLeft;
            const newScroll = currentScroll + scrollIncrement;
            
            targetElement.scrollTo({
                left: newScroll,
                behavior: 'smooth'
            });
        };

        const handleTouchStart = () => {
            isUserEvent = true;
        };

        const handleStartScroll = () => {
            isUserEvent = true;
        };

        targetElement.addEventListener("scroll", setValueOnScroll);
        targetElement.addEventListener("scrollend", handleScrollEnd);
        targetElement.addEventListener("wheel", handleWheel);
        targetElement.addEventListener("touchstart", handleTouchStart);

        targetElement.scrollTo({
            left: document.querySelector(`[data-value="${weight}"]`).offsetLeft - 220
      });

        return () => {
            targetElement.removeEventListener("scroll", setValueOnScroll);
            targetElement.removeEventListener("scrollend", handleScrollEnd);
            targetElement.removeEventListener("wheel", handleWheel);
            targetElement.removeEventListener("touchstart", handleTouchStart);
        };
    }, []);

    return (
        <Container>
            {/* <Header>
                <BackButton to="/height">←</BackButton>
                <Progress>{renderProgressSteps()}</Progress>
                
            </Header> */}

            <Main>
                <Title>¿Cuánto pesas actualmente?</Title>

                {/* <UnitToggle>
          <UnitOption 
            active={unit === 'lbs'} 
            onClick={() => toggleUnit('lbs')}
          >
            lbs
          </UnitOption>
          <UnitOption 
            active={unit === 'kg'} 
            onClick={() => toggleUnit('kg')}
          >
            kg
          </UnitOption>
        </UnitToggle> */}

                <HeightMeasurement>
                    <MeasurementRulerValue>
                        {weight.toFixed(1)} <span>{unit}</span>
                    </MeasurementRulerValue>

                    <MeasurementRulerWrapper ref={measurementRulerRef}>
                        <MeasurementRuler>
                            {Array.from({ length: 2300 }).map((_, i) => {
                            

                                if (i < 200) {
                                    return null;
                                }

                                return (
                                    <MeasurementRulerLine className="line" key={i} data-value={i / 10}>
                                        <span>{i / 10}</span>
                                    </MeasurementRulerLine>
                                );
                            })}
                        </MeasurementRuler>
                    </MeasurementRulerWrapper>
                </HeightMeasurement>

                {/* <ValueDisplay>{weight.toFixed(1)} {unit}</ValueDisplay> */}

                {/* <WeightScale>
          <WeightIndicator position={getWeightPosition()} />
          <WeightMarker position={0} value={unit === 'kg' ? '40' : '88'} />
          <WeightMarker position={25} value={unit === 'kg' ? '60' : '132'} />
          <WeightMarker position={50} value={unit === 'kg' ? '80' : '176'} />
          <WeightMarker position={75} value={unit === 'kg' ? '100' : '220'} />
          <WeightMarker position={100} value={unit === 'kg' ? '250' : '264'} />
        </WeightScale> */}

                {/* <SliderContainer>
          <Slider 
            min={unit === 'kg' ? 20 : 88}
            max={unit === 'kg' ? 250 : 264}
            step={0.1}
            value={weight}
            onChange={handleWeightChange}
          />
        </SliderContainer> */}

                <HealthMetric>
                    <h3>IMC ACTUAL</h3>
                    <p>{bmi.toFixed(1)} Tienes gran potencial para ponerte en forma. ¡Adelante!</p>
                </HealthMetric>

                <Button onClick={handleNext}>Siguiente</Button>
            </Main>
        </Container>
    );
};

export default WeightInput;
