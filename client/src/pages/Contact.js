import React from 'react';
import styled from 'styled-components';
import {
    Linkedin,
    Twitter,
    Github,
    Medium
} from '@styled-icons/boxicons-logos';
import { Heading, Link, FontWeight, FontStyle } from "styled-typography";



const LinkedInIcon = styled(Linkedin)`
    color: blue;
`;
const TwitterIcon = styled(Twitter)`
    color: blue;
`;
const GithubIcon = styled(Github)`
    color: black;
`;
const MediumIcon = styled(Medium)`
    color: black;
`;

const Wrapper = styled('div')`
    padding: 4em;
    background: #5f39dd;
    position: center;
`;


const Contact = () => (
    <Wrapper>
        <Heading
            fontWeight={FontWeight.Bold}
            fontStyle={FontStyle.Normal}
            headingSize={5}
            color="white"
        >
            Visit our social media links for updates
        </Heading>
        <ul>
            <li>
                <LinkedInIcon size="48" />
                <Link 
                    fontWeight={FontWeight.Bold}
                    fontStyle={FontStyle.Oblique}
                    color="black"
                    lineHeight={0}
                    href="https://www.linkedin.com"
                    target="_blank"
                >
                     LinkedIn
                </Link>
            </li>
            <li>
                <GithubIcon size="48" />
                <Link 
                    fontWeight={FontWeight.Bold}
                    fontStyle={FontStyle.Normal}
                    color="black"
                    lineHeight={0}
                    href="https://www.github.com"
                    target="_blank"
                >
                     Github
                </Link>
            </li>
            <li>
                <TwitterIcon size="48" />
                <Link 
                    fontWeight={FontWeight.Bold}
                    fontStyle={FontStyle.Normal}
                    color="black"
                    lineHeight={0}
                    href="https://www.twitter.com"
                    target="_blank"
                >
                     Twitter
                </Link>
            </li>
            <li>
                <MediumIcon size="48" />
                <Link 
                    fontWeight={FontWeight.Bold}
                    fontStyle={FontStyle.Normal}
                    color="black"
                    lineHeight={0}
                    href="https://www.medium.com"
                    target="_blank"
                >
                     Medium
                </Link>
            </li>
        </ul>
    </Wrapper>
);

export default Contact;