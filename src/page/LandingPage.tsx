
import Intro from '../components/intro/Intro'
import Categories from '../components/category/Category'
import About from '../components/about/About'
import Team from '../components/team/Team'
import Platform from '../components/platform/Platform'
import TopSellers from '../components/seller/TopSellers'


function LandingPage(){

    return (
        <>
        <main>
        <Intro />
        <Categories />
        <TopSellers />
        <About />
        <Team />
        <Platform />
        </main>
        </>
    )
}

export default LandingPage