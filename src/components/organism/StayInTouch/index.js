import React, { memo } from 'react';
import MaxWidth from '../../atoms/MaxWidth';
import Header from '../../atoms/Header';
import Container from '../../atoms/Container';
import { StayInTouchStyle } from './index.style';

const StayInTouch = () => {
    return (
        <StayInTouchStyle>
            <Container>
                <MaxWidth max="865px">
                    <Header
                        heading="Stay In Touch!"
                        subheading="Sign-up with your email address to receive news and updates."
                        color="#ffffff" />
                    <form>
                        <input type="email" placeholder="Email Address" />
                        <button type="submit">Subscribe</button>
                    </form>
                </MaxWidth>
            </Container>
        </StayInTouchStyle>
    );
}

export default memo(StayInTouch);