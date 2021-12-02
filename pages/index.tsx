import React from 'react';
import Link from "next/link";
import {NextPage} from "next";
import Image from "next/image";
import SideButton from "../components/SideButton";
import PlyrComponent from "../components/PlyrComponent";
import {episodes} from "../data/episodes";
import Meta from "../components/Meta";

const Home: NextPage = () => {
    return (
        <div className={"space-y-8"}>
            <Meta page={""}/>
            <div className={'w-full relative'}>
                <Image alt={"Selection Project Banner"} className={"rounded-2xl"} src={"/banner_embed.jpg"} layout={"responsive"} width={1500} height={688} priority={true}/>
            </div>
            <div className={"space-y-4"}>
                <h1>It&apos;s time to give <span className={"chromatic italic tracking-wide font-normal mx-1"}>Selection Project</span> a go!</h1>
                <p className={"body-paragraph"}>
                    Suzune Miyama has been sick since childhood, but always used idol Akari Amasawa’s music for courage and smiles through hard times. Now in her final year of junior high, Suzune is auditioning against thousands of contestants to become one of nine chosen idols in the &ldquo;Selection Project&rdquo;—the exact audition competition Akari used to gain fame. <b>Will she follow in her icon’s footsteps?</b>
                </p>
            </div>
            <div className={"space-y-4"}>
                <h2>Watch Episode 1 now!</h2>
                <div className={"flex lg:flex-row flex-col lg:space-x-6 lg:space-y-0 space-y-4"}>
                    <div className={"lg:w-176 w-full flex-none"}>
                        <PlyrComponent episode={1}/>
                    </div>
                    <div className={"flex-grow space-y-4"}>
                        <SideButton icon={"ph:eye-fill"} title={"Go to: Episode 1"} subtitle={episodes[0].titleRom} truncate={true} href={"/episodes/[id]"} as={"/episodes/1"} important={true}/>
                        <SideButton icon={"ph:arrow-circle-right-fill"} title={"Next: Episode 2"} subtitle={episodes[1].titleRom} href={"/episodes/[id]"} as={"/episodes/2"} truncate={true} important={true}/>
                        <SideButton icon={"ph:film-strip-bold"} title={"View all episodes"} href={"/episodes"}/>
                        <SideButton icon={"ph:youtube-logo-fill"} title={"In South East Asia?"} subtitle={"Watch Selection Project for free on YouTube @ Muse Asia!"} href={"https://youtube.com/playlist?list=PLwLSw1_eDZl2FRizEh6a46FMtDzXRUeXq"}/>
                        <SideButton icon={"ph:thumbs-up-fill"} title={"Like what you're seeing?"} subtitle={"Consider continuing watching on your local streaming service!"} href={"#"}/>
                    </div>
                </div>
            </div>
            <div className={"space-y-4"}>
                <h2>What is Selection Project?</h2>
                <p className={"body-paragraph"}>
                    Held every summer, the national idol audition reality show &ldquo;<span className={"chromatic"}>SELECTION PROJECT</span>&rdquo; is said to be the biggest gateway to success for aspiring idols. This year marks the 7th edition of the show. The girls who have won the previous rounds have all made spectacular debuts, gaining popularity both in Japan and overseas.<br/><br/>
                    The 9 finalists who won the preliminary rounds in <b>Hokkaido</b>, <b>Tohoku</b>, <b>North Kanto</b>, <b>South Kanto</b>, <b>Kansai</b>, <b>Chubu</b>, <b>Chuugoku</b>, <b>Shikoku</b>, and <b>Kyushu/Okinawa</b> will spend a month of their summer vacation living together in a special facility while they try to compete in an audition battle. The winner will be decided by the votes (&ldquo;yells&rdquo;) of the users watching the reality show and will debut as an idol.
                </p>
            </div>
            <div className={"w-full relative"}>
                <Image alt={"Selection Project Key Visual"} className={"rounded-2xl"} src={"/visual.jpg"} width={1414} height={2000} layout={"responsive"}/>
            </div>
            <div className={"space-y-4"}>
                <h2>Sounds good! How do I watch it?</h2>
                <div className={"flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-4"}>
                    <div className={"md:w-60 lg:w-72 flex-none space-y-4"}>
                        <SideButton icon={"ph:film-strip-bold"} title={"View all episodes"} subtitle={"Watch Selection Project here."} href={"/episodes"} important={true}/>
                        <SideButton icon={"ph:globe-fill"} title={"Streaming Services"} subtitle={"Find out how to watch Selection Project legally in your region!"} href={"/guides"}/>
                        <SideButton icon={"ph:shopping-cart-fill"} title={"Official Merchandise"} subtitle={"Find out how to get official merchandise overseas!"} href={"/guides"}/>
                    </div>
                    <div className={"flex-grow"}>
                        <p className={"body-paragraph"}>
                            <b>You can find all the episodes of the Selection Project anime on this website!</b> Though, we kindly ask everyone to support the franchise in any way they can, by watching Selection Project on a legal streaming service, or by purchasing Selection Project official merchandise. You can click the links to the left to find out more streaming / merchandise information.
                            <br/><br/>
                            <b>Disclaimer:</b> This site is not associated with the Selection Project franchise. It was created by a passionate fan for the sole purpose of providing an accessible way to watch Selection Project overseas. All rights to all media content on this site content belong to <span className={'tracking-normal font-normal text-sm'}>© SELECTION PROJECT PARTNERS</span>. For more information, please read <Link href={"#"}><span className={"link"}>About Us</span></Link>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
