import React from "react";
import SideButton from "../../components/SideButton";
import Image from "next/image";
import Meta from "../../components/Meta";

const Guides: React.FC = () => {
    return (
        <div>
            <Meta title={"Guides"} page={"/guides"} desc={"A guide on how to watch Selection Project legally, as well as purchasing official merchandise!"}/>
            <h1>Streaming & Official Merchandise Guide</h1>
            <p className={"body-paragraph"}>
                Even though you can watch Selection Project on this website, we highly encourage you to support the franchise by either streaming Selection Project legally, or by purchasing Selection Project official merchandise. Keep reading if you want to know more!
            </p>
            <h2>Legal Streaming</h2>
            <div className={"md:flex-row flex-col flex md:space-x-6 md:space-y-0 space-y-4"}>
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
                <div className={"flex-none lg:w-72 md:w-60 space-y-4"}>
                    <SideButton icon={"ri:user-smile-fill"} title={"Watch on Funimation!"} href={"https://www.funimation.com/shows/selection-project"} important={true}/>
                    <SideButton icon={"ph:youtube-logo-fill"} title={"Watch on Muse Asia!"} href={"https://youtube.com/playlist?list=PLwLSw1_eDZl2FRizEh6a46FMtDzXRUeXq"} important={true}/>
                </div>
            </div>
            <h2>Official Merchandise</h2>
            <div className={"md:flex-row flex-col-reverse flex lg:space-x-6 lg:space-y-0 space-y-4"}>
                <div className={"w-32 h-42 lg:block hidden flex-none relative"}>
                    <Image alt={"Sumipan"} src={"/sumipan.png"} layout={"fill"}/>
                </div>
                <div className={"lg:w-72 md:w-60 flex-none md:mr-6 space-y-4"}>
                    <SideButton icon={"ph:bag-fill"} title={"CDJapan"} href={"https://www.cdjapan.co.jp/series/5901"}/>
                    <SideButton icon={"ion:logo-amazon"} title={"Amazon.jp"} href={"https://www.amazon.co.jp/s?k=SELECTION+PROJECT"}/>
                    <SideButton icon={"ph:link-simple-bold"} title={"Official Website"} subtitle={"View the whole merchandise catalog on the Selection Project official website!"} href={"http://pjselection.com/goods.html"}/>
                </div>
                <div className={"flex-grow"}>
                    <p className={"body-paragraph"}>
                        <b>CDJapan</b> has a very extensive listing of all the Selection Project merchandise! Whether it&apos;s the CDs, BD/DVDs, Shirts, Badges, Keychains, Shirts... They have all of it! They offer fast shipping straight from Japan, and have been very reliable.
                    </p>
                    <p className={"body-paragraph"}>
                        <b>Amazon.jp</b> also has a wide range of Selection Project merch. However, the shipping information varies per country, so it&apos;s best that you check if they can deliver to your country on Amazon.jp.
                    </p>
                    <p className={"body-paragraph"}>
                        <b className={"uppercase"}>Disclaimer:</b> This website is not affiliated with any of these vendors.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Guides
