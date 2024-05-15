import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStudent } from '../../type/type';
import { addStudent, selectStudent } from '../../features/student/studentSlice';
import { useForm } from 'react-hook-form';
import { selectGroup } from '../../features/group/groupSlice';

export const AddStudents: React.FC = React.memo((): JSX.Element => {
  const { groups } = useSelector(selectGroup);
  const { students } = useSelector(selectStudent);
  const dispatch = useDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IStudent>();
  const save = (data: IStudent): void => {
    dispatch(addStudent({ ...data, id: Date.now() }));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(save)}>
        <h2>Add Students </h2>
        <label>name</label>
        <input
          type="text"
          placeholder="name"
          {...register('name', { required: 'Enter name' })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <label>surname</label>
        <input
          type="text"
          placeholder="surname"
          {...register('surname', { required: 'Enter surname' })}
        />
        {errors.surname && <p>{errors.surname.message}</p>}
        <label>age</label>
        <input
          type="text"
          placeholder="age"
          {...register('age', {
            required: 'Enter age',
            pattern: {
              value: /^\d+$/,
              message: 'NaN',
            },
          })}
        />
        {errors.age && <p>{errors.age.message}</p>}
        <label>email</label>
        <input
          type="text"
          placeholder="email"
          {...register('email', {
            required: 'Enter email',
            pattern: {
              value: /^\w+$/,
              message: 'NaN',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <select
          {...register('groupId', {
            required: 'Enter group',
            validate: (val) => {
              const arr = students.filter((elm) => elm.groupId == val);
              const group = groups.find((elm) => elm.id == val);

              return (group && group?.count > arr.length) || 'group length';
            },
          })}
        >
          {groups.map((elm) => {
            return (
              <option value={elm.id} key={elm.id}>
                {elm.name}
              </option>
            );
          })}
        </select>
        {errors.groupId && <p>{errors.groupId.message}</p>}
        <button>save</button>
      </form>
    </div>
  );
});
