import React from 'react';
import styled from 'styled-components';

import Item from '../item';

import fateImg from './fate.jpg';
import sayaImg from './saya.jpg';
import gImg from './g.jpg';
import grisImg from './gris.jpg';
import katawaImg from './katawa.jpg';
import muvImg from './muv-luv.jpg';

const List = styled.div`
    grid-column: 1 /span 8;
    display: grid;
    grid-template-columns: repeat(8, minmax(auto, 1fr));
    grid-gap: 20px;
`

const ItemList = () => {
    return (
        <List>
            <Item name={'Fate/Stay Night'} img={fateImg} length={'Very long (> 50 hours)'} rating={'8.62'} />

            <Item name={'Saya no Uta'} img={sayaImg} length={'Short (2 - 10 hours)'} rating={'8.09'} />

            <Item name={'G-senjou no Maou'} img={gImg} length={'Medium (10 - 30 hours)'} rating={'8.37'} />

            <Item name={'Grisaia no Kajitsu -Le Fruit de la Grisaia-'} img={grisImg} length={'Very long (> 50 hours)'} rating={'8.41'} />

            <Item name={'Katawa Shoujo'} img={katawaImg} length={'Medium (10 - 30 hours)'} rating={'7.84'} />

            <Item name={'Muv-Luv Alternative'} img={muvImg} length={'Very long (> 50 hours)'} rating={'9.08'} />
        </List>
    );
};

export default ItemList;