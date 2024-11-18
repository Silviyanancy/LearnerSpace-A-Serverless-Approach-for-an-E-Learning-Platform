import React, { useContext } from 'react';
import { CourseCartContext } from '../states/cart';
import {FiChevronUp} from 'react-icons/fi';
import {FiChevronDown} from 'react-icons/fi';
import {useHistory} from 'react-router-dom';

const Cart = () => {
    const history = useHistory();
    const { cart, subtotal, addAmount, reduceAmount} = useContext(CourseCartContext);

    if(!cart.length){
        return <h3>Cart is Empty</h3>
    }

  return (
    <section className="cart">
        <header>
            <h2>My Cart</h2>
        </header>
        <div className="cart-details">
            {cart.map(({id, title, price, image, amount}) => (
                <article key={id} className="itemincart">
                    <div className="video">
                        {/*<img src={image} alt={title}/>*/}
                    </div>
                    <div className="details">
                        <p>{title}</p>
                        <p>$ {price}</p>
                    </div>
                    <div className="amount">
                        <button onClick={() => addAmount(id)}><FiChevronUp /></button>
                        <p>{amount}</p>
                        <button onClick={() => reduceAmount(id, amount)}><FiChevronDown /></button>
                    </div>
                </article>
            ))}
        </div>
        <div>
            <h3>Total: $ {subtotal}</h3>
        </div>
        <div>
            <button className="btn" onClick={() => history.push("/checkout")}>Checkout</button>
        </div>
    </section>

  );
};

export default Cart;
