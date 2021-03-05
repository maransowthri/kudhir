import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = (props) => {
    const backdrop = props.show && (
        <div onClick={props.toggleState} className={classes.Backdrop}></div>
    );

    return backdrop;
}

export default Backdrop;