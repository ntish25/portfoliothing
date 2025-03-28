import Link from 'next/link'
import { useEffect } from 'react'

const links = [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
]

export default function Nav() {
    useEffect(() => {
        console.log('Made by Sarthak Mohanty. All Rights Reserved. Want to hire me? https://srtk.me')
    })
    return (
        <nav>
            <ul className="flex flex-wrap sm:justify-between items-start sm:items-center p-8 mt-6 sm:mt-0">
                <li>Perfect Next.js Theme</li>
                <ul className={`mx-auto sm:mx-0 flex flex-row space-x-5`}>
                    {links.map(({ href, label }) => (
                        <li className="self-center" key={`${href}${label}`}>
                            <Link
                                href={href}
                                className={`font-inter px-4 py-2 rounded hover:bg-black hover:bg-opacity-10`}>

                                {label}

                            </Link>
                        </li>
                    ))}
                </ul>
            </ul>
        </nav>
    );
}