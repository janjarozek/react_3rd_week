import React from 'react';

import SingleEmployee from './SingleEmployee';
import SingleEmployeeHeader from './SingleEmployeeHeader';

const styles = {
    margin: 10,
    padding: 10,
    maxWidth: 400,
    display: 'block',
    borderStyle: 'dashed',
    backgroundColor: 'hsl(204, 71%, 88%)',
    color: 'hsl(204, 71%, 38%)',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'hsl(204, 71%, 38%)',
    fontFamily: 'Trebuchet MS',
    fontSize: 14,
    textAlign: 'left',
};

export default function Employees( {employeesData} ){
    return(
        <table style={styles}>
            <SingleEmployeeHeader
                    key={`Employee-header`}
                    person={Object.keys(employeesData)} />
            {employeesData.map((elem) =>
                <SingleEmployee
                    key={`Employee-${elem.id}`}
                    person={elem} />
            )}
        </table>
    );
};