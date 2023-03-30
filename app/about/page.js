import { HowWeWork } from "../components/AboutPage/HowWeWork";
import { Landing } from "../components/AboutPage/Landing";
import { Mro } from "../components/AboutPage/Mro";
import { ServicesImages } from "../components/AboutPage/ServicesImages";
import { Turbine } from "../components/AboutPage/Turbine";
import { Certificates } from "../components/Certificates";
import { MainContainer } from "../components/MainContainer";
import { Services } from "../components/Services";

export default function About() {
    return <MainContainer>
        <Landing />
        <ServicesImages />
        <Mro />
        <Certificates />
        <HowWeWork />
        <Services />
        <Turbine />
    </MainContainer>
}