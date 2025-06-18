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
        // Primary gradient system
        primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        primarySolid: "#667eea",
        primaryLight: "#8b9cf5",
        primaryDark: "#4c63d2",
        
        // Secondary gradient system  
        secondary: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        secondarySolid: "#f093fb",
        secondaryLight: "#f3a7fc",
        secondaryDark: "#ed7ff0",
        
        // Accent colors
        accent: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        accentSolid: "#4facfe",
        success: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        successSolid: "#43e97b",
        warning: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        warningSolid: "#fa709a",
        
        // Neutral system
        text: "#1a202c",
        textLight: "#4a5568",
        textLighter: "#718096",
        background: "#f7fafc",
        backgroundDark: "#edf2f7",
        surface: "#ffffff",
        surfaceLight: "rgba(255, 255, 255, 0.8)",
        
        // Glass morphism
        glass: "rgba(255, 255, 255, 0.25)",
        glassDark: "rgba(255, 255, 255, 0.1)",
        
        // Shadows
        shadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        shadowHover: "0 20px 40px rgba(0, 0, 0, 0.15)",
        shadowActive: "0 5px 15px rgba(0, 0, 0, 0.2)",
        
        // Borders
        border: "#e2e8f0",
        borderLight: "#f1f5f9",
    },
    fonts: {
        main: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        display: "'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    },
    fontSizes: {
        xs: "0.75rem",     // 12px
        sm: "0.875rem",    // 14px  
        base: "1rem",      // 16px
        lg: "1.125rem",    // 18px
        xl: "1.25rem",     // 20px
        "2xl": "1.5rem",   // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem",  // 36px
        "5xl": "3rem",     // 48px
    },
    spacing: {
        xs: "0.25rem",   // 4px
        sm: "0.5rem",    // 8px
        md: "1rem",      // 16px
        lg: "1.5rem",    // 24px
        xl: "2rem",      // 32px
        "2xl": "3rem",   // 48px
        "3xl": "4rem",   // 64px
    },
    borderRadius: {
        sm: "0.375rem",  // 6px
        md: "0.5rem",    // 8px
        lg: "0.75rem",   // 12px
        xl: "1rem",      // 16px
        "2xl": "1.5rem", // 24px
        full: "9999px",
    },
    transitions: {
        fast: "all 0.15s ease",
        base: "all 0.2s ease",
        slow: "all 0.3s ease",
        bounce: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
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
