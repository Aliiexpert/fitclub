import React from 'react'
import "./programs.css"
import {programsData} from "../../data/programsData"
import rightArrow from "../../assets/rightArrow.png"
const programs = () => {
  return (
    <div className='programs'>
      <div className='programs-header'>
        <span className='stroke-text'> EXPLORE OUR</span><span>PROGRAMS</span><span className='stroke-text'>TO SHAPE YOU</span>

      </div>
<div className="program-categories">
    {
        programsData.map((program)=>(
            <div className="category">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now"><span>Join Now</span> <span><img src={rightArrow} alt="" /></span></div>
            </div>
        ))
    }
</div>
    </div>
  )
}

export default programs
