import React, { memo } from 'react';
import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

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

    @media(max-width: 768px) {
        flex-direction: ${props => props.md && props.md.direction ? props.md.direction : null};
        > div {
            ${props => props.md && ({
                "flex-basis": props.md.columnNum ? 100 / props.md.columnNum + "%" : null,
                "min-width": props.md.columnNum ? 100 / props.md.columnNum + "%" : null,
                "margin-left": props.md.gap ? -(props.md.gap / 2) + "px" : null,
                "margin-right": props.md.gap ? -(props.md.gap / 2) + "px" : null,
                "padding-left": props.md.gap ? (props.md.gap / 2) + "px" : null,
                "padding-right": props.md.gap ? (props.md.gap / 2) + "px" : null,
                "margin-bottom": props.md.gap ? (props.md.gap / 2) + "px" : null,
            })}

            ${props => props.md ? props.md.columnNum ? props.md.columnNum === 1 ? ({
                "margin-left": "0px",
                "margin-right": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
                "margin-bottom": props.md.gap ? props.md.gap + "px" : null,
            }) : null : null : null };
        }
    }

    @media(max-width: 600px) {
        flex-direction: ${props => props.sm && props.sm.direction ? props.sm.direction : null};
        > div {
            ${props => props.sm ? ({
                "flex-basis": props.sm.columnNum ? 100 / props.sm.columnNum + "%" : null,
                "min-width": props.sm.columnNum ? 100 / props.sm.columnNum + "%" : null,
                "margin-left": props.sm.gap ? -(props.sm.gap / 2) + "px" : null,
                "margin-right": props.sm.gap ? -(props.sm.gap / 2) + "px" : null,
                "padding-left": props.sm.gap ? (props.sm.gap / 2) + "px" : null,
                "padding-right": props.sm.gap ? (props.sm.gap / 2) + "px" : null,
                "margin-bottom": props.sm.gap ? (props.sm.gap / 2) + "px" : null,
            }) : null};

            ${props => props.sm ? props.sm.columnNum ? props.sm.columnNum === 1 ? ({
                "margin-left": "0px",
                "margin-right": "0px",
                "padding-left": "0px",
                "padding-right": "0px",
                "margin-bottom": props.sm.gap ? props.sm.gap + "px" : null,
            }) : null : null : null };
        }
    }
`;

const Row = ({ children, columnNum, gap, className, md, sm }) => {
    return (
        <Box columnNum={columnNum} md={md} sm={sm} gap={gap} className={className}>
            {children}
        </Box>
    );
}

export default memo(Row);