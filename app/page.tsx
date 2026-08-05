import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AscendShowcase from "@/components/AscendShowcase";
import Auditions from "@/components/Auditions";
import FoundingSeason from "@/components/FoundingSeason";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

// WhyJoin is deliberately left intact in components/ but unmounted — it is
// waiting to be placed somewhere else, not deleted.
export default function Home() {
  return (
    <main className="bg-dark min-h-screen">
      <Nav />
      <Hero />
      <AscendShowcase />
      <Auditions />
      <FoundingSeason />
      <ContactForm />
      <Footer />
    </main>
  );
}
