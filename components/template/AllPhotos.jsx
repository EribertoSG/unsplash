import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const AllPhotos = () => {
    const breakPoints = {
        350: 1,
        750: 2,
        900: 3
    }
    const images = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1650968163166-da7e87ab4e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1651644515984-2b210c65125b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1651938409309-ecf9971aca9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 4,
            url: 'https://images.unsplash.com/photo-1652110770901-e4a4f279951c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 5,
            url: 'https://images.unsplash.com/photo-1651812733857-6b13e4f26cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
    ]

    return (
        <div className='masonry'>
            <ResponsiveMasonry columnsCountBreakPoints={breakPoints}>
                <Masonry>
                    {
                        images.map(image => (
                            <div key={image.id} className='masonry-item'>
                                <img src={image.url} alt='masonry' />
                            </div>
                        ))
                    }
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}

export default AllPhotos