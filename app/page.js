import { Landing } from "@/app/components/HomePage/Landing";
import { MainContainer } from "@/app/components/MainContainer";
import { Certificates } from "./components/Certificates";
import { Earth } from "./components/HomePage/Earth";
import { Mro } from "./components/HomePage/Mro";
import { Services } from "./components/Services";

export default function Home() {
  return (
    <MainContainer>
      <Landing />
      <Mro />
      <div className="w-full hidden md:block">
        <Earth />
      </div>
      <Certificates />
      <Services />
    </MainContainer>
  )
}
