import { Badge } from "@nextui-org/react";
import type { Post } from '../lib/sanity.queries'
export type Color = "default" | "primary" | "secondary" | "success" | "warning" | "error" | undefined;
const Tag = (props: Pick<
    Post,
    'title'
    >
    ) => {
    const { title } = props
    
    const getColor = () => {
        let color
        switch (title!.trim()) {
            case 'Event':
                color = 'primary'
                break

            case 'Hackathon':
                color = 'secondary'
                break

            case 'Workshop':
                color = 'success'
                break

            case 'Guest Speaker':
                color = 'warning'
                break

            case 'Panel':
                color = 'error'
                    break 

            default:
                color = 'default'
        }
        let myColor = color as Color
        return myColor
    }

    return (
        <Badge color={getColor()} variant="bordered" enableShadow>
            {title}
            {/* <div style={{ backgroundColor: getColor()}} className="rounded-lg"></div> */}
        </Badge>
    )
}

export default Tag