import React from "react";
import { useNavigate } from "react-router-dom";
import { doctors } from "../src/assets/BookMyDoc_assets/assets/assets_frontend/assets";
const BookDoctors = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[100vw] outerBookDoctors flex justify-center">
      <div className="innerBookDoctors w-[80vw]  flex flex-col items-center">
        <h1 className="text-3xl font-medium innerBookDoctorsHeading">
          Top Doctors to Book
        </h1>
        <p>Simply browse through our extensive list of trusted doctors.</p>
        <div className="bookDoctorsCards flex w-[85vw] flex-wrap justify-center gap-[3vw] ">
          {doctors.slice(0,10).map((data) => (
            <div
              className="bookDoctorsInnerCard h-[45vh] w-[14vw] cursor-pointer rounded-xl border-2 border-[#C9D8FF] border-solid"
              onClick={() => navigate(`/Appointment/${data._id}`)}
            >
              <div className="image  bg-[#C9D8FF] w-full h-[75%] rounded-tr-xl rounded-tl-xl">
                <img src={data.image} className="h-[100%] object-cover " alt="" />
                
              </div>
              <div className="information">
                <p className='text-green-500'>
                  Available
                </p>
                <h2 className='font-medium'>{data.name}</h2>
                <h4 className='text-gray-500 text-sm'>{data.speciality}</h4>
              </div>
            </div>
          ))}
          <button className='bg-[#EAEFFF] moreButton rounded-full cursor-pointer' onClick={()=>navigate('/Doctors')}>
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDoctors;
