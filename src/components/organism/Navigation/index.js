import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../atoms/Container';
import { Nav } from './index.style';

const Navigation = () => {
    return (
        <Nav>
            <Container className="wrapper">
                <NavLink to="/" exact>
                    <img src={require('../../../assets/images/logo.png')} alt="Dance Studio" />
                </NavLink>
                <div className="navListGrp">
                    <NavLink to="/" exact activeClassName="activeNav">Home</NavLink>
                    <NavLink to="/about" activeClassName="activeNav">About</NavLink>
                    <NavLink to="schedule" activeClassName="activeNav">Schedule</NavLink>
                    <NavLink to="gallery" activeClassName="activeNav">Gallery</NavLink>
                    <NavLink to="contact" activeClassName="activeNav">Contact</NavLink>
                </div>
            </Container>
        </Nav>
    );
}

export default memo(Navigation);
