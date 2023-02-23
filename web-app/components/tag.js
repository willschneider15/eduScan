const Tag = ({ title }) => {

    const getColor = () => {
        let color
        switch (title.toLowerCase()) {
            case 'Event':
                color = 'rgb(255, 242, 51)'
                break
            case 'AMA':
                color = 'rgb(189, 51, 255)'
                break
            case 'Workshop':
                color = 'rgb(51, 219, 255)'
                break
            case 'Guest Speaker':
                color = 'rgb(117, 255, 51)'
                break
            case 'Panel':
                color = 'rgb(255, 87, 51)'
                    break  
            default:
                color = 'rgb(0,0,0)'
        }
        return color
    }
    return (
        <div style={{ backgroundColor: getColor()}} className="tag">{title}</div>
    )
}

export default Tag