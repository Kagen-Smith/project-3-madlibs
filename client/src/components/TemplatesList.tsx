import React from 'react';
import styled from 'styled-components';


interface StoryProps {
    story: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        map(arg0: (story: any) => import("react/jsx-runtime").JSX.Element): React.ReactNode;
        length: number;
        _id: string;
        title: string;
        story: string;
    };
    isLoggedUser: boolean;
    onSelect: (arg0: string) => void;
    template: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        map(arg0: (story: any) => import("react/jsx-runtime").JSX.Element): React.ReactNode;
        length: number;
        _id: string;
        title: string;
        story: string;
    };
}

const TemplatesList = ({ story, onSelect }: StoryProps) => {
   
    return (
        <Container> 
            <StyledButton onClick={() => onSelect(story._id)}>My italian Summer!</StyledButton>
            <StyledButton onClick={() => onSelect(story._id)}>how i scored the winning run!</StyledButton>
            <StyledButton onClick={() => onSelect(story._id)}>my hero is...</StyledButton>
            <StyledButton onClick={() => onSelect(story._id)}>what happened to my homework?</StyledButton>

             

        </Container>
    )
}

    export default TemplatesList;

    // Styled Components
    const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
    position: relative;
    background-color: red;
    `;
    const StyledButton = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    `;
