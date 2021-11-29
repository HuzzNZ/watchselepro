import React from "react";
import Link from "next/link";
import {Icon} from "@iconify/react";
import {HeaderButtonInterface} from "./Header";

interface HeaderButtonProps {
    button: HeaderButtonInterface
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ button }) => {
    if (button.isLocal) {
        return (
            <Link href={button.link}>
                <button className={'h-16 w-16 text-white flex flex-col items-center justify-center p-2 rounded-full hover:bg-red-600 transition-all duration-150 space-y-0.5'}>
                    <Icon className={"text-2xl"} icon={button.icon}/>
                    <p className={'text-xs font-light'}>{button.title}</p>
                </button>
            </Link>
        )
    } else {
        return (
            <a href={button.link} target={"_blank"}>
                <div className={'h-16 w-16 text-white flex flex-col items-center justify-center p-2 rounded-full hover:bg-red-600 transition-all duration-150 space-y-0.5'}>
                    <Icon className={"text-2xl"} icon={button.icon}/>
                    <p className={'text-xs font-light'}>{button.title}</p>
                </div>
            </a>
        )
    }
}

export default HeaderButton
