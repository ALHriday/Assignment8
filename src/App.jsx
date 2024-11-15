
import './App.css'
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { createContext, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react-refresh/only-export-components
export const HandleContextApi = createContext(null);

function App() {

  const notify = (message) => toast(message);

  const [cartItem, setCartItem] = useState([]);
  const [wishListItem, setWishListItem] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [cartItemPrice, setCartItemPrice] = useState(0);
  const [wishListItemPrice, setWishListItemPrice] = useState(0);

  const [isTrue, setIsTrue] = useState(false);


  const handleAddToCart = (products) => { 
    const isExist = cartItem.find(p => products.productId === p.productId);

    if (isExist) {
      toast('Product Already Exist!!');
    } else {
      toast('Product added Successfully to the Cart!!');
      setCartItem([...cartItem, products]);
      setCartItemPrice(cartItemPrice + products.price);
    }
  }

  const handleAddToWishlist = (products) => {
    const isExist = wishListItem.find(p => products.productId === p.productId);
    if (isExist) {
      toast('Product Already Exist!!');
    } else {
      toast('Product added Successfully to the Wish-List!!');
      setWishListItem([...wishListItem, products]);
      setWishListItemPrice(wishListItemPrice + products.price);
    }
  }
  const handleProductDetails = (product) => {
    setProductDetails(product);
    setIsTrue(true);
  }

  const handleDeleteCartItem = (productItem) => {
    const deleteItem = cartItem.find(item => productItem.productId === item.productId);
    const updateItem = cartItem.filter(item => productItem.productId !== item.productId);
    setCartItem(deleteItem);
    setCartItem(updateItem);
    setCartItemPrice(cartItemPrice - productItem.price);
    toast('Product Deleted Successfully!!');
  }

  const handleDeleteWishListItem = (productItem) => {
    const deleteItem = wishListItem.find(item => productItem.productId === item.productId);
    const updateItem = wishListItem.filter(item => productItem.productId !== item.productId);
    setWishListItem(deleteItem);
    setWishListItem(updateItem);
    setWishListItemPrice(wishListItemPrice - productItem.price);
    toast('Product Deleted Successfully!!');
  }

  const sortByPrice = () => {
    const sorted = cartItem.sort((a, b) => b.price - a.price);
    setCartItem(sorted); 
  }

  const [isActive, setIsActive] = useState({ cart: true, status: 'Cart' });

  const handleBtn = (status) => {
    if (status === 'Cart') {
      setIsActive({
        cart: true,
        status: 'Cart'
      })

    } else {
      setIsActive({
        cart: false,
        status: 'Wishlist'
      })
    }
  }

  const values = {
    handleAddToCart,
    cartItem,
    handleAddToWishlist,
    wishListItem,
    handleProductDetails,
    productDetails,
    handleBtn,
    isActive,
    handleDeleteCartItem,
    isTrue,
    handleDeleteWishListItem,
    cartItemPrice,
    wishListItemPrice,
    sortByPrice
  }

  const navLocation = useLocation();


  return (
    <div>

      <HandleContextApi.Provider value={values}>
        {navLocation.pathname === '/' ? '' : <Navbar></Navbar>}
        
        <Outlet></Outlet>
        <button className='hidden' onClick={() => notify()}></button>
        <ToastContainer />

        <Footer></Footer>

      </HandleContextApi.Provider>

    </div>
  )
}


export default App
