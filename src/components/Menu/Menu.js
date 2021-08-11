import React from 'react';

const styles={
    margin: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    minWidth: 140,
    backgroundColor: 'hsl(204, 71%, 38%)',
    height: '100%',
    float: 'left',
}

export default function Menu( {children} ){
    return(
        <nav style={styles}>
            {children}
        </nav>
    );
};