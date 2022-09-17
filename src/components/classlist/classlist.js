import React from "react";
import { Link } from "react-router-dom";
import ClassCard from "../classcard/classcard"
import './classlist.css';

const img = ["https://i0.wp.com/ambience.ca/wp-content/uploads/2017/11/University-Heights_Medical_Office_Final-e1511206922539.jpg?fit=700%2C394&ssl=1", "https://imageio.forbes.com/specials-images/imageserve/6295223fb0e093a14023b85b/S3-Schwartz-017A2678-proof--1-/960x0.jpg?format=jpg&width=960"]
function ClassList({ data }) {
  return (
    <div className='cards'>
    <h1>{ 'Top Results'}</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
      <ul className='cards__items'>
          {data.map((doctor, index) => (
            <ClassCard
            src = {img[index]}
            text={doctor.name}
            path = {`/appointment`}
            key = {index}
            doctor = {doctor.specialty}
            />
          ))}
 </ul>
        </div>
      </div>
    </div>
  );
}

export default ClassList;