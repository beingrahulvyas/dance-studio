import React, { memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../atoms/Container';
import { Nav, NavMenu } from './index.style';

const Navigation = () => {
    
    const [isShowed, setIsShowed] = useState(false);

    const onToggleNav = () => {
        setIsShowed(!isShowed);
    }

    return (
        <Nav isShowed={isShowed}>
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
                <NavMenu onClick={onToggleNav}>
                    {
                        !isShowed ? <i className="fa fa-bars"></i> : <i className="fa fa-times"></i>
                    }
                </NavMenu>
            </Container>
        </Nav>
    );
}

export default memo(Navigation);
