import { useContext } from "react";
import { HandleContextApi } from "../../App";

const ProductDetails = () => {

    const { handleAddToCart, handleAddToWishlist, productDetails } = useContext(HandleContextApi); 
    const { productTitle, price, description, productImage, specification, rating, availability } = productDetails;


    return (
        <div className="grid grid-cols-7 p-4">
            <div className="col-span-3">
                <img className="w-full h-full rounded-md" src={productImage} alt="" />
            </div>
            <div className="col-span-4 px-4">
                <h1 className="text-2xl font-bold">{productTitle}</h1>
                <div className="my-3">
                    <span className="bg-green-200 border-2 border-green-400 rounded-full px-3 py-1">{availability ? 'In Stock' : 'Not Available'}</span>
                </div>
                <h1 className="font-bold pb-2">Price: {price}$</h1>
                <p className="mb-2">{description}</p>
                <div className="flex flex-col">
                    <h1 className="font-bold">Specification :</h1>
                    <div className="pr-4">
                        <p>{`1. ${specification[0]} `}</p>
                        <p>{`2. ${specification[1]} `}</p>
                        <p>{`3. ${specification[2]} `}</p>
                        <p>{`4. ${specification[3]} `}</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold">Specification :</h1>
                    <div className="pr-4">
                        <p>Rating: {rating}</p>
                    </div>
                </div>
            </div>
            <div className="col-span-7 text-center mt-4 flex gap-4 justify-center items-center">

                <button onClick={() => handleAddToCart(productDetails)} className="btn">Add to Cart</button>
                <button onClick={() => handleAddToWishlist(productDetails)} className="btn">Add to Wishlist</button>
            </div>

        </div>

    );
};


export default ProductDetails;