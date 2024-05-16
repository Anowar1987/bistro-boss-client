

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="text-xl uppercase">{name}-----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-xl text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;