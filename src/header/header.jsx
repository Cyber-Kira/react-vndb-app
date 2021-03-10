import React from 'react';
import styled from 'styled-components';

import avatarImage from './avatarImage.png';

const HeaderWrap = styled.header`
    grid-column: 2 / span 12;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(12, minmax(auto, 1fr));
    grid-gap: 20px;
`

const Heading = styled.h1`
    grid-column: 1 / span 4;
    font-size: 36px;
    color: #fff;
    font-weight: 700;
`

const Name = styled.a`
    grid-column: 11;
    text-decoration: none;
    font-size: 24px;
    color: #fff;
    font-weight: 400;
    text-transform: uppercase;
`

const Avatar = styled.img`
    grid-column: 12;
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

const Header = () => {
    return (
        <HeaderWrap>
            <Heading>Visual Novel DB</Heading>
            <Name href="#">mora</Name>
            <Avatar src={avatarImage} />
        </HeaderWrap>
    );
};

export default Header;