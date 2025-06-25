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
        // Primary gradient system - Natural Green
        primary: "linear-gradient(135deg, #2d5a3d 0%, #4a7c59 100%)",
        primarySolid: "#2d5a3d",
        primaryLight: "#4a7c59",
        primaryDark: "#1e3d28",
        
        // Secondary gradient system - Sage Green
        secondary: "linear-gradient(135deg, #6b8e6b 0%, #8ab08a 100%)",
        secondarySolid: "#6b8e6b",
        secondaryLight: "#8ab08a",
        secondaryDark: "#5a7a5a",
        
        // Accent colors - Earth Tones
        accent: "linear-gradient(135deg, #7c9885 0%, #9bb99e 100%)",
        accentSolid: "#7c9885",
        success: "linear-gradient(135deg, #4a7c59 0%, #6b8e6b 100%)",
        successSolid: "#4a7c59",
        warning: "linear-gradient(135deg, #d4a574 0%, #e6c2a6 100%)",
        warningSolid: "#d4a574",
        
        // Neutral system - Natural Palette
        text: "#2d3e2d",
        textLight: "#5a6b5a",
        textLighter: "#8a9b8a",
        background: "#f7f4f0",
        backgroundDark: "#f0ebe4",
        surface: "#ffffff",
        surfaceLight: "rgba(255, 255, 255, 0.9)",
        
        // Glass morphism - Natural Glass
        glass: "rgba(247, 244, 240, 0.75)",
        glassDark: "rgba(240, 235, 228, 0.5)",
        
        // Shadows - Softer Natural Shadows
        shadow: "0 8px 32px rgba(45, 90, 61, 0.1)",
        shadowHover: "0 16px 48px rgba(45, 90, 61, 0.15)",
        shadowActive: "0 4px 16px rgba(45, 90, 61, 0.2)",
        
        // Borders - Natural Borders
        border: "#e8e1d8",
        borderLight: "#f2ede6",
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
        "4xl": "2rem",  // 36px
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

// Responsive app wrapper
const AppWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    background: ${props => props.theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0;
    
    /* Mobile first - full width */
    @media (max-width: 480px) {
        padding: 0;
    }
    
    /* Tablet and up - centered with max width */
    @media (min-width: 481px) {
        padding: ${props => props.theme.spacing.md};
    }
    
    /* Large screens - add side padding */
    @media (min-width: 1024px) {
        /* padding: ${props => props.theme.spacing.xl}; */
        padding: 0;
    }
`;

const AppContainer = styled.div`
    width: 100%;
    /* max-width: 480px; */
    min-height: 100vh;
    background: ${props => props.theme.colors.surface};
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    
    /* Mobile - full height and width */
    @media (max-width: 480px) {
        border-radius: 0;
        box-shadow: none;
        border: none;
    }
    
    /* Tablet and up - card-like appearance */
    @media (min-width: 481px) {
        /* border-radius: ${props => props.theme.borderRadius["2xl"]}; */
        box-shadow: ${props => props.theme.colors.shadow};
        /* border: 1px solid ${props => props.theme.colors.border}; */
        min-height: calc(100vh - ${props => props.theme.spacing.xl});
    }
`;

const ScrollableContent = styled.div`
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    
    /* Custom scrollbar for better UX */
    &::-webkit-scrollbar {
        width: 6px;
    }
    
    &::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.backgroundDark};
    }
    
    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.primarySolid};
        border-radius: ${props => props.theme.borderRadius.full};
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.colors.primaryDark};
    }
`;

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
        <AppWrapper>
            <AppContainer>
                <AnimatePresence mode="wait">
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

                    <ScrollableContent>
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
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
                    </ScrollableContent>
                </AnimatePresence>
            </AppContainer>
        </AppWrapper>
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
