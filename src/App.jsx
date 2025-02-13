import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ServicesSubOne from './components/ServicesSubOne';
import ServicesSubTwo from "./components/ServicesSubTwo";
import Courses from "./components/Courses";
import Stats from "./components/Stats";
import Members from "./components/Members";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-base flex flex-col w-full relative justify-center items-center">
      <Navbar />
      <Header />
      <ServicesSubOne />
      <ServicesSubTwo />
      <Courses />
      <Stats />
      <Members />
      <Events />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
