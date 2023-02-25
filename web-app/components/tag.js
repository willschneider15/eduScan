const Tag = ({ title }) => {

    const getColor = () => {
        let color
        switch (title.trim()) {
            case 'Event':
                color = 'rgb(68, 109, 137)'
                break
            case 'AMA':
                color = 'rgb(41, 157, 145)'
                break
            case 'Workshop':
                color = 'rgb(255, 244, 184)'
                break
            case 'Guest Speaker':
                color = 'rgb(249, 143, 55)'
                break
            case 'Panel':
                color = 'rgb(222, 60, 49)'
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