import { createSlice } from '@reduxjs/toolkit';
import { IStudent } from '../../type/type';
import { RootState } from '../../app/store';

const initialState: { students: IStudent[]; student: IStudent } = {
  students: [
    {
      id: 1,
      name: 'Ani',
      surname: 'Ohanyan',
      groupId: 5,
      age: 17,
      email: 'a@gmail.com',
    },
    {
      id: 2,
      name: 'Markus',
      surname: 'Dalaqyan',
      groupId: 1,
      age: 18,
      email: 'o@gmail.com',
    },
    {
      id: 3,
      name: 'Karen',
      surname: 'Nahapetsyan',
      groupId: 3,
      age: 19,
      email: 'k@gmail.com',
    },
    {
      id: 4,
      name: 'Mari',
      surname: 'Sargsyan',
      groupId: 2,
      age: 20,
      email: 'm@gmail.com',
    },
    {
      id: 5,
      name: 'Lina',
      surname: 'Ayunc',
      groupId: 5,
      age: 21,
      email: 'l@gmail.com',
    },
  ],
  student: {} as IStudent,
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    deleteStudentById: (state, action) => {
      state.students = state.students.filter((elm) => elm.id != action.payload);
    },
    findStudentById: (state, action) => {
      const data = state.students.find((elm) => elm.id == action.payload);

      if (data) {
        state.student = data;
      }
    },
    deleteStudentByGroupId: (state, action) => {
      state.students = state.students.filter(
        (elm) => elm.groupId != action.payload,
      );
    },
  },
});

export const {
  addStudent,
  deleteStudentById,
  findStudentById,
  deleteStudentByGroupId,
} = studentSlice.actions;

export const selectStudent = (state: RootState) => state.student;

export default studentSlice.reducer;
