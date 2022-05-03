import Inputsearch from "../molecules/InputSearch"

const Heroimage = () => {
    return (
        <div className="hero-image">
            <img src="/assets/img/agnieszka-kowalczyk.jpg" alt="agnieszka-kowalczyk" className="background-image" />
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
                        <div className="hero-image__search">
                            <Inputsearch inputClass="search" />
                        </div>
                    </div>
                </div>
                <div className="hero-image__footer">
                    <p>Photo of the Day byAgnieszka Kowalczyk</p>
                    <p>Read more about the Unsplash License</p>
                </div>
            </div>
        </div>
    )
}

export default Heroimage
