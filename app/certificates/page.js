import { Certificate } from "../components/CertificatesPage/Certificate";
import { Landing } from "../components/CertificatesPage/Landing";
import { Maintenance } from "../components/CertificatesPage/Maintenance";
import { MainContainer } from "../components/MainContainer";

export default function Certificates() {
    return <MainContainer>
        <Landing />
        <Maintenance />
        <Certificate />
    </MainContainer>
} 