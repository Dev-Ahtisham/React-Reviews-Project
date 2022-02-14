import React, { useState } from 'react';
import ReveiwsData from './Data';
import "./index.css";
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const Review = () => {

    const [index, setIndex] = useState(0)
    const { name, job, image, text } = ReveiwsData[index]

    const checkIndex = (newIndex) => {
      if (newIndex > ReveiwsData.length - 1) {
        return (0);
      }
      if (newIndex < 0) {
        return (ReveiwsData.length - 1);
      }
      else {
        return(newIndex);
      }
    }

    const prevReveiw = () => {
      setIndex((index) => {
        console.log(index)
        let newIndex = index - 1
        return(
          checkIndex(newIndex)
        )
      })
    }

    const nextReveiw = () => {
      setIndex((index) => {
        console.log(index)
        let newIndex = index + 1
        return(
          checkIndex(newIndex)
        )
      })
    }

    
  return (
    <div className='Review-Container'>
        <img src={image} alt={name} className="avatar"/>
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>{text}</p>
        <div className="btn-icon">
          <button className='prev-btn' onClick={prevReveiw}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextReveiw}>
            <FaChevronRight />
          </button>
        </div>
    </div>
  )
}

export default Review