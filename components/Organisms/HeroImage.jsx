import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import Inputsearch from "../molecules/InputSearch"

const HeroImage = ({ src }) => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width:640px)' })
    return (
        <div className="hero-image">
            <Image src={src.urls.full} alt={src.alt_description} className="background-image" width={src.width} height={src.height} />
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
                    <p>Photo of the Day by {`${src.user.name} ${src.user.last_name && src.user.last_name}`}</p>
                    <p>Read more about the Unsplash License</p>
                </div>
            </div>
        </div>
    )
}

export default HeroImage
