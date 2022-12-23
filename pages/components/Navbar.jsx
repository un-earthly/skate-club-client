import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/router"
export default function Navbar() {
    const router = useRouter()
    const isActive = router.pathname

    return (
        <div className='text-white min-h-screen overflow-hidden'>
            <ul className='bg-white text-black p-8'>
                <li className={`${isActive === "/story" ? "active" : ""} navlink`}>
                    <Link href="/story">
                        Our Story
                    </Link>
                </li>
                <li className={`${isActive === "/gallery" ? "active" : ""} navlink`}>
                    <Link href="/gallery">
                        gallery
                    </Link>
                </li>
                <li className={`${isActive === "/classes" ? "active" : ""} navlink`}>
                    <Link href="/classes">
                        classes
                    </Link>
                </li>
                <li className={`${isActive === "/events" ? "active" : ""} navlink`}>
                    <Link href="/events">
                        events
                    </Link>
                </li>
                <li className={`${isActive === "/admission" ? "active" : ""} navlink`}>
                    <Link href="/admission">
                        admission
                    </Link>
                </li>
                <li className={`${isActive === "/policies" ? "active" : ""} navlink`}>
                    <Link href="/policies">
                        policies
                    </Link>
                </li>
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
