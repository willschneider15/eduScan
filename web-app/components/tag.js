import { Badge } from "@nextui-org/react";
const Tag = ({ title }) => {

    const getColor = () => {
        let color
        switch (title.trim()) {
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
        return color
    }

    return (
        <Badge color={getColor()} variant="bordered" enableShadow>
            {title}
            {/* <div style={{ backgroundColor: getColor()}} className="rounded-lg"></div> */}
        </Badge>
    )
}

export default Tag