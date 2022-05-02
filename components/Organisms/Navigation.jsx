import InputSearch from '../molecules/InputSearch'

const Navigation = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__firts-item">
                    <div className="header__logo">
                        <svg viewBox="0 0 32 32" width="32" height="32" xmlns="http://www.w3.org/2000/svg" class="icon icon--unsplash">
                            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" fill-rule="nonzero"></path>
                        </svg>
                    </div>
                    <div className="header__search">
                        <InputSearch className="input-search input-search__style-two" inputClass="search search-two" />
                    </div>
                </div>
                <div className="header__second-item">
                    <div className="header__user">
                        <img src="/assets/img/ayo-ogunseinde.jpg" alt="ayo-ogunseinde" />
                    </div>
                    <div className="header__menu">
                        <svg width="24" height="24" className='menu-icon' viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M4 21.3h24V24H4v-2.7zM4 8v2.7h24V8H4zm0 9.3h24v-2.7H4v2.7z"></path></svg>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navigation
