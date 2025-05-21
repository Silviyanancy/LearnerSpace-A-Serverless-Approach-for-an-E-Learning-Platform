import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import { CourseContext } from '../states/courses';

const Courses = () => {
    const {courses} = useContext(CourseContext);

    if (!courses.length){
        return <h3>No Courses Available</h3>
    } 

  return (
    <section className='courses'>
        {courses.map(({image: image, id, title}) => (
          <article key={id} className='course'>
              <div className='course-video'>
                  {/*<img src={image} alt={title}/>*/}
                  <h3>{title}</h3>
              </div>
              <Link to={`/coursedetails/${id}`} className='btn course-link'>Details</Link>
          </article>
   ))}
  </section>
  )
}

export default Courses
