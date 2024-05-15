import { createSlice } from '@reduxjs/toolkit';
import { IGroup } from '../../type/type';
import { RootState } from '../../app/store';

const initialState: { groups: IGroup[]; group: IGroup } = {
  groups: [
    { id: 1, name: 'React', teacher: 'Anna Anyan', count: 5 },
    { id: 2, name: 'Redux', teacher: 'Karina Bardamyan', count: 4 },
    { id: 3, name: 'React-Redux', teacher: 'Vardan Margaryan', count: 3 },
    { id: 4, name: 'Redux-Toolkit', teacher: 'Ani Anyan', count: 2 },
    { id: 5, name: 'UX UI', teacher: 'Ebrat Serobyan', count: 4 },
  ],
  group: {} as IGroup,
};

const groupSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    addGroup: (state, action) => {
      state.groups.push(action.payload);
    },
    deleteGroupById: (state, action) => {
      state.groups = state.groups.filter((elm) => elm.id != action.payload);
    },
    findGroupById: (state, action) => {
      const data = state.groups.find((elm) => elm.id == action.payload);
      if (data) {
        state.group = data;
      }
    },
  },
});

export const { addGroup, deleteGroupById, findGroupById } = groupSlice.actions;

export const selectGroup = (state: RootState) => state.group;

export default groupSlice.reducer;
