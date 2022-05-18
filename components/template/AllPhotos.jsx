import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const AllPhotos = ({ photos }) => {
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
                        photos &&
                        photos.map(image => (
                            <div key={image.id} className='masonry-item'>
                                <img src={image.urls.regular} alt="masonry" />
                            </div>
                        ))
                    }
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}

export default AllPhotos