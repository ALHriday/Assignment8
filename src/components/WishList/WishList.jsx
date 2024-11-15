import PropTypes from "prop-types";
import { useContext } from "react";
import { HandleContextApi } from "../../App";


const WishList = ({ isActive, productItem }) => {

    const { handleDeleteWishListItem } = useContext(HandleContextApi);

    const { productTitle, price, productImage } = productItem || {};

    return (
        <div className={!isActive.cart ? 'bg-slate-200' : 'bg-slate-200 hidden'}>
            <div className="grid grid-cols-4 border-2 p-4">
                <div className="h-[160px]">
                    <img className="w-full h-full object-contain rounded-xl" src={productImage} alt="" />
                </div>
                <div className="col-span-2 flex flex-col justify-between p-4">
                    <h1 className="text-4xl">{productTitle}</h1>
                    <h1 className="text-2xl">Price: {price}$</h1>
                </div>
                <div className="p-4">
                    <button onClick={() => handleDeleteWishListItem(productItem)} className="text-2xl btn btn-error">Del</button>
                </div>
            </div>
        </div>
    );
};

WishList.propTypes = {
    isActive: PropTypes.object,
    productItem: PropTypes.object
}

export default WishList;