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
    }

    input {
        padding: 30px 40px;
        width: 100%;
        ::placeholder {
            color: #000000;
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
    }
`;