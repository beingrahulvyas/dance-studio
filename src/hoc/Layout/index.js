import React from 'react';
import Navigation from '../../components/organism/Navigation';
import { Header } from './index.style';

const Layout = ({ children }) => {
    return (
        <>
            <Header>
                <Navigation />
            </Header>
            <main>
                {children}
            </main>
            <footer></footer>
        </>
    );
}

export default Layout;