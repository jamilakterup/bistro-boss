import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className="my-12">
            <SectionTitle subHeading='---Popular Items---' heading='FROM OUR MENU' />
            <div className="grid md:grid-cols-2 gap-4 mt-12">
                {
                    popular.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className="flex justify-center my-12">
                <button className='btn btn-outline border-0 border-b-4'>View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;