
import { useEffect, useState } from "react";
import Category from '../Category/Category';
import Product from "../Product/Product";


const Categories = () => {
    const [products, setProducts] = useState([]);
    const [productsCategory, setProductsCategory] = useState([]);
    
    useEffect(() => {
        fetch('productsCategory.json')
            .then(res => res.json())
            .then(data => setProductsCategory(data)
            )
    }, [])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const productCategory = (category) => { 

        const filterC = productsCategory.find(c => c.category === category);
        if (filterC) {
            setProducts(filterC.products);
        }
    }


    return (
        <div className="grid grid-cols-6 gap-4">
            <div className="bg-base-200 p-4 rounded-lg flex flex-col gap-4 px-4 w-full col-span-2">
                {productsCategory.map((categories, idx) => <Category key={idx} categories={categories} productCategory={productCategory}></Category>
                )}
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 col-span-4 p-2 border-2 rounded-md">
                {products.map((product, idx) => <Product key={idx} product={product} ></Product>)}
            </div>
        </div>
    );
};


export default Categories;