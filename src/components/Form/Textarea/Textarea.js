import React from 'react';

Textarea.defaultProps = {
    bgColor: 'clouds',
    color: 'black',
    borderSizeProp: 1,
    borderRadiusProp: 6,
    borderColorProp: '#1C6EA4'
};

function Textarea({ bgColor, color, borderSizeProp, borderRadiusProp, borderColorProp }) {
    const styles = {
        margin: 10,
        padding: 10,
        width: 380,
        display: 'block',
        borderStyle: 'dashed',
        resize: 'vertical',
        backgroundColor: bgColor,
        color: borderColorProp,
        borderWidth: borderSizeProp,
        borderRadius: borderRadiusProp,
        borderColor: borderColorProp,
    };

    return(
        <textarea style={styles}
            placeholder="Write your input text ..."></textarea>
    );
};

export default Textarea;