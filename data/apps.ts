import { CalendarIcon, TimeIcon } from "@chakra-ui/icons"

export const topBar: topBarType[] = [
    {
        id: 0,
        title: "Calendar",
        href: "https://calendar.google.com/calendar/u/1/r",
        icon: CalendarIcon
    },
    {
        id: 1,
        title: "Timer",
        href: "https://timer.jacob.omg.lol",
        icon: TimeIcon
    }
]

export const cards: cardType[] = [
    {
        id: 0,
        title: "GitHub",
        description: "GitHub is where over 73 million developers shape the future of software, together. Contribute to the open source community and manage your Git repositories.",
        href: "https://github.com"
    },
    {
        id: 1,
        title: "Notion",
        description: "Used by the world's most innovative teams · MatchGroup. Notion is a workspace that adapts to your needs. It's as minimal or as powerful as you need it to be.",
        href: "https://notion.so"
    }
]

type topBarType = {
    id: Number,
    title: string,
    href: string,
    icon: any
}

type cardType = {
    id: Number,
    title: string,
    description: string,
    href: string,
    icon?: any
}