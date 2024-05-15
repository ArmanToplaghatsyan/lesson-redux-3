import React from 'react';
import { useDispatch } from 'react-redux';
import { IGroup } from '../../type/type';
import { addGroup } from '../../features/group/groupSlice';
import { useForm } from 'react-hook-form';

export const AddGroups: React.FC = React.memo((): JSX.Element => {
  const disptach = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IGroup>();
  const save = (data: IGroup): void => {
    disptach(addGroup({ ...data, id: Date.now() }));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(save)}>
        <h2>Add Group </h2>
        <label>name</label>
        <input
          type="text"
          placeholder="name"
          {...register('name', { required: 'Enter name' })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <label>teacher</label>
        <input
          type="text"
          placeholder="teacher"
          {...register('teacher', {
            required: 'Enter teacher',
            pattern: {
              value: /^[a-zA-Z ]+$/,
              message: 'Without symbol',
            },
          })}
        />
        {errors.teacher && <p>{errors.teacher.message}</p>}
        <label>count</label>
        <input
          type="text"
          placeholder="count"
          {...register('count', {
            required: 'Enter count',
            pattern: {
              value: /^\d+$/,
              message: 'NaN',
            },
          })}
        />
        {errors.count && <p>{errors.count.message}</p>}
        <button>save</button>
      </form>
    </div>
  );
});
