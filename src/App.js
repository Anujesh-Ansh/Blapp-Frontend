
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import QrCodePage from './pages/QrCodePage';
import CreatePostPage from './pages/CreatePostPage';
import PostPage from './pages/PostPage';
import { UserContextProvider } from './context/UserContext';
import EditPostPage from './pages/EditPostPage';



function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={
          <IndexPage/>
        } />
        
        <Route path="/login" element={
          <LoginPage/>
        } />
        <Route path="/register" element={
          <RegisterPage/>
        } />
        <Route path="/create" element={
          <CreatePostPage/>
        } />
        <Route path="/post/:id" element={
          <PostPage/>
        } />
        <Route path="/edit/:id" element={
          <EditPostPage/>
        } />
        <Route path="/qrCode" element={
          <QrCodePage/>
        } />

      </Route>
      
    </Routes>
    </UserContextProvider>
    
  );
}
//to login, create,register,post and edit blogs

export default App;
