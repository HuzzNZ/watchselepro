import {Episode, episodes} from "../../data/episodes";
import {GetStaticProps, GetStaticPaths} from "next";
import React from "react";
import PlyrComponent from "../../components/PlyrComponent";
import SideButton from "../../components/SideButton";
import {getUTCReleaseDate} from "../../tools/time";
import Meta from "../../components/Meta";

interface EpisodePageProps {
    episode: Episode
    maxEpisodes: number
}

const EpisodePage: React.FC<EpisodePageProps> = ({ episode, maxEpisodes }) => {
    const nextEpisode = episode.id === maxEpisodes? null : episodes.find(obj => { return obj.id === (episode.id + 1) })
    return (
        <div className={'space-y-4'}>
            <Meta page={`/episodes/${episode.id}`} title={`Episode ${episode.id}`} image={`/episodes/${episode.id}/thumbnail_s.jpg`} desc={episode.titleRom}/>
            <PlyrComponent episode={episode.id}/>
            <div className={'flex lg:flex-row lg:space-y-0 flex-col space-y-4'}>
                <div className={'flex-grow'}>
                    <p className={'space-x-3 align-middle'}>
                        <span className={"font-bold text-2xl"}>Episode {episode.id}</span>
                        <span className={'italic font-light text-2xl'}>{episode.titleRom}</span>
                    </p>
                    <p className={'inline-flex flex-row space-x-3 items-center'}>
                        {nextEpisode? null : <span className={'text-sm uppercase font-light italic px-2 py-0.5 bg-red-500 text-white rounded-md'}>Latest</span>}
                        <span className={'text-md font-light text-gray-400'}>{getUTCReleaseDate(new Date(episode.releaseDate))}</span>
                    </p>
                </div>
                <div className={"lg:w-72 flex-none space-y-4"}>
                    {nextEpisode ? <SideButton
                        icon={"ph:arrow-circle-right-fill"} title={"Next: Episode " + nextEpisode.id} subtitle={nextEpisode.titleRom} href={"/episodes/[id]"} as={`/episodes/${nextEpisode.id}`} truncate={true} important={true}/> : null}
                    <SideButton icon={"ph:film-strip-bold"} title={"View all episodes"} href={"/episodes"}/>
                    <SideButton icon={"ph:thumbs-up-fill"} title={nextEpisode? "Liked the episode?" : "Liked the series?"} subtitle={nextEpisode? "Consider continuing watching on your local streaming service, or buying the BD/DVD set!" : "Consider buying the BD/DVD sets, or Selection Project merchandise to support the franchise!"} href={"/guides"} truncate={false}/>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = episodes.map(episode => { return { params: { id: String(episode.id) } }})
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const episode = episodes.find(obj => { return String(obj.id) === (params? params.id : "1") })
    return {
        props: {
            episode,
            maxEpisodes: episodes.length
        }
    }
}

export default EpisodePage
