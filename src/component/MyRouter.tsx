import React from "react";
import {useRoutes} from 'react-router-dom'
import { Layout } from "../pages/Layout";
import { Groups } from "../pages/Grops";
import { AddGroups } from "../pages/AddGroups";
import { Students } from "../pages/Students";
import { AddStudents } from "../pages/AddStudents";
import { DetailsStudents } from "../pages/DetailsStudents";
import { DetailsGroups } from "../pages/DetailsGroups";
import { MyError } from "../pages/MyError";

export const MyRouter = React.memo(() => {
    const router = useRoutes([
        {
            path: '/',
            element: <Layout/>,
            children:[
              {path: '', element: <Groups/>},
              {path: 'addGroups', element: <AddGroups/>},
              {path: 'students', element: <Students/>},
              {path: 'addStudents', element: <AddStudents/>},
              {path: 'detailsStudents/:id', element: <DetailsStudents/>},
              {path: 'detailsGroups/:id', element: <DetailsGroups/>},
            ]
        },
        {
            path: '*',
            element: <MyError/>
        }
    ])

    return router;
})