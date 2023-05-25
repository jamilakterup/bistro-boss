import {useState} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImg from '../../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import {Helmet} from 'react-helmet-async';
import OrderTab from '../OrderTab/OrderTab';
import {useParams} from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drink']
    const {category} = useParams();
    console.log(category);
    const initialIndex = categories.indexOf(category);
    const [active, setActive] = useState(initialIndex);

    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drink = menu.filter(item => item.category === 'drink');

    return (
        <div>
            <Helmet>
                <title>Bistro-Boss/order</title>
            </Helmet>
            <Cover title="Order" img={orderImg} />

            <Tabs defaultIndex={active} onSelect={(index) => setActive(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drink} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;