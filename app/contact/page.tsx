import ContactCards from "../components/ContactCards";
import WorldMapSection from "../components/MapSectionCard";
import Footer from "../features/Footer/page";
import Header from "../features/header/page";
import StoreLocations from "../components/LocationCards";
import Form from "../components/Form";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center mt-20 px-4">
        <div className="mt-10 bg-blue-100 rounded-full px-4 py-2 text-blue-700 text-sm">
          Contact Us
        </div>
        <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 text-center">
          We are always open to talk
        </h1>
        <p className="mt-6 text-gray-600 text-center max-w-xl">
          We have offices and teams all around the world
        </p>
      </div>
      <WorldMapSection />
      <ContactCards />
      <StoreLocations />
      <Form />
      <Footer />
    </div>
  );
}
