import { forwardRef } from "react"

const Menu = forwardRef(({ className, data }, ref) => {
    return (
        <div className={`menu ${className}`} ref={ref}>
            <div className="menu__container">
                <ul className="menu__list">
                    <li className="menu__item">Not available</li>
                </ul>
                <hr />
                <ul className="menu__list">
                    <li className="menu__item">
                        <a href={data.links.download + '&force=true'} download target="_blank" rel="noopener noreferrer">{`Original size (${data.width} x ${data.height})`}</a>
                    </li>
                </ul>
            </div>
        </div>
    )
})

export default Menu 
