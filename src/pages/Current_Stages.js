import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col, RightArrow } from '../styles/tableComponents';
import { Heading, Text, FontWeight, FontStyle } from "styled-typography";


const Wrapper = styled('div')`
    padding: 4em;
    background: #5f39dd;
    position: center;
`;



const Current_Stages = () => (
    <Wrapper>
        <Heading
            fontWeight={FontWeight.Bold}
            fontStyle={FontStyle.Normal}
            headingSize={5}
            color="black"
        >
            Polygnosis Success List
        </Heading>
        <Grid>
            <Row>
                {/* Header Key for table */}
                <Col size={1}>
                    Key:
                </Col>
                <Col size={1}>
                    <Text
                        color="green"
                        fontWeight={FontWeight.Bold}
                    >
                        Done
                    </Text>
                </Col>
                <Col size={10}>
                    <Text
                        color="red"
                        fontWeight={FontWeight.Bold}
                    >
                        Not Done
                    </Text>
                </Col>
            </Row>
            <Row>
                <Col size={2} color="green">Create Base Model Website</Col>
                <Col size={1} color="green">------<RightArrow /></Col>
                <Col size={3} color="green">React, Express JS, NPM, Node JS, JavaScript, HTML &amp; CSS</Col>
            </Row>
            <Row>
                <Col size={2} color="green">Learn IPFS and Ethereum Smart Contracts</Col>
                <Col size={1} color="green">------<RightArrow /></Col>
                <Col size={3} color="green">Linkedin, YouTube, &amp; Udemy courses</Col>
            </Row>
            <Row>
                <Col size={2} color="red">Integrate database with IPFS</Col>
                <Col size={1} color="red">------<RightArrow /></Col>
                <Col size={3} color="red">first initial steps</Col>
            </Row>
            <Row>
                <Col size={2} color="red">Create Protected Routing</Col>
                <Col size={1} color="red">------<RightArrow /></Col>
                <Col size={3} color="red">React, Express JS, NPM, Node JS, JavaScript</Col>
            </Row>
            <Row>
                <Col size={2} color="red">Make small deployment</Col>
                <Col size={1} color="red">------<RightArrow /></Col>
                <Col size={3} color="red">Experiement w/ peers</Col>
            </Row>
        </Grid>

    </Wrapper>
);

export default Current_Stages;