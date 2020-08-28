import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    background-image: url(${props => props.src && props.src});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border: ${props => props.border && props.border};
    height: ${props => props.height && props.height};
`;

const BackgroundImage = ({ children, src, border, height }) => {
    return (
        <Box src={src} border={border} height={height}>
            {children}
        </Box>
    );
}

export default memo(BackgroundImage);