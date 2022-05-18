import axios from "axios"
import useSearch from "../components/hooks/useSearch"
import Heroimage from "../components/organisms/HeroImage"
import Layout from "../components/pages/Layout"
import AllPhotos from "../components/template/AllPhotos"

export default function Home({ listPhotos, getARandomPhoto }) {
  const { photos } = useSearch()

  return (
    <>
      <Heroimage src={getARandomPhoto} />
      <Layout>
        <AllPhotos photos={listPhotos} />
      </Layout>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const headers = {
    headers: {
      Authorization: 'Client-ID I22cKyDJTTGNBp_cNmTJ-syXQtbP5OVIwLtVY2eg2to'
    }
  }
  const response = await axios.get('https://api.unsplash.com/photos/', headers)
  const responseTwo = await axios.get('https://api.unsplash.com/photos/random', headers)
  const listPhotos = await response.data
  const getARandomPhoto = await responseTwo.data
  return {
    props: {
      listPhotos,
      getARandomPhoto
    }
  }

}