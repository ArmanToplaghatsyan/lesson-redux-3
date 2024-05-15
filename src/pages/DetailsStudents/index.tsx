import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findStudentById, selectStudent } from '../../features/student/studentSlice';
import { useParams } from 'react-router-dom';
import { selectGroup } from '../../features/group/groupSlice';
import { IGroup } from '../../type/type';

export const DetailsStudents: React.FC = React.memo((): JSX.Element => {
  const {groups} = useSelector(selectGroup)
  const [group, setGroup] = useState<IGroup>({} as IGroup);
  const {student} = useSelector(selectStudent)
  const dispatch = useDispatch();
  const {id} = useParams()
  useEffect(() => {
    if(id){
      dispatch(findStudentById(id))
      const fin = groups.find((elm) => elm.id ==+id)
      if(fin){
        setGroup(fin)
      }
    }
  }, [id])
  

  return (
    <div>
      <h2>{student.name} {student.surname}</h2>
      <p>{student.groupId}</p>
<hr/>
      <p>{group.name}</p>
      <p>{group.teacher}</p>
      <p>{group.count}</p>
    </div>
  );
});
