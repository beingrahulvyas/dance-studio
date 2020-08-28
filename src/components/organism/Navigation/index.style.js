import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: #6d2b70;
    box-shadow: 0px 3px 3.5px rgba(0,0,0,0.35);
    position: relative;

    .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 90px;
    }

    .navListGrp {
        display: flex;
        margin-bottom: 20px;
        transition: all .4s ease-in-out;

        @media(max-width: 768px) {
            position: absolute;
            left: 100%;
            top: 90px;
            flex-direction: column;
            min-width: 360px;
            transform: ${props => props.isShowed && "translateX(-100%)"};
            background-color: rgba(0,0,0,0.5);
            border-bottom-left-radius: 10px;
        }
    }

    .navListGrp a {
        padding: 40px 12px 12px 12px;
        color: #ffffff;
        font-size: 17px;
        font-weight: 700;
        background-color: unset;
        text-transform: uppercase;

        @media(max-width: 768px) {
            padding: 36px;
        }
    }

    .navListGrp a:not(:last-child) {
        margin-right: 8px;

        @media(max-width: 768px) {
            margin-right: 0;
            margin-bottom: 8px;
        }
    }

    .navListGrp a:hover,
    .navListGrp .activeNav {
        background-color: #ffd600;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        color: #6d2b70;

        @media(max-width: 768px) {
            border-bottom-right-radius: unset;
        }
    }
`;

export const NavMenu = styled.button`
    font-size: 32px;
    color: #fff;
    margin-right: 16px;
    display: none;

    @media(max-width: 768px) {
        display: block;
    }
`;