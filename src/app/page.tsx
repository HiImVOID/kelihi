import Navbar from "../components/navbar";
import GetPaid from "../components/getPaid";
import Bootcamp from "../components/bootcamp";
import Receive from "../components/receive";
import WhoYouAre from "../components/who";
import Carrer from "../components/carrer";
import WhoWeAre from "../components/weare";
import Contact from "../components/contact";

export default function Home() {
  return (
    <main className='flex flex-col gap-8 '>
      <Navbar />
      <GetPaid />
      <Bootcamp />
      <Receive />
      <WhoYouAre />
      <Carrer />
      <WhoWeAre />
      <Contact />
    </main>);
}
