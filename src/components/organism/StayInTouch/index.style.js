import styled from 'styled-components';

export const StayInTouchStyle = styled.section`
    background-color: #933798;
    padding: 38px 0 100px 0;

    form {
        position: relative;
        margin-top: 8px;
    }

    form > * {
        font-size: 27px;
        letter-spacing: 0px;
        line-height: 38px;
        color: #000000;

        @media(max-width: 600px) {
            font-size: 18px;
        }
    }

    input {
        padding: 30px 230px 30px 40px;
        width: 100%;
        ::placeholder {
            color: #000000;
        }

        @media(max-width: 768px) {
            padding: 16px 200px 16px 24px;
        } 
    }

    button {
        font-weight: 700;
        padding: 30px 40px;
        background-color: #fbabff;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;

        @media(max-width: 768px) {
            padding: 16px 24px;
        }
    }
`;