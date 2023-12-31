'use client';

import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { LuSalad } from "react-icons/lu";
import { BiSolidFoodMenu } from "react-icons/bi";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll';
import { Button } from "./ui/button";

const links = [
    {
        icon: <AiFillHome />,
        path: 'home',
        name: 'home',
        offset: 0,
    },
    {
        icon: <BiSolidFoodMenu />,
        path: 'menu',
        name: 'menu',
        offset: 0,
    },
    {
        icon: <LuSalad />,
        path: 'about',
        name: 'about',
        offset: -50,
    },
    {
        icon: <PiPhoneCallFill />,
        path: 'contact',
        name: 'contact',
        offset: 0,
    },
]

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    return <div className={`${containerStyles}`}>
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer outline-none">
            <IoMenu className="text-3xl text-white transition-all duration-200" />
        </div>
        <aside className={`${isOpen ? 'right-0' : '-right-full'} bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}>mobile Nav
            <div className="flex flex-col items-center justify-between h-3/4">
                <div
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer text-4xl text-white absolute w-10 h-20 left-8 top-8 flex items-center justify-center">
                    <IoClose />
                </div>
                <Link href='/'>
                    <Image src='/indihire.png' width={90} height={36} alt="" />
                </Link>
                <div className="flex flex-col gap-y-8">
                    {links.map((link, index) => {
                        return ( <ScrollLink key={index} to={link.path} offset={link.offset} smooth={false} className="flex items-center gap-x-3">
                         <div className={`${iconStyles}`}>{link.icon}</div>   
                         <div className={`${linkStyles}`}>{link.name}</div>   
                        </ScrollLink>
                        ) ;
                    })} ;
                    <div>
                        <ScrollLink to="reservation" smooth offset={-150}>
                            <Button variant='orange'>Apply Now!!</Button>
                        </ScrollLink>
                    </div>
                </div>
            </div>
        </aside>
    </div>;
};

export default NavMobile