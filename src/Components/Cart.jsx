import React from 'react';
import cartImg from '../assets/products/shopping-cart.png'
import { toast } from 'react-toastify';

const Cart = ({ cart , SetCart }) => {
    return (


        <>
            {cart.length > 0 ?

                <div className='lg:w-8/12 mx-auto p-10 flex flex-col gap-6 rounded-3xl shadow-2xl mb-30'>
                    <p className='text-[#101727] text-2xl font-bold'>Your Cart</p>

                    <div className='flex flex-col gap-4'>
                        {
                            cart.map(item => {
                                return (
                                    <div key={item.id} className='p-5 bg-[#F9FAFC] rounded-3xl flex justify-between gap-4 items-center'>

                                        <div className='w-15 h-15 rounded-full bg-white  flex justify-center items-center'>
                                            <img className='w-8 h-8' src={item.icon} alt="" />
                                        </div>

                                        <div className='flex flex-col gap-2 flex-1'>
                                            <h2 className='font-bold text-2xl text-[#101727]'>{item.name}</h2>
                                            <p className="text-base text-[#627382]  font-bold">${item.price}</p>
                                        </div>

                                        <button className='btn btn-ghost cursor-pointer text-[#FF3980] text-base font-bold'
                                        onClick={()=> {
                                            SetCart(cart.filter(cartItem => item.id !== cartItem.id))
                                            toast.error(`${item.name} is removed from the cart`)
                                        }}
                                        >Remove</button>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className='flex justify-between'>
                        <p className='text-[#627382] text-base'>Total:</p>
                        <p className='text-[#101727] text-2xl font-bold'>${cart.reduce((acc,item) => acc + item.price, 0)}</p>
                    </div>

                    <button className="btn  font-semibold text-white text-base px-4 py-5 rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA]" 
                    onClick={()=> {
                        toast(`Proceeding to checkout with ${cart.length} item${cart.length>1? 's': ''}`)
                        SetCart([])

                    }}
                    >Proceed to Checkout</button>
                </div>

                :
                <div className='lg:w-8/12 mx-auto p-10 flex flex-col gap-20 rounded-3xl shadow-2xl mb-30  min-h-90'>
                    <p className='text-[#101727] text-2xl font-bold'>Your Cart</p>

                    <div className='flex  flex-col justify-center items-center gap-6'>
                        <img src={cartImg} alt="" />
                        <p className='text-5xl font-bold text-[#101727] text-center'>Your Cart is Empty</p>
                    </div>
                </div>
            }
        </>

    );
};

export default Cart;