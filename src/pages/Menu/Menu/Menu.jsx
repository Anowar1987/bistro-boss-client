import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladsImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu </title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={dessertImg} title="Desserts"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={pizzaImg} title="pizza"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={saladsImg} title="Salads"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={soupImg} title="Soup"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;