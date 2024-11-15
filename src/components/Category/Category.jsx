import PropTypes from "prop-types";

const Category = ({ categories, productCategory }) => {

    const { category } = categories;
    
    return (
        <div>
            <button onClick={() => productCategory(`${category}`)} className="hover:bg-green-400 text-xl font-bold bg-slate-300 px-4 py-2 rounded-full w-full">{category}</button>
        </div>
    );
};

Category.propTypes = {
    categories: PropTypes.object,
    productCategory: PropTypes.func,
}


export default Category;