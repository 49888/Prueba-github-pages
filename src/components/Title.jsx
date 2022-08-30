import React from 'react';
import styled from 'styled-components';


const StyledTitle = styled.div`

    background-color: black;
    width: 800px;
    margin: auto;
    padding: 20px;
    color: white;
    text-align: center;
    border-radius: 15px;
    font-size: 25pt;
`;

function Title() {


    return (<div className='Title'>
        <StyledTitle>Funciona Github pages con react : O</StyledTitle>
    </div>);
}

export default Title;