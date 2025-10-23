import React from 'react'
import Banner from '../layouts/Banner'
import useCardsData from '../Hooks/useCardsData'
import PetServicesCard from '../components/PetServicesCard';
import WinterCareTips from '../layouts/WinterCareTips';
import Experts from '../layouts/Experts';


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
                            <PetServicesCard key={petservice.serviceId} petservice={petservice} />
                        ))
                    }
                </div>
            </div>
            <WinterCareTips />
            <Experts />
        </>

    )
}

export default Home
