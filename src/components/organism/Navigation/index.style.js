import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: #6d2b70;
    box-shadow: 0px 3px 3.5px rgba(0,0,0,0.35);

    .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navListGrp {
        display: flex;
        margin-bottom: 20px;
    }

    .navListGrp a {
        padding: 40px 12px 12px 12px;
        color: #ffffff;
        font-size: 17px;
        font-weight: 700;
        background-color: unset;
        text-transform: uppercase;
    }

    .navListGrp a:not(:last-child) {
        margin-right: 8px;
    }

    .navListGrp a:hover,
    .navListGrp .activeNav {
        background-color: #ffd600;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        color: #6d2b70;
    }
`;