import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
    render() {
        let rows = this.props.rows.map(row => {
            return (
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.title}</td>
                </tr>
            );
        });
        return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th> 
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
      )
  }
}

Table.propTypes = {
    rows: PropTypes.array
};

export default Table;