import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NameSignup from './components/NameSignup';
import LandingPage from './components/landing/LandingPage'
import Signin from './components/Signin';
import NoticeBoard from './components/Notice/noticeboard';
import BlogPage from "./components/blog/blog.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<NameSignup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path='/noticeboard' element={<NoticeBoard />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;