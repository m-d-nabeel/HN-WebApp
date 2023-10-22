import Navbar from "@/components/Navbar";
import News from "../components/News";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex h-screen flex-col gap-y-4 p-12">
      <Navbar />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
