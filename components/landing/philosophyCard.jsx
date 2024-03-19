import React from 'react'

export default function PhilosophyCard({ cardData }) {
    const { icon, header, description } = cardData;
    return (
        <div className='w-full flex items-center justify-center flex-col px-2 text-white'>
            <div className='h-10 w-10'>
                <img src={icon} alt="" />
            </div>
            <div className='text-center'>
                <h1 className='text-xl font-semibold'>{header}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}
