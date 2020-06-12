import React, {useState, createContext} from 'react'
import data from './data';


export const BookContext = createContext();

export const BookProvider = props => {
    const [products]= useState(data);
    const [cart, setCart] = useState([])
    console.log(products)
    console.log(cart)
    return (
        <BookContext.Provider value={[products, cart, setCart]}>
            {props.children}
        </BookContext.Provider>
    )
    
}
