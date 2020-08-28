import React, { memo } from 'react';
import Header from '../../atoms/Header';
import Container from '../../atoms/Container';
import MaxWidth from '../../atoms/MaxWidth';
import { GalleryBox } from './index.style';
import Row from '../../atoms/Row';
import BackgroundImage from '../../atoms/BackgroundImage';

const Gallery = () => {
    return (
        <GalleryBox>
            <Container>
                <MaxWidth max="724px">
                    <Header
                        heading="Our Gallery"
                        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum " />
                </MaxWidth>
                <Row columnNum={3} gap={20}>
                    <BackgroundImage height="272px" border="3px solid #933798" src={require('../../../assets/images/1.png')} />
                    <BackgroundImage height="272px" border="3px solid #933798" src={require('../../../assets/images/2.png')} />
                    <BackgroundImage height="272px" border="3px solid #933798" src={require('../../../assets/images/3.png')} />
                    <BackgroundImage height="272px" border="3px solid #933798" src={require('../../../assets/images/4.png')} />
                    <BackgroundImage height="272px" border="3px solid #933798" src={require('../../../assets/images/5.png')} />
                    <BackgroundImage height="272px" border="3px solid #933798" src={require('../../../assets/images/6.png')} />
                </Row>
            </Container>
        </GalleryBox>
    );
}

export default memo(Gallery);