import Masonry from 'react-masonry-css'

const AllPhotos = () => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
        500: 1
    }

    return (
        <div className='masonry'>
            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName='my-masonry-grid_column'>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1644982654131-79f434ac0c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <img src="https://images.unsplash.com/photo-1649859394614-dc4f7290b7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1648737965997-38b0cdf41c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <img src="https://images.unsplash.com/photo-1651454060241-a218f790be13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                    <img src="https://images.unsplash.com/photo-1651430459752-b2b43706d1ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </Masonry>
        </div>
    )
}

export default AllPhotos