import React from 'react'

function Form() {
    return (
        <div className='flex items-center justify-center'>
            <div className="form block bg-gray-500 h-screen gap-5 px-10">
                <input className='border-2 border-black pl-5 h-10  mt-5' type="text" value={'hii'} /> <br />
                <input className='border-2 border-black pl-5 h-10  mt-5' type="email" value={'email'} /> <br />
                <input className='border-2 border-black pl-5 h-10  mt-5' type="number" value={'123'} /> <br />

                <br />
                <br />
                <p className='px-10 w-full text-white'>
                    Select your background Emage
                </p>
                <input className='border-2 border-black pl-5 h-10  mt-5' type="file" />
            </div>
        </div>
    )
}

export default Form