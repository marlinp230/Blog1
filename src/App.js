import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './Menu';
import { AuthProvider, AuthRoute } from './auth';
import { BlogPage } from './BlogPage';
import { HomePage } from './HomePage';
import { ProfilePage } from './ProfilePage';
import { BlogPost } from './BlogPost';
import { LoginPage } from './LoginPage';
import { LogoutPage } from './LogoutPage';
import React, { useState } from 'react';
import { blogdata } from "./blogdata";

function App() {
const [Blogs, setBlogs] = useState(blogdata)
  return (
    <>
      <HashRouter>
        <AuthProvider>
        <Menu />

        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route path='/blog' element={<BlogPage  Blogs={Blogs} setBlogs={setBlogs}/>} ></Route>
          <Route path='/blog/:slug' element={<BlogPost Blogs={Blogs}  setBlogs={setBlogs}/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route 
            path='/logout' 
            element={
              <AuthRoute>
                <LogoutPage />
              </AuthRoute> 
            }
          /> 
          <Route 
            path='/profile' 
            element={
              <AuthRoute>
                <ProfilePage />
              </AuthRoute>
            } 
          />

          <Route path='*' element={<p>Not Found</p>}/>
        </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
