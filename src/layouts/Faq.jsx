import React from 'react'

const Faq = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>

            <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">
                    How can I book a pet grooming service?
                </div>
                <div className="collapse-content">
                    <p>
                        You can book any service by clicking on "Explore Services" on the Home Page or visiting the Services Page. Select your desired service and fill out the booking form.
                    </p>
                </div>
            </div>

            <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">
                    Do you offer winter coats for all dog breeds?
                </div>
                <div className="collapse-content">
                    <p>
                        Yes! Our winter coat fitting service caters to all dog breeds. You can select the size during the booking process.
                    </p>
                </div>
            </div>

            <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">
                    Are your grooming products safe for pets?
                </div>
                <div className="collapse-content">
                    <p>
                        Absolutely. We use only pet-safe shampoos, conditioners, and paw treatments. All products are carefully selected to protect your furry friends.
                    </p>
                </div>
            </div>

            <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">
                    Can I rent a heated bed for my cat or small dog?
                </div>
                <div className="collapse-content">
                    <p>
                        Yes, our Heated Pet Bed Rental service is available for cats and small dogs. You can choose the rental duration during booking.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Faq
