import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/router"
export default function Navbar() {
    const router = useRouter()
    const isActive = router.pathname
    // console.log(isActive)
    const links = <>
        <Link href="/story">
            <li className={`${isActive === "/story" ? "active" : ""} navlink`}>
                Our Story
            </li>
        </Link>
        <Link href="/gallery">
            <li className={`${isActive === "/gallery" ? "active" : ""} navlink`}>
                gallery
            </li>
        </Link>
        <Link href="/classes">
            <li className={`${isActive === "/classes" ? "active" : ""} navlink`}>
                classes
            </li>
        </Link>
        <Link href="/events">
            <li className={`${isActive === "/events" ? "active" : ""} navlink`}>
                events
            </li>
        </Link>
        <Link href="/admission">
            <li className={`${isActive === "/admission" ? "active" : ""} navlink`}>
                admission
            </li>
        </Link>
        <Link href="/policies">
            <li className={`${isActive === "/policies" ? "active" : ""} navlink`}>
                policies
            </li>
        </Link>


    </>
    return (
        <div className='text-white min-h-screen'>
            <ul className='bg-white text-black p-8'>
                {links}
            </ul>

            <Link href="/">
                <div className="font-caveat border-t-2 border-teal-400">
                    <img src="/logo.png" alt="" />
                </div>
            </Link>
            <div className="p-8 ">
                <Link href="/blogs">
                    <div className={`${isActive === "/blogs" ? "active" : ""} navlink black`}>
                        blogs
                    </div>
                </Link>
                <Link href="/shop">
                    <div className={`${isActive === "/shop" ? "active" : ""} navlink black`}>
                        shop
                    </div>
                </Link>
                <Link href="/connect">
                    <div className={`${isActive === "/connect" ? "active" : ""} navlink black`}>
                        Connect
                    </div>
                </Link>

            </div>

        </div>
    )
}
