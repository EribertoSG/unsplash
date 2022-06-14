// import axios from "axios"
// import Heroimage from "../components/organisms/HeroImage"
import { DowloadLink } from "../components/atoms/Link"
import PopUp from "../components/molecules/Pop-up"
import Window from "../components/molecules/window"
import Layout from "../components/pages/Layout"
import AllPhotos from "../components/template/AllPhotos"

export default function Home({ listPhotos, getARandomPhoto }) {
  return (
    <>
      {/* <Heroimage src={getARandomPhoto} /> */}
      <Layout>
        {/* <AllPhotos photos={listPhotos} /> */}
        <AllPhotos />
        <DowloadLink />
      </Layout>
      <PopUp>
        <Window />
      </PopUp>
    </>
  )
}

// export const getServerSideProps = async (ctx) => {
//   const headers = {
//     headers: {
//       Authorization: 'Client-ID I22cKyDJTTGNBp_cNmTJ-syXQtbP5OVIwLtVY2eg2to'
//     }
//   }
//   const { data: listPhotos } = await axios.get('https://api.unsplash.com/photos/', headers)
//   const { data: getARandomPhoto } = await axios.get('https://api.unsplash.com/photos/random', headers)

//   return {
//     props: {
//       listPhotos,
//       getARandomPhoto
//     }
//   }

// }