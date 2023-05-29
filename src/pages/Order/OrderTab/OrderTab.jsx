import FoodCard from "../../../components/FoodCard/FoodCard";


// Todo pagination here on this page
const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10 mb-12">
            {
                items.map(item => <FoodCard key={item._id} item={item} />)
            }
        </div>
    );
};

export default OrderTab;