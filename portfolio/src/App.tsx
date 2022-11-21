import About from "./sections/about-me/About";
import Banner from "./sections/banner/Banner";
import Navbar from "./sections/navbar/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      <Banner />
      <About />
    </div>
  );
}

export default App;
