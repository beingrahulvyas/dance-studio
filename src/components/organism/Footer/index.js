import React from 'react';
import { FooterSection } from './index.style';
import Container from '../../atoms/Container';
import MaxWidth from '../../atoms/MaxWidth';

const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <MaxWidth max="515px">
                    <img className="logo" src={require('../../../assets/images/logo.png')} alt="dance studio" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
maecenas accumsan lacus vel facilisis. </p>
                    <div className="social">
                        <figure>
                            <img src={require('../../../assets/images/fb-black.png')} alt="facebook" />
                        </figure>
                        <figure>
                            <img src={require('../../../assets/images/twiter-black.png')} alt="twitter" />
                        </figure>
                        <figure>
                            <img src={require('../../../assets/images/instagram.png')} alt="instagram" />
                        </figure>
                        <figure>
                            <img src={require('../../../assets/images/dribble-black.png')} alt="dribble" />
                        </figure>
                    </div>
                </MaxWidth>
            </Container>
        </FooterSection>
    );
}

export default Footer;