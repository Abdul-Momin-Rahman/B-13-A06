
import { FaCheck } from 'react-icons/fa6';
import { toast } from 'react-toastify';


const tagStyles = {
    new: 'text-[#0A883E] bg-[#DBFCE7]',
    best_seller: 'bg-[#FEF3C6] text-[#BB4D00]',
    popular: 'bg-[#E1E7FF] text-[#6E29F8]',
};

const Card = ({cart, SetCart, data }) => {
    // console.log(data);
    
    const isInCart = cart.some(item => item.id === data.id);

    return (
        <div className='p-6  bg-[#F2F2F2] relative flex flex-col gap-4 rounded-2xl shadow-xl h-full'>
            <div className='absolute flex top-2.5 right-2.5  '>
                <p className={` ${tagStyles[data.tagType]} px-3 py-2 rounded-3xl  text-sm font-medium w-fit`}>{data.tag}</p>
            </div>
            <div className='w-15 h-15 rounded-full bg-white  flex justify-center items-center'>
                <img className='w-8 h-8' src={data.icon} alt="" />
            </div>
            <h2 className='font-bold text-2xl text-[#101727] flex-1'>{data.name}</h2>
            <p className='text-[#627382] text-base flex-1'>{data.description}</p>

            <p className="text-xl text-[#627382] flex-1"><span className="font-bold text-[40px] text-[#101727]">${data.price}</span>/{data.period}</p>

            <ul className="items-start flex-1">
                {
                    data.features.map((feat, i) => {
                        return (
                            <div key={i} className="flex gap-3 items-center ">
                                <FaCheck />
                                <p className="text-base font-medium text-[#627382]">{feat}</p>
                            </div>
                        )
                    })
                }
            </ul>

            <button className={`btn font-semibold text-white text-base px-4 py-5 rounded-3xl ${isInCart? 'bg-green-400' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]'}`} 
            onClick={()=> {

                if(isInCart) {
                    toast(` ${data.name} is in the cart`)
                } else {
                    SetCart([...cart,data])
                    toast.success(`${data.name} is added to the cart`)
                } 
               
            }}>
                {isInCart? 'Added to Cart' : 'Buy Now'}
            </button>
        </div>
    );
};

export default Card;