import {useEffect, useState} from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(items => items.category === 'popular');
                setMenu(popularItems)
            })
    }, []);

    return (
        <section className="my-12">
            <SectionTitle subHeading='---Popular Items---' heading='FROM OUR MENU' />
            <div className="grid md:grid-cols-2 gap-4 mt-12">
                {
                    menu.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className="flex justify-center my-12">
                <button className='btn btn-outline border-0 border-b-4'>View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;