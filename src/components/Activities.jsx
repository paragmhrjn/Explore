import React from 'react'
import activity1 from '../assets/activity1.jpg'
import activity2 from '../assets/activity2.jpg'
import activity3 from '../assets/activity3.jpg'

const Activities = () => {
    return (
        <div className='max-w-[1140px] m-auto w-full md:flex mt-[-175px]'>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Beach</h3>
                <img className='w-full h-full object-cover relative border-[7px]  border-white shadow-lg' src={activity1} alt="/" />
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Light House</h3>
                <img className='w-full h-full object-cover relative border-[7px]  border-white shadow-lg' src={activity2} alt="/"/>
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Water Fall</h3>
                <img className='w-full h-full object-cover relative border-[7px]  border-white shadow-lg' src={activity3} alt="/" />
            </div>
        </div>

    )
}

export default Activities