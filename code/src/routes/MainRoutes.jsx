import React from 'react';
import { Route, Routes as Router } from 'react-router-dom';
import HomePage from '../pages/home/Home.page';
import SideBar from '../components/SideBar';
import ProfilePage from '../pages/Profile/Profile.page';
import ProfileTaggedPage from '../pages/Profile/Tagged/ProfileTaggedPage';
import ProfiledSavedPage from '../pages/Profile/Saved/ProfiledSavedPage';
import ProfilePostsPage from '../pages/Profile/posts/ProfilePostsPage';
import EditProfilePage from '../pages/Profile/editprofile/EditProfile.page';
import { CreatePostPage } from '../pages/createpost/CreatePost.page';

const MainRoutes = () => {
  return (
    <div className="flex h-dvh">
      <SideBar />
      <div className="mt-[16px] w-[calc(100%-50px)] overflow-y-auto px-[10px]  md:px-[40px] lg:w-[calc(100%-255px)]">
        <Router>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />}>
            <Route path="tagged" element={<ProfileTaggedPage />} />
            <Route path="saved" element={<ProfiledSavedPage />} />
            <Route path="posts" element={<ProfilePostsPage />} />
          </Route>
          <Route path="/profile/edit" element={<EditProfilePage />} />
          <Route path="/create-post" element={<CreatePostPage />} />
        </Router>
      </div>
    </div>
  );
};
export default MainRoutes;
