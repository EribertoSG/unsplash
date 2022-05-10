import { useRouter } from 'next/router'

const Layout = ({ children }) => {
    const router = useRouter()
    const route = router.pathname === '/' ? 'main-layout' : 'other-layout'
    return (
        <div className={route}>
            {children} 
        </div>
    )
}

export default Layout
