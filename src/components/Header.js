import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <section className="header">
        <h2>LearnerSpace</h2>
        <h3>An online learning system</h3>
        <Link className='btn' to="/courses">View All Courses</Link>
    </section>   
  )
}
export default Header
