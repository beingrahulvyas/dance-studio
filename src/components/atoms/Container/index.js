import React, { memo } from 'react';
import classes from './index.module.css';

const Container = ({ children, className }) => {
    return (
        <div className={[classes.container, className].join(' ')}>
            {children}
        </div>
    );
}

export default memo(Container);