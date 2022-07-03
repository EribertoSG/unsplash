import { useRouter } from 'next/router'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useMediaQuery } from 'react-responsive'
import DownloadImage from '../atoms/DownloadImage'
import Text from '../atoms/Text'
import UserProfile from '../atoms/UserProfile'

const AllPhotos = ({ photos }) => {
    const { push } = useRouter()
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width:1024px)' })

    const breakPoints = {
        350: 1,
        750: 2,
        900: 3
    }
    return (
        <div className='masonry'>
            <ResponsiveMasonry columnsCountBreakPoints={breakPoints}>
                <Masonry>
                    {
                        photos.map(img => (
                            <div key={img.id} className='masonry-item' onClick={() => push(`/photo/${img.id}`)}>
                                <img src={img.urls.regular} alt="masonry" />
                                {
                                    isDesktopOrLaptop && (
                                        <div className='overlay'>
                                            <div className="overlay__actions">
                                                <DownloadImage link={img.links.download + '&force=true'} />
                                            </div>
                                            <div className='user'>
                                                <UserProfile userPhoto={img.user.profile_image.medium} />
                                                <Text text={img.user.username} className="user-text" />
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