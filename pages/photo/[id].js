import axios from 'axios'
import Head from 'next/head'
import DetailsPhoto from '../../components/Organisms/PhotoDetail'
import Layout from '../../components/pages/Layout'

export default function Photo({ photo }) {
    return (
        <>
            <Head>
                <title>{`HD photo of ${photo.user.username}`}</title>
            </Head>
            <Layout>
                {
                    <DetailsPhoto photo={photo} />
                }
            </Layout>
        </>
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

