import React from "react";
import Head from "next/head";
import imageSize from "image-size";

interface MetaProps {
    page: string
    title?: string
    desc?: string
    image?: string
}

const Meta: React.FC<MetaProps> = ({ page, title, desc, image }) => {
    const baseURL = "https://watchselepro.com"
    const tagImage = image || "/banner_embed.jpg"
    const tagTitle = `Watch Selection Project${title? ` - ${title}` : ""}`
    const tagDesc = desc || "Held every summer, the national idol audition reality show \'Selection Project\' is said to be the biggest gateway to success for aspiring idols."
    return (
        <Head>
            <title>{tagTitle}</title>
            <meta charSet="UTF-8" />

            <meta name="title" content={tagTitle} />
            <meta name={"keywords"} content={"Selection, Project, Anime, Idol, Japanese"} />
            <meta name={"author"} content={"Huzz"} />
            <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"} />
            <meta name="description" content={tagDesc} />
            <meta name="theme-color" content="#EF4444" />

            <meta property="og:type" content="website" key={"og-type"} />
            <meta property="og:title" content={tagTitle} key={"og-title"} />
            <meta property="og:description" content={tagDesc} key={"og-desc"} />
            <meta property="og:image" content={`${baseURL}${tagImage}`} key={"og-image"} />
            <meta property="og:url" content={`${baseURL}${page}`} key={"og-url"} />

            <meta property="twitter:card" content="summary_large_image" key={"twitter-card"} />
            <meta property="twitter:title" content={tagTitle} key={"twitter-title"} />
            <meta property="twitter:description" content={tagDesc} key={"twitter-desc"} />
            <meta property="twitter:image" content={`${baseURL}${tagImage}`} key={"twitter-image"} />
        </Head>
    )
}

export default Meta
