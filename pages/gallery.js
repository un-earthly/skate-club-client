import Head from 'next/head'
import React from 'react'
import data from "../data.json"
export default function Gallery() {
    const stories = [
        {
            title: "Adventure in the City",
            images: ["image1.jpg", "image2.jpg", "image3.jpg"]
        },
        {
            title: "Skate Park Fun",
            images: ["image4.jpg", "image5.jpg", "image6.jpg"]
        },
        // Add more stories as needed
    ];
    return (
        <>
            <Head>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/logo_icon.png" type="image/x-icon" />
                <title>{data.titles.gallery}</title>
            </Head>
            <main className='body__content'>
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
                    {stories.map((story, index) => (
                        <div key={index} className="mb-8">
                            <h3 className="text-2xl font-semibold mb-4">{story.title}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {story.images.map((imageUrl, imageIndex) => (
                                    <div key={imageIndex} className="overflow-hidden rounded-lg shadow-md">
                                        <img src={imageUrl} alt={`Image ${imageIndex + 1}`} className="w-full h-auto" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}
