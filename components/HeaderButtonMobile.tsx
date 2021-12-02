import React from "react";
import Link from "next/link";
import {Icon} from "@iconify/react";
import {HeaderButtonInterface} from "./Header";

interface HeaderButtonMobileProps {
    button: HeaderButtonInterface
    callback: any
}

const HeaderButtonMobile: React.FC<HeaderButtonMobileProps> = ({ button, callback }) => {
    if (button.isLocal) {
        return (
            <Link href={button.link}>
                <button onClick={callback} className={"w-full flex flex-row items-center text-lg font-light space-x-4 rounded-md transition-colors duration-150 hover:bg-black hover:bg-opacity-10 bg-opacity-0 px-2 py-1 text-left"}>
                    <Icon className={"text-red-500 text-2xl"} icon={button.icon} />
                    <p>{button.title}</p>
                </button>
            </Link>
        )
    } else {
        return (
            <a href={button.link} target={"_blank"} rel="noreferrer">
                <button onClick={callback} className={"w-full flex flex-row items-center text-lg font-light space-x-4 rounded-md transition-colors duration-150 hover:bg-black hover:bg-opacity-10 bg-opacity-0 px-2 py-1 text-left"}>
                    <Icon className={"text-red-500 text-2xl"} icon={button.icon} />
                    <p>{button.title}</p>
                </button>
            </a>
        )
    }
}

export default HeaderButtonMobile
