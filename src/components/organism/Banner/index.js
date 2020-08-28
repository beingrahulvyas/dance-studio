import React, { memo } from 'react';
import { BannerBox } from './index.style';
import Container from '../../atoms/Container';

const Banner = () => {
    return (
        <BannerBox>
            <Container className="wrapper">
                <section>
                    <h1>Dance <br /> <span>Studio</span> </h1>
                    <p>A Complete Dance Class</p>
                    <button>Join Now</button>
                </section>
            </Container>
        </BannerBox>
    );
}

export default memo(Banner);