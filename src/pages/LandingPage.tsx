
import Intro from '../components/general/intro/Intro'
import Categories from '../components/general/category/Category'
import About from '../components/general/about/About'
import Team from '../components/general/team/Team'
import Platform from '../components/general/platform/Platform'
import TopSellers from '../components/seller/TopSellers'


function LandingPage() {

    return (

        <main>
            <Intro />
            <Categories />
            <TopSellers />
            <About />
            <Team />
            <Platform />
        </main>

    )
}

export default LandingPage