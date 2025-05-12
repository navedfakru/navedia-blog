import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/store.js';
import {AddPost, AllPost, EditPost, Home, Login, Post, RET} from './pages'
import App from './App.jsx'; 
import {Protected} from "./components"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/all-posts' element={<AllPost />} />
      <Route path='/login' element={<Login />} />
      <Route path='/post/:slug' element={ <Post />} />
      <Route path='/add-post' element={<Protected authentication><AddPost /></Protected>} />
      <Route path='/edit-post/:slug' element={<Protected authentication><EditPost /></Protected>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
