import React from 'react';
import {Link} from 'react-router-dom';

const Landingpage = () => {
  return (
    <header className='main-landing'>
        <nav>
            <h1 id = 'name'>LearnerSpace</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/courses">Courses</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/checkout">Checkout</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
export default Landingpage
