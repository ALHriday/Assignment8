import './Banner.css'
import bannerImg from '../../assets/banner.jpg'
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Banner = () => {
    const bannerLoaction = useLocation();


    return (
        <div className='w-11/12 mx-auto mt-4 text-white'>
            <div className='bg-purple-600 rounded-xl relative'>
                {bannerLoaction.pathname === "/" ? <Navbar></Navbar> : ''}

                <div className='h-[400px] text-center'>

                    <h1 className='text-3xl md:text-4xl font-bold px-6 md:px-12 py-4'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories.</h1>
                    <p className='px-6 md:px-12 py-4'>Explore latest Gadget that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!!</p>
                    <div>
                        <Link to='/dashboard'>

                            <button className='btn text-purple-600'>Shop Now</button>
                        </Link>
                    </div>

                </div>
                <div className='w-8/12 h-[200px] mx-auto absolute -bottom-[20%] md:-bottom-[18%] left-[18%]'>
                    <div className='border-2 h-[300px] lg:h-[320px] p-2 rounded-xl'>
                        <img className='banner h-full w-full rounded-xl' src={bannerImg} alt="" />
                    </div>
                </div>

            </div>
            <div className='h-[220px] lg:h-[300px]'>

            </div>
        </div>
    );
};

export default Banner;