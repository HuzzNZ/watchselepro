import React from "react";
import Link from "next/link";
import HeaderButton from "./HeaderButton";

export interface HeaderButtonInterface {
    title: string
    icon: string
    link: string
    isLocal: boolean
}

const Header: React.FC = () => {
    const buttons: HeaderButtonInterface[] = [
        { title: 'Episodes', icon: 'ph:film-strip-bold', link: "/episodes", isLocal: true },
        { title: 'Guides', icon: 'ph:article-fill', link: "#", isLocal: true },
        { title: 'About Us', icon: 'ph:circle-wavy-fill', link: "#", isLocal: true },
        { title: 'Twitter', icon: 'ph:twitter-logo-bold', link: "https://twitter.com/pj_selection", isLocal: false },
        { title: 'Website', icon: 'ph:link-simple-bold', link: "http://pjselection.com", isLocal: false },
    ]

    return (
        <div className={'h-20 w-full bg-red-500 flex flex-row items-center justify-center select-none fixed z-50'}>
            <Link href={"/"}>
                <p className={'text-3xl text-white italic font-bold mr-12 hover:cursor-pointer'}>Watch Selection Project</p>
            </Link>
            <div className={'space-x-4 flex flex-row items-center'}>
                {buttons.map(button => <HeaderButton key={button.title} button={button}/>)}
            </div>
        </div>
    )
}

export default Header
