import React from 'react'
import { useNavigate } from 'react-router-dom'
const Header = () => {
     const navigate=useNavigate();
  return (
   <div className='homePageOuter w-[100vw]  h-[80vh] flex justify-center items-center '>
      <div className="homePageInner w-[80%]  h-[90%] rounded-xl bg-[#5F6FFF] flex  items-center">
        <div className='content h-[100%] w-[50%]  flex flex-col justify-center gap-[2vh] '>
          <h1 className='text-white font-bold text-4xl leading-[7vh]'>
          Book Appointment With Trusted Doctors 
        </h1>
        <div className="bookAppointmentContent flex text-white">
          <img src="../src/assets/BookMyDoc_assets/assets\assets_frontend\group_profiles.png" alt="" />
          <p className='text-md'>
            Simply browse through our extensive list of trusted doctors,
schedule your appointment hassle-free.
          </p>
        </div>
        <button onClick={()=>navigate('/Appointment')} className='cursor-pointer flex bg-white bookAppointmentButton rounded-full w-[15vw] justify-center text-[#595959] gap-[1.2vw]'>
          Book Appointment
          <img src="../src/assets/BookMyDoc_assets/assets\assets_frontend\arrow_icon.svg" alt="" /> 
        </button>
        </div>
        <div className="heroImage relative h-[100%] w-[50%] ">
          <img src="../src/assets/BookMyDoc_assets/assets\assets_frontend\header_img.png" alt="Header image" className='absoulte bottom-0 h-[100%]'/>
        </div>
      </div>
    </div>
  )
}

export default Header
