

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-950 text-white px-2 absolute right-4 top-2">${price}</p>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className='btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-500'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;