import React from 'react';

Input.defaultProps = {
    bgColor: 'clouds',
    borderSizeProp: 1,
    borderRadiusProp: 6,
    borderColorProp: '#1C6EA4',
};

function Input({ bgColor, color, borderSizeProp, borderRadiusProp, borderColorProp }) {
    const styles = {
        margin: 10,
        padding: 10,
        minWidth: 380,
        maxWidth: 380,
        display: 'block',
        borderStyle: 'dashed',
        backgroundColor: bgColor,
        color: color,
        borderWidth: borderSizeProp,
        borderRadius: borderRadiusProp,
        borderColor: borderColorProp,
    };

    return(
        <input style={styles}
            placeholder="Write your input text ..."></input>
    );
};

export default Input;