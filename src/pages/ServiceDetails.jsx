import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import useCardsData from "../Hooks/useCardsData";
import { useLocation, useParams } from "react-router";

const ServiceDetails = () => {
    const { id } = useParams(); 
    const location = useLocation();
    const { petservices, loading } = useCardsData();
    const passed = location.state?.service || null;

    const [service, setService] = useState(passed);

    useEffect(() => {
        if (!service && !loading) {
            const found = petservices.find(petservice => String(petservice.serviceId) === String(id));
            if (found) setService(found);
        }
    }, [service, loading, petservices, id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        toast.success("Service booked successfully! 🐾");
        form.reset();
    };

    if (loading && !service) return <p className="text-center py-8">Loading...</p>;
    if (!service) return <p className="text-center py-8 text-red-500">Service not found</p>;

    return (
        <div className="w-11/12 mx-auto">
            <div className="max-w-6xl mx-auto p-6">
                <Toaster position="top-center" />
                <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded shadow">
                    <img src={service.image} alt={service.serviceName} className="w-full h-80 object-cover rounded" />

                    <div>
                        <h1 className="text-3xl font-bold mb-2">{service.serviceName}</h1>
                        <p className="text-gray-600 mb-2">{service.description}</p>
                        <p className="font-semibold text-lg text-blue-600 mb-2">${service.price}</p>
                        <p className="text-sm text-gray-600 mb-4">Rating: {service.rating} ⭐ | Slots: {service.slotsAvailable}</p>

                        {/* Book form */}
                        <div className="bg-gray-50 p-4 rounded">
                            <h3 className="text-xl font-semibold mb-3">Book This Service</h3>
                            <form onSubmit={handleSubmit} className="space-y-3">
                                <input name="name" placeholder="Name" className="w-full border px-3 py-2 rounded" required />
                                <input name="email" placeholder="Email" type="email" className="w-full border px-3 py-2 rounded" required />
                                <button className="w-full bg-blue-600 text-white py-2 rounded">Book Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceDetails;
