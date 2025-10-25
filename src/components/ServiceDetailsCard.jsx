import React from "react";
import { Link } from "react-router";

const ServiceDetailsCard = ({ petservice }) => {
    const { serviceId } = petservice;
    // if (!petservice) {
    //     return (
    //         <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow text-center">
    //             <p className="text-gray-500">Service data loading... or not found.</p>
    //         </div>
    //     );
    // }
    return (
        <Link to={`/service/${serviceId}`}>
            <div className="card bg-base-100 border shadow-sm cursor-pointer">
                <figure className='h-58 overflow-hidden'>
                    <img className='w-full object-cover'
                        src={petservice.image}
                        alt="" />
                </figure>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{petservice.serviceName}</h2>
                    <p className="text-gray-600 mb-1">Rating: {petservice.rating} ⭐</p>
                    <p className="text-gray-800 font-bold mb-4">Price: ${petservice.price}</p>
                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                        View Details
                    </button>
                </div>
            </div>

        </Link>
    );
};
export default ServiceDetailsCard;
