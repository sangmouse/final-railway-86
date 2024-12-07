import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.scss"
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserList from './components/UserList'
import UserForm from './components/UserForm';
import SignIn from './components/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <UserList/>
      },
      {
        path: 'create-user',
        element: <UserForm/>
      }
    ]
  },
  {
    path: '/sign-in',
    element: <SignIn/>
  }
])


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
