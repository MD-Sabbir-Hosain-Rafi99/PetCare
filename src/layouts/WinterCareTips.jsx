import React from 'react'
import cat from '../assets/cat.jpg'
import drink from '../assets/drink.jpg'
import safty from '../assets/safty.jpg'

const WinterCareTips = () => {
    return (
        <section className="bg-blue-50 py-12 px-6 w-11/12 mx-auto mb-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">
                    Winter Care Tips for Pets
                </h2>
                <p className="text-gray-700 text-lg mb-8">
                    Keep your furry friends safe and cozy this winter! Follow these simple tips to ensure their health, comfort, and happiness during the cold season.
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
                        <img src={cat} alt="Bedding" className="mx-auto mb-3" />
                        <h3 className="font-semibold text-lg mb-2">Warm Bedding</h3>
                        <p className="text-gray-600 text-sm">
                            Provide soft, insulated bedding to keep your pets warm and comfortable.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
                        <img src={drink} alt="Water" className="mx-auto mb-3" />
                        <h3 className="font-semibold text-lg mb-2">Hydration</h3>
                        <p className="text-gray-600 text-sm">
                            Make sure your pets have fresh water; cold weather can dehydrate them quickly.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
                        <img src={safty} alt="Outdoor Safety" className="mx-auto mb-3" />
                        <h3 className="font-semibold text-lg mb-2">Outdoor Safety</h3>
                        <p className="text-gray-600 text-sm">
                            Limit exposure to extreme cold and always supervise outdoor play.
                        </p>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default WinterCareTips
