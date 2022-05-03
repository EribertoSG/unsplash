import { forwardRef } from "react"

const menu = forwardRef(({ className }, ref) => {

    return (
        <div className={`menu ${className}`} ref={ref}>
            <div className="menu__container">
                <ul className="menu__list">
                    <li className="menu__item">Profile</li>
                    <li className="menu__item">Gallery</li>
                </ul>
                <hr />
                <ul className="menu__list">
                    <li className="menu__item">Log out</li>
                </ul>
            </div>
        </div>

    )
})

export default menu 
