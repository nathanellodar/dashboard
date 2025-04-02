import React from 'react'
import Home from '../../pages/Home'

const HomeLayout = ({ children }) => {
    return (
        <main className='m-0 text-black'>
            <h1 className='text-3xl p-4 font-semibold'>Dashboard Penulis</h1>
            {children}
        </main>
    )
}

export default HomeLayout
