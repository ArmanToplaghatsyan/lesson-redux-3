import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteGroupById, selectGroup } from '../../features/group/groupSlice';
import { Link } from 'react-router-dom';
import { deleteStudentByGroupId } from '../../features/student/studentSlice';

export const Groups: React.FC = React.memo((): JSX.Element => {
const {groups} = useSelector(selectGroup);
console.log(groups);

const disptach = useDispatch()

  return (
    <div>
      {
        groups.map((elm) => {
          return(
          <div key={elm.id}>
            <h2>Name: {elm.name}</h2>
            <Link to={"/detailsGroups/"+elm.id}>See More</Link>
            <button onClick={() => {
              disptach(deleteGroupById(elm.id))
              disptach(deleteStudentByGroupId(elm.id))
            }
              }>&times;</button>
          </div>
          )
        })
      }
    </div>
  );
});
