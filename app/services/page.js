import { MainContainer } from "../components/MainContainer";
import { Cards } from "../components/ServicesPage/Cards";
import { Landing } from "../components/ServicesPage/Landing";

export default function Services() {
    return <MainContainer>
        <Landing />
        <Cards />
    </MainContainer>
} 