import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, Navigate, useNavigate } from 'react-router';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { setPosts } from './store/postsSlice'
import { service } from './appwrite/confing';
import { Footer, Header } from './components';


function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const isDev = process.env.NODE_ENV
    console.log("App.jsx", isDev)
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
          // console.log("userData:: app.jsx", userData)
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, []);

  useEffect(() => {
    service.getPosts().then((allPosts) => {
      if (allPosts) {
        dispatch(setPosts(allPosts))
      }
    })
  }, [])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App