import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const FoodCard = ({item}) => {
    const {name, recipe, image, price, _id} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    
    const handleAddToCart = food => {
        if(user && user.email){
            // TODO: send cart item to the database
            console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added in your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
        else{
            Swal.fire({ 
                title: "Yor are not Logged In",
                text: "Please Login add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                //   send the user to the login page
                navigate('/login', {state: {from: location}});
                }
              });
        }
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