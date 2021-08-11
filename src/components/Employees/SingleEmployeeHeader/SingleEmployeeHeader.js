import React from 'react';

class SingleEmployeeHeader extends React.Component {
    render(){
        return(
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Surname
                </th>
                <th onClick={this.handleShowMore}>
                    Click for more details ...
                </th>
            </tr>
        );
    };
};

export default SingleEmployeeHeader;