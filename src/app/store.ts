import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import groupReducer from '../features/group/groupSlice'
import studentReducer from '../features/student/studentSlice'

export const store = configureStore({
  reducer: {
    group: groupReducer,
    student: studentReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
