import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'

Button.defaultProps = {
    label: "CLICK ME",
    bgColor: "red",
    color: "green",
};

function Button({ label, bgColor, color }) {
    const space = " _ ";
    const styles = {
        margin: 10,
        border: 0,
        width: 400,
        height: 40,
        borderRadius: 10,
        padding: 8,
        backgroundColor: bgColor,
        color: color,
    };

    return(
        <button style={styles}>
            <FontAwesomeIcon icon={faBeer} />
            {space}
            {label}
        </button>
    );
};

export default Button;