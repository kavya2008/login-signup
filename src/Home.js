import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-red-600 text-3xl font-bold pb-5 text-center'>Welcome User</h1>
                <p className='p-5 text-center'>OLA ACADEMY is an education management company based out of 2773 Highway 81 E, Mcdonough, Georgia, United States. Website http://www.olaacademy.net. Industries Education Administration Programs. Company size 1-10 employees. Headquarters Mcdonough, Georgia.</p>
                </div>
                </div>
                </div>
                </div>
  )
}

export default Home