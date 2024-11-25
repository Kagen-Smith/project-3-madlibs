import styled from 'styled-components';
import { useState } from 'react';

const PlayMadLib = () => {
    const [noun, setNoun] = useState('');
    const [verb, setVerb] = useState('');
    const [adjective, setAdjective] = useState('');
    const [adverb, setAdverb] = useState('');
    const [pluralNoun, setPluralNoun] = useState('');
    const [number, setNumber] = useState('');
    const [color, setColor] = useState('');
    const [place, setPlace] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = () => {
        if (!noun || !verb || !adjective || !adverb || !pluralNoun || !number || !color || !place || !name.trim()) return;
        const madLib = `Once upon a time, there was a ${adjective} ${noun} named ${name}. ${name} lived in a ${color} ${place} with ${number} ${pluralNoun}. ${name} loved to ${verb} ${adverb}.`;
        alert(madLib);
    }
    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <Container>
    
            <StyledInput type="text" placeholder="Enter a noun" onChange={(e) => setNoun(e.target.value)} onKeyUp={handleKeyUp}/>
            <StyledInput type="text" placeholder="Enter a verb" onChange={(e) => setVerb(e.target.value)} onKeyUp={handleKeyUp}/>
            <StyledInput type="text" placeholder="Enter an adjective" onChange={(e) => setAdjective(e.target.value)} onKeyUp={handleKeyUp} />
            <StyledInput type="text" placeholder="Enter an adverb" onChange={
                (e) => setAdverb(e.target.value)} onKeyUp={handleKeyUp}/>
            <StyledInput type="text" placeholder="Enter a plural noun" onChange={(e) => setPluralNoun(e.target.value)} onKeyUp={handleKeyUp}/>
            <StyledInput type="text" placeholder="Enter a number"onChange={(e) => setNumber(e.target.value)} onKeyUp={handleKeyUp}/>
            <StyledInput type="text" placeholder="Enter a color" onChange={(e) => setColor(e.target.value)} onKeyUp={handleKeyUp}/>
            <StyledInput type="text" placeholder="Enter a place" onChange={(e) => setPlace(e.target.value)} onKeyUp={handleKeyUp}/>
            <StyledInput type="text" placeholder="Enter a name"onChange={(e) => setName(e.target.value)} onKeyUp={handleKeyUp}/>
            <StyledButton onClick={handleSubmit} >Submit</StyledButton>
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