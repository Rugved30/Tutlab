import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './components/users/Register';
import Login from './components/users/Login';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { useAuth } from './AuthContext/AuthContext';
import { RegisterTutor } from './components/RegisterTutor/RegisterTutor';
import PrivateNavbar from './components/Navbar/PrivateNavbar';
import TutorJobs from './components/TutorJobs/TutorJobs';
import FindTutor from './components/FindTutor/FindTutor';
import AboutUs from './components/Aboutus/AboutUs';

function App() {
  //Custom Auth Hook
  const { isAuthenticated } = useAuth();
  return (
    <>
      <BrowserRouter>
        {isAuthenticated ? <PrivateNavbar /> : <Navbar />}
        <Routes>
          <Route path='/register' element={<Registration/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/registertutor' element={<RegisterTutor />}/>
          <Route path='/findtutor' element={<FindTutor />}/>
          <Route path='/gettutorjobs' element={<TutorJobs />}/>
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
