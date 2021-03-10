import React from 'react';
import styled from 'styled-components';

import starImage from './star.svg';

const Background = styled.div`
    grid-column-end: span 4;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 212px;
    background: linear-gradient(143.33deg, rgba(34, 132, 187, 0.35) 15%, rgba(22, 13, 34, 0.15) 80%);
    backdrop-filter: blur(20px);
    border-radius: 5px;

    &:hover {
        transform: translateY(-4%);
        transition: .2s;
    }
`

const Image = styled.div`
    position: relative;
    width: 30%;
    height: 80%;
    background-image: url(${props => props.image});
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
`

const Description = styled.div`
    margin-left: 3%;
    margin-right: 3%;
`

const Name = styled.h2`
    margin: 0;
    font-size: 1.7rem;
    font-weight: 400;
    margin-bottom: 10px;
    color: #F1F1F1;

    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Length = styled.h3`
    font-size: 1rem;
    font-weight: 200;
    margin-bottom: 28px;
    color: #F9E3B5;
`

const Rating = styled.div`
    display: flex;
    width: 50px;
    justify-content: space-between;
    align-items: center;
`

const RatingNumber = styled.span`
    font-size: 1rem;
    font-weight: 400;
    color: #F9E3B5;   
`

const RatingStar = styled.img`
    width: 15px;
    height: 15px;
`

const Item = ({name, length, rating, img}) => {
    return (
            <Background href="#">
                <Image image={img} />
                <Description>
                    <Name>{name}</Name>
                    <Length>{length}</Length>
                    <Rating>
                        <RatingStar src={starImage} />
                        <RatingNumber>{rating}</RatingNumber>
                    </Rating>
                </Description>
            </Background>
    );
};

export default Item;