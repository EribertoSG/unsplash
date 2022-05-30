import axios from 'axios'
import Head from 'next/head'
import Layout from '../../components/pages/Layout'
import AllPhotos from '../../components/template/AllPhotos'

const Search = ({ data, search }) => {
    return (
        <>
            <Head>
                <title>{`${search} Pictures | Download Free ${search} Photos on Unsplash`}</title>
            </Head>
            <Layout>
                <h2>{`Results for ${search} on Unsplash`}</h2>
                <AllPhotos photos={data} />
            </Layout>
        </>
    )
}

export const getServerSideProps = async (ctx) => {
    const search = ctx.query.search
    const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=I22cKyDJTTGNBp_cNmTJ-syXQtbP5OVIwLtVY2eg2to&query=${search}`)
    const data = response.data.results
    return {
        props: {
            data,
            search
        }
    }
}

export default Search
