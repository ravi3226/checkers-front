import React from 'react'
import { Container, Typography } from '@mui/material';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { io } from 'socket.io-client';
import './App.css';
import Dashboard from './components/Dashboard';
import GuardedRoute from './components/GuardComponent';
import SignupComponent from './components/SignupComponent';
import SigninComponent from './components/SigninComponent';

var socket = io('http://localhost:8080')

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignupComponent socket={socket} />,
    },
    {
      path: "/signin",
      element: <SigninComponent socket={socket} />,
    },
    {
      path: "/dashboard",
      element: <GuardedRoute component={Dashboard} socket={socket} />
    }
  ]);

  return (
    <RouterProvider router={router}>
      <Container>
        <Typography>checkers</Typography>
      </Container>
    </RouterProvider>
  );
}

export default App;
