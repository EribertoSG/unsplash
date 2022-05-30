import axios from "axios"
import Heroimage from "../components/organisms/HeroImage"
import Layout from "../components/pages/Layout"
import AllPhotos from "../components/template/AllPhotos"

export default function Home({ listPhotos, getARandomPhoto }) {
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
  const { data: listPhotos } = await axios.get('https://api.unsplash.com/photos/', headers)
  const { data: getARandomPhoto } = await axios.get('https://api.unsplash.com/photos/random', headers)

  return {
    props: {
      listPhotos,
      getARandomPhoto
    }
  }

}