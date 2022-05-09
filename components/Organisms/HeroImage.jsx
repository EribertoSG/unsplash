import { useMediaQuery } from 'react-responsive'

import Inputsearch from "../molecules/InputSearch"

const Heroimage = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width:640px)' })

    return (
        <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1650012008053-b96b760d8984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="agnieszka-kowalczyk" className="background-image" />
            <div className="hero-image__container">
                <div className="hero-image__content">
                    <div className="hero-image__main-content">
                        <div className="hero-image__title-text">
                            <h1 className="hero-image__title animate__animated animate__bounceIn">Unsplash</h1>
                            <div className="hero-image__text">
                                <p>The internet’s source of freely-usable images.</p>
                                <p>Powered by creators everywhere.</p>
                            </div>
                        </div>
                        {isDesktopOrLaptop && (
                            <div className="hero-image__search">
                                <Inputsearch inputClass="search" />
                            </div>
                        )}
                    </div>
                </div>
                <div className="hero-image__footer">
                    <p>Photo of the Day by Eriberto Santos</p>
                    <p>Read more about the Unsplash License</p>
                </div>
            </div>
        </div>
    )
}

export default Heroimage
