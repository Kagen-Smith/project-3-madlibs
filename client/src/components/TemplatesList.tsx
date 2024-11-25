import React from 'react';
import { Link } from 'react-router-dom';
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
    template: (arg0: string) => void;
}

const TemplatesList = ({ story, onSelect }: StoryProps) => {
   
    return (
        <Container> 
            <StyledLink to='/play' onClick={() => onSelect(story._id)}>My italian Summer!</StyledLink>
            <StyledLink to='/play' onClick={() => onSelect(story._id)}>how i scored the winning run!</StyledLink>
            <StyledLink to='/play'onClick={() => onSelect(story._id)}>my hero is...</StyledLink>
            <StyledLink to='/play' onClick={() => onSelect(story._id)}>what happened to my homework?</StyledLink>

             

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
    const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    `;
