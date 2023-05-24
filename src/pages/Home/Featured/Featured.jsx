import featured from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <>
            <div className="featured-img bg-fixed  text-white my-20 py-12">
                <div className="text-center my-12">
                    <p className="text-yellow-500 my-3">---Check it out---</p>
                    <h3 className="text-5xl uppercase border-y-4 py-4 w-4/12 mx-auto">FROM OUR MENU</h3>
                </div>
                <div className='md:flex justify-center items-center gap-12 my-8'>
                    <img className='md:w-1/3' src={featured} alt="" />
                    <div className='md:w-1/3'>
                        <p>March 20, 2023</p>
                        <h3 className='text-xl mt-2'>WHERE CAN I GET SOME?</h3>
                        <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='btn btn-outline border-0 border-b-4'>Read More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Featured;