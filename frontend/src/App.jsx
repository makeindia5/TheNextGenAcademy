import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppBtn from "./components/WhatsAppBtn";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
      <WhatsAppBtn />
    </>
  );
}
