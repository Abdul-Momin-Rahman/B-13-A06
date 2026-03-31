import React, { use } from 'react';
import Card from './Card';

const ProductSection = ({cart, SetCart, dataPromise}) => {
    const cardsData = use(dataPromise);
    // console.log(cardsData);
    return (
        <div className='px-5 lg:px-0 lg:w-9/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-30'>
           {
            cardsData.map(data => <Card cart={cart} SetCart={SetCart} className='h-full'  key={data.id} data={data}/>)
           }
        </div>
    );
};

export default ProductSection;