import React, { use } from 'react';
import Card from './Card';

const ProductSection = ({dataPromise}) => {
    const cardsData = use(dataPromise);
    // console.log(cardsData);
    return (
        <div className='w-9/12 mx-auto grid grid-cols-3 gap-5 '>
           {
            cardsData.map(data => <Card className='h-full'  key={data.id} data={data}/>)
           }
        </div>
    );
};

export default ProductSection;