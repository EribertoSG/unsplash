import axios from 'axios'
import DetailsPhoto from '../../components/Organisms/PhotoDetail'
import Layout from '../../components/pages/Layout'

export default function Photo({ photo }) {
    console.log(photo)

    return (
        <Layout>
            {
                <DetailsPhoto
                    src={photo.urls.regular}
                    userName={photo.user.username}
                    userPhoto={photo.user.profile_image.medium}
                    views={photo.views}
                    downloads={photo.downloads}
                    make={photo.exif.make}
                    model={photo.exif.model}
                    download={photo.links.download + '&force=true'}
                />
            }
        </Layout>
    )
}

export const getServerSideProps = async (ctx) => {
    const id = ctx.query.id
    const headers = {
        headers: {
            Authorization: 'Client-ID I22cKyDJTTGNBp_cNmTJ-syXQtbP5OVIwLtVY2eg2to'
        }
    }
    const response = await axios.get(`https://api.unsplash.com/photos/${id}`, headers)
    const photo = response.data
    return {
        props: {
            photo
        }
    }
}

