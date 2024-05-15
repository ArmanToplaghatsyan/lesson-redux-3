import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudentByGroupId, deleteStudentById, selectStudent } from '../../features/student/studentSlice';
import { Link } from 'react-router-dom';
import { deleteGroupById } from '../../features/group/groupSlice';

export const Students: React.FC = React.memo((): JSX.Element => {
  const dispatch = useDispatch();
  const { students } = useSelector(selectStudent);
  console.log(students);

  return (
    <div>
      {students.map((elm) => {
        return (
          <div key={elm.id}>
            <h2>
              {elm.name} {elm.surname}
            </h2>
            <Link to={'/detailsStudents/'+elm.id}>See More</Link>
            <button onClick={() => {
              dispatch(deleteStudentById(elm.id))
            }}>&times;</button>
          </div>
        );
      })}
    </div>
  );
});
