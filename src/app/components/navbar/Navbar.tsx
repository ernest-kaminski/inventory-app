'use client'

import Link from "next/link"
import { useState } from "react"
import { MenuIcon, Icons, AppIcon } from "./icons"

const labels = {
    offer: "Lista urządzeń",
    order: "Dodaj urządzenie",
    contact: "Historia zamówień"
}

const slugs = {
    offer: "/list",
    order: "/add-device",
    contact: "/contact"
}

export function Navbar(){
    const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false)

    return(
        <div className="flex flex-col">
            <header className="flex fixed top-0 py-2 shadow-xl w-full z-10 bg-gray-300 justify-center">
                <div className="flex flex-row gap-2 items-center ml-6 md:ml-32">
                    <Link href='/'>
                        <AppIcon className="size-24"/>
                    </Link>
                    <div className="px-2 text-2xl w-[300px]">Inventory App</div>
                </div>
                <nav className="flex items-center text-2xl gap-10 container justify-center">
                    <div className="md:invisible w-8 h-8 hover:cursor-pointer">
                        <MenuIcon className="size-8 align-center" onClick={() => setMobileMenuActive(!mobileMenuActive)}/>
                    </div>
                    <Link href={slugs.offer} className="h-full w-0 md:w-auto invisible content-center md:visible hover:text-primary transition ease-in-out hover:text-white">{labels.offer}</Link>
                    <Link href={slugs.order} className="h-full w-0 md:w-auto invisible content-center md:visible hover:text-primary transition ease-in-out hover:text-white">{labels.order}</Link>
                    <Link href={slugs.contact} className="h-full w-0 md:w-auto invisible content-center md:visible hover:text-primary transition ease-in-out hover:text-white">{labels.contact}</Link>
                </nav>
            </header>

            <section className={`flex flex-col w-full fixed ${mobileMenuActive ? "right-0" : "right-full"} transition-all duration-500 ease-in-out top-[120px] z-10`}>
                <nav className="flex flex-col text-lg w-full relative items-center justify-center z-10">
                    <Link href={slugs.offer} onClick={() => setMobileMenuActive(!mobileMenuActive)} className="visible md:invisible w-full relative text-center text-2xl py-4 px-4 bg-gray-400 hover:bg-gray-300 transition border-b-2 z-10">{labels.offer}</Link>
                    <Link href={slugs.order} onClick={() => setMobileMenuActive(!mobileMenuActive)} className="visible md:invisible w-full relative text-center text-2xl py-4 px-4 bg-gray-400 hover:bg-gray-300 transition border-b-2 z-10">{labels.order}</Link>
                    <Link href={slugs.contact} onClick={() => setMobileMenuActive(!mobileMenuActive)} className="visible md:invisible w-full relative text-center text-2xl py-4 px-4 bg-gray-400 hover:bg-gray-300 transition border-b-2 z-10">{labels.contact}</Link>
                </nav>
            </section>
            <div className="h-[120px]"></div>
        </div>
    )
}