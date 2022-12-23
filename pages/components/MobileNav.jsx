import Link from 'next/link'
import React, { useState } from 'react'

export default function MobileNav() {
    const [active, setActive] = useState(false)
    const links = <ul className={`bg-black text-white p-8 duration-1000 absolute w-full left-0 ${active ? "top-10" : "-top-96  opacity-20"}`}>
        <li className="navlink">
            <Link href="/story">
                Our Story
            </Link>
        </li>
        <li className="navlink">
            <Link href="/gallery">
                gallery
            </Link>
        </li>
        <li className="navlink">
            <Link href="/classes">
                classes
            </Link>
        </li>
        <li className="navlink">
            <Link href="/events">
                events
            </Link>
        </li>
        <li className="navlink">
            <Link href="/admission">
                admission
            </Link>
        </li>
        <li className="navlink">
            <Link href="/policies">
                policies
            </Link>
        </li>
        <li className="navlink">
            <Link href="/blogs">
                blogs
            </Link>
        </li>
        <li className="navlink">
            <Link href="/shop">
                shop
            </Link>
        </li>
        <li className="navlink">
            <Link href="/connect">
                Connect
            </Link>
        </li>
    </ul>
    return (
        <div className="bg-black w-full flex items-center justify-between px-4">
            <Link href="/">
                <img src="/logo_icon.png" height={40} width={40} alt="" />
            </Link>
            <button onClick={() => setActive(!active)} className="p-2">
                {!active ? <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                }
            </button>

            {links}
        </div>
    )
}
