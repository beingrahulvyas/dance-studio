import styled from 'styled-components';

export const FooterSection = styled.footer`
    padding: 110px 0;
    background-color: #49134c;
    text-align: center;
    color: #fff;

    .logo {
        max-width: 200px;
        margin-bottom: 45px;
    }

    p {
        font-size: 17px;
        letter-spacing: 0px;
        color: #c0c0c0;
        font-weight: 500;
        margin-bottom: 30px;
    }

    .social > figure {
        display: inline-flex;
        border-radius: 26px;
        background-color: #ffd600;
        width: 53px;
        height: 53px;
        padding: 15px;

        :not(:last-child) {
            margin-right: 23px;
        }
    }
`;