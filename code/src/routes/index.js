import React from 'react'
import Home from '../modules/Home'
import CreatePost from '../modules/CreatePost'
import { Navigate, Route, Routes as Router } from 'react-router-dom'

const Routes = () => {
    const routes = [
        {
            id: 1,
            name: 'home',
            path: '/',
            Component: <Home/>
        },
        {
            id: 2,
            name: 'create post',
            path: '/new-post',
            Component: <CreatePost/>
        },
    ]
    return (
        <Router>
            <Route path='/' element={<Home/>} />
            <Route path='/new-post' element={<CreatePost/>} />
        </Router>
    )
}
/* const PrivateRoute = ({children}) => {
  return (
    <div>index</div>
  )
}

const Routes = () => {
    const routes = [
        {
            id: 1,
            name: 'home',
            path: '/',
            Component: <Home/>
        },
        {
            id: 2,
            name: 'create post',
            path: '/new-post',
            Component: <CreatePost/>
        },
    ]
    return (
        <Router>
        {
            routes.map(({id, name, path, Component}) => {
                return <Route key={id} path={path} element={<PrivateRoute>{Component}</PrivateRoute>} />
            })
        }
        </Router>
    )
} */
export default Routes