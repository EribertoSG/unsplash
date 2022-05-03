import Heroimage from "../components/organisms/HeroImage";
import Navigation from "../components/organisms/Navigation";
import AllPhotos from "../components/template/AllPhotos";

export default function Home() {
  return (
    <>
      <Navigation />
      <Heroimage />
      <AllPhotos />
    </>
  )
}