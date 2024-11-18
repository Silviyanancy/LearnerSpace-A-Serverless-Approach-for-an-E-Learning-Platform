import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { CourseContext } from '../states/courses';
import { CourseCartContext } from '../states/cart';

const CourseDetails = () => {
    const {id} = useParams();
    const history = useHistory();
    const {courses} = useContext(CourseContext);
    const {moveToCart} = useContext(CourseCartContext);

    const course = courses.find((course) => {
        return course.id === id;
    });
    if (!course){
        return <h3>Loading...</h3>
    }

    const {image: url, title, description, instructor, price} = course;
    
  return (
    <section className='course-details'>
        <div className='detail-image'>
           {/*<img src={url} alt="Course Name"/>*/}
        </div>
        <div className='course-description'>
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>{instructor}</h3>
            <h4>Price - ($CAD) {price}</h4>
            <button className='btn'
            onClick={() => {
                moveToCart({...course, id});
                history.push("/cart");
            }}>
                Move to Cart
            </button>
        </div>
    </section>    
    );
};


export default CourseDetails
