import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="flex flex-col gap-4 mb-12">
                <h1 className="text-4xl font-bold text-center my-8">Explore Cutting-Edge Gadgets</h1>
                <Categories></Categories>
            </div>
        </div>
    );
};

export default Home;