import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items}) => {
    return (
        <div className="pt-16">
            <div className="grid md:grid-cols-2 gap-12 mt-10 mb-10">
                {
                    items.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }

            </div>
            <Link to='/order'>
            <button className="btn btn-outline border-0 border-b-4">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;