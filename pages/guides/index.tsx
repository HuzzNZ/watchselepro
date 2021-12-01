import React from "react";
import SideButton from "../../components/SideButton";
import Image from "next/image";

const Guides: React.FC = () => {
    return (
        <div>
            <h1>Streaming & Official Merchandise Guide</h1>
            <p className={"body-paragraph"}>
                We highly encourage you to support the franchise by either streaming Selection Project legally, or by purchasing Selection Project official merchandise. Keep reading if you want to know more!
            </p>
            <h2>Legal Streaming</h2>
            <div className={"flex-row flex space-x-6"}>
                <div className={"flex-grow"}>
                    <p className={"body-paragraph"}>
                        Selection Project is Licensed by <b>Funimation</b> globally. For the majority of fans, <b>Funimation</b> will be the only legal streaming source for Selection Project.
                    </p>
                    <p className={"body-paragraph"}>
                        However, Selection Project is also being simulcast on <b>Muse Asia</b> on YouTube for <b>FREE</b> for South East Asian fans in any of the following regions:
                    </p>
                    <ul className={"list-disc ml-8"}>
                        <li className={"body-paragraph"}>Singapore, Malaysia, Indonesia, Philippines, Thailand, Vietnam, Cambodia, Brunei, Laos, Myanmar, and Bhutan.</li>
                    </ul>
                </div>
                <div className={"flex-none w-72 space-y-4"}>
                    <SideButton icon={"ri:user-smile-fill"} title={"Watch on Funimation!"} href={"https://www.funimation.com/shows/selection-project"} important={true}/>
                    <SideButton icon={"ph:youtube-logo-fill"} title={"Watch on Muse Asia!"} href={"https://youtube.com/playlist?list=PLwLSw1_eDZl2FRizEh6a46FMtDzXRUeXq"} important={true}/>
                </div>
            </div>
            <h2>Official Merchandise</h2>
            <div className={"flex-row flex space-x-6"}>
                <div className={"w-32 h-42 flex-none relative"}>
                    <Image alt={"Sumipan"} src={"/sumipan.png"} layout={"fill"}/>
                </div>
                <div className={"w-72 flex-none space-y-4"}>
                    <SideButton icon={"ph:bag-fill"} title={"CDJapan"} href={"https://www.cdjapan.co.jp/series/5901"}/>
                    <SideButton icon={"ion:logo-amazon"} title={"Amazon.jp"} href={"https://www.amazon.co.jp/s?k=SELECTION+PROJECT"}/>
                    <SideButton icon={"ph:link-simple-bold"} title={"Official Website"} subtitle={"View the whole merchandise catalog on the Selection Project official website!"} href={"http://pjselection.com/goods.html"}/>
                </div>
                <div className={"flex-grow"}>
                    <p className={"body-paragraph"}>
                        <b>CDJapan</b> has a very extensive listing of all the Selection Project merchandise! Whether it's the CDs, BD/DVDs, Shirts, Badges, Keychains, Shirts... They have all of it! They offer fast shipping straight from Japan, and have been very reliable.
                    </p>
                    <p className={"body-paragraph"}>
                        <b>Amazon.jp</b> also has a wide range of Selection Project merch. However, the shipping information varies per country, so it's best that you check if they can deliver to your country on Amazon.jp.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Guides
