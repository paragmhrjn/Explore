import React from 'react'
import heroimg from '../assets/heroImage.jpg'
const ContactForm = () => {
    return (
        <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
            <h2 className='text-center text-gray-700'>Send us a message</h2>
            <p className='text-center text-gray-700 py-2'>we're stand By!</p>
            <div className='grid md:grid-cols-1'>
                <img src={heroimg} alt="/" className='w-full md:w-full obejct-cover p-2 max-h-[500px] h-[300px]'/>

                <form>
                    <div className='grid grid-cols-2'>
                        <input className='border m-2 p-2' type="text" placeholder='First' />
                        <input className='border m-2 p-2' type="text" placeholder='Last' />
                        <input className='border m-2 p-2' type="email" placeholder='Email' />
                        <input className='border m-2 p-2' type="tel" placeholder='Phone' />
                        <input className='border m-2 p-2 col-span-2' type="tel" placeholder='Address' />
                        <textarea className='border col-span-2 m-2 p-2' cols={30} rows={10}></textarea>
                        <button className='col-span-2 m-2'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm