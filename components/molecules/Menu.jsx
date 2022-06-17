import { forwardRef } from "react"

const Menu = forwardRef(({ className, originSize}, ref) => {

    return (
        <div className={`menu ${className}`} ref={ref}>
            <div className="menu__container">
                <ul className="menu__list">
                    <li className="menu__item">{`Pequeño (1000 x 1500)`}</li>
                    <li className="menu__item">{`Mediano (1500 x 3000)`}</li>
                    <li className="menu__item">{`Grande (2400 x 3595)`}</li>
                </ul>
                <hr />
                <ul className="menu__list">
                    <li className="menu__item">{`Tamaño original (3000 x 4000)`}</li>
                </ul>
            </div>
        </div>

    )
})

export default Menu 
