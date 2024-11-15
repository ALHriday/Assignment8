import ProductDetails from "../ProductDetails/ProductDetails";
import { useContext } from "react";
import { HandleContextApi } from "../../App";

const Statistic = () => {

    const { isTrue } = useContext(HandleContextApi);

    return (
        <div className="relative p-4">
            <div className="h-[360px] lg:h-[300px] bg-purple-600 p-4 text-white text-center flex flex-col gap-4 rounded-md">
                <h1 className="text-4xl font-bold">Product Details</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis accusantium minus maxime repellat debitis perspiciatis voluptatum, alias, fuga numquam provident nulla rem non illo animi aut vitae, rerum officiis.</p>
            </div>
            <div className="absolute left-[17%] top-[36%] w-4/6 z-50 bg-base-100 rounded-xl shadow-lg">

                {!isTrue ?
                    <div className="">
                        <h1 className="text-2xl p-4 font-bold">Statistic</h1>
                        <h1 className="text-4xl font-bold text-center px-4 py-12">No Product Details Availabe...</h1>
                    </div> : <ProductDetails></ProductDetails>}

            </div>
            {!isTrue ? <div className="h-[200px]"></div> : <div className="h-[400px]"></div>}

        </div>
    );
};


export default Statistic;