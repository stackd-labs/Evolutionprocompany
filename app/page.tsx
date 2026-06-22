import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AscendShowcase from "@/components/AscendShowcase";
import Auditions from "@/components/Auditions";
import WhyJoin from "@/components/WhyJoin";
import FoundingSeason from "@/components/FoundingSeason";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />
      <Hero />
      <AscendShowcase />
      <Auditions />
      <FoundingSeason />
      <WhyJoin />
      <ContactForm />
      <Footer />
    </main>
  );
}
