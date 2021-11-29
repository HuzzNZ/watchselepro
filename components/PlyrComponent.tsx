import React, {useEffect, useRef} from "react";
import Plyr from "plyr-react";
import 'plyr-react/dist/plyr.css'

interface PlyrComponentProps {
    episode: number
}

const PlyrComponent: React.FC<PlyrComponentProps> = ({ episode }) => {
    const ref = useRef(null)

    useEffect(() => {
        // @ts-ignore
        const plyr = ref.current.plyr
    }, [])

    return (
        <div className={"w-full shadow-lg rounded-2xl"}>
            <Plyr ref={ref} source={
                {
                    type: 'video',
                    title: `Episode ${episode}`,
                    sources: [
                        {
                            src: `/episodes/${episode}/video1080.mp4`,
                            type: 'video/mp4',
                            size: 1080,
                        }, {
                            src: `/episodes/${episode}/video720.mp4`,
                            type: 'video/mp4',
                            size: 720,
                        }, {
                            src: `/episodes/${episode}/video576.mp4`,
                            type: 'video/mp4',
                            size: 576,
                        }, {
                            src: `/episodes/${episode}/video432.mp4`,
                            type: 'video/mp4',
                            size: 432,
                        }
                    ],
                    poster: `/episodes/${episode}/thumbnail.jpg`,
                    tracks: [
                        {
                            kind: 'captions',
                            label: 'English',
                            srcLang: "en",
                            src: `/episodes/${episode}/subtitleEN.vtt`,
                            default: true
                        }
                    ],
                }
                } options={
                    {
                        ratio: '16:9',
                        settings: ['quality', 'speed', 'loop'],
                        volume: 0.5,
                        captions: { active: true, language: 'en' },
                        quality: { default: 1080, options: [1080, 720, 576, 432] }
                    }
                }
            />
        </div>
    )
}

export default PlyrComponent
