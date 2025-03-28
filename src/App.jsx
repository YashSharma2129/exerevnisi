import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NameSignup from './components/NameSignup';
import LandingPage from './components/landing/LandingPage'
import Signin from './components/Signin';
import NoticeBoard from './components/Notice/noticeboard';
import Blog2 from "./components/blog/Blog2.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<NameSignup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path='/noticeboard' element={<NoticeBoard />} />
        <Route path='/blog' element={<Blog2 />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;