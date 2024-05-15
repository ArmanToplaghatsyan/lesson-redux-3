import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findGroupById, selectGroup } from '../../features/group/groupSlice';
import { Link, useParams } from 'react-router-dom';
import { selectStudent } from '../../features/student/studentSlice';
import { IStudent } from '../../type/type';

export const DetailsGroups: React.FC = React.memo((): JSX.Element => {
  const { group } = useSelector(selectGroup);
  const { students } = useSelector(selectStudent);
  const [arr, setArr] = useState<IStudent[]>([]);
  console.log(group);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(findGroupById(id));
      setArr([...students.filter((elm) => elm.groupId == +id)]);
    }
  }, [id]);

  return (
    <div>
      <h3>Name - {group.name}</h3>
      <p>Teacher - {group.teacher}</p>
      <p>Count - {group.count}</p>
      <hr />
      {arr.map((elm) => {
        return (
          <div key={elm.id}>
            <p>
              {elm.name} {elm.surname}
            </p>
            <Link to={'/detailsStudents/' + elm.id}>See More</Link>
          </div>
        );
      })}
    </div>
  );
});
