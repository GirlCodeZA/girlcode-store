import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'

const MainLayout = ({ children }) => {
    return (
        <>
            <TopBar />
            <NavBar />
            {children}
        </>
    )
}

export default MainLayout;
