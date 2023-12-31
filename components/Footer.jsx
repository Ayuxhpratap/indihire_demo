'use client'

import Link from "next/link"
import Image from "next/image"

const footer = () => {
    return (
        <footer className="bg-black text-white pt-16">
            <div className="container mx-auto">
                <div className="flex flex-col justify-between xl:flex-row">
                    <div className="w-[300px] mb-8 xl:mb-0">
                        <Link href='/'>
                            <Image src='/indihire.png' width={98} height={56} alt='' />
                        </Link>
                    </div>
                    <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16">
                        <div>
                            <h4 className="font-semibold mb-5">Latest News</h4>
                            <ul className="flex flex-col gap-y-6 text-sm">
                                <li>
                                    <Link href='/'>
                                        IE Programme is going to launch on 2nd january,2023.
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                    List of candidates and team lead for IE prog. will release by 1st of juaryan,2024.
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        Indibus is pushing recruitment of web designers.
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        to be updated
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        to be updated
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-5">Socials</h4>
                            <ul className="flex flex-col gap-y-6 text-sm">
                                <li>
                                    <Link href='/'>
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        LinkedIn
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        Twitter
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        Indibus
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        Google
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="py-4 border-t border-white/10">
                    <p className="text-white/60 text-center text-sm">&copy; INDIHIRE under INDIBUS || 2024</p>
                </div>
            </div>
        </footer>
    )
}

export default footer