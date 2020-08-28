import React, { memo } from 'react';
import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* margin-left: ${props => (props.gap / 2) + "px"};
    margin-right: ${props => (props.gap / 2) + "px"}; */

    > div {
        flex-basis: ${props => props.columnNum && 100 / props.columnNum + "%"};
        min-width: ${props => props.columnNum && 100 / props.columnNum + "%"};
        margin-left: -${props => (props.gap / 2) + "px"};
        margin-right: -${props => (props.gap / 2) + "px"};
        padding-left: ${props => (props.gap / 2) + "px"};
        padding-right: ${props => (props.gap / 2) + "px"};
        margin-bottom: ${props => (props.gap / 2) + "px"};
        display: inline-grid;
    }
`;

const Row = ({ children, columnNum, gap, className }) => {
    return (
        <Box columnNum={columnNum} gap={gap} className={className}>
            {children}
        </Box>
    );
}

export default memo(Row);