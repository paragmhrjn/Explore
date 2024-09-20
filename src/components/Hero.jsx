import React from 'react'
import hero from '../assets/heroImage.jpg'
const Hero = () => {
    return (
        <div className='w-full h-[90vh]'>
            <img className='w-full h-full object-cover' src={hero} alt="/" />
            <div className='max-w-[1140px] m-auto'>
                <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                    <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                    <h2 className='text-4xl italic py-4'>With Explore</h2>
                    <p className='bg-gray-50/30 p-4 border rounded-md'>
                        Explore is a travel company that offers a wide range of travel services. Our team of experts will
                        help you plan your dream trip, booking flights and hotels to arranging activities and tours.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero