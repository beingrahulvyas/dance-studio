import styled from 'styled-components';

export const BlogSection = styled.div`

    padding-bottom: 20px;
    background-color: #ffffff;
    border: 1px solid rgba(221,221,221,0.15);
    box-shadow: 0px 17px 32.5px rgba(209,209,209,0.21);

    .content {
        text-align: center;
        padding: 25px;

        p {
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 1px;
            line-height: 23px;
            color: #999999;
        }

        h5 {
            font-size: 19px;
            letter-spacing: 1px;
            line-height: 27px;
            color: #212121;
            font-weight: 700;
            margin: 20px 0;
        }

        button {
            font-size: 14px;
            letter-spacing: 3px;
            line-height: 23px;
            color: #212121;
            padding: 14px;
            border-left: 1px solid #d7d7d7;
            border-right: 1px solid #d7d7d7;
            margin: 28px 0 38px 0;
        }

    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & img {
            width: 12px;
            height: 16px;
        }

        > * {
            display: flex;
        }

        .comment > img {
            margin-right: 10px;
        }

        .social-links > img:not(:last-child) {
            margin-right: 18px;
        }
    }
`;
