import React from "react";
import {episodes} from "../../data/episodes";
import EpisodeCard from "../../components/EpisodeCard";
import Meta from "../../components/Meta";

const EpisodeList: React.FC = () => {
    return (
        <div className={"space-y-4"}>
            <Meta title={"Episodes"} page={"/episodes"} desc={"Episode Listing of Selection Project."}/>
            <h1>Episode List</h1>
            { episodes.map(episode => <EpisodeCard key={episode.id} episode={episode}/> ) }
        </div>
    )
}

export default EpisodeList
