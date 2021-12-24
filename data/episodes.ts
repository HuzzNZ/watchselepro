export interface Episode {
    id: number,
    titleRom: string,
    titleNat: string,
    releaseDate: number,
    final?: boolean
}

export const episodes: Episode[] = [
    {
        id: 1,
        titleRom: "Only one yell",
        titleNat: "",
        releaseDate: 1633093200000
    },
    {
        id: 2,
        titleRom: "The Girls on a Journey to Tomorrow",
        titleNat: "明日へ旅立つ少女たち",
        releaseDate: 1633698000000
    },
    {
        id: 3,
        titleRom: "If Singing Vanished From the World",
        titleNat: "もしこの世界から歌が消えたら",
        releaseDate: 1634302800000
    },
    {
        id: 4,
        titleRom: "Rush, Crash, Splash",
        titleNat: "ラッシュ！クラッシュ！スプラッシュ！",
        releaseDate: 1634907600000
    },
    {
        id: 5,
        titleRom: "Ecstatic Troublemakers",
        titleNat: "有頂天トラブルメーカー",
        releaseDate: 1635512400000
    },
    {
        id: 6,
        titleRom: "Her Heart, Her Hidden Secret",
        titleNat: "誰も知らない胸の内",
        releaseDate: 1636117200000
    },
    {
        id: 7,
        titleRom: "Feelings in Naked Blue",
        titleNat: "むき出しの想いはブルー",
        releaseDate: 1636722000000
    },
    {
        id: 8,
        titleRom: "The True Tone of Her Heart",
        titleNat: "心の本当の音色",
        releaseDate: 1637326800000
    },
    {
        id: 9,
        titleRom: "My Self in the Seashell",
        titleNat: "貝殻の中の私",
        releaseDate: 1637931600000
    },
    {
        id: 10,
        titleRom: "I Just Want to Sing",
        titleNat: "ただ歌いたくて",
        releaseDate: 1638536400000
    },
    {
        id: 11,
        titleRom: "One Little Step at a Time",
        titleNat: "少しだけど　少しずつ",
        releaseDate: 1639141200000
    },
    {
        id: 12,
        titleRom: "The Feelings We Want You To Know",
        titleNat: "あなたに届けたい想い",
        releaseDate: 1639746000000
    },
    {
        id: 13,
        titleRom: "Our Glorious Days",
        titleNat: "",
        releaseDate: 1640350800000,
        final: true
    }
]
