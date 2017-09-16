import React  from 'react';
import PropTypes from 'prop-types';

const ProjectTable = ({rows}) => (
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
);

ProjectTable.propTypes = {
    rows: PropTypes.array
};

export default ProjectTable;