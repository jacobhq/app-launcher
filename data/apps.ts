import { CalendarIcon, TimeIcon } from "@chakra-ui/icons"

export const topBar: topBarType[] = [
    {
        id: 0,
        title: "Calendar",
        href: "#",
        icon: CalendarIcon
    },
    {
        id: 1,
        title: "Timer",
        href: "#",
        icon: TimeIcon
    }
]

type topBarType = {
    id: Number,
    title: string,
    href: string,
    icon: any
}