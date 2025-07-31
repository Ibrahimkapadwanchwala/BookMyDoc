import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../src/assets/BookMyDoc_assets/assets/assets_frontend/assets';
const Navbar = () => {
    const navigate=useNavigate();
    const[token,setToken]=useState(true);
    const[display,setDisplay]=useState(false)
  return (
    <div className="outerDiv  h-[15vh] w-[100vw] flex justify-center">
        <div className="innerDiv h-[100%] w-[80%]  flex items-center justify-between">
            <img src={assets.logo} alt="Logo" className='h-[100%] cursor-pointer ' onClick={()=>navigate('/')}/>
            <ul className='flex  gap-20 navbarLinks text-xl font-medium'>
                <NavLink to='/'>
                    <li>
                        HOME
                    </li>
                </NavLink>
                <NavLink to='/Doctors'>
                    <li>
                        ALL DOCTORS
                    </li>
                </NavLink>
                <NavLink to='/About'>
                    <li>
                        ABOUT
                    </li>
                </NavLink>
                <NavLink to='/Contact'>
                    <li>
                        CONTACT
                    </li>
                </NavLink>
                
            </ul>
           <div className=' h-[100%] flex items-center w-[15vw] justify-center profile '>
             {token ? 
            <div className='h-[100%] flex flex-col group  w-[80%] items-center  relative'>
               <div className='flex items-center  h-[100%] '>
                 <img src={assets.profile_pic} alt="profile picture" className="h-[50%] profilePicture"/>
                <img src={assets.dropdown_icon} alt="" className='h-[10%] cursor-pointer dropDownIcon'
                onClick={()=>display?setDisplay(false):setDisplay(true)}/>
               </div>
               <div>
                {
                    display? <div className='  text-[#4B5563]flex gap-[1.2vh] text-xl flex-col justify-center cursor-pointer absolute top-[15vh] bg-white left-0'>
                    
                        <p onClick={()=>{
                            navigate('/My-Profile')
                            setDisplay(false);
                        }}>My Profile</p>
                        <p onClick={()=>{navigate('/My-Appointments')
                            setDisplay(false);
                        }}>My Appointments</p>
                        <p onClick={()=>setToken(false)}>Logout</p>
                    
                </div> : <div></div>
                }
               </div>
            </div>
            :<button onClick={()=>navigate('/Login')} id='createAccountButton' className='cursor-pointer bg-[#5F6FFF] rounded-b-full rounded-t-full text-white '>Create Account </button>}
           </div>
        </div>

    </div>
  )
}

export default Navbar
