import React from 'react';
import styled from 'styled-components';


const styledTitle = styled.div`

    background-color: black;
    width: 800px;
    margin: auto;
    padding: 20px;
    color: white;
    text-align: center;
    border-radius: 15px;
`;

function Title() {


    return (<div className='Title'>
        <styledTitle>Funciona Github pages con react : O</styledTitle>
    </div>);
}

export default Title;