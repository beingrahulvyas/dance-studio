import React, { memo } from 'react';
import styled from 'styled-components';

const Box = styled.div`
    max-width: ${props => props.max ? props.max : '724px'};
    width: 100%;
    margin: 0 auto;
`;

const MaxWidth = ({ children, max }) => {
    return (
        <Box max={max}>
            {children}
        </Box>
    );
}

export default memo(MaxWidth);