import React from 'react'
import Banner from '../layouts/Banner'
import useCardsData from '../Hooks/useCardsData'
import WinterCareTips from '../layouts/WinterCareTips';
import Experts from '../layouts/Experts';
import { Link } from 'react-router';
import ServiceDetailsCard from '../components/ServiceDetailsCard';
import { FaPaw, FaDog, FaCat, FaHeart, FaBone } from "react-icons/fa";
import '../App.css'
import Faq from '../layouts/Faq';


const Home = () => {

    const { petservices } = useCardsData();

    return (

        <>
            <Banner />
            <div className="w-11/12 mx-auto">
                <h2 className='text-center text-4xl py-5 font-bold'>Popular Winter Care Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-2xl mx-auto w-full px-4 md:px-8 lg:px-12 pt-5 pb-15">
                    {
                        petservices.map(petservice => (
                            <ServiceDetailsCard key={petservice.serviceId} petservice={petservice} />
                        ))
                    }
                </div>
                <div className="flex justify-center mb-6">
                    <Link to='/services' className='btn btn-primary'>Show More</Link>
                </div>
            </div>
            <WinterCareTips />
            <div className="marquee-container">
                <div className="marquee-content">
                    <div className="flex items-center gap-2">
                        <FaPaw size={32} className="text-blue-600" />
                        <h4 className="text-lg font-semibold">Pet Care</h4>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaDog size={32} className="text-green-500" />
                        <h4 className="text-lg font-semibold">Dog's</h4>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCat size={32} className="text-pink-500" />
                        <h4 className="text-lg font-semibold">Cat's</h4>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaHeart size={32} className="text-red-500" />
                        <h4 className="text-lg font-semibold">Loves</h4>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaBone size={32} className="text-yellow-500" />
                        <h4 className="text-lg font-semibold">Bones</h4>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaPaw size={32} className="text-blue-600" />
                        <h4 className="text-lg font-semibold">PetCare</h4>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaDog size={32} className="text-green-500" />
                        <h4 className="text-lg font-semibold">Dogs</h4>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaCat size={32} className="text-pink-500" />
                        <h4 className="text-lg font-semibold">Cats</h4>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaHeart size={32} className="text-red-500" />
                        <h4 className="text-lg font-semibold">Loves</h4>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaBone size={32} className="text-yellow-500" />
                        <h4 className="text-lg font-semibold">Bones</h4>
                    </div>
                </div>
            </div>
            <Experts />
            <Faq />
        </>

    )
}

export default Home
