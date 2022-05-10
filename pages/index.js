import Heroimage from "../components/organisms/HeroImage";
import Layout from "../components/pages/Layout";
import AllPhotos from "../components/template/AllPhotos";

export default function Home() {
  return (
    <>
      <Heroimage />
      <Layout>
        <AllPhotos />
      </Layout>
    </>
  )
}