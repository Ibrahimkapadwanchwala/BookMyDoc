import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors';
import MyAppointments from '../pages/MyAppointments';
import MyProfile from '../pages/MyProfile';
import Appointment from '../pages/Appointment';
import Navbar from '../components/Navbar';
import Login from '../pages/Login';
import {Routes,Route} from 'react-router-dom';
function App() {
 

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/My-Appointments' element={<MyAppointments/>}/>
        <Route path='/My-Profile' element={<MyProfile/>}/>
        <Route path='/Doctors' element={<Doctors/>}/>
        <Route path='/Doctors/:speciality' element={<Doctors/>}/>
        <Route path='/Doctors/:speciality' element={<Doctors/>}/>
        <Route path='/Appointment/:speciality' element={<Appointment/>}/>
        <Route path='/Appointment' element={<Appointment/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
