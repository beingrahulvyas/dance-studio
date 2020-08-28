import React from 'react';
import styled from 'styled-components';

const Box = styled.span`

    && {
            margin-top: 4px;
            margin-left: 16px;
            position: absolute;
            left: 0;
            bottom: ${props => props.bottom ? props.bottom : "-20px"};
            font-size: 14px;
            color: #9c0505;
    }
`;

const ErrorMessage = ({ message, bottom }) => {
    return (
        <Box bottom={bottom}>{message}</Box>
    );
}

export default ErrorMessage;