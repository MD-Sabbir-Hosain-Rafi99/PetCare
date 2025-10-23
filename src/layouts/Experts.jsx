import React from 'react'
import vet1 from '../assets/vet1.png'
import vet2 from '../assets/vet2.jpg'

const Experts = () => {
    return (
        <section class="bg-gray-50 py-16 px-6 mb-15">
            <div class="max-w-6xl mx-auto text-center">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Meet Our Expert Vets</h2>
                <p class="text-gray-600 mb-10">
                    Our caring and experienced veterinarians are here to keep your pets healthy and happy.
                </p>

                <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Expert 1 */}
                    <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
                        <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=500&q=60" alt="Vet 1" class="w-32 h-32 rounded-full mx-auto object-cover mb-4" />
                        <h3 class="text-xl font-semibold text-gray-800">Dr. Sarah Johnson</h3>
                        <p class="text-blue-600 text-sm mb-2">Veterinary Surgeon</p>
                        <p class="text-gray-600 text-sm">
                            Specialized in pet surgery and animal wellness with over 10 years of experience.
                        </p>
                    </div>

                    {/* Expert 2 */}
                    <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
                        <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=60" alt="Vet 2" class="w-32 h-32 rounded-full mx-auto object-cover mb-4" />
                        <h3 class="text-xl font-semibold text-gray-800">Dr. Michael Lee</h3>
                        <p class="text-blue-600 text-sm mb-2">Animal Nutritionist</p>
                        <p class="text-gray-600 text-sm">
                            Expert in pet diets and nutrition planning to ensure your pets live their best life.
                        </p>
                    </div>

                    {/* Expert 3 */}
                    <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
                        <img src={vet1} alt="Vet 3" class="w-32 h-32 rounded-full mx-auto object-cover mb-4" />
                        <h3 class="text-xl font-semibold text-gray-800">Dr. Emily Carter</h3>
                        <p class="text-blue-600 text-sm mb-2">Pet Behavior Specialist</p>
                        <p class="text-gray-600 text-sm">
                            Helps pets overcome anxiety and behavioral issues with compassion and care.
                        </p>
                    </div>

                    {/* Expert 4 */}
                    <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
                        <img src={vet2} alt="Vet 4" class="w-32 h-32 rounded-full mx-auto object-cover mb-4" />
                        <h3 class="text-xl font-semibold text-gray-800">Dr. David Brown</h3>
                        <p class="text-blue-600 text-sm mb-2">Exotic Animal Expert</p>
                        <p class="text-gray-600 text-sm">
                            Passionate about caring for exotic pets including birds, reptiles, and rabbits.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Experts
