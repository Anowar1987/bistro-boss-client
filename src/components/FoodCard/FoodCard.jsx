

const FoodCard = ({item}) => {
    const {name, recipe, image, price} = item;
    const handleAddToCart = food => {
        console.log(food);
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title text-2xl font-semibold justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button 
                    onClick={ () => handleAddToCart(item)}
                    className="btn btn-outline bg-slate-200 border-0 border-b-4 mt-4 uppercase">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;