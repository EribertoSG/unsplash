import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { DowloadLink } from '../atoms/Link'
import Text from '../atoms/Text'
import UserProfile from '../atoms/UserProfile'

const AllPhotos = () => {
    const photos = [
        { id: 1, url: '/assets/img/agnieszka-kowalczyk.jpg' },
        { id: 2, url: '/assets/img/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg' },
        { id: 3, url: '/assets/img/elijah-m-henderson.jpg' },
        { id: 4, url: '/assets/img/fabrizio-lunardi.jpg' },
        { id: 5, url: '/assets/img/hamid-tajik.jpg' },
        { id: 6, url: '/assets/img/marc-kleen.jpg' }
    ]

    const breakPoints = {
        350: 1,
        750: 2,
        900: 3
    }
    return (
        <div className='masonry'>
            <ResponsiveMasonry columnsCountBreakPoints={breakPoints}>
                <Masonry>
                    {/* {
                        photos &&
                        photos.map(image => (
                            <div key={image.id} className='masonry-item'>
                                <img src={image.urls.regular} alt="masonry" />
                            </div>
                            ))
                        } */}

                    {
                        photos.map(img => (
                            <div key={img.id} className='masonry-item' onClick={() => console.log(img.id)}>
                                <img src={img.url} alt="masonry" />
                                <div className='overlay'>
                                    <div className="overlay__actions">
                                        <DowloadLink />
                                    </div>
                                    <div className='user'>
                                        <UserProfile />
                                        <Text text="Eriberto Santos" className="user-text" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}

export default AllPhotos