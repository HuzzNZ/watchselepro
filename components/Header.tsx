import React from "react";
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
        { title: 'Twitter', icon: 'ph:twitter-logo-bold', link: "https://twitter.com/pj_selection", isLocal: false },
        { title: 'Website', icon: 'ph:link-simple-bold', link: "http://pjselection.com", isLocal: false },
    ]

    return (
        <div className={'h-20 w-full bg-red-500 flex flex-row items-center justify-center select-none'}>
            <p className={'text-3xl text-white italic font-bold mr-12'}>Watch Selection Project</p>
            <div className={'space-x-4 flex flex-row items-center'}>
                {buttons.map(button => <HeaderButton key={button.title} button={button}/>)}
            </div>
        </div>
    )
}

export default Header
