import { forwardRef } from "react"
import Link from 'next/link'

const menu = forwardRef(({ className }, ref) => {

    return (
        <div className={`menu ${className}`} ref={ref}>
            <div className="menu__container">
                <ul className="menu__list">
                    <Link href="/profile">
                        <li className="menu__item">Profile</li>
                    </Link>
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
