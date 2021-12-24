import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import HeaderButton from "./HeaderButton";
import {Icon} from "@iconify/react";
import HeaderButtonMobile from "./HeaderButtonMobile";

export interface HeaderButtonInterface {
    title: string
    icon: string
    link: string
    isLocal: boolean
}

function useOutsideAlerter(ref: React.MutableRefObject<any>) {
}

const Header: React.FC = () => {
    const wrapperRef: React.MutableRefObject<any> = useRef(null);
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowMobileMenu(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    useOutsideAlerter(wrapperRef);

    const buttons: HeaderButtonInterface[] = [
        { title: 'Episodes', icon: 'ph:film-strip-bold', link: "/episodes", isLocal: true },
        { title: 'Guides', icon: 'ph:article-fill', link: "/guides", isLocal: true },
        { title: 'About Us', icon: 'ph:circle-wavy-fill', link: "/about", isLocal: true },
        { title: 'Twitter', icon: 'ph:twitter-logo-bold', link: "https://twitter.com/pj_selection", isLocal: false },
        { title: 'Website', icon: 'ph:link-simple-bold', link: "http://pjselection.com", isLocal: false },
    ]

    return (
        <div className={"fixed z-50"}>
            <div className={'flex md:h-20 h-14 w-full bg-red-500 flex-row items-center justify-center select-none fixed z-40 ' + (showMobileMenu? "shadow-2xl":"")}>
                <Link href={"/"}>
                    <p className={'lg:text-3xl text-2xl text-white italic font-bold md:mr-12 hover:cursor-pointer'}>Watch Selection Project</p>
                </Link>
                <div className={'md:flex hidden space-x-4 flex-row items-center'}>
                    {buttons.map(button => <HeaderButton key={button.title} button={button}/>)}
                </div>
            </div>
            <button onClick={() => {setShowMobileMenu(!showMobileMenu)}} className={"absolute md:hidden bg-black bg-opacity-5 m-2 h-10 w-10 z-50 rounded-lg shadow-inner items-center justify-center " + (showMobileMenu? "hidden":"flex")}>
                <Icon className={"text-white text-2xl"} icon={"ph:list-bold"}/>
            </button>
            <div ref={wrapperRef} className={"md:hidden w-full bg-white shadow-lg backdrop-blur fixed z-30 " + (showMobileMenu? "block":"hidden")}>
                <div className={"h-14"}/>
                <div className={"flex flex-col space-y-1 p-2"}>
                    {buttons.map(button => <HeaderButtonMobile key={button.title} button={button} callback={() => setShowMobileMenu(false)}/>)}
                </div>
            </div>
        </div>
    )
}

export default Header
