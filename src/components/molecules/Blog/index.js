import React from 'react';
import BackgroundImage from '../../atoms/BackgroundImage';
import { BlogSection } from './index.style';

const Blog = ({ bg }) => {
    return (
        <BlogSection>
            <BackgroundImage src={bg} height="250px" />
            <div className="content">
                <p>Travelling</p>
                <h5>Standard Image Post</h5>
                <p>January 25, 2016</p>
                <button>Read More</button>
                <div className="footer">
                    <div className="comment">
                        <img src={require('../../../assets/images/comment.png')} alt="Comment" />
                        <p>06 Comment</p>
                    </div>
                    <div className="social-links">
                        <img src={require('../../../assets/images/dribble.png')} alt="Dribble" />
                        <img src={require('../../../assets/images/fb.png')} alt="Twitter" />
                        <img src={require('../../../assets/images/twitter.png')} alt="Comment" />
                        <img src={require('../../../assets/images/pinterest.png')} alt="Comment" />
                    </div>
                </div>
            </div>
        </BlogSection>
    );
}

export default Blog;