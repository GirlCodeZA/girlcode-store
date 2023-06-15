import HeroSection from '../components/HeroSection'
import CategorySection from '../components/CategorySection'
import DealsSection from '../components/DealsSection'
import MainLayout from '../layouts/MainLayout'

const Home = () => {
    return (
        <MainLayout>
            <HeroSection />
            <CategorySection />
            <DealsSection />
        </MainLayout>
    )
}

export default Home