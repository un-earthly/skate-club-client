import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/router"
import data from "../../data.json"

export default function Navbar() {
    const router = useRouter()
    const isActive = router.pathname.slice(1)

    return (
        <div className='text-white min-h-screen overflow-hidden'>
            <ul className='bg-white text-black p-8'>
                {data.links.slice(0, 6).map((link, i) => <li key={i} className={`${isActive === link ? "active" : ""} navlink`}>
                    <Link href={"/" + link}>
                        {link === "story" ? "Our Story" : link}
                    </Link>
                </li>)}
            </ul>

            <Link href="/">
                <div className="font-caveat border-t-2 border-teal-400">
                    <img src="/logo.png" alt="" />
                </div>
            </Link>
            <div className="p-8 ">
                {data.links.slice(6, 9).map((link, i) => <div key={i} className={`${isActive === link ? "active" : ""} navlink black`}>
                    <Link href={"/" + link}>
                        {link}
                    </Link>
                </div>)}
            </div>

        </div>
    )
}
