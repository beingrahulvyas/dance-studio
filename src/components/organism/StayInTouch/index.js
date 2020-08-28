import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import MaxWidth from '../../atoms/MaxWidth';
import Header from '../../atoms/Header';
import Container from '../../atoms/Container';
import { StayInTouchStyle } from './index.style';
import ErrorMessage from '../../atoms/ErrorMessage';

const StayInTouch = () => {

    const { handleSubmit, register, errors } = useForm();

    const onSubmit = () => {

    }

    return (
        <StayInTouchStyle>
            <Container>
                <MaxWidth max="865px">
                    <Header
                        heading="Stay In Touch!"
                        subheading="Sign-up with your email address to receive news and updates."
                        color="#ffffff" />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input 
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            ref={register({
                                required: "Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid Email Field"
                                }
                            })} />
                        <button type="submit">Subscribe</button>
                        {errors.email && <ErrorMessage bottom="-36px" message={errors.email.message} />}
                    </form>
                </MaxWidth>
            </Container>
        </StayInTouchStyle>
    );
}

export default memo(StayInTouch);