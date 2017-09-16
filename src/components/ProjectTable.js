import React from 'react';

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

export default ProjectTable;