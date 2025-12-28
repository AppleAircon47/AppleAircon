export const metadata = {
  title: "AC Repair & Installation Services in Navi Mumbai",
  description:
    "Looking for reliable AC repair, installation & servicing in Navi Mumbai? Digital Aircon offers fast, affordable & expert AC solutions.",
};

// "use client";
import Home from "../components/Home";
import ServicesHighlight from "../components/ServicesHighlight";
import ServiceForm from "../components/ServiceForm";
import ChooseUs from "../components/ChooseUs";
import FindUs from "../components/FindUs";
import Testimonal from "../components/Testimonal";
import Floating from "../components/Floating";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <div id="servicesHighlight">
        <ServicesHighlight />
      </div>

      <ChooseUs />
      <div id="serviceForm">
        <ServiceForm />
      </div>
      <FindUs />
      <Testimonal />
      <Floating />
      <Footer />
    </>
  );
}
