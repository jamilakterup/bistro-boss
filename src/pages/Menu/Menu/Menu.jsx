import {Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import desertImg from '../../../assets/menu/dessert-bg.jpeg';
import saladtImg from '../../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro-Boss/Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu' />
            {/* main cover */}
            <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER" />
            {/* offered menu items */}
            <MenuCategory items={offered} title="offered" />
            {/* deserts items */}
            <MenuCategory items={desserts} title="dessert" coverImg={desertImg} />
            <MenuCategory items={salad} title="salad" coverImg={saladtImg} />
            <MenuCategory items={pizza} title="pizza" coverImg={pizzaImg} />
            <MenuCategory items={soup} title="soup" coverImg={soupImg} />
        </div>
    );
};

export default Menu;