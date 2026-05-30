import Header from './Header/Header'

import HeroSection from './HeroSection/HeroSection'
import WashingProblems from "./WashingProblems/WashingProblems.jsx"
import HelpSection from "./HelpSection/HelpSection.jsx"
import RepairInfoSection from "./RepairInfoSection/RepairInfoSection.jsx"
import RepairStepsSection from './RepairStepsSection/RepairStepsSection.jsx'
import ContactsPage from './ContactsPage/ContactsPage.jsx'
import Footer from './Footer/Footer.jsx'

import './MainPageStyle.css'

function MainPage() {

  return (
    <>
        <Header/>
        <HeroSection/>
        <WashingProblems />
        <HelpSection />
        <RepairInfoSection />
        <RepairStepsSection/>
        <ContactsPage />
        <Footer />
    </>
  )
}

export default MainPage
