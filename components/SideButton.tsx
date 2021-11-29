import React from "react";
import {Icon} from "@iconify/react";
import Link from "next/link";

interface SideButtonProps {
    icon: string,
    title: string,
    subtitle?: string,
    href: string,
    as?: string,
    truncate?: boolean
    important?: boolean
}

const SideButton: React.FC<SideButtonProps> = ({ icon, title, subtitle, href, as, truncate = false, important = false}) => {
    return (
        <Link href={href} as={as || href}>
            <button className={(important? "bg-red-500 bg-opacity-100 hover:bg-red-600" : "bg-red-200 bg-opacity-50 hover:bg-red-300 hover:bg-opacity-50") + " w-full rounded-2xl p-3 flex flex-row items-center transition-colors duration-150 "}>
                <Icon className={(important? "text-white" : "text-red-500") + " text-4xl flex-none"} icon={icon}/>
                <div className={"flex-grow space-y-1 mx-2 text-left " + (truncate? "truncate " : " ") + (important? "text-white" : "")}>
                    <p className={"font-bold leading-none"}>{title}</p>
                    { subtitle?
                        <p className={'font-light text-sm italic leading-tight ' + (truncate ? "truncate" : "")}>{subtitle}</p> : null}
                </div>
            </button>
        </Link>
    )
}

export default SideButton
