export interface ICharactersData {
    alias: string;
    name: string;
    img: string;
    thumbnail: string;
    skill: string;
    text: string;
    tags: CharactersTagsEnum[];
}

export const enum CharactersTagsEnum {
    All = 'All',
    CoProtagonist = 'CoProtagonist',
    Protagonist = 'protagonist',
    Supporting = 'supporting',
}

export const CharactersData: ICharactersData[] = [
    {
        alias: "amy",
        name: "Amy Salvatore",
        img: "/assets/imgs/characters/amy-salvatore.png",
        thumbnail: "/assets/imgs/characters/thumbnail-amy.png",
        skill: "furtiva",
        text: "Amy é lorem ipsum",
        tags: [CharactersTagsEnum.Protagonist]
    },
    {
        alias: "bruno",
        name: "Bruno Diniz",
        img: "/assets/imgs/characters/bruno-diniz.png",
        thumbnail: "/assets/imgs/characters/thumbnail-bruno.png",
        skill: "finanças",
        text: "Bruno é lorem ipsum",
        tags: [CharactersTagsEnum.Supporting]

    },
    {
        alias: "dario",
        name: "Dario Ambiteus",
        img: "/assets/imgs/characters/dario-ambiteus.png",
        thumbnail: "/assets/imgs/characters/thumbnail-dario.png",
        skill: "traiçoeiro",
        text: "Dario é lorem ipsum",
        tags: [CharactersTagsEnum.Supporting]
    },
    {
        alias: "dominike",
        name: "Dominike Vihumani",
        img: "/assets/imgs/characters/dominike-vihumani.png",
        thumbnail: "/assets/imgs/characters/thumbnail-dominike.png",
        skill: "Biotecnóloga",
        text: "Dominike é lorem ipsum",
        tags: [CharactersTagsEnum.CoProtagonist]
    },
    {
        alias: "donaka",
        name: "Donaka Ruzuel",
        img: "/assets/imgs/characters/donaka-ruzuel.png",
        thumbnail: "/assets/imgs/characters/thumbnail-donaka.png",
        skill: "maquiavélico",
        text: "Donaka é lorem ipsum",
        tags: [CharactersTagsEnum.Supporting]
    },
    {
        alias: "grazielle",
        name: "Grazielle Barton",
        img: "/assets/imgs/characters/amy-salvatore.png",
        thumbnail: "/assets/imgs/characters/thumbnail-grazielle.png",
        skill: "brigona",
        text: "Grazielle é lorem ipsum",
        tags: [CharactersTagsEnum.CoProtagonist]
    },
    {
        alias: "katilabeth",
        name: "Katilabeth Rodrigues",
        img: "/assets/imgs/characters/katilabeth-rodrigues.png",
        thumbnail: "/assets/imgs/characters/thumbnail-katilabeth.png",
        skill: "justiça",
        text: "Katilabeth é lorem ipsum",
        tags: [CharactersTagsEnum.Protagonist]
    },
    {
        alias: "ginoide-02",
        name: "Ginoide-02",
        img: "/assets/imgs/characters/amy-salvatore.png",
        thumbnail: "/assets/imgs/characters/thumbnail-ginoide-02.png",
        skill: "autoconsciência",
        text: "Ginoide-02 é lorem ipsum",
        tags: [CharactersTagsEnum.Protagonist]
    },
    {
        alias: "nolan",
        name: "Nolan Genrizeo",
        img: "/assets/imgs/characters/amy-salvatore.png",
        thumbnail: "/assets/imgs/characters/thumbnail-nolan.png",
        skill: "hacking",
        text: "Nolan é lorem ipsum",
        tags: [CharactersTagsEnum.CoProtagonist]
    },
    {
        alias: "paulo",
        name: "Paulo Mourezie",
        img: "/assets/imgs/characters/amy-salvatore.png",
        thumbnail: "/assets/imgs/characters/thumbnail-paulo.png",
        skill: "tecnologia",
        text: "Paulo é lorem ipsum",
        tags: [CharactersTagsEnum.CoProtagonist]
    },
    {
        alias: "Fayola",
        name: "Fayola Zaeneryen",
        img: "/assets/imgs/characters/pandora-vihumani.png",
        thumbnail: "/assets/imgs/characters/thumbnail-pandora.png",
        skill: "maquiavélica",
        text: "Pandora é lorem ipsum",
        tags: [CharactersTagsEnum.Protagonist]
    },
]