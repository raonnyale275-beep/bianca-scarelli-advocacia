import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import WhatsappWidget from "./Components/WhatsappWidget";
import ScrollToHash from "./Components/ScrollToHash";
import Home from "./pages/Home";
import Artigos from "./pages/Artigos";
import Artigo from "./pages/Artigo";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <ScrollToHash />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artigos" element={<Artigos />} />
          <Route path="/artigos/:slug" element={<Artigo />} />
        </Routes>
      </main>
      <Footer />
      <WhatsappWidget />
    </div>
  );
}

export default App;
