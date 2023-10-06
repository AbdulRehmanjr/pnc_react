
import Intro from '../components/general/landing/intro/Intro'
import Categories from '../components/general/category/Category'
import About from '../components/general/landing/about/About'
import Platform from '../components/general/landing/platform/Platform'
import TopSellers from '../components/seller/TopSellers'
import Team from '../components/general/landing/team/Team'
import { Info } from '../components/general/landing/info/Info'
import { Retail } from '../components/general/landing/info/Retail'
import { Brand } from '../components/general/landing/info/brand'



/**
 * 
 *         <Categories />
            <TopSellers />
 */
function LandingPage() {

    return (

        <main>
            <Intro />
            <Info />
            <Retail /> 
            <Brand />
            <About />
            <Team />
            <Platform />
        </main>

    )
}

export default LandingPage