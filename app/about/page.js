import { HowWeWork } from "../components/AboutPage/HowWeWork";
import { Landing } from "../components/AboutPage/Landing";
import { Qualities } from "../components/AboutPage/Qualities";
import { Turbine } from "../components/AboutPage/Turbine";
import { Certificates } from "../components/Certificates";
import { MainContainer } from "../components/MainContainer";
import { Services } from "../components/Services";

export default function About() {
    return <MainContainer>
        <Landing />
        <Turbine />
        <Qualities />
        <Certificates />
        <HowWeWork />
        <Services />
    </MainContainer>
}