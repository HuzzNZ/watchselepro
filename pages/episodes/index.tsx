import React from "react";
import {episodes} from "../../data/episodes";
import EpisodeCard from "../../components/EpisodeCard";

const EpisodeList: React.FC = () => {
    return (
        <div className={"space-y-4"}>
            <h1>Episode List</h1>
            { episodes.map(episode => <EpisodeCard key={episode.id} episode={episode}/> ) }
        </div>
    )
}

export default EpisodeList
