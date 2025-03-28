import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NameSignup from './components/NameSignup';
import LandingPage from './components/landing/LandingPage'
import Signin from './components/Signin';
import NoticeBoard from './components/Notice/noticeboard';
import Blog from "./components/blog/Blog.jsx";
import Blog2 from './components/blog/blog2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<NameSignup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path='/noticeboard' element={<NoticeBoard />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog-old' element={<Blog2 />} />
      </Routes>
    </Router>
  );
}

export default App;