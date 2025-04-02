import React from 'react'

const SidebarLayout = ({ children }) => {
    return (
        <div className='border inline-block bg-blue-500 px-3 py-5'>
            {children}
        </div>
    )
}

export default SidebarLayout
