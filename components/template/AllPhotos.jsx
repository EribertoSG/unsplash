import { useRouter } from 'next/router'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useMediaQuery } from 'react-responsive'
import { DowloadLink } from '../atoms/Link'
import Text from '../atoms/Text'
import UserProfile from '../atoms/UserProfile'

const AllPhotos = () => {
    const { push } = useRouter()
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width:1024px)' })

    const photos = [
        { id: 1, url: '/assets/img/agnieszka-kowalczyk.jpg', userName: "Eriberto Santos", userPhoto: '/assets/img/user/santos.png' },
        { id: 2, url: '/assets/img/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg', userName: "Eriberto Santos", userPhoto: '/assets/img/user/santos.png' },
        { id: 3, url: '/assets/img/elijah-m-henderson.jpg', userName: "Eriberto Santos", userPhoto: '/assets/img/user/santos.png' },
        { id: 4, url: '/assets/img/fabrizio-lunardi.jpg', userName: "Eriberto Santos", userPhoto: '/assets/img/user/santos.png' },
        { id: 5, url: '/assets/img/hamid-tajik.jpg', userName: "Eriberto Santos", userPhoto: '/assets/img/user/santos.png' },
        { id: 6, url: '/assets/img/marc-kleen.jpg', userName: "Eriberto Santos", userPhoto: '/assets/img/user/santos.png' }
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
                            <div key={img.id} className='masonry-item' onClick={() => push(`/photo/${img.id}`)}>
                                <img src={img.url} alt="masonry" />
                                {
                                    isDesktopOrLaptop && (
                                        <div className='overlay'>
                                            <div className="overlay__actions">
                                                <DowloadLink link={img.url} />
                                            </div>
                                            <div className='user'>
                                                <UserProfile userPhoto={img.userPhoto} />
                                                <Text text={img.userName} className="user-text" />
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}

export default AllPhotos