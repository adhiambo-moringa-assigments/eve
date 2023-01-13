import React from 'react';
import './styles/index.css';
import Root from './routes/root';
import Index from './routes/index';
import Group from './routes/group';
import ReactDOM from 'react-dom/client';
import Individual from './routes/individual';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Index />
            },
            {
                path: '/groups/:groupId',
                element: <Group />
            },
            {
                path: '/individuals/:individualId',
                element: <Individual />
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
