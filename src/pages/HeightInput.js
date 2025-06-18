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
    InfoBox,
} from "../components/StyledComponents";

const HeightVisual = styled.div`
    width: 30px;
    height: ${(props) => props.height}px;
    max-height: 300px;
    background-color: ${(props) => props.theme.colors.primary};
    margin: 0 20px;
    border-radius: 5px;
`;

const HeightDisplay = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 20px;
`;

const HeightMeasurement = styled.div`
    flex: 1;
    width: 100%;
`;

const MeasurementLine = styled.div`
    position: absolute;
    width: 5px;
    height: 10px;
    background-color: ${(props) => props.theme.colors.lightGray};
    left: -10px;
    bottom: ${(props) => props.position}%;

    &:after {
        content: "${(props) => props.value}";
        position: absolute;
        left: -25px;
        font-size: 12px;
        color: ${(props) => props.theme.colors.darkGray};
    }
`;

const MeasurementRulerValue = styled.div`
    position: relative;
    font-size: 36px;
    font-weight: 700;

    &:before {
        content: "";
        position: absolute;
        bottom: -251px;
        right: 0;
        width: 300px;
        height: 1px;
        background-color: rgba(255, 0, 0, 0.5);
        z-index: 1;
    }

    span {
        font-size: 20px;
        font-weight: 400;
    }
`;

const MeasurementRulerWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-height: 500px;
    overflow: hidden;
    overflow-y: scroll;
    padding-top: 249.5px;
    padding-bottom: 249.5px;
    position: relative;
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
    height: 1px;
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;

    span {
        position: absolute;
        left: -25px;
        font-size: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: ${(props) => props.theme.colors.darkGray};
    }
`;

const MeasurementRuler = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;

    & > div {
        width: 20px;

        span {
            display: none;
        }

        &:nth-child(5n + 1) {
            width: 30px;
        }

        &:nth-child(10n + 1) {
            background-color: rgba(0, 0, 0, 0.9);

            span {
                display: block;
            }
        }
    }
