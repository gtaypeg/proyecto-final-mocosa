import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
    line-height: 1.6;
    font-size: ${props => props.theme.fontSizes.base};
    font-weight: 400;
    overflow-x: hidden;
    
    /* Enhanced text rendering */
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    /* Better touch/tap handling */
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }

  button {
    cursor: pointer;
    font-family: ${props => props.theme.fonts.main};
    border: none;
    background: none;
    padding: 0;
    transition: ${props => props.theme.transitions.base};
    
    &:focus {
      outline: none;
    }
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  input, textarea, select {
    font-family: ${props => props.theme.fonts.main};
    border: none;
    outline: none;
    background: none;
    
    &:focus {
      outline: none;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: ${props => props.theme.transitions.base};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.display};
    font-weight: 600;
    line-height: 1.2;
    color: ${props => props.theme.colors.text};
    margin: 0;
  }

  h1 {
    font-size: ${props => props.theme.fontSizes["4xl"]};
    font-weight: 700;
  }

  h2 {
    font-size: ${props => props.theme.fontSizes["3xl"]};
    font-weight: 600;
  }

  h3 {
    font-size: ${props => props.theme.fontSizes["2xl"]};
    font-weight: 600;
  }

  h4 {
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: 600;
  }

  h5 {
    font-size: ${props => props.theme.fontSizes.lg};
    font-weight: 500;
  }

  h6 {
    font-size: ${props => props.theme.fontSizes.base};
    font-weight: 500;
  }

  p {
    margin: 0;
    line-height: 1.6;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.backgroundDark};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primarySolid};
    border-radius: ${props => props.theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.primaryDark};
  }

  /* Selection styling */
  ::selection {
    background: ${props => props.theme.colors.primaryLight};
    color: white;
  }

  /* Focus outline for accessibility */
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible,
  a:focus-visible {
    outline: 2px solid ${props => props.theme.colors.primarySolid};
    outline-offset: 2px;
  }

  /* Improved mobile touch targets */
  @media (max-width: 768px) {
    button, a, input, textarea, select {
      min-height: 44px;
    }
  }

  /* Animation utilities */
  .fade-in {
    animation: fadeIn 0.3s ease-out;
  }

  .slide-up {
    animation: slideUp 0.3s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Utility classes */
  .text-gradient {
    background: ${props => props.theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glass {
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

export default GlobalStyle; 