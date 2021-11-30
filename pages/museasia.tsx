import React, {useEffect} from "react";

const MuseAsia: React.FC = () => {
    useEffect(() => {
        window.location.replace('https://youtube.com/playlist?list=PLwLSw1_eDZl2FRizEh6a46FMtDzXRUeXq')
    }, [])

    return (
        <p>
            Redirecting you to Muse Asia&apos;s Playlist of Selection Project...
        </p>
    )
}

export default MuseAsia
