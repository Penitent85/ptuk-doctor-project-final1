import React from 'react'
import DoctorCard from './DoctorCard'
import doctors from '../../utils/doctor-data'
import './doctors.css'

const Doctors = () => {
  return (
    <div className='doctor-container' >
        {
            doctors.map((doctor) => (
                <DoctorCard key={doctor.id} {...doctor} />
            ))
        }
      
    </div>
  )
}

export default Doctors
