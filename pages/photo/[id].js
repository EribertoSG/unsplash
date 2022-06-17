import { useRouter } from 'next/router'
import DetailsPhoto from '../../components/Organisms/PhotoDetail'
import Layout from '../../components/pages/Layout'

export default function Photo() {
    const { query } = useRouter()

    const photos = [
        { id: 1, url: '/assets/img/agnieszka-kowalczyk.jpg', userName: "Eriberto Santos", userPhoto: '/assets/img/user/santos.png' },
        { id: 2, url: '/assets/img/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg', userName: "Eriberto Santos", userPhoto: '/assets/img/user/santos.png' },
        { id: 3, url: '/assets/img/elijah-m-henderson.jpg', userName: "Eriberto Santos", userPhoto: '/assets/img/user/santos.png' },
        { id: 4, url: '/assets/img/fabrizio-lunardi.jpg', userName: "Eriberto Santos", userPhoto: '/assets/img/user/santos.png' },
        { id: 5, url: '/assets/img/hamid-tajik.jpg', userName: "Eriberto Santos", userPhoto: '/assets/img/user/santos.png' },
        { id: 6, url: '/assets/img/marc-kleen.jpg', userName: "Eriberto Santos", userPhoto: '/assets/img/user/santos.png' }
    ]
    return (
        <Layout>
            {
                photos.filter(el => el.id == query.id)
                    .map(photo => (
                        <DetailsPhoto src={photo.url} userName={photo.userName} userPhoto={photo.userPhoto} key={photo.id} />
                    ))
            }
        </Layout>
    )
}