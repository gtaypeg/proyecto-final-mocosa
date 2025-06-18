import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 54px);
  padding: 20px;
  max-width: 480px;
  margin: 0 auto;
  position: relative;
  background-color: #fff;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-right: 44px;
  gap: 10px;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;

   & > button:last-child {
    margin-top: auto;
   }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.text};
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.darkGray};
`;

export const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
`;

export const BackButton = styled(Link)`
  color: ${props => props.theme.colors.darkGray};
  text-decoration: none;
  font-size: 24px;
  padding: 5px;
`;

export const Progress = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 5px;
  display: flex;
`;

export const ProgressStep = styled.div`
  height: 100%;
  border-radius: 5px;
  background-color: ${props => 
    props.active ? props.theme.colors.primary : 'rgba(0, 0, 0, 0.1)'};
  flex: 1;
  margin: 0 2px;
  transition: all 0.3s ease-in-out;
`;

export const Option = styled.div`
  width: 100%;
  padding: 16px;
  margin: 8px 0;
  border-radius: 12px;
  background-color: ${props => 
    props.selected ? props.theme.colors.primary : props.theme.colors.lightGray};
  color: ${props => 
    props.selected ? 'white' : props.theme.colors.text};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => 
      props.selected ? props.theme.colors.primary : props.theme.colors.accent};
    color: white;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const SliderContainer = styled.div`
  width: 100%;
  margin: 20px 0;
`;

export const Slider = styled.input.attrs({ type: 'range' })`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  -webkit-appearance: none;
  appearance: none;
  background: ${props => props.theme.colors.lightGray};
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${props => props.theme.colors.primary};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`;

export const ValueDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: bold;
  margin: 20px 0;
`;

export const UnitToggle = styled.div`
  display: flex;
  border-radius: 30px;
  overflow: hidden;
  margin: 20px 0;
  border: 1px solid ${props => props.theme.colors.lightGray};
`;

export const UnitOption = styled.button`
  padding: 10px 30px;
  border: none;
  background-color: ${props => 
    props.active ? props.theme.colors.secondary : 'white'};
  color: ${props => 
    props.active ? 'white' : props.theme.colors.darkGray};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  transition: all 0.2s ease-in-out;
`;

export const HorizontalRule = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${props => props.theme.colors.lightGray};
  margin: 15px 0;
`;

export const InfoBox = styled.div`
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 12px;
  padding: 16px;
  margin: 16px 0;
  width: 100%;
  text-align: left;
`;

export const FooterText = styled.p`
  color: ${props => props.theme.colors.darkGray};
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`;

export const Icon = styled.div`
  margin-right: 10px;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 5px 0;
`;

export const HealthMetric = styled.div`
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 12px;
  padding: 12px;
  margin: 10px 0;
  width: 100%;

  h3 {
    font-size: 24px;
    color: ${props => props.theme.colors.primary};
  }

  p {
    font-size: 16px;
    color: ${props => props.theme.colors.darkGray};
  }
`; 