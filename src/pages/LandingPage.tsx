
import Intro from '../components/general/landing/intro/Intro'

import About from '../components/general/landing/about/About'
import Platform from '../components/general/landing/platform/Platform'

import Team from '../components/general/landing/team/Team'
import { Info } from '../components/general/landing/info/Info'
import { Retail } from '../components/general/landing/info/Retail'
import { Brand } from '../components/general/landing/info/Brand'


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