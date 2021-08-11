import React from 'react';

class SingleEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false,
        };
    }

    handleShowMore = () => {
        this.setState((state) => {
            return {showMore: !state.showMore};
          });
    }

    render(){
        const { person } = this.props;

        return(
            <tr>
                <td>
                    {person.firstName}
                </td>
                <td>
                    {person.lastName}
                </td>
                {!this.state.showMore &&
                    <td onClick={this.handleShowMore}>
                        MORE...
                    </td>
                }
                {this.state.showMore &&
                    <td onClick={this.handleShowMore}>
                        {`${person.age} | ${person.salary} | ${person.position}`}
                    </td>
                }
            </tr>
        );
    };
};

export default SingleEmployee;