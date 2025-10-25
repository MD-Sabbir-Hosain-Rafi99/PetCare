import React from 'react'
import { Link } from 'react-router';

const PetServicesCard = ({ petservice }) => {

    const { image, serviceId, serviceName, rating, price } = petservice;
    return (
        <>
        
        </>
        // <Link to={`/service-details/${serviceId}`}>
        //     <div className="card bg-base-100 border shadow-sm cursor-pointer">
        //         <figure className='h-58 overflow-hidden'>
        //             <img className='w-full object-cover'
        //                 src={image}
        //                 alt="" />
        //         </figure>
        //         <div className="p-4">
        //             <h2 className="text-xl font-semibold mb-2">{serviceName}</h2>
        //             <p className="text-gray-600 mb-1">Rating: {rating} ⭐</p>
        //             <p className="text-gray-800 font-bold mb-4">Price: ${price}</p>
        //             <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
        //                 View Details
        //             </button>
        //         </div>
        //     </div>

        // </Link>
    )
}

export default PetServicesCard
