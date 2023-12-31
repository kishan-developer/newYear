import React, { useEffect, useState } from 'react'

function New() {

    const [data, setData] = useState(false);

    const handleDate = () => {
        setData(true);
    }

    const hidedata = () => {
        setData(false);
    }

    return (
        <div className='bg-black text-white w-full h-screen grid'>
            <img src="" alt="" />
            <div className="container w-auto m-auto border-b-2 border-sky-500">
                {data == true ?
                    (
                        <div className="main text-center">
                            <div className="date  m-auto font-serif font-bold text-9xl text-sky-500  fixed top-8">2024</div>
                            <h1 className='m-auto font-serif font-bold text-9xl text-sky-500 animate-bounce py-2 '>Happy New Year</h1>
                        </div>
                    )
                    :
                    null
                }
            </div>

            <div className="buttons m-auto flex gap-9 fixed bottom-8">
                <button className='w-30 bg-sky-500 text-black text-4xl px-5 py-3 font-serif font-bold rounded-lg' onClick={handleDate}>Show Massages</button>
                <button className='w-30 bg-sky-500 text-black text-4xl px-5 py-3 font-serif font-bold rounded-lg' onClick={hidedata}>Hide Massages</button>
            </div>







            {/* <div class=" m-auto w-fit p-4 mb-6 bg-white rounded-lg shadow dark:bg-gray-800 sm:inline-block">
                <div class="flex items-start text-left">
                    <div class="flex-shrink-0">
                        <div class="relative inline-block">
                            <a href="#" class="relative block">
                                <img alt="profil" src="https://www.tailwind-kit.com/images/person/1.jpg" class="mx-auto object-cover rounded-full h-16 w-16 " />
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="absolute bottom-0 right-0 w-6 h-6 p-1 -mx-1 -my-1 text-white bg-green-600 rounded-full fill-current">
                                <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div class="ml-6">
                        <p class="flex items-baseline">
                            <span class="font-bold text-gray-600 dark:text-gray-200">
                                A Msan
                            </span>
                            <span class="ml-2 text-sm text-gray-500 dark:text-gray-300">
                                2 months ago
                            </span>
                        </p>
                        <div class="flex items-center mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                </path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                </path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                </path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                </path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                </path>
                            </svg>
                        </div>
                        <div class="mt-3">
                            <p class="max-w-xs mt-1 dark:text-white">
                                My first job of scanning photos at the Memories 2 Digital Photo Scanning was fantastic. She completed the work quickly while I was waiting. Thanks for a great service..
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default New