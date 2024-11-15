import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { HandleContextApi } from "../../App";

const Product = ({ product }) => {

    const {handleProductDetails} = useContext(HandleContextApi);
    const { productImage, price, productTitle } = product || {};

    return (
        <div>
            <div className="hero bg-base-200 rounded-lg">
                <div className="hero-content flex-col">
                    <img
                        src={productImage}
                        className="w-[200px] h-[160px] rounded-lg shadow-sm " />
                    <div>
                        <h1 className="text-3xl font-bold">{productTitle}</h1>
                        <p className="py-6">
                            {price}$
                        </p>
                        <Link to={`/statistic`} className="btn btn-primary">
                            <button onClick={() => handleProductDetails(product)}>Veiw Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
}

export default Product;