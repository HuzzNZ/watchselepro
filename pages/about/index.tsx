import React from "react";
import Meta from "../../components/Meta";
import {InlineIcon} from "@iconify/react";

const About: React.FC = () => {
    return (
        <div>
            <Meta title={"About"} page={"/about"} desc={"About the creator of this website, and why this website exists."}/>
            <h1>Who made this website?</h1>
            <p className={"body-paragraph"}>
                This website was made by <b>Huzz</b>. You can find me using Twitter or Discord below:
            </p>
            <span className={"body-paragraph"}>
                <span className={"text-red-500 font-bold space-x-2"}>
                    <InlineIcon className={"inline"} icon={"ant-design:twitter-outlined"}/>
                    <a className={"hover:underline"} rel="noreferrer" target={"_blank"} href={"https://twitter.com/HuzzuDesu"}>@HuzzuDesu</a>
                </span><br/>
                <span className={"font-bold text-red-500 space-x-2"}>
                    <InlineIcon className={"inline text-red-500"} icon={"akar-icons:discord-fill"}/>
                    <span>@Huzz#0009</span>
                </span>
            </span>
            <h2>Why did you make this website?</h2>
            <p className={"body-paragraph"}>
                Selection Project, in my opinion is a really underappreciated anime series, both in Japan and overseas. It has the potential to become a really successful franchise, with all the seiyuu putting in amazing amounts of work into this series. As such, I wanted to construct an easy way for people who are interested, but haven&apos;t decided if they want to watch it to give it a shot. I believe having the anime readily available to be watched is an excellent way to spread awareness of Selection Project, and to promote it to a wider overseas audience.
            </p>
            <p className={"body-paragraph"}>
                <b>This website is NOT monetized. I built, host and maintain this website purely out of the interest of spreading the word of SelePro overseas.</b>
            </p>
        </div>
    )
}

export default About
