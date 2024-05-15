import React from 'react';
import { Link } from 'react-router-dom';

export const Menu: React.FC = React.memo((): JSX.Element => {
  return (
    <div>
      <nav>
        <ul>
            <li><Link to={'/'}>Groups</Link></li>
            <li><Link to={'/addGroups'}>Add Groups</Link></li>
            <li><Link to={'/addStudents'}>Add Students</Link></li>
            <li><Link to={'/students'}>Students</Link></li>
        </ul>
      </nav>
    </div>
  );
});
