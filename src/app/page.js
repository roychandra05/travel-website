import TopDestination from "@/components/TopDestination";
import BaliHeritage from "@/components/BaliHeritage";
import Slider from "../components/Slider";
import Profile from "@/components/Profile";
import FormSendEmail from "@/components/FormSendEmail";

export default async function Home() {
  return (
    <main className="flex flex-col gap-5">
      <header>
        <section className="w-full rounded-md sm:max-2xl:h-[95vh] h-[95vh]">
          <Slider/>
        </section>
      </header>
      <section id="topDestination" className="scroll-mt-16 p-4 h-auto">
        <TopDestination title={"TOP DESTINATION"} />
      </section>
      <section id="bali-heritage" className="scroll-mt-16 p-4">
        <BaliHeritage title={"BALI HERITAGE"} />
      </section>
      <section id='profile' className="scroll-mt-16 p-4">
        {/* <Profile/> */}
      </section>
      <section id='booking' className="scroll-mt-16 p-4">
        <FormSendEmail/>
      </section>
    </main>
  );
}
