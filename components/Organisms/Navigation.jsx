import { Component, useState, useEffect, createRef } from 'react'
import InputSearch from '../molecules/InputSearch'
import Menu from '../molecules/Menu'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }

        this.menu = createRef()
        this.toggleContainer = createRef()
        this.openMenu = this.openMenu.bind(this)
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this)
    }

    openMenu() {
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }))
    }

    onClickOutsideHandler(event) {
        if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
            this.setState({ isOpen: false });
        }
    }

    componentDidMount() {
        window.addEventListener('click', this.onClickOutsideHandler)
    }

    render() {
        return (
            <header className="header">
                <div className="header__container">
                    <div className="header__firts-item">
                        <div className="header__logo">
                            <svg viewBox="0 0 32 32" width="32" height="32" xmlns="http://www.w3.org/2000/svg" className="icon icon--unsplash">
                                <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                            </svg>
                        </div>
                        <div className="header__search">
                            <InputSearch className="input-search input-search__style-two" inputClass="search search-two" />
                        </div>
                    </div>
                    <div className="header__second-item">
                        <div className="header__user-container" onClick={this.openMenu} ref={this.toggleContainer}>
                            <div className="header__user">
                                <img src="/assets/img/ayo-ogunseinde.jpg" alt="ayo-ogunseinde" />
                            </div>
                            <Menu className={this.state.isOpen && 'open-menu'} ref={this.menu} />
                        </div>
                        <div className="header__menu">
                            <svg width="24" height="24" className='menu-icon' viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M4 21.3h24V24H4v-2.7zM4 8v2.7h24V8H4zm0 9.3h24v-2.7H4v2.7z"></path></svg>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

// const Navigation = () => {

//     const [isOpen, setIsOpen] = useState(false)
//     const menu = createRef()


//     const handleClickOutside = event => {
//         if (menu.current && !menu.current.contains(event.target)) {
//             setIsOpen(false)
//         }
//     }

//     useEffect(() => {
//         window.addEventListener('click', handleClickOutside)
//     }, [])



//     const openMenu = () => {
//         setIsOpen(!isOpen)
//     }

//     return (
//         <header className="header">
//             <div className="header__container">
//                 <div className="header__firts-item">
//                     <div className="header__logo">
//                         <svg viewBox="0 0 32 32" width="32" height="32" xmlns="http://www.w3.org/2000/svg" className="icon icon--unsplash">
//                             <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
//                         </svg>
//                     </div>
//                     <div className="header__search">
//                         <InputSearch className="input-search input-search__style-two" inputClass="search search-two" />
//                     </div>
//                 </div>
//                 <div className="header__second-item">
//                     <div className="header__user-container" onClick={openMenu}>
//                         <div className="header__user">
//                             <img src="/assets/img/ayo-ogunseinde.jpg" alt="ayo-ogunseinde" />
//                         </div>
//                         <Menu className={isOpen && 'open-menu'} ref={menu} />
//                     </div>
//                     <div className="header__menu">
//                         <svg width="24" height="24" className='menu-icon' viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M4 21.3h24V24H4v-2.7zM4 8v2.7h24V8H4zm0 9.3h24v-2.7H4v2.7z"></path></svg>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     )
// }

export default Navigation
