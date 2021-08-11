import React from 'react';

import {Button, Input, Textarea } from '../Form';

const styles = {
    display: 'block',
    align: 'left',
    width: 400,
};

export default function Form() {
    return(
        <form style={styles}>
            <Input />
            <Textarea />
            <Button
                label="Submit"
                bgColor="#1C6EA4"
                color="white"
            />
        </form>
    );
};