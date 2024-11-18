import React, {useState, useEffect} from 'react';

const CourseCartContext = React.createContext();

const CourseCartProvider = ( {children} ) => {
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const subtotal = [...cart].reduce((subtotal, {amount, price}) => {
            return (subtotal += amount * price);
        }, 0);
        setSubtotal(parseFloat(subtotal.toFixed(2)));
    }, [cart]);

    const addAmount = (id) => {
        const cartupdate = [...cart].map((itembought) => {
            return itembought.id === id ? { ...itembought, amount: itembought.amount + 1} : itembought;
        });
        setCart(cartupdate);
    };

    const reduceAmount = (id, amount) => {
        let cartupdate = [];
        if (amount === 1) {
            cartupdate = [...cart].filter((itembought) => itembought.id !== id);
        }else {
            cartupdate = [...cart].map((itembought) => {
                return itembought.id === id ? { ...itembought, amount: itembought.amount - 1 } : itembought;
            });
        }
        setCart(cartupdate);
    };

    const moveToCart = (course) => {
        const {id, title, price, image} = course;
        const itemincart = [...cart].find((itembought) => itembought.id === id);
        if (itemincart){
            addAmount(id);
        }else{
            const itemsincart = [...cart, {id, title, image, price, amount: 1}];
            setCart(itemsincart);
        }
    };

    const emptyCart = () => {
        setCart([]);
    };

    return(
        <CourseCartContext.Provider value={{cart, subtotal, moveToCart, addAmount, reduceAmount, emptyCart}}>
            {children}
        </CourseCartContext.Provider>
    );
};

export {CourseCartProvider, CourseCartContext};
