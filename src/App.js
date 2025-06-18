import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import GlobalStyle from "./components/GlobalStyle";
import Onboarding from "./pages/Onboarding";
import HeightInput from "./pages/HeightInput";
import WeightInput from "./pages/WeightInput";
import AgeInput from "./pages/AgeInput";
import InjuriesInput from "./pages/InjuriesInput";
import ActivityLevelInput from "./pages/ActivityLevelInput";
import FlexibilityInput from "./pages/FlexibilityInput";
import AerobicInput from "./pages/AerobicInput";
import GoalSelection from "./pages/GoalSelection";
import DiscoverPage from "./pages/DiscoverPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import CategoryPage from "./pages/CategoryPage";
import ExerciseDaysPage from "./pages/ExerciseDaysPage";
import DayPage from "./pages/DayPage";
import ExercisePage from "./pages/ExercisePage";
import CompletionPage from "./pages/CompletionPage";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import { ProgressProvider } from "./contexts/ProgressContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
    Container,
    Header,
    Main,
    Title,
    Button,
    Progress,
    ProgressStep,
    BackButton,
} from "./components/StyledComponents";

const theme = {
    colors: {
        primary: "#2ecc71", // Green as primary color
        secondary: "#f06292", // Light pink as secondary color
        text: "#333333",
        background: "#000",
        accent: "#1abc9c", // Another green shade as accent
        lightGray: "#f5f5f5",
        darkGray: "#555555",
    },
    fonts: {
        main: "Poppins, Roboto, sans-serif",
    },
};

// Create a wrapper component to use useLocation
const AnimatedRoutes = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [step] = useState(1);
    const pageSteps = ["/height", "/weight", "/age", "/injuries", "/activity", "/flexibility", "/aerobic"];
    const totalSteps = pageSteps.length;

    const activeIndex = pageSteps.indexOf(location.pathname);

    const renderProgressSteps = () => {
        const steps = [];
        for (let i = 0; i < totalSteps; i++) {
            steps.push(<ProgressStep key={i} active={i <= activeIndex} />);
        }
        return steps;
    };

    const isApp = location.pathname.includes("discover") || location.pathname.includes("activities") || location.pathname.includes("category") || location.pathname.includes("recipes");

    return (
        <AnimatePresence mode="wait">
            <div
                style={{
                    background: "white",
                    width: "480px",
                    margin: "0 auto",
                }}
            >
                {location.pathname !== "/" && location.pathname !== "/goal" && !isApp && (
                    <Header>
                        <BackButton to={pageSteps[activeIndex - 1] || "/"}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-arrow-left"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                                />
                            </svg>
                        </BackButton>
                        <Progress>{renderProgressSteps()}</Progress>
                    </Header>
                )}

                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Routes location={location}>
                        <Route path="/" element={<Onboarding />} />
                        <Route path="/goal" element={<GoalSelection />} />
                        <Route path="/height" element={<HeightInput />} />
                        <Route path="/weight" element={<WeightInput />} />
                        <Route path="/age" element={<AgeInput />} />
                        <Route path="/injuries" element={<InjuriesInput />} />
                        <Route path="/activity" element={<ActivityLevelInput />} />
                        <Route path="/flexibility" element={<FlexibilityInput />} />
                        <Route path="/aerobic" element={<AerobicInput />} />
                        <Route path="/discover" element={<DiscoverPage />} />
                        <Route path="/activities" element={<ActivitiesPage />} />
                        <Route path="/category/:category" element={<CategoryPage />} />
                        <Route path="/category/:category/exercise/:exercise" element={<ExerciseDaysPage />} />
                        <Route path="/category/:category/exercise/:exercise/day/:day" element={<DayPage />} />
                        <Route path="/category/:category/exercise/:exercise/day/:day/exercise/:exerciseIndex" element={<ExercisePage />} />
                        <Route path="/category/:category/exercise/:exercise/day/:day/completed" element={<CompletionPage />} />
                        <Route path="/recipes" element={<RecipesPage />} />
                        <Route path="/recipes/:recipeId" element={<RecipeDetailPage />} />
                    </Routes>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ProgressProvider>
                <Router>
                    <AnimatedRoutes />
                </Router>
            </ProgressProvider>
        </ThemeProvider>
    );
}

export default App;
