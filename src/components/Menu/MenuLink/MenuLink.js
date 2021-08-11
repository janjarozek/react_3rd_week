import React from 'react';

const styles = {
    padding: 10,
    display: 'block',
    textDecoration: 'none',
    color: 'white',
    active: {
        padding: 10,
        display: 'block',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'hsl(0, 100%, 60%)',
    },
};

export default function MenuLink( {label, to, isActive} ){
    return(
        <a href={to} style={ isActive ? styles.active : styles}>
            {label}
        </a>
    );
};
