import styled from 'styled-components';
const PlayMadLib = () => {

    return (
        <Container>
    
            <StyledInput type="text" placeholder="Enter a noun" />
            <StyledInput type="text" placeholder="Enter a verb" />
            <StyledInput type="text" placeholder="Enter an adjective" />
            <StyledInput type="text" placeholder="Enter an adverb" />
            <StyledInput type="text" placeholder="Enter a plural noun" />
            <StyledInput type="text" placeholder="Enter a number" />
            <StyledInput type="text" placeholder="Enter a color" />
            <StyledInput type="text" placeholder="Enter a place" />
            <StyledInput type="text" placeholder="Enter a name" />
            <StyledButton>Submit</StyledButton>
        </Container>

    )
};

export default PlayMadLib;

// Styled Components

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
    background-color: red;
`;
const StyledInput = styled.input`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    border-style: solid;
    border-color: #4caf50;
    border-width: 5px;
    padding: 30px 30px;
    border-radius: 50px;
`;
const StyledButton = styled.button`
    display: inline; 
    flex-direction: column;
    align-items: center;
    background-color: #4caf50;
    color: white;
    padding: 30px 30px;
    border: none;
    border-radius: 100px;
`;