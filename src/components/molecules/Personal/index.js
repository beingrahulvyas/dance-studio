import React, { memo } from 'react';
import { PersonalSection } from './index.style';

const Personal = ({ content, img, title }) => {
    return (
        <PersonalSection>
            <img src={img} alt="Location" />
            <h4>{title}</h4>
            <address dangerouslySetInnerHTML={{__html: content}}></address>
        </PersonalSection>
    );
}

export default memo(Personal);