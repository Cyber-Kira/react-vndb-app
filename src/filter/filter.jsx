import React from 'react';
import styled from 'styled-components';

import addImg from './add.svg';
import removeImg from './minus.svg';

const FilterWrapper = styled.div`
    position: relative;
    grid-column: 9 / span 4;
    grid-row: span 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(143.33deg, rgba(34, 132, 187, 0.35) 15.07%, rgba(22, 13, 34, 0.15) 80.99%);
    backdrop-filter: blur(30px);
    border-radius: 15px;
`

const Search = styled.input`
    font-size: 24px;
    font-weight: 400;
    color: #F1F1F1;
    width: 85%;
    height: 60px;
    margin-top: 1.25rem;
    text-indent: 1rem;

    background: linear-gradient(160.82deg, rgba(249, 227, 181, 0.1) 8.11%, rgba(72, 111, 133, 0.1) 51.16%, rgba(205, 181, 204, 0.05) 90.77%);
    border: 0;
    border-radius: 5px;

    ::placeholder {
        color: #F1F1F1;
        opacity: .9;
    }
`

const FilterSort = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    font-size: 1.3rem;
    color: #F1F1F1;
    width: 85%;
    height: 50px;
    margin-top: 1.25rem;
    padding: 0 1.25rem;

    background: linear-gradient(160.82deg, rgba(249, 227, 181, 0.1) 8.11%, rgba(72, 111, 133, 0.1) 51.16%, rgba(205, 181, 204, 0.05) 90.77%);
    border-radius: 5px;
`

const AddToField = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    font-size: 1.3rem;
    color: #F1F1F1;
    width: 85%;
    height: 50px;
    margin-top: 1.25rem;
    padding-left: 1.25rem;
    padding-right: .5rem;

    background: linear-gradient(160.82deg, rgba(249, 227, 181, 0.1) 8.11%, rgba(72, 111, 133, 0.1) 51.16%, rgba(205, 181, 204, 0.05) 90.77%);
    border-radius: 5px;
`

const AddToInput = styled.form`
    display: flex;
    width: 65%;
`

const AddToSelect = styled.input`
    font-size: 14px;
    font-weight: 400;
    color: #F1F1F1;
    width: 80%;
    height: 28px;
    text-indent: 1rem;

    background: linear-gradient(101.88deg, rgba(255, 255, 255, 0.15) 50.72%, rgba(255, 255, 255, 0.1) 65.78%);
    border: 0;
    border-radius: 5px;
`

const AddToButton = styled.button`
    display: flex;
    justify-content: center;
    background-image: url(addImg);
    align-items: center;
    width: 30px;
    height: 28px;
    margin-left: .5rem;
    cursor: pointer;

    background: linear-gradient(137.67deg, rgba(255, 255, 255, 0.15) 27.66%, rgba(255, 255, 255, 0.1) 69.3%);
    border: 0;
    border-radius: 5px;

    & img {
        filter: ${props => props.sign === 'plus' ? 
        'invert(96%) sepia(51%) saturate(7456%) hue-rotate(298deg) brightness(127%) contrast(95%)' :
        'invert(17%) sepia(55%) saturate(6799%) hue-rotate(357deg) brightness(89%) contrast(99%)'};
    }
`

const TagWrapper = styled.div`
    display: flex;
    width: 85%;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.25rem;
    padding-right: .5rem;
`

const Tag = styled.div`
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 1.1rem;
    color: #F1F1F1;
    width: 85%;
    height: 28px;
    padding-left: 1.25rem;

    background: linear-gradient(160.82deg, rgba(249, 227, 181, 0.1) 8.11%, rgba(72, 111, 133, 0.1) 51.16%, rgba(205, 181, 204, 0.05) 90.77%);
    border-radius: 5px;
`

const Filter = () => {
    return (
        <FilterWrapper>
            <Search placeholder="Search" />
            <FilterSort>
                <a href="#">Title</a>
                <a href="#">Rating</a>
                <a href="#">Popularity</a>
            </FilterSort>

            <AddToField>
                <span>Language</span>
                <AddToInput>
                    <AddToSelect />
                    <AddToButton sign="plus">
                        <img src={addImg} width="15" alt="plus sign"/>
                    </AddToButton>
                </AddToInput>
            </AddToField>

            <AddToField>
                <span>Tag</span>
                <AddToInput>
                    <AddToSelect />
                    <AddToButton sign="plus">
                        <img src={addImg} width="15" alt="plus sign"/>
                    </AddToButton>
                </AddToInput>
            </AddToField>

            <TagWrapper>
                <Tag>
                    <span>Male protagonist</span>
                </Tag>
                <AddToButton>
                    <img src={removeImg} width="15" alt="remove sign" />
                </AddToButton>
            </TagWrapper>

            <TagWrapper>
                <Tag>
                    <span>Sexual content</span>
                </Tag>
                <AddToButton>
                    <img src={removeImg} width="15" alt="remove sign" />
                </AddToButton>
            </TagWrapper>

            <TagWrapper>
                <Tag>
                    <span>Harem Ending</span>
                </Tag>
                <AddToButton>
                    <img src={removeImg} width="15" alt="remove sign" />
                </AddToButton>
            </TagWrapper>

            <TagWrapper>
                <Tag>
                    <span>All Loli Heroines</span>
                </Tag>
                <AddToButton>
                    <img src={removeImg} width="15" alt="remove sign" />
                </AddToButton>
            </TagWrapper>
        </FilterWrapper>
    );
};

export default Filter;