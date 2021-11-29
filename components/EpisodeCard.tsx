import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {getUTCReleaseDate} from "../tools/time";
import {Episode} from "../data/episodes";
import {Icon} from "@iconify/react";

interface EpisodeCardProps {
    episode: Episode
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
    const [isHover, setIsHover] = useState<boolean>(false)

    return (
        <Link href={"/episodes/[id]"} as={`/episodes/${episode.id}`}>
            <button onMouseEnter={() => {setIsHover(true)}}
                    onMouseLeave={() => {setIsHover(false)}}
                    className={"w-full h-22 hover:bg-gray-200 hover:bg-opacity-50 transition-colors duration-150 rounded-2xl flex flex-row items-center p-2 space-x-4 select-none"}>
                <div className={'relative h-18 w-32 rounded-lg bg-gray-200 flex-none'}>
                    <Image className={'rounded-lg'} alt={`Episode ${episode.id} Thumbnail`} src={`/episodes/${episode.id}/thumbnail_xs.jpg`} layout={"fill"} objectFit={"cover"}/>
                </div>
                <div className={'flex-grow text-left flex flex-row items-center'}>
                    <div className={'flex-grow'}>
                        <p className={"font-bold text-lg"}>Episode {episode.id}</p>
                        <p className={"font-light italic text-md"}>
                            {episode.titleRom}
                            {episode.titleNat? <span className={'ml-4 not-italic text-sm text-gray-400 transition-opacity duration-150 ' + (isHover? "opacity-100" : "opacity-0")}>{episode.titleNat}</span> : null}
                        </p>
                        <p className={"font-light text-sm text-gray-400"}>{getUTCReleaseDate(new Date(episode.releaseDate))}</p>
                    </div>
                    <Icon className={"text-red-500 text-6xl mr-3 transition-opacity duration-150 " + (isHover? "opacity-100" : "opacity-0")} icon={"ph:play-circle-fill"}/>
                </div>
            </button>
        </Link>
    )
}

export default EpisodeCard
