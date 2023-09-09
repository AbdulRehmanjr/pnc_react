import './LandingPage.css'
import Header from '../components/header/Header'
import Intro from '../components/intro/Intro'
import Categories from '../components/category/Category'
import About from '../components/about/About'
import Team from '../components/team/Team'
import Platform from '../components/platform/Platform'

function LandingPage(){

    return (
        <>
        <Header></Header>
        <Intro></Intro>
        <Categories></Categories>
        <About></About>
        <Team></Team>
        <Platform></Platform>
        </>
    )
}

export default LandingPage