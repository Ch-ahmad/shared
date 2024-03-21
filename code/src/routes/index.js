import React from "react";
import CreatePost from "../modules/CreatePost";
import { Route, Routes as Router } from "react-router-dom";
import HomePage from "../pages/home/Home.page";
import SideBar from "../components/SideBar";
import ProfilePage from "../pages/Profile/Profile.page";
import ProfileTaggedPage from "../pages/Profile/Tagged/ProfileTaggedPage";
import ProfiledSavedPage from "../pages/Profile/Saved/ProfiledSavedPage";
import ProfilePostsPage from "../pages/Profile/posts/ProfilePostsPage";

const Routes = () => {
  return (
    <div className="flex h-dvh">
      <SideBar />
      <div className="px-[10px] md:px-[40px] mt-[16px] w-[calc(100%-50px)]  lg:w-[calc(100%-255px)] overflow-y-auto">
        <Router>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/new-post"
            element={<CreatePost />}
          />
          <Route
            path="/profile"
            element={<ProfilePage />}
          >
            <Route
              path="tagged"
              element={<ProfileTaggedPage />}
            />
            <Route
              path="saved"
              element={<ProfiledSavedPage />}
            />
            <Route
              path="posts"
              element={<ProfilePostsPage />}
            />
          </Route>
        </Router>
      </div>
    </div>
  );
};
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
export default Routes;
