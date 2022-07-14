import { createContext, useState } from 'react';

export const CartContext = createContext();

const {Provider} = CartContext;

const MyProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    

    //Metodo Some - ItemDetail - Se va a encargar si existe el producto en el carrito (Retorna booleano)
    const isInCart = (id) => {
        return cart.some(x => x.id === id);
    }

    //ItemDetail - Va a agregar el producto al carrito. Sin pisar al los agregados anteriormente. Y si está duplicado, va a sumar la cantidad.
    const addItem = (item, unidades) => {
            const newItem = {
                ...item,
                unidades
        }
        if (isInCart(newItem.id)){
            const findProduct = cart.find(x => x.id === newItem.id);
            const productIndex = cart.indexOf(findProduct);
            const auxArray = [...cart];
            auxArray[productIndex].unidades + unidades > newItem.stock ? auxArray[productIndex].unidades = newItem.stock : auxArray[productIndex].unidades += unidades
            setCart(auxArray);

        } else{
            setCart([...cart, newItem]);
        }
    }
    //Metodo Filter - Cart - se encarga, en funcion del ID, de retornar un nuevo array sin el producto seleccionado.
    const removeItem = (id) => {
        return setCart(cart.filter(x => x.id !== id));
    }

    //Cart - Va a eliminar todos los productos del carrito.
    const clearCart = () => {
        setCart([]);
    }

    //Metodo Reduce - CartWidget - Se encarga de retornar el total de todos los productos en el carrito.
    const getItemQty = () => {
        let carrito = cart.reduce((acc, x) => acc += x.unidades, 0);

        return carrito
        
    }

    //Metodo Reduce - Cart - Retorna el precio total del carrito
    const getItemPrice = () => {
    return cart.reduce((acc, x) => acc += x.unidades * x.price, 0);
    }
    return <Provider value={{cart, isInCart, addItem, removeItem, clearCart, getItemPrice, getItemQty}}> {children} </Provider>


}

export default MyProvider