import styled from 'styled-components';
import BannerImg from '../../../assets/images/banner-bg.png';

export const BannerBox = styled.div`
    background-color: #933798;
    max-height: 725px;
    height: 100%;
    min-height: 100vh;
    background-image: url(${BannerImg});
    background-repeat: no-repeat;
    background-position-x: center;
    display: flex;
    align-items: center;

    section {
        max-width: 405px;
        text-align: center;

        h1 {
            font-size: 116px;
            letter-spacing: 6px;
            color: #ffffff;
            line-height: 1;
            margin-bottom: 20px;
        }

        h1 > span {
            letter-spacing: 1px;
            color: #ffd600;
        }

        p {
            font-size: 23px;
            color: #ffffff;
            font-weight: 400;
            text-align: center;
            margin-bottom: 38px;
        }

        button {
            border-radius: 23px;
            background-color: #ffd600;
            font-size: 19px;
            color: #340d35;
            font-weight: 500;
            padding: 16px 37px;
        }

    }

`;