import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/order.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Cover img={orderCoverImg} title="Order Food"></Cover>
            <div className='mt-16 text-center font-bold'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList >
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='grid md:grid-cols-3 gap-10'>
                        {
                            salad.map(item => <FoodCard
                            key={item._id}
                            item={item}
                            ></FoodCard>)
                        }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            pizza.map(item => <FoodCard
                            key={item._id}
                            item={item}
                            ></FoodCard>)
                        }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            soup.map(item => <FoodCard
                            key={item._id}
                            item={item}
                            ></FoodCard>)
                        }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            dessert.map(item => <FoodCard
                            key={item._id}
                            item={item}
                            ></FoodCard>)
                        }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            drinks.map(item => <FoodCard
                            key={item._id}
                            item={item}
                            ></FoodCard>)
                        }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;