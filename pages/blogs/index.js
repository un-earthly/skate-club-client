import Head from 'next/head'
import React from 'react'
import data from "../../data.json"
import Link from 'next/link';
export default function Blogs() {
    const blogs = [
        {
            id: 1,
            title: "10 Tips for Beginner Skateboarders",
            author: "John Doe",
            date: "March 10, 2024",
            excerpt: "Are you new to skateboarding? Check out these 10 essential tips to help you get started on your skateboarding journey.",
            imageUrl: "skateboard_tips.jpg"
        },
        {
            id: 2,
            title: "The History of Skateboarding",
            author: "Jane Smith",
            date: "March 15, 2024",
            excerpt: "Explore the fascinating history of skateboarding, from its humble beginnings to its rise as a global phenomenon.",
            imageUrl: "skateboarding_history.jpg"
        },
        // Add more blog posts as needed
    ];
    return (
        <>
            <Head>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/logo_icon.png" type="image/x-icon" />
                <title>{data.titles.blogs}</title>
            </Head>
            <main className='body__content'>
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Blogs</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                                    <p className="text-gray-600 mb-2">By {blog.author} | {blog.date}</p>
                                    <p className="text-gray-800 mb-2">{blog.excerpt}</p>
                                    <Link href={`/blog/${blog.id}`} className="text-blue-500 font-semibold hover:text-blue-600">Read more</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}
