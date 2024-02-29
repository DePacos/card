import './App.css';
import styled from 'styled-components';
import CardImage from "./components/CardImage";
import CardDesc from "./components/CardDesc";
import {StyledMainCardButton, StyledSecondCardButton} from "./components/CardButton";
import StyledCardTitle from "./components/CardTitle";
import {theme} from "./styles/ThemeStyled";


function App() {
    return (
        <div className="App">
            <StyledCard>
                <CardImage />
                <StyledCardTitle>Headline</StyledCardTitle>
                <CardDesc />
                <StyledWrapperCardButton>
                    <StyledMainCardButton bgColor={theme.colors.secondary}>See more</StyledMainCardButton>
                    <StyledSecondCardButton>See more</StyledSecondCardButton>
                </StyledWrapperCardButton>
            </StyledCard>
        </div>
    );
}

export default App;

const StyledCard = styled.div`
    width: 300px;
    margin: auto;
    padding: 10px 10px 22px 10px;
    border-radius: 15px;
    box-shadow: 0 4px 20px 5px rgba(0,0,0,0.1);
`;

const StyledWrapperCardButton = styled.div`
    display: flex;
    gap: 12px;
`