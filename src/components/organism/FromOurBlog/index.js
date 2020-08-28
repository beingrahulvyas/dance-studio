import React, { memo } from 'react';
import { FromOurBlogSection } from './index.style';
import MaxWidth from '../../atoms/MaxWidth';
import Header from '../../atoms/Header';
import Container from '../../atoms/Container';
import Row from '../../atoms/Row';
import Blog from '../../molecules/Blog';
import Personal from '../../molecules/Personal';

const blogData = [
    {
        id: 1,
        bg: require("../../../assets/images/blog1.png"),
    },
    {
        id: 2,
        bg: require('../../../assets/images/blog2png.png'),
    },
    {
        id: 3,
        bg: require('../../../assets/images/blog3.png')
    }
]

const personalData = [
    {
        id: 1,
        img: require('../../../assets/images/location.png'),
        title: 'Address',
        content: "Mr. Walter C. Brown <br /> 49 Featherstone Street, LONDON",
    },
    {
        id: 2,
        img: require('../../../assets/images/phoner.png'),
        title: "Phone",
        content: "+44 (0)7123 123456",
    },
    {
        id: 3,
        img: require('../../../assets/images/phoner.png'),
        title: 'Email',
        content: "info@dancestudio.com <br />contact@dancestudio.com",
    }
]

const FromOurBlog = () => {
    return (
        <FromOurBlogSection>
            <Container>
                <MaxWidth max="514px">
                    <Header
                        heading="From Our Blog"
                        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum " />
                </MaxWidth>
                <Row columnNum={3} gap={42} className="blogs">
                    {
                        blogData && blogData.length !== 0 && blogData.map(({ bg, id }) => (
                            <div>
                                <Blog key={id} bg={bg} />
                            </div>
                        ))
                    }
                </Row>
                <Row columnNum={3} gap={15} className="personal">
                    {personalData && personalData.length !== 0 &&
                        personalData.map(({ id, content, img, title }) => (
                            <div>
                                <Personal key={id} content={content} img={img} title={title} />
                            </div>
                        ))}
                </Row>
                <MaxWidth max="560px">
                    <div className="contact">
                        <h2>Contact Us</h2>
                        <p>Please fill this form in a decent manner</p>
                        <form>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <textarea placeholder="Message" rows={4} />
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </MaxWidth>
            </Container>
        </FromOurBlogSection>
    );
}

export default memo(FromOurBlog);