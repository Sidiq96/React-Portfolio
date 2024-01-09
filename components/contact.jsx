import React from 'react';

const Contact = () => {
    return (
        <div name ='contact' className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4'>
            <form action="mailto:hersisidiq@gmail.com" className='flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                <p className='inline text-4xl font-bold text-white border-b-4 border-red-600'>Contact</p>
                <p className='py-4 text-gray-300'>Complete the form below or send an email</p>
                </div>
                <input type="text" placeholder='Name' name='name' className='text-black p-2 bg-[#ccd6f6] w-full rounded-md'/>
                <input type="text" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6] w-full rounded-md'/>
                <textarea name="message" placeholder='Message' className='p-2 bg-[#ccd6f6] w-full rounded-md' rows="10"></textarea>
                <button className='flex items-center px-4 py-3 mx-auto my-8 text-white border-2 hover:bg-red-600 hover:border-red-600'>Shoot me an email</button>
            </form>
        </div>
    )
}

export default Contact