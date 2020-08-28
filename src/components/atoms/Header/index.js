import React, { memo } from 'react';
import styled from 'styled-components';

const Heading = styled.header`

    padding: 40px 0;
    text-align: center;

    * {
        letter-spacing: 0px;
    }

    h2 {
        font-size: 45px;
        line-height: 1;
        color: ${props => props.color ? props.color : "#202328"};
        font-weight: 700;
        margin-bottom: 22px;
    }

    p {
        font-size: 16px;
        color: ${props => props.color ? props.color : "#340d35"};
    }
`;

const Header = ({ heading, subheading, className, color }) => {
    return (
        <Heading className={className} color={color}>
            <h2>{heading}</h2>
            <p>{subheading}</p>
        </Heading>
    );
}

export default memo(Header);