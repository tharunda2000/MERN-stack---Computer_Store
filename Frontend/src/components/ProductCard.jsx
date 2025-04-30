import React from 'react'
import { useAppContext } from '../context/AppContext';


const ProductCard = ({product}) => {

    const [count, setCount] = React.useState(0);

    const {currency,addToCart,updateCart,removeFromCart,cartItems} = useAppContext()  


  return product && (
        <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full">
            <div className="group cursor-pointer flex items-center justify-center px-2">
                <img className="group-hover:scale-105 transition max-w-26 md:max-w-36" src={product.image} alt={product.name} />
            </div>
            <div className="text-gray-500/60 text-sm">
                <p>{product.category}</p>
                <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
                <div className="flex items-center gap-0.5">
                    {Array(5).fill('').map((_, i) => (
                        product.rating > i ? (
                            
                            <i class="ri-star-fill"></i>
                        ) : (
                            <i class="ri-star-line"></i>
                        )
                    ))}
                    <p>({product.rating})</p>
                </div>
                <div className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-base font-medium text-indigo-500">
                        {currency}${product.offerPrice} <span className="text-gray-500/60 md:text-sm text-xs line-through">{currency}${product.price}</span>
                    </p>
                    <div className="text-indigo-500">
                        {!cartItems[product.id] ? (
                            <button className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 md:w-[80px] w-[64px] h-[34px] rounded text-indigo-600 font-medium cursor-pointer" onClick={() =>addToCart(product.id) } >
                                <i class="ri-shopping-cart-fill"></i>
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-indigo-500/25 rounded select-none">
                                <button onClick={() => removeFromCart(product.id)} className="cursor-pointer text-md px-2 h-full" >
                                    -
                                </button>
                                <span className="w-5 text-center">{cartItems[product.id]}</span>
                                <button onClick={() => addToCart(product.id)} className="cursor-pointer text-md px-2 h-full" >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard
