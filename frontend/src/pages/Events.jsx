import React, {useEffect, useState} from 'react'
import axios from 'axios';

let caseStudies = [];
function Events() {
  const [event , setevent] = useState();
  useEffect(() => {
    test();
  },[])

  const test = async () => { 
    try{
      const response = await axios.get('/api/events');
      setevent(response.data);
      caseStudies = response.data;
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  }
  const handleDelete = async (id) => {
    try {
      // console.log(id);
      await axios.delete(`https://localhost:3000/api/events/${id}`);
      test();
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };
  
  console.log(caseStudies);
  return (
    <>
      <div className='row'>
          {caseStudies.map((caseItem) => (
            <div className='case' key={caseItem._id}>
              <div className='event-details '>
                <span>
                  {caseItem.subtitle}
                  <h2>{caseItem.title}</h2>
                </span>
              </div>
              <div className='event-category'>
                <span>
                  {caseItem.subtitle}
                  <h2>{caseItem.Category}</h2>
                </span>
              </div>
              <div className='event-duration'>
                <span>
                  {caseItem.subtitle}
                  <h2>{caseItem.total_duration}</h2>
                </span>
              </div>
              <div className='event-date'>
                <span>
                  {caseItem.subtitle}
                  <h2>{caseItem.date}</h2>
                </span>
              </div>
              <button onClick= {() => handleDelete(caseStudies._id)}>
                delete
              </button>
              <br></br>
            </div>
          ))}
      </div>
    </>
  )
}

export default Events;