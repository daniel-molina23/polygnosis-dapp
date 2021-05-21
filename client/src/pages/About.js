import React from "react";
import styled from 'styled-components';

const Wrapper = styled.section`
    padding: 4em;
    background: #5f39dd;
`;

const Title = styled.main`
    text-align: center;
    font-size: 30px;
    color: white;
`;

const Headline = styled.h1`
    font-family: 'Roboto Condensed', sans-serif;
    color: black;
`;

const Text = styled.code`
    margin-top: 10px;
    font-size: 25px;
    color: black;
`;


const About = () => (
    <Wrapper>
        <Title>
            <robotoGlobalStyle />
            <Headline>Currently in Sealth Mode.</Headline>
            <Text>
                build(project);
            </Text>
        </Title>
    </Wrapper>
);

export default About;