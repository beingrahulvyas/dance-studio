import styled from 'styled-components';

export const FromOurBlogSection = styled.section`
    padding: 23px 0 60px 0;

    .blogs {
        margin-bottom: 42px;
    }

    .personal {
        margin-bottom: 80px;
    }

    .contact {

        text-align: center;

        h2 {
            font-size: 50px;
            line-height: 44px;
            color: #933798;
            font-weight: 700;
            margin-bottom: 30px;
        }

        p {
            font-size: 24px;
            margin-bottom: 55px;
        }

        input,
        textarea {
            border: 1px solid #e2e2e2;
            padding: 16px 20px;
            box-shadow: 0px 10px 24.5px rgba(226,226,226,0.44);
            width: 100%;
            border-radius: 10px;
            margin-bottom: 28px;
            font-size: 17px;
            letter-spacing: 0px;
            color: #340d35;
            resize: none;

            ::placeholder {
                color: #340d35;
            }
        }

        button {
            padding: 14px 22px;
            border-radius: 19px;
            background-color: #933798;
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 0px;
            color: #ffffff;
            font-weight: 400;
        }
    }
`;