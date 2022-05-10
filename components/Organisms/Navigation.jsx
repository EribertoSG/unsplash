import Link from 'next/link'
import InputSearch from '../molecules/InputSearch'

const Navigation = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__firts-item">
                    <div className="header__logo">
                        <Link href="/">
                            <a>
                                <svg viewBox="0 0 32 32" width="32" height="32" xmlns="http://www.w3.org/2000/svg" className="icon icon--unsplash">
                                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                                </svg>
                            </a>
                        </Link>
                    </div>
                    <div className="header__search">
                        <InputSearch className="input-search input-search__style-two" inputClass="search search-two" />
                    </div>
                </div>
                <div className="header__second-item">
                    <Link href="https://unsplash.com">
                        <a className='link__icon' target={'_blank'}>
                            Go to unsplash
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navigation
