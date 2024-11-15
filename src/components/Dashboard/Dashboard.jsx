
import { useContext } from "react";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";
import { HandleContextApi } from "../../App";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Dashboard = () => {

    const { isActive, handleBtn, cartItem, wishListItem, cartItemPrice, wishListItemPrice, sortByPrice } = useContext(HandleContextApi);
    
    const cartPice = cartItemPrice.toFixed(2);
    
    return (
        <div>

            <div className="flex flex-col justify-center items-center gap-4 bg-purple-600 py-12 text-white">
                <h1 className="text-4xl font-bold">Dashboard</h1>
                <p>Explore the latest Gadgets that will take your experience to the next level.</p>
                <div className="flex gap-4 justify-center items-center">
                    <button onClick={() => handleBtn('Cart')} className={isActive.cart ? 'btn btn-md rounded-full bg-green-400' : 'btn btn-md rounded-full'}><FaCartPlus /></button>
                    <button onClick={() => handleBtn('Wishlist')} className={!isActive.cart ? 'btn btn-md rounded-full bg-green-400' : 'btn btn-md rounded-full'}><FaHeart /></button>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                {isActive.cart ?
                    <div>
                        <div className="flex justify-between p-4 bg-green-500">
                            <h1 className="py-1 text-2xl font-bold text-white">Products :</h1>
                            <div className="flex gap-4">
                                <h1 className="py-1 text-xl font-bold text-white">Total Amount: {cartPice}$</h1>
                                <div className="flex gap-2">
                                    <button onClick={() => sortByPrice()} className="btn btn-sm">Short By Price</button>
                                    <button className="btn btn-sm">Purchess</button>
                                </div>
                            </div>
                        </div>
                        {cartItem.map((productItem, idx) => <Cart key={idx} productItem={productItem} isActive={isActive}></Cart>
                        )}
                    </div> :
                    <div>
                        <div className="flex justify-between p-4 bg-green-500">
                            <h1 className="py-1 text-2xl font-bold text-white">WishList :</h1>
                            <div className="flex gap-4">
                                <h1 className="py-1 text-xl font-bold text-white">Total Amount: { wishListItemPrice }$</h1>
                                <div className="flex gap-2">
                                    <button className="btn btn-lg">Short By Price</button>
                                    <button className="btn btn-lg">Purchase</button>
                                </div>
                            </div>
                        </div>
                        {wishListItem.map((productItem, idx) => <WishList key={idx} productItem={productItem} isActive={isActive}></WishList>
                        )}
                    </div>
                }

            </div>
        </div >
    );
};




export default Dashboard;