`;

const HeightInput = () => {
    const navigate = useNavigate();
    const [height, setHeight] = useState(230);
    const [unit, setUnit] = useState("cm"); // 'cm' or 'ft'
    const [step] = useState(2);
    const totalSteps = 7;

    const handleHeightChange = (e) => {
        setHeight(parseInt(e.target.value));
    };

    const toggleUnit = (selectedUnit) => {
        if (selectedUnit === unit) return;

        if (selectedUnit === "cm") {
            // Convert ft to cm (approximate)
            setHeight(Math.round(height * 30.48));
        } else {
            // Convert cm to ft (approximate)
            setHeight(Math.round(height / 30.48));
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
        navigate("/weight");
    };

    const measurementRulerRef = useRef(null);

    useEffect(() => {
        let isUserEvent = true;

        const targetElement = measurementRulerRef.current;
        // const refLine = document.querySelector(".ref-line");
        const children = targetElement.querySelectorAll(".line");

        let currentHeightElement = null;

        const setValueOnScroll = (e) => {
            const scroll = e.target.scrollTop + 250;

            let nextScroll = 0;

            const closestChild = [...children].reduce((prev, curr) => {
                return Math.abs(curr.offsetTop - scroll) < Math.abs(prev.offsetTop - scroll) ? curr : prev;
            }, children[0]);

            if (nextScroll === 0) {
                nextScroll = closestChild.offsetTop;
                setHeight(parseInt(closestChild.getAttribute("data-value")));
                currentHeightElement = closestChild;
            }
        };

        const handleScrollEnd = (e) => {
            targetElement.scrollTo({
                top: currentHeightElement.offsetTop - 250,
            });

            // return;

            // if (!isUserEvent) {
            //     return;
            // }

            // // get scroll of wheel
            // const scroll = e.target.scrollTop;
            // // e.preventDefault();

            // // refLine.style.top = `${scroll + 10}px`;

            // let nextScroll = 0;

            // // [...children].forEach((child) => {
            // // const relativeScroll = child.offsetTop - scroll;

            // // get the closest child to relative scroll 10
            // const closestChild = [...children].reduce((prev, curr) => {
            //     return Math.abs(curr.offsetTop - scroll) < Math.abs(prev.offsetTop - scroll) ? curr : prev;
            // }, children[0]);

            // // console.log(relativeScroll, closestChild);

            // // if (relativeScroll > 10) {
            // //     child.style.backgroundColor = "yellow";
            // //     if (nextScroll === 0) {
            // //         nextScroll = child.offsetTop + 1;
            // //     }
            // // } else {
            // //     child.style.backgroundColor = "";
            // // }

            // if (nextScroll === 0) {
            //     nextScroll = closestChild.offsetTop;
            //     setHeight(parseInt(closestChild.getAttribute("data-value")));
            // }
            // // });

            // console.log(nextScroll, scroll);

            // // if (nextScroll === scroll + 10) {
            // //     return;
            // // }

            // if (nextScroll > 0) {
            //     // targetElement.scrollTo({
            //     //     top: nextScroll - 200 ,
            //     //     // behavior: "smooth",
            //     // });

            //     isUserEvent = false;
            // }

            // // targetElement.scrollTo({
            // //     top: e.target.scrollTop + 10 - 1,
            // // });
        };

        const handleWheelStart = () => {
            isUserEvent = true;
        };

        const handleTouchStart = () => {
            isUserEvent = true;
        };

        const handleStartScroll = () => {
            isUserEvent = true;
        };

        targetElement.addEventListener("scroll", setValueOnScroll);
        targetElement.addEventListener("scrollend", handleScrollEnd);
        targetElement.addEventListener("wheel", handleWheelStart);
        targetElement.addEventListener("touchstart", handleTouchStart);

        return () => {
            targetElement.removeEventListener("scroll", setValueOnScroll);
            targetElement.removeEventListener("scrollend", handleScrollEnd);
            targetElement.removeEventListener("wheel", handleWheelStart);
            targetElement.removeEventListener("touchstart", handleTouchStart);
        };
    }, []);

    return (
        <Container>
            {/* <Header>
                <BackButton to="/goal">←</BackButton>
                <Progress>{renderProgressSteps()}</Progress>
                
            </Header> */}

            <Main>
                <Title>¿Cuál es tu altura?</Title>
                <Subtitle>Esta información nos ayuda a ajustar tu plan personal.</Subtitle>

                {/* <UnitToggle>
                    <UnitOption active={unit === "ft"} onClick={() => toggleUnit("ft")}>
                        ft
                    </UnitOption>
                    <UnitOption active={unit === "cm"} onClick={() => toggleUnit("cm")}>
                        cm
                    </UnitOption>
                </UnitToggle> */}

                <HeightMeasurement>
                    <MeasurementRulerValue>
                        {height} <span>{unit}</span>
                    </MeasurementRulerValue>

                    <MeasurementRulerWrapper ref={measurementRulerRef}>
                        <MeasurementRuler>
                            {/* <span
                                className="ref-line"
                                style={{
                                    backgroundColor: "green",
                                    position: "absolute",
                                    width: "200px",
                                    right: "0",
                                    height: "1px",
                                    top: "0",
                                    display: "block",
                                }}
                            /> */}

                            {Array.from({ length: 230 }).map((_, i) => {
                                if (230 - i < 100) {
                                    return null;
                                }

                                return (
                                    <MeasurementRulerLine className="line" key={i} data-value={230 - i}>
                                        <span>{230 - i}</span>
                                    </MeasurementRulerLine>
                                );
                            })}
                        </MeasurementRuler>
                    </MeasurementRulerWrapper>
                </HeightMeasurement>

                {/* <HeightDisplay> */}
                {/* <HeightMeasurement>
                        <MeasurementLine position={0} value="150" />
                        <MeasurementLine position={33} value="160" />
                        <MeasurementLine position={66} value="170" />
                        <MeasurementLine position={100} value="180" />
                    </HeightMeasurement>
                    <HeightVisual height={Math.min(300, height)} /> */}
                {/* </HeightDisplay> */}

                {/* <SliderContainer>
                    <Slider
                        min={unit === "cm" ? 140 : 4.5}
                        max={unit === "cm" ? 210 : 7}
                        step={unit === "cm" ? 1 : 0.1}
                        value={height}
                        onChange={handleHeightChange}
                    />
                </SliderContainer> */}

                <Button onClick={handleNext}>Siguiente</Button>
            </Main>
        </Container>
    );
};

export default HeightInput;
