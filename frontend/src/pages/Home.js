import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';

import { CourseContext } from '../states/courses';

const Home = () => {
    const { popular } = useContext(CourseContext);
    if(!popular.length){
        return <h3>No Popular Courses</h3>
    }

  return (
    <>
        <Header />
        <section className='popular'>
          <header className='popular-head'>
              <h2>Popular Courses</h2>
          </header>
          <div className='courses popular-list'>
            {popular.map(({ id, image, title }) => (
              <article key={id} className='course popular-course'>
                <div className='course-video'>
                  {/*<img src={image} alt = {title}/>*/}
                  <h3>{title}</h3>
                </div>
                <Link to={`courses/${id}`} className="btn course-link">details</Link>
              </article>
            ))}

          </div>
        </section>
    </>
  
  )
}

export default Home;
