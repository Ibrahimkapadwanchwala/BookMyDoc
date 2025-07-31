import React from 'react'
import { assets,specialityData } from '../src/assets/BookMyDoc_assets/assets/assets_frontend/assets'
import {useNavigate} from 'react-router-dom'
const SpecialityMenu = () => {
const navigate=useNavigate();    
  return (
    <div className='  w-[100vw] flex items-center flex-col text-[#1F2937]'>
      <h3 className='text-3xl font-medium'>
        Find By Speciality
      </h3>
      <p className='specialityMenuPara  w-[35vw] text-center flex'>
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>
      <div className="specialityDoctors flex gap-[2vw] justify-center">
        {
          specialityData.map((data)=>(
            <div className='flex flex-col justify-center items-center specialityDoctordiv cursor-pointer' onClick={()=>navigate(`/Doctors/${data.speciality}`)
           }>
              <img src={data.image} alt="" className='h-[12vh] specialityDoctorImage'/>
              <p className='text-[1vw] specialityDoctorName'>{data.speciality}</p>
            </div>
          ))
          
        }
      </div>
    </div>
  )
}

export default SpecialityMenu